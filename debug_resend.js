const { Resend } = require('resend');
const fs = require('fs');

async function testResend() {
    const apiKey = 're_UxeH8Hdh_DNpPNfaMrAzngNm5PhDU2C5o';
    const resend = new Resend(apiKey);
    const logFile = 'resend_test_log.json';

    console.log("Attempting to send a test email...");
    try {
        const response = await resend.emails.send({
            from: 'onboarding@resend.dev', // Using the default verified domain for testing
            to: 'MIALOUVIERE@YAHOO.COM',
            subject: 'Test Email from Resend via Antigravity',
            html: '<p>If you see this, the API key works and can send to your email.</p>'
        });

        const logData = {
            timestamp: new Date().toISOString(),
            success: true,
            response: response
        };
        fs.writeFileSync(logFile, JSON.stringify(logData, null, 2));
        console.log("Response logged to " + logFile);
        console.log("Success:", response);
    } catch (error) {
        const logData = {
            timestamp: new Date().toISOString(),
            success: false,
            error: error.message,
            stack: error.stack,
            fullError: error
        };
        fs.writeFileSync(logFile, JSON.stringify(logData, null, 2));
        console.error("Error logged to " + logFile);
        console.error("Full Error:", error);
    }
}

testResend();
