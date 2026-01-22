/**
 * Freebie Generator
 * Creates personalized resources based on audit data
 */

export async function generateFreebies(formData: any, auditScore: number, opportunities: any[]) {
    const freebies = {
        reportUrl: generateAuditReportUrl(formData, auditScore),
        quickWinsChecklist: null as string | null,
        industryPlaybook: null as string | null,
        roiCalculator: null as string | null
    }

    // Always generate quick wins if low automation
    if (formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') {
        freebies.quickWinsChecklist = await generateQuickWinsChecklist(formData, opportunities)
    }

    // Industry playbook for specific industries
    if (formData.specificIndustry) {
        freebies.industryPlaybook = await generateIndustryPlaybook(formData)
    }

    // ROI calculator for medium+ deal sizes
    if (formData.dealSize !== 'micro' && formData.dealSize !== 'small') {
        freebies.roiCalculator = generateROICalculatorUrl(formData)
    }

    return freebies
}

function generateAuditReportUrl(formData: any, auditScore: number): string {
    // In a real implementation, you would:
    // 1. Generate a PDF using a library like jsPDF or Puppeteer
    // 2. Upload to S3/R2/Cloud Storage
    // 3. Return the URL

    // For now, return a link to the results page
    return `/audit/results?id=${encodeURIComponent(formData.email)}`
}

async function generateQuickWinsChecklist(formData: any, opportunities: any[]): Promise<string> {
    // Generate a personalized checklist based on their specific opportunities
    const checklist = {
        companyName: formData.companyName,
        industry: formData.specificIndustry,
        topOpportunities: opportunities.slice(0, 5),
        weeklyTasks: generateWeeklyTasks(formData, opportunities)
    }

    // In real implementation:
    // 1. Use a template engine to create HTML/PDF
    // 2. Convert to PDF using Puppeteer or similar
    // 3. Upload and return URL

    // For now, return a placeholder
    return `/resources/checklist/${formData.email}`
}

async function generateIndustryPlaybook(formData: any): Promise<string> {
    const industry = formData.specificIndustry.toLowerCase()

    // In real implementation, you'd have industry-specific templates
    const playbooks: { [key: string]: any } = {
        hvac: {
            title: 'HVAC Automation Playbook',
            sections: [
                'Call handling automation',
                'Appointment scheduling',
                'Follow-up sequences',
                'Review generation',
                'Seasonal campaigns'
            ]
        },
        dental: {
            title: 'Dental Practice Automation Playbook',
            sections: [
                'Patient intake automation',
                'Appointment reminders',
                'Insurance verification',
                'Review requests',
                'Recall campaigns'
            ]
        },
        // Add more industries...
    }

    return `/resources/playbook/${industry}`
}

function generateROICalculatorUrl(formData: any): string {
    // Create a personalized calculator URL with pre-filled data
    const params = new URLSearchParams({
        missedCalls: formData.missedCalls,
        dealSize: formData.dealSize,
        conversionRate: formData.conversionRate,
        hoursPerWeek: formData.hoursPerWeek
    })

    return `/tools/roi-calculator?${params.toString()}`
}

function generateWeeklyTasks(formData: any, opportunities: any[]) {
    const tasks = []

    // Week 1: Missed calls
    if (formData.missedCalls !== '0-5') {
        tasks.push({
            week: 1,
            focus: 'Capture Missed Calls',
            tasks: [
                'Set up call tracking number',
                'Configure auto-response SMS',
                'Test the workflow with a test call',
                'Add to your business cards/website'
            ]
        })
    }

    // Week 2: Review automation
    if (formData.askReviewsSystem !== 'automated') {
        tasks.push({
            week: 2,
            focus: 'Automate Review Requests',
            tasks: [
                'Choose a review platform (Podium, Birdeye, or DIY)',
                'Create email/SMS templates',
                'Set up trigger after job completion',
                'Test with recent customers'
            ]
        })
    }

    // Week 3: Follow-up system
    if (formData.systematicFollowUp !== 'Yes') {
        tasks.push({
            week: 3,
            focus: 'Build Follow-Up System',
            tasks: [
                'Map out your current follow-up process',
                'Create email sequence templates',
                'Set up automation in your CRM',
                'Train team on the new system'
            ]
        })
    }

    // Week 4: CRM optimization
    if (!formData.tools.includes('CRM (HubSpot, Salesforce, etc)')) {
        tasks.push({
            week: 4,
            focus: 'Implement Basic CRM',
            tasks: [
                'Choose a CRM (HubSpot free, Pipedrive, etc)',
                'Import your existing contacts',
                'Set up basic pipeline stages',
                'Connect to your email and calendar'
            ]
        })
    }

    return tasks.slice(0, 4) // Return max 4 weeks
}

// Helper function to create PDF from HTML (for future implementation)
export async function generatePDFFromHTML(html: string, filename: string): Promise<string> {
    // Using Puppeteer (server-side)
    /*
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(html)
    const pdfBuffer = await page.pdf({ format: 'A4' })
    await browser.close()

    // Upload to S3/R2
    const s3 = new AWS.S3()
    await s3.putObject({
        Bucket: 'your-bucket',
        Key: `reports/${filename}`,
        Body: pdfBuffer,
        ContentType: 'application/pdf'
    }).promise()

    return `https://your-cdn.com/reports/${filename}`
    */

    // Or using jsPDF (client-side)
    /*
    const jsPDF = require('jspdf')
    const doc = new jsPDF()
    // ... add content
    const pdfBlob = doc.output('blob')
    // Upload blob...
    */

    return 'placeholder-url'
}

// Email content generators for different freebies
export function getFreebieEmailContent(type: 'checklist' | 'playbook' | 'calculator', formData: any) {
    const templates = {
        checklist: {
            subject: `${formData.fullName.split(' ')[0]}, Your 30-Day Quick Wins Checklist`,
            preview: 'Start automating today with these actionable tasks',
            body: `
                <h2>Your Personalized 30-Day Automation Checklist</h2>
                <p>Hi ${formData.fullName.split(' ')[0]},</p>
                <p>Based on your audit, I've created a custom checklist that breaks down automation into 4 weeks of bite-sized tasks.</p>
                <p>Each week focuses on one high-impact area:</p>
                <ul>
                    <li>Week 1: Capturing missed calls and leads</li>
                    <li>Week 2: Automating your review requests</li>
                    <li>Week 3: Building systematic follow-ups</li>
                    <li>Week 4: CRM setup and optimization</li>
                </ul>
                <p><a href="DOWNLOAD_LINK">Download Your Checklist</a></p>
            `
        },
        playbook: {
            subject: `${formData.specificIndustry} Automation Playbook for ${formData.companyName}`,
            preview: 'Industry-specific automation strategies that actually work',
            body: `
                <h2>Your ${formData.specificIndustry} Automation Playbook</h2>
                <p>Hi ${formData.fullName.split(' ')[0]},</p>
                <p>This playbook is specifically designed for ${formData.specificIndustry} businesses like ${formData.companyName}.</p>
                <p>Inside you'll find:</p>
                <ul>
                    <li>5 automations every ${formData.specificIndustry} business needs</li>
                    <li>Case studies from similar companies</li>
                    <li>Tool recommendations and comparisons</li>
                    <li>Implementation timeline and costs</li>
                </ul>
                <p><a href="DOWNLOAD_LINK">Get Your Playbook</a></p>
            `
        },
        calculator: {
            subject: `Calculate Your Automation ROI - ${formData.companyName}`,
            preview: 'See exactly how much you could save and earn',
            body: `
                <h2>Your Custom ROI Calculator</h2>
                <p>Hi ${formData.fullName.split(' ')[0]},</p>
                <p>I've pre-filled this calculator with your audit data so you can see the exact potential of automation for ${formData.companyName}.</p>
                <p>Play with the numbers to see:</p>
                <ul>
                    <li>Revenue from recovered missed calls</li>
                    <li>Time savings from automation</li>
                    <li>Cost of implementation vs. ROI</li>
                    <li>Break-even timeline</li>
                </ul>
                <p><a href="CALCULATOR_LINK">Open Your Calculator</a></p>
            `
        }
    }

    return templates[type]
}
