const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

function getEmailTemplate(templateName, data) {
    const { firstName, companyName, formData } = data
    const CALENDAR_LINK = 'https://cal.com/elianatech/30min'

    const templates = {
        // High Intent Templates
        high_day1: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .cta-button { display: inline-block; background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Haven't booked yet?</h2>
                    <p>Hey ${firstName},</p>
                    <p>I know you're busy running ${companyName}. That's exactly why I'm following up.</p>
                    <p>You mentioned that "${formData?.keepsUpAtNight || 'growing your business'}" keeps you up at night.</p>
                    <p>I've helped businesses in your industry solve this exact problem in 30-60 days.</p>
                    <p><strong>Quick question:</strong> What's stopping you from booking that call?</p>
                    <ul>
                        <li>Too busy? (I get it - that's what we solve)</li>
                        <li>Not sure it's worth it? (Fair - we have case studies)</li>
                        <li>Budget concerns? (We have options, including revenue-share)</li>
                    </ul>
                    <div style="text-align: center;">
                        <a href="${CALENDAR_LINK}" class="cta-button">Let's Talk</a>
                    </div>
                    <p>Best,<br>The Eliana Team</p>
                </div>
            </body>
            </html>
        `,

        high_day3: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .cta-button { display: inline-block; background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Free Resource Inside</h2>
                    <p>${firstName},</p>
                    <p>No pressure on the call, but I put together something useful for you:</p>
                    <p><strong>"30-Day Quick Wins for ${companyName}"</strong></p>
                    <p>This custom checklist shows you how to automate the 3 biggest time-wasters in your business, starting this week.</p>
                    <p>This is yours to keep, whether we work together or not.</p>
                    <div style="text-align: center;">
                        <a href="https://elianatech.com/resources/quick-wins" class="cta-button">Download Now</a>
                    </div>
                    <p>If you want to discuss implementation, my calendar is here: <a href="${CALENDAR_LINK}">Book a call</a></p>
                    <p>Best,<br>The Eliana Team</p>
                </div>
            </body>
            </html>
        `,

        high_week1: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .cta-button { display: inline-block; background: #ef4444; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Last follow-up (I promise)</h2>
                    <p>${firstName},</p>
                    <p>This is my last follow-up - I promise not to spam you.</p>
                    <p>I wanted to share one thing: Last month, we onboarded a business similar to ${companyName}.</p>
                    <p>They were skeptical. "We've tried automation before, it never works."</p>
                    <p><strong>60 days later:</strong></p>
                    <ul>
                        <li>✓ Capturing 40+ leads per month they were missing</li>
                        <li>✓ Automated their entire follow-up process</li>
                        <li>✓ Freed up 20 hours/week of owner time</li>
                    </ul>
                    <p><strong>The difference?</strong> We didn't just install tools - we rebuilt their processes to be AI-native.</p>
                    <div style="text-align: center;">
                        <a href="${CALENDAR_LINK}" class="cta-button">One Last Chance - Book Now</a>
                    </div>
                    <p>Either way, I hope the resources helped.</p>
                    <p>Best,<br>The Eliana Team</p>
                </div>
            </body>
            </html>
        `,

        // Medium Intent Templates
        medium_day3: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .cta-button { display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Your Automation Checklist</h2>
                    <p>Hi ${firstName},</p>
                    <p>I created something specifically for ${companyName}:</p>
                    <p><strong>"The 30-Day Automation Quick Start Checklist"</strong></p>
                    <p>Based on your audit, this covers:</p>
                    <ul>
                        <li>✓ 5 automations you can set up this week</li>
                        <li>✓ Tools we recommend for your industry</li>
                        <li>✓ ROI calculator to track your wins</li>
                    </ul>
                    <div style="text-align: center;">
                        <a href="https://elianatech.com/resources/checklist" class="cta-button">Download Checklist</a>
                    </div>
                    <p>If you get stuck, reply to this email or book a call: <a href="${CALENDAR_LINK}">Schedule here</a></p>
                    <p>Best,<br>The Eliana Team</p>
                </div>
            </body>
            </html>
        `,

        // Low Intent Templates
        low_week1: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Weekly Automation Tip #1</h2>
                    <p>Hey ${firstName},</p>
                    <p>Quick tip for ${companyName}:</p>
                    <p><strong>Week 1 Focus: Automated Onboarding</strong></p>
                    <p>The #1 way to reduce early churn is a great onboarding experience. Here's the simplest version:</p>
                    <ol>
                        <li>Map your customer's first "aha moment"</li>
                        <li>Create a 3-email welcome sequence (access → quick win → community)</li>
                        <li>Set up triggers in your email tool (ConvertKit, ActiveCampaign, etc.)</li>
                        <li>Track completion rates and iterate</li>
                    </ol>
                    <p><strong>Time to set up:</strong> 2-3 hours<br>
                    <strong>Potential ROI:</strong> 30%+ reduction in early churn</p>
                    <p>Need help? Reply to this email.</p>
                    <p>Best,<br>The Eliana Team</p>
                </div>
            </body>
            </html>
        `
    }

    return templates[templateName] || templates['medium_day3']
}

const TO_EMAIL = 'mialouviere@gmail.com';
const FROM_EMAIL = 'ElianaTech <noreply@elianatech.com>';

async function run() {
    const data = {
        firstName: 'John',
        companyName: 'Acme Corp',
        formData: { keepsUpAtNight: 'Manual data entry' }
    };

    const templates = ['high_day1', 'high_day3', 'high_week1', 'medium_day3', 'low_week1'];
    const subjects = {
        'high_day1': "Haven't booked yet?",
        'high_day3': "Free Resource Inside",
        'high_week1': "Last follow-up (I promise)",
        'medium_day3': "Your Automation Checklist",
        'low_week1': "Weekly Automation Tip #1"
    }

    for (const t of templates) {
        console.log("Sending " + t + "...");
        await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: "[CRON TPL] " + subjects[t],
            html: getEmailTemplate(t, data),
            replyTo: 'hello@elianatech.com'
        });
    }

    console.log("Cron templates sent!");
}

run().catch(console.error);
