/**
 * NotebookLM Automation Script (Local)
 * Uses Playwright to create a new notebook and generate Audio Overview
 * Includes Research (Website source)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SESSION_DIR = path.resolve(process.cwd(), '.browser_session');

async function automateNotebookLM(briefPath, companyName, websiteUrl) {
    if (!fs.existsSync(briefPath)) {
        console.error(`File not found: ${briefPath}`);
        return;
    }

    const briefContent = fs.readFileSync(briefPath, 'utf8');
    
    console.log(`🚀 Starting NotebookLM automation for ${companyName}...`);
    if (websiteUrl) console.log(`🌐 Researching: ${websiteUrl}`);
    
    // Launching persistent context with stealth settings
    const context = await chromium.launchPersistentContext(SESSION_DIR, {
        headless: true,
        viewport: { width: 1280, height: 900 },
        args: [
            '--disable-blink-features=AutomationControlled'
        ],
        ignoreDefaultArgs: ['--enable-automation']
    });

    const page = await context.newPage();
    
    try {
        await page.goto('https://notebooklm.google.com/', { waitUntil: 'networkidle' });

        // Check for login
        if (page.url().includes('accounts.google.com')) {
            console.log("⚠️ Please log in to your Google account in the browser window.");
            console.log("Waiting for redirection back to NotebookLM...");
            await page.waitForURL('**/notebooklm.google.com/**', { timeout: 0 });
        }

        // Click "Create new" button (top right black button) or the "Create new notebook" card
        console.log("Creating new notebook...");
        const newBtn = page.locator('button:has-text("Create new"), [aria-label="Create new notebook"], div:has-text("Create new notebook")').first();
        await newBtn.waitFor({ state: 'visible', timeout: 20000 });
        await newBtn.click();
        
        console.log("⏳ Waiting for notebook to initialize...");
        await page.waitForURL('**/notebook/**', { timeout: 30000 });
        await page.waitForTimeout(5000);

        // Add Research Brief as "Copied Text"
        console.log("Adding Research Brief...");
        const copiedTextBtn = page.locator('button:has-text("Copied text"), [aria-label="Copied text"]').first();
        await copiedTextBtn.waitFor({ state: 'visible', timeout: 15000 });
        await copiedTextBtn.click();
        
        // Fill Title and Content
        await page.fill('input[type="text"], [aria-label="Source title"]', `Brief: ${companyName}`);
        await page.fill('textarea, [aria-label="Paste text here"]', briefContent);
        await page.locator('button:has-text("Insert")').click();
        console.log("✅ Brief added.");
        await page.waitForTimeout(3000);

        // Add Website for Research
        if (websiteUrl && websiteUrl.startsWith('http')) {
            console.log("🌐 Adding Website for Research...");
            const addSourceBtn = page.locator('button:has-text("Add source"), [aria-label="Add source"]').first();
            if (await addSourceBtn.isVisible()) {
                await addSourceBtn.click();
            }

            await page.locator('button:has-text("Website"), [aria-label="Website"]').click();
            await page.fill('input[type="url"], [placeholder="Enter website URL"]', websiteUrl);
            await page.locator('button:has-text("Insert"), button:has-text("Add")').click();
            console.log(`✅ Website added: ${websiteUrl}`);
            await page.waitForTimeout(5000);
        }

        // --- STEP 3: GENERATE AUDIO OVERVIEW ---
        console.log("🎙️ Generating Audio Overview...");
        // Click "Notebook Guide" - usually bottom right or top right
        const guideBtn = page.locator('button:has-text("Notebook guide"), [aria-label="Notebook guide"]').first();
        await guideBtn.waitFor({ state: 'visible', timeout: 15000 });
        await guideBtn.click();
        
        await page.waitForTimeout(3000);
        
        // Click "Generate" on the Audio Overview button
        const generateBtn = page.locator('button:has-text("Generate"), [aria-label="Generate audio overview"]').first();
        await generateBtn.waitFor({ state: 'visible', timeout: 10000 });
        await generateBtn.click();

        console.log("✨ Audio Overview generation started!");
        console.log("Generation takes a few minutes. I will leave the browser open so you can watch.");
        
        // Keep open for a bit to ensure it doesn't get interrupted
        await page.waitForTimeout(60000); // 1 min

    } catch (error) {
        console.error("❌ Automation error:", error);
        // Take a screenshot for debugging
        const debugPath = path.join(process.cwd(), `notebook_error_${Date.now()}.png`);
        await page.screenshot({ path: debugPath });
        console.log(`📸 Debug screenshot saved to ${debugPath}`);
    } finally {
        // We leave it open so the user can see the progress
    }
}

// Args
const brief = process.argv[2];
const company = process.argv[3] || "Prospect";
const website = process.argv[4];

if (brief) {
    automateNotebookLM(brief, company, website).catch(console.error);
} else {
    console.log("Usage: node scripts/notebooklm-auto.js [path_to_brief] [company_name] [website_url]");
}
