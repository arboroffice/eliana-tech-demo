const fs = require('fs');
const path = require('path');

// Load env
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length > 0) {
            const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
            process.env[key.trim()] = value;
        }
    });
}
const Anthropic = require('@anthropic-ai/sdk');

// We'll reuse the pricing logic if possible, or mock it for the script context
// Since this is a standalone script, we need the logic from lib/pricing-engine.ts
// But for now, we'll implement a simplified version or just mock what's needed for the prompt

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
console.log(`🔑 Anthropic API Key present: ${process.env.ANTHROPIC_API_KEY ? 'YES (starts with ' + process.env.ANTHROPIC_API_KEY.substring(0, 10) + ')' : 'NO'}`);
const OUTPUT_DIR = path.join(process.cwd(), 'prospect_pitches');
const SESSION_DIR = path.join(process.cwd(), '.browser_session');

// Placeholder for scores and pricing logic (simplified for script)
function calculateSubScores(data) {
    return {
        overall: data.auditScore || 50,
        revenue: 50,
        automation: 50,
        acquisition: 50,
        retention: 50,
        time: 50
    };
}

function runPricingEngine(data) {
    return {
        tierLabel: "AI-Native Operating System",
        finalPrice: 15000,
        priceRange: "$15,000 - $40,000",
        timeline: "8-12 weeks",
        intentLevel: "HIGH"
    };
}

async function generatePitchPackage(auditData) {
    const companySlug = auditData.companyName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const prospectDir = path.join(OUTPUT_DIR, companySlug);

    if (!fs.existsSync(prospectDir)) {
        fs.mkdirSync(prospectDir, { recursive: true });
    }

    console.log(`🚀 Generating Pitch Package for ${auditData.companyName}...`);

    // 1. Generate Research Brief for NotebookLM
    const researchBrief = generateResearchBrief(auditData);
    fs.writeFileSync(path.join(prospectDir, 'notebooklm_research_brief.md'), researchBrief);
    console.log(`✅ Research Brief created: ${path.join(prospectDir, 'notebooklm_research_brief.md')}`);

    // 2. Generate AI-Powered Video Script (VSL Style)
    console.log(`🧠 Generating personalized VSL Video Script via Claude...`);
    try {
        const videoScript = await generateVideoScript(auditData);
        fs.writeFileSync(path.join(prospectDir, 'video_script.md'), videoScript);
        console.log(`✅ Video Script created: ${path.join(prospectDir, 'video_script.md')}`);
    } catch (e) {
        console.error(`❌ Error generating video script: ${e.message}`);
        fs.writeFileSync(path.join(prospectDir, 'video_script.md'), `Error generating script: ${e.message}`);
    }

    // 3. Generate Problem Summary
    const problemSummary = generateProblemSummary(auditData);
    fs.writeFileSync(path.join(prospectDir, 'problem_summary.md'), problemSummary);
    console.log(`✅ Problem Summary created: ${path.join(prospectDir, 'problem_summary.md')}`);

    console.log(`\n✨ Pitch package for ${auditData.companyName} is ready!`);
    console.log(`📍 Location: ${prospectDir}`);
}

function generateResearchBrief(data) {
    return `# NotebookLM Research Brief: ${data.companyName}
## Prospect: ${data.fullName}
## Industry: ${data.specificIndustry || data.businessType}

### 1. Audit Performance
- **Audit Score:** ${data.auditScore}/100

### 2. Operational Metrics
- **Hours spent per week on manual work:** ${data.biggestTimeWaste}
- **Content Creation Hours:** ${data.contentCreationHours}
- **Support Hours:** ${data.supportHoursPerWeek}
- **Automation Level:** ${data.percentAutomated}

### 3. Tech Stack
${data.tools ? data.tools.map(t => `- ${t}`).join('\n') : '- Not specified'}

### 4. Key Bottlenecks & Pain Points
- **Bottleneck:** ${data.bottleneck}
- **Pain Level:** ${data.painLevel}/10
- **Keeps them up at night:** ${data.keepsUpAtNight}

### 5. Goals (Next 12 Months)
${data.next12MonthsGoal}

### 6. DIRECT PROBLEM STATEMENT (CRITICAL FOR AUDIO OVERVIEW)
This business is suffering from "Infrastructure Debt". They are using ${data.tools?.join(' and ')} to do manual labor that should be handled by Electronic Intelligence (EI). 
The manual cost is ${data.hoursPerWeek} hours every single week. 
The goal is to implement an AI-Native Operating System that automates ${data.bottleneck} completely.
`;
}

async function generateVideoScript(auditData) {
    const scores = calculateSubScores(auditData);
    const pricing = runPricingEngine(auditData);
    
    // Using the 10x deep VSL prompt
    const prompt = `You are Mia Louviere, founder of Eliana Tech. You are recording a high-stakes, personal Video Sales Letter (VSL) for ${auditData.fullName} at ${auditData.companyName}.
  
  CONTEXT:
  They just finished an audit and scored ${scores.overall}/100. They are feeling the weight of "${auditData.keepsUpAtNight}" and wasting ${auditData.hoursPerWeek} hours/week on manual nonsense.
  
  MISSION:
  Transition them from being the "System" to becoming the "Architect". Break their heart about their current inefficiency, then give them the vision of the ${pricing.tierLabel} AI-Native OS.
  
  VSL STRUCTURE (10x Depth):
  1. THE HOOK (0:00-0:30): 
     Directly address the ${scores.overall}/100 score. Be blunt. "${auditData.fullName}, I looked at your data for ${auditData.companyName} and frankly, you're not running a business, you're running a manual marathon." Mention "${auditData.keepsUpAtNight}".
  
  2. THE GAP (0:30-1:15): 
     Identify the "Infrastructure Debt". Call out ${auditData.bottleneck} specifically. Explain how using ${auditData.tools?.join(', ')} is costing them more in cognitive load than they realize. Use the number: "${auditData.hoursPerWeek} hours a week". That's a part-time job they're doing for free.
  
  3. THE ARCHITECT REALITY (1:15-2:00):
     Introduce the concept of "Electronic Intelligence". Explain that ${pricing.tierLabel} isn't just "tools"—it's an operating system that replaces human decision-making in ${auditData.bottleneck}.
  
  4. THE 90-DAY TRAJECTORY (2:00-2:45):
     What does life look like in 3 months? The ${auditData.hoursPerWeek} hours are gone. The team size of ${auditData.teamSize} is either leaner or doing 10x more. The "${auditData.revenueGoal}" is no longer a wish, it's a structural inevitability.
  
  5. NEXT STEPS (1:20-2:00):
     Be crystal clear. We don't do sales calls — we see who is ready. Step 1: Pay a $5,000 deposit to lock in your build slot (applied toward total investment). Step 2: Discovery call — not a pitch, a deep-dive to architect the system. If during discovery we determine we're not a fit, same-day refund. No questions. The deposit ensures both sides are serious, and the refund guarantee means zero risk.

  TONE:
  Direct, warm, no-nonsense. Like a smart friend who happens to be a systems architect. No hype, just data and the fix.

  IMPORTANT: Keep to ~300 words (2 minutes spoken). This is used as input for NotebookLM audio overview.
  Format as a clean script with section headers.`;

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }],
    });

    return message.content[0].text;
}

function generateProblemSummary(data) {
    return `# Problem & Opportunity Map
## For: ${data.companyName}

### The Core Problem ("The Leak")
${data.fullName} is currently drowning in ${data.biggestTimeWaste}. They are using a disconnected stack of ${data.tools?.join(', ')} which requires manual "glue" to function. This results in ${data.keepsUpAtNight}.

### The "Cost of Inaction"
Every week, ${data.fullName} is losing valuable "Architect Time" to "System Time". 
- Est. Hours Wasted: ${data.hoursPerWeek || 20} hrs/week
- Est. Revenue Leak: Significant due to ${data.bottleneck} bottleneck.

### The Eliana Solution
1. **Automated ${data.bottleneck} Engine**: Replace manual check-ins with AI agents.
2. **Infrastructure Installation**: Move from "using tools" to "owning an OS".
3. **Next Step**: Industry Playbook session.
`;
}

// Example Usage
const mockAudit = {
    fullName: "Alex River",
    companyName: "River Flow Real Estate",
    email: "alex@riverflow.com",
    businessType: "real-estate",
    specificIndustry: "Luxury Residential RE",
    currentRevenue: "$1M - $3M",
    revenueTrend: "Growing",
    teamSize: "5-10",
    auditScore: 42,
    biggestTimeWaste: "Follow up with cold leads and updating the CRM",
    contentCreationHours: "10-20",
    supportHoursPerWeek: "5-10",
    hoursPerWeek: 35,
    percentAutomated: "under-30",
    tools: ["Follow Up Boss", "Excel", "WhatsApp"],
    bottleneck: "Lead conversion and follow up speed",
    painLevel: 8,
    keepsUpAtNight: "Seeing leads go cold because we didn't text them back fast enough",
    next12MonthsGoal: "Double our transaction volume without doubling our overhead"
};

const inputJson = process.argv[2];
if (inputJson) {
    try {
        const data = JSON.parse(inputJson);
        generatePitchPackage(data).catch(console.error);
    } catch (e) {
        console.error("Invalid JSON input. Using mock data.");
        generatePitchPackage(mockAudit).catch(console.error);
    }
} else {
    generatePitchPackage(mockAudit).catch(console.error);
}
