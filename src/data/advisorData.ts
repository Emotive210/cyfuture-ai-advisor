
import {
    type LucideIcon,
    Bot,
    Code2,
    BriefcaseBusiness,
    GraduationCap,
    MessageSquare,
    FileText,
    Sparkles,
    Image,
    Brain,
    Zap,
    DollarSign,
    Scale,
    Shield,
    Cloud,
    Server,
    GitMerge,
    CircleHelp,
    BadgeDollarSign,
    Building2,
} from "lucide-react";

export type AdvisorStep = {
    step: number;
    title: string;
    description: string;
    allowCustomInput?: boolean;
    customInputPlaceholder?: string;
    options: {
        icon: LucideIcon;
        title: string;
    }[];
};

export const advisorSteps: AdvisorStep[] = [
    {
        step: 1,
        title: "Who are you?",
        description: "This helps us recommend the most suitable AI model.",
        options: [
            {
                icon: Bot,
                title: "AI Engineer",
            },
            {
                icon: Code2,
                title: "Software Developer",
            },
            {
                icon: BriefcaseBusiness,
                title: "Business User",
            },
            {
                icon: GraduationCap,
                title: "Student",
            },
        ],
    },

    {
        step: 2,
        title: "What are you trying to build?",
        description: "Select the primary use case for your AI application.",
        allowCustomInput: true,
        customInputPlaceholder: "Describe your AI use case...",
        options: [
            {
                icon: MessageSquare,
                title: "Chatbot",
            },
            {
                icon: Code2,
                title: "Code Assistant",
            },
            {
                icon: Sparkles,
                title: "Content Generation",
            },
            {
                icon: FileText,
                title: "Document Intelligence",
            },
            {
                icon: Bot,
                title: "AI Agent",
            },
            {
                icon: Image,
                title: "Image Generation",
            },
            {
                icon: CircleHelp,
                title: "Other",
            },
        ],
    },

    {
        step: 3,
        title: "What's your highest priority?",
        description: "Choose the factor that's most important for your AI workload.",
        options: [
            {
                icon: Brain,
                title: "Best Quality",
            },
            {
                icon: Zap,
                title: "Fast Response",
            },
            {
                icon: DollarSign,
                title: "Lowest Cost",
            },
            {
                icon: Scale,
                title: "Balanced",
            },
            {
                icon: Shield,
                title: "Privacy & Security",
            },
        ],
    },

    {
        step: 4,
        title: "Where will you deploy your AI solution?",
        description: "Choose the environment where your AI application will run.",
        options: [
            {
                icon: Cloud,
                title: "Cloud",
            },
            {
                icon: Server,
                title: "On-Premise",
            },
            {
                icon: GitMerge,
                title: "Hybrid",
            },
            {
                icon: CircleHelp,
                title: "Not Sure",
            },
        ],
    },

    {
        step: 5,
        title: "What's your budget?",
        description: "Choose the budget that best matches your AI workload.",
        options: [
            {
                icon: BadgeDollarSign,
                title: "Free",
            },
            {
                icon: DollarSign,
                title: "Low Budget",
            },
            {
                icon: BriefcaseBusiness,
                title: "Business",
            },
            {
                icon: Building2,
                title: "Enterprise",
            },
        ],
    },
];