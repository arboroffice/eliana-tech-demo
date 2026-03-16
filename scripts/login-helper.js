/**
 * Login Helper
 * Run this to log into Google/NotebookLM and save your session.
 */

const { chromium } = require('playwright');
const path = require('path');

const SESSION_DIR = path.join(process.cwd(), '.browser_session');

async function login() {
    console.log(`🚀 Opening browser for login...`);
    console.log(`📂 Session will be saved to: ${SESSION_DIR}`);
    
    const context = await chromium.launchPersistentContext(SESSION_DIR, {
        headless: false,
        channel: 'chrome', // Use the installed Chrome browser for better compatibility
        viewport: { width: 1280, height: 800 },
        args: [
            '--disable-blink-features=AutomationControlled' // Bypass "This browser is not secure"
        ],
        ignoreDefaultArgs: ['--enable-automation']
    });

    const page = await context.newPage();
    
    // Set user agent to something standard
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9'
    });

    await page.goto('https://notebooklm.google.com/');

    console.log("\n--- INSTRUCTIONS ---");
    console.log("1. Sign in to your Google Account in the browser window.");
    console.log("2. Navigate to NotebookLM.");
    console.log("3. Once you are on the home page and logged in, CLOSE THE BROWSER WINDOW.");
    console.log("---");

    // Wait for the browser to be closed by the user
    page.on('close', () => {
        console.log("✅ Browser closed. Session saved.");
        process.exit();
    });

    context.on('close', () => {
        console.log("✅ Context closed. Session saved.");
        process.exit();
    });
}

login().catch(console.error);
