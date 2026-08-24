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
        label: "Креативный дизайн",
        desc: "Сочетание эстетического видения и технических ограничений для создания живых интерфейсов. ",
        icon: LoaderPinwheel,
        colorClasses: {
            text: "text-cyan",
            bg: "bg-cyan/10",
            hoverBg: "group-hover:bg-cyan/20",
            gradient: "from-cyan",
        },
    },
    {
        label: "Системная архитектура",
        desc: "Разработка масштабируемых и удобных в обслуживании экосистем компонентов, которые растут вместе с продуктом. ",
        icon: ShieldCog,
        colorClasses: {
            text: "text-electric-violet",
            bg: "bg-electric-violet/10",
            hoverBg: "group-hover:bg-electric-violet/20",
            gradient: "from-electric-violet",
        },
    },
    {
        label: "Представление",
        desc: "Навязчивая оптимизация путей рендеринга и размеров полезной нагрузки для обеспечения мгновенного взаимодействия.",
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
        title: "Full-Stack Developer",
        company: "United Truck Services",
        date: "2023 — 2024",
        desc: " Возглавил полную переработку сайта UTS, заменив статичный HTML на динамическое приложение с " +
            "серверной логикой и админ-панелью. Внедрил самостоятельное управление контентом для сотрудников без кода, " +
            "сократив время обновления данных с дней до минут.",
        techStack: ["React", "SCSS", "LaravelAPI", "REST API", 'MySQL'],
        color: "cyan",
        colorClasses: {
            text: "text-mauve",
            hoverBg: "group-hover:bg-mauve",
            hoverBorder: "group-hover:border-mauve",
        },
    },
];

const PROJECT_THUMBNAIL = "./img/projects/0.png";

const PROJECTS = [
    {
        id: "1",
        thumbnail:
            "./img/projects/1.png",
        title: "PetSPA",
        desc: "Профессиональный груминг и релакс для ваших хвостатых друзей — каждый питомец заслуживает королевского ухода.",
        view: 'https://artem14072003.github.io/PetSPA/',
        project: 'https://github.com/Artem14072003/PetSPA'
    },
    {
        id: "2",
        thumbnail:
            "./img/projects/2.png",
        title: "Виселица",
        desc: "Классическая словесная головоломка: называйте буквы, не дайте человечку оказаться на виселице.",
        view: 'https://artem14072003.github.io/The-Gallows/dist/index.html',
        project: 'https://github.com/Artem14072003/The-Gallows'
    },
];

const TECHNICAL_SKILLS = [
    {
        id: "1",
        label: "Frontend",
        icon: Code,
        text: "text-cyan",
        techStack: [
            {label: "React / Next.js", percentage: "80%", width: "w-[80%]"},
            {label: "Vue / Nuxt", percentage: "65%", width: "w-[65%]"},
            {label: "Tailwind CSS", percentage: "70%", width: "w-[70%]"},
        ],
    },
    {
        id: "2",
        label: "Backend",
        icon: Server,
        text: "text-mauve",
        techStack: [
            {label: "Node.js", percentage: "70%", width: "w-[70%]"},
            {label: "Python", percentage: "60%", width: "w-[60%]"},
            {label: "PostgreSQL", percentage: "68%", width: "w-[68%]"},
        ],
    },
    {
        id: "3",
        label: "Mobile",
        icon: Smartphone,
        text: "text-cyan",
        techStack: [
            {label: "Flutter", percentage: "50%", width: "w-[50%]"},
            {label: "React Native", percentage: "70%", width: "w-[70%]"},
        ],
    },
    {
        id: "4",
        label: "Tools",
        icon: Wrench,
        text: "text-mauve",
        techStack: [
            {label: "Docker", percentage: "50%", width: "w-[50%]"},
            {label: "Figma", percentage: "85%", width: "w-[85%]"},
            {label: "Git / CI / CD", percentage: "80%", width: "w-[80%]"},
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
