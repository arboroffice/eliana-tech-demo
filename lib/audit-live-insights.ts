/**
 * Audit Live Insights Utility
 * Maps form data to "AI Discoveries" in real-time
 */

export interface LiveInsight {
    type: 'discovery' | 'warning' | 'opportunity';
    message: string;
    icon?: string;
}

export function getLiveInsights(formData: any): LiveInsight[] {
    const insights: LiveInsight[] = [];

    // URL Insight
    if (formData.websiteUrl && formData.websiteUrl.length > 5) {
        insights.push({
            type: 'discovery',
            message: `Scanned ${new URL(formData.websiteUrl).hostname}. Identifying tech stack components...`,
            icon: '🌐'
        });
    }

    // Team Size Insight
    if (formData.teamSize === '10+') {
        insights.push({
            type: 'warning',
            message: "Team size alert: Identified significant communication overhead in coordination layers.",
            icon: '👥'
        });
    } else if (formData.teamSize === 'solo') {
        insights.push({
            type: 'opportunity',
            message: "Solopreneur profile: High leverage for 'Autonomous Agent' deployment in admin layers.",
            icon: '⚡'
        });
    }

    // Revenue Insight
    if (formData.currentRevenue === '3m+' || formData.currentRevenue === '1m-3m') {
        insights.push({
            type: 'discovery',
            message: "Scale detected. Focus shifting from 'Survival' to 'System Sustainability' architecture.",
            icon: '📈'
        });
    }

    // Bottleneck Insight
    if (formData.bottleneck === 'time') {
        insights.push({
            type: 'warning',
            message: "Critical Constraint: Founder-as-bottleneck detected. Redirecting resources to 'Operator Replacement' systems.",
            icon: '⏳'
        });
    }

    // Onboarding Insight
    if (formData.onboardingAutomated === 'No') {
        insights.push({
            type: 'opportunity',
            message: "Easy Win: 30-day churn reduction possible through automated behavior-triggered onboarding.",
            icon: '🎯'
        });
    }

    // Tools Insight
    if (formData.tools?.length > 3) {
        insights.push({
            type: 'discovery',
            message: `Detected ${formData.tools.length} SaaS fragmentation points. Mapping integration bridges...`,
            icon: '🔌'
        });
    }

    return insights;
}
