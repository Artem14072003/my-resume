import {
    Braces,
    Component,
    Code,
    GlobeCheck,
    Hexagon,
    Layers2,
    LoaderPinwheel,
    Palette,
    Rocket,
    Server,
    ShieldCog,
    Smartphone,
    Wrench, type LucideProps
} from "lucide-react";
import type {ForwardRefExoticComponent, RefAttributes} from "react";

interface ISideBar {
    href: string,
    Components: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

const NAV_LINKS = [
    {label: "Главная", href: "#about"},
    {label: "Проекты", href: "#projects"},
    {label: "Опыт", href: "#experience"},
    {label: "Контакты", href: "#contact"},
];

const SIDE_BAR: ISideBar[] | [] = [
    // {href: 'gitHub', Components: Code},
    // {href: '', Components: Phone},
    // {href: '', Components: Mail}
]

const TECH_STACK = [
    {
        id: "1",
        label: "JavaScript",
        icon: Hexagon,
    },
    {
        id: "2",
        label: "React",
        icon: Braces,
    },
    {
        id: "3",
        label: "Next.js",
        icon: Layers2,
    },
    {
        id: "4",
        label: "Tailwind CSS",
        icon: Palette,
    },
    {
        id: "5",
        label: "GraphQL",
        icon: Component,
    },
    {
        id: "6",
        label: "WebGL",
        icon: GlobeCheck,
    },
];

const SKILLS = [
    {
        label: "Creative Design",
        desc: "Merging aesthetic vision with technical constraints to build interfaces that feel alive.",
        icon: LoaderPinwheel,
        colorClasses: {
            text: "text-cyan",
            bg: "bg-cyan/10",
            hoverBg: "group-hover:bg-cyan/20",
            gradient: "from-cyan",
        },
    },
    {
        label: "System Architecture",
        desc: "Designing scalable, maintainable component ecosystems that grow with the product.",
        icon: ShieldCog,
        colorClasses: {
            text: "text-electric-violet",
            bg: "bg-electric-violet/10",
            hoverBg: "group-hover:bg-electric-violet/20",
            gradient: "from-electric-violet",
        },
    },
    {
        label: "Performance",
        desc: "Obsessive optimization of render paths and payload sizes for instantaneous interactions.",
        icon: Rocket,
        colorClasses: {
            text: "text-hint-of-red",
            bg: "bg-hint-of-red/10",
            hoverBg: "group-hover:bg-hint-of-red/20",
            gradient: "from-hint-of-red",
        },
    },
];

const EXPERIENCE = [
    {
        title: "Lead Developer",
        company: "Facebook.",
        date: "2021 — Present",
        desc: " Spearheaded the architectural redesign of the core enterprise platform, transitioning from a monolithic structure to microservices. Managed a team of 12 engineers, improving deployment frequency by 40%.",
        techStack: ["React", "Node.js", "AWS", "Kubernetes"],
        colorClasses: {
            text: "text-cyan",
            hoverBg: "group-hover:bg-cyan",
            hoverBorder: "group-hover:border-cyan",
        },
    },
    {
        title: "Lead Developer",
        company: "Google LLC.",
        date: "2023 — 2024",
        desc: " Spearheaded the architectural redesign of the core enterprise platform, transitioning from a monolithic structure to microservices. Managed a team of 12 engineers, improving deployment frequency by 40%.",
        techStack: ["React", "Node.js", "AWS", "Kubernetes"],
        color: "cyan",
        colorClasses: {
            text: "text-mauve",
            hoverBg: "group-hover:bg-mauve",
            hoverBorder: "group-hover:border-mauve",
        },
    },
];

const PROJECT_THUMBNAIL =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDkyDMXRxRKIf3oBb8Y45D1dYxDx4aFn1hYdTIs7zhsWze6z-edE3PYXS7aPMSept9_WbmgtU7PjGYGnQNqUyCmFtCydHoO9-mn9GwdN1TAiCnyY00kOkfeQZaKe_QkXrFgqKELyx73YwJUuJiapwnveQHOkABsPS2xJhNlJOwl-sJ9zgkiEsaY2CEejNWu7mMZ7lKDo9SlCuhleZ5KSeTEpU0Wycd8pkNcGsvjthNr2EnQNBRZtbL8J2GALf2mOBBNeQjYeGmC2wfD";

const PROJECTS = [
    {
        id: "1",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAEpKSNyvgQLHlIHwus24Lr8K0OEcL2tr-tuJOCplsBrunH7AvAa83OO3J2T4pwHb6K5AqegpMI_5rufH-srw8Vgqkjlovf8vr5oMUsGffUDgBHj7HBFWyyI5z-OmUVuakFPFipTEsOSsJQmmJMsFFg5lVeujSdf_mCNO9GYQSAbGoNPLZirvRXOTD4hsTc5raT0ZDd3Qr1Kno2Z675f9r7Wntl2q0geNeK5RtH4e9RjA1pJXANOG-GRWfk8k68-FegciuhuYcnXppO",
        title: "Vortex Editor",
        desc: "A lightweight, browser-based code editor focused on offline capabilities and seamless P2P collaboration using WebRTC.",
    },
    {
        id: "2",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDtaM6mKsHRtkyNZFji5IghXSA7cD6ati9ZNlNxEcA9t1G6bDW6CR5nGVkO1e2ekFk7o5e6NK7XwsHoqdF_dh2am3S6KQaza5MQDEfcmKslKwHq9hHSys0188sU4eYuJ4zwRzuGxv-QwpaXPxTwDOW4Fvq1CC3QHCLKOPIz4RfObjRx4j_LOaiLNSQ1uqKjR4YIUdz5EetOYleh2meY5RbqcSOSSWWGtCV-R0zXXUW-C27hvAR2gtrnA8LIAPUXse0Q1gZjze9IAz5f",
        title: "Aura AI Engine",
        desc: "A visual node-based interface for constructing and tuning machine learning models without writing boilerplate code.",
    },
];

const TECHNICAL_SKILLS = [
    {
        id: "1",
        label: "Frontend",
        icon: Code,
        text: "text-cyan",
        techStack: [
            {label: "React / Next.js", percentage: "90%", width: "w-[90%]"},
            {label: "Vue / Nuxt", percentage: "85%", width: "w-[85%]"},
            {label: "Tailwind CSS", percentage: "95%", width: "w-[95%]"},
        ],
    },
    {
        id: "2",
        label: "Backend",
        icon: Server,
        text: "text-mauve",
        techStack: [
            {label: "Node.js", percentage: "88%", width: "w-[88%]"},
            {label: "Go", percentage: "75%", width: "w-[75%]"},
            {label: "PostgreSQL", percentage: "80%", width: "w-[80%]"},
        ],
    },
    {
        id: "3",
        label: "Mobile",
        icon: Smartphone,
        text: "text-cyan",
        techStack: [
            {label: "Swift (iOS)", percentage: "82%", width: "w-[82%]"},
            {label: "Flutter", percentage: "78%", width: "w-[78%]"},
            {label: "React Native", percentage: "85%", width: "w-[85%]"},
        ],
    },
    {
        id: "4",
        label: "Tools",
        icon: Wrench,
        text: "text-mauve",
        techStack: [
            {label: "Docker", percentage: "90%", width: "w-[90%]"},
            {label: "Figma", percentage: "85%", width: "w-[85%]"},
            {label: "Git / CI / CD", percentage: "95%", width: "w-[95%]"},
        ],
    },
];

const TESTIMONIALS = [
    {
        id: 1,
        name: "Elena Rodriguez",
        message:
            "The translation from our complex Figma prototypes to pixel-perfect, highly responsive code was flawless. A true bridge between design intent and technical execution.",
        profile:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDzcngp-MnR_6bGs_a1YFQ9_XJy0CMe1s6seD-kvnHt27AXLCH3gnhbWy91lKAX_7XzbkzJAlVJdC2pYb1xHf4KP4Gm_aWI2NC_juDczCfH_ytoL8SRA-0_WOULFI4_dbNauQl0V4uMw_8MSVrP487JgKoyMDwK5qiGY9tebuzI4Apu0ifKjYkQ7K_okmX59Yh0ay2zbFhy7kVJWl8sOzCudV25CYxh-BMjcl3EKjEa8WV0K25G2JUdGFidY4Atf7G5A7rndu_aFqxA",
        subtitle: "Design Director, Prisma",
    },
    {
        id: 2,
        name: "Alex Thorne",
        message:
            "Working with DEV_CORE was a masterclass in modern architecture. They didn't just build our platform; they engineered a scalable ecosystem that transformed our operational speed.",
        profile:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAUPOFAz-thJys9oGW6UpXS2orUOOGSraSDkXXqJMwUWFOzgqzKZDMn_qMG1T2TGzzeq5B7bDTnlVZXl7U9dZAuYcc308GHo5Y0qFXvVr7mgDmY9_D97Pfq9RLRMhivrksZLuB5ELU_jTikFouIGUhjZxLSgkhGtoZyvt4W2pOOEyw2VKQunJY6BBrw990vVWF4-5vn4GOEF9TAbqDxyfjLT0vjUBYa2_Z6Nv_W9Dzcj1VewBycLPXXFPf4Uy65KDWPieqhLVHJraUm",
        subtitle: "CTO, Nexus Dynamics",
    },
    {
        id: 3,
        name: "Marcus Chen",
        message:
            "We needed a robust backend capable of handling massive data throughput. The Go microservices delivered were exceptionally performant. Highly recommended for heavy-lifting.",
        profile:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC7BAXXUm5GZqedboQgU372L1t7gM5NjkN5v9owwIudiQI0aVCVJ3sySTPMyYy1SY8YmNTjw5T5JvJcgEBkLj18tiC5z6lJGNHCiSzWKo-IXse8FPsJD6VmRp4KGv04q6gUX7eLLtzrbzGKaOcvvfIzJwHGFA_E9Z00jIGXLZNt-8CXV9zj_1oaXFfcrtrKfn_2-VbSqCBXegnFsufGyXtnwS4Okrm90CuDIkzWgMfhHS_UjbrvWcuTI-Q53uT903LDvafo2YAz_-Zh",
        subtitle: "Founder, Vertex Labs",
    },
];

export {
    NAV_LINKS,
    TECH_STACK,
    SKILLS,
    EXPERIENCE,
    SIDE_BAR,
    PROJECT_THUMBNAIL,
    PROJECTS,
    TECHNICAL_SKILLS,
    TESTIMONIALS,
};
