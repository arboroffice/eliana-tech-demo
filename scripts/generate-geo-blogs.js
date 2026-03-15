const fs = require('fs');
const path = require('path');

const files = [
    'lib/industry-data.ts',
    'lib/niches-1.ts',
    'lib/niches-2.ts',
    'lib/niches-3.ts'
];

let industries = [];

files.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const blocks = content.split('slug:');
    blocks.shift(); // remove the part before the first slug
    
    blocks.forEach(block => {
        const slugMatch = block.match(/^\s*["']([^"']+)["']/);
        const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
        const geoMatch = block.match(/geoKeywords:\s*\[(.*?)\]/s);
        
        if (slugMatch && nameMatch && geoMatch) {
            const slug = slugMatch[1];
            const name = nameMatch[1];
            const geos = geoMatch[1]
                .split(',')
                .map(s => s.replace(/["']/g, '').trim())
                .filter(Boolean);
                
            industries.push({ slug, name, geos });
        }
    });
});

console.log(`Found ${industries.length} industries.`);

const blogDir = path.join(process.cwd(), "content/blog");

let totalCreated = 0;

industries.forEach(niche => {
    const cities = niche.geos.slice(0, 5);
    
    while (cities.length < 5) {
        cities.push("Nationwide");
    }

    const templates = [
        {
            title: `AI Automation for ${niche.name} in ${cities[0]}: Scaling Local Operations`,
            excerpt: `How forward-thinking ${niche.name} in ${cities[0]} are using AI infrastructure to replace manual labor with scalable systems.`,
            filename: `ai-automation-${niche.slug}-${cities[0].toLowerCase().replace(/\s+/g, '-')}.mdx`,
            body: `The landscape for **${niche.name}** in ${cities[0]} is fundamentally shifting. With local labor costs rising and competition stiffening, operators in ${cities[0]} can no longer rely on manual data entry and human bottlenecks. 

Whether it is answering 11 PM inquiries from local prospects or managing the back-office documentation required to fulfill a service, the businesses succeeding in ${cities[0]} today are adopting AI operating systems.

### Breaking the Local Bottleneck
In ${cities[0]}, your biggest limit is speed-to-information. When a new lead inquires, the faster your business can respond, qualify, and book them, the higher your conversion rate. AI agents now operate 24/7, ensuring that no ${cities[0]} client is ever left waiting.

By shifting your operational expense into digital infrastructure, you allow your human team to focus on the high-touch, empathetic work that built your reputation in ${cities[0]} in the first place.`
        },
        {
            title: `The Future of ${niche.name} in ${cities[1]}: Why Operators Are Moving to AI`,
            excerpt: `We look at the coming decade for ${niche.name} in ${cities[1]} and why autonomous operations separate market leaders from the rest.`,
            filename: `future-of-${niche.slug}-in-${cities[1].toLowerCase().replace(/\s+/g, '-')}.mdx`,
            body: `In ${cities[1]}, **${niche.name}** face unique challenges. From managing local compliance and vendor relations to dealing with client expectations, the operational drag is immense. 

Top ${cities[1]} operators are solving this not by attempting to hire more administrative staff, but by deploying AI infra-structure.

### The Shift to Autonomous Systems
An autonomous operating system doesn't just "chat" with clients. It handles the rigorous, multi-step processes that usually bog down human operators in ${cities[1]}. From the initial intake flow to the final follow-up, AI ensures flawless execution without taking a day off.

The future of ${niche.name} in ${cities[1]} belongs to those who view AI not as a tool, but as a digital workforce.`
        },
        {
            title: `How ${cities[2]} ${niche.name} Are Using AI to Reduce Overhead`,
            excerpt: `Discover how AI operating systems are slashing administrative costs and boosting margins for ${niche.name} in ${cities[2]}.`,
            filename: `how-${cities[2].toLowerCase().replace(/\s+/g, '-')}-${niche.slug}-use-ai.mdx`,
            body: `Administrative bloat is the silent killer of profitability for **${niche.name}** across ${cities[2]}. Whether it's chasing signatures, managing intake, or following up with stale leads, ${cities[2]}-based businesses are losing margin to manual labor.

### Margins Found in Automation
By installing an AI layer, a ${cities[2]} business can instantly reclaim thousands of hours a year. 

*   **Intake:** AI qualifies leads instantly based on local ${cities[2]} parameters.
*   **Documentation:** AI extracts data from emails and automatically updates your CRM.
*   **Retention:** AI follows up with past clients, turning one-time buyers into lifelong advocates.

Reducing overhead in ${cities[2]} is no longer about cutting corners; it is about scaling intelligently with artificial intelligence.`
        },
        {
            title: `Scaling ${niche.name} in ${cities[3]}: The AI Infrastructure Playbook`,
            excerpt: `The step-by-step guide on how ${niche.name} in ${cities[3]} are implementing AI to handle intake, operations, and fulfillment.`,
            filename: `scaling-${niche.slug}-in-${cities[3].toLowerCase().replace(/\s+/g, '-')}.mdx`,
            body: `Growing a business as **${niche.name}** in ${cities[3]} used to mean linear growth: more clients meant hiring more people. Today, ${cities[3]} operators are breaking that model entirely. 

By installing a "Neural Layer" of AI, these businesses are able to decouple their revenue growth from their headcount.

### The Playbook for ${cities[3]}
1.  **Automate the Front-End:** Deploy Voice and SMS AI to handle 100% of inbound inquiries.
2.  **Optimize the Middle:** Use AI to route documentation, schedule internal resources, and manage timelines.
3.  **Secure the Back-End:** Automate invoicing, follow-ups, and review generation.

The result is a highly defensive, extremely profitable operation right here in ${cities[3]}.`
        },
        {
            title: `Why Top ${cities[4]} ${niche.name} Are Shifting to AI Operating Systems`,
            excerpt: `Speed-to-lead and operational efficiency are the new battlegrounds for ${niche.name} in ${cities[4]}. Here is how AI changes the game.`,
            filename: `top-${cities[4].toLowerCase().replace(/\s+/g, '-')}-${niche.slug}-ai-shift.mdx`,
            body: `For **${niche.name}** in ${cities[4]}, speed-to-information is the ultimate bottleneck. The faster a ${cities[4]} business can process data, qualify a lead, and dispatch a solution, the more revenue it preserves. 

### Leaving Competitors Behind
While traditional businesses in ${cities[4]} wait until Monday morning to return calls, AI-powered operators are booking appointments on Sunday night. 

These AI operating systems integrate deeply into existing CRMs and calendars, providing a seamless experience that feels incredibly human but operates with machine-level reliability. If you are operating in ${cities[4]}, the shift to AI is not a luxury—it is an operational necessity.`
        }
    ];

    templates.forEach((t, i) => {
        // Ensure valid filename characters
        const safeFilename = t.filename.replace(/[^a-z0-9-.]/g, '');
        const dateStr = `2026-03-${18 + i}`;
        
        const content = `---
title: "${t.title}"
publishedAt: "${dateStr}"
author: "ElianaTech Architecture Team"
category: "Local SEO"
image: "/images/blog/industry-default.jpg"
excerpt: "${t.excerpt}"
---

${t.body}

[Explore how our exact playbook for ${niche.name} works by viewing our Industry Solutions.](/industries/${niche.slug})
`;
        
        const filePath = path.join(blogDir, safeFilename);
        fs.writeFileSync(filePath, content);
        totalCreated++;
    });
});

console.log(`Successfully generated ${totalCreated} GEO-targeted blog posts.`);
