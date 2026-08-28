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
        name: "Ольга Зайцева",
        message:
            "«Ты не просто скопировал прототипы, а осмысленно адаптировал их под все экраны. Заметно выше своего грейда по качеству исполнения.»",
        profile:
            "./img/testimonials/1.png",
        subtitle: "Руководитель дизайна, продуктовая лаборатория «Сигма»",
    },
    {
        id: 2,
        name: "Алексей Смирнов",
        message:
            "«Перенос сложной Figma‑графики в пиксельно точный и отзывчивый код выполнен безупречно. Ты — идеальный мост между дизайном и вёрсткой.»",
        profile:
            "./img/testimonials/1.png",
        subtitle: "Арт‑директор, студия «Красный Угол»",
    },
    {
        id: 3,
        name: "Дмитрий Колесников",
        message:
            "«Адаптация наших сложнейших макетов прошла идеально. Ты точно передал дизайн и технически грамотно реализовал всё без потерь.»",
        profile:
            "./img/testimonials/1.png",
        subtitle: "Креативный директор, бюро «Четверть»",
    },
];

const SOCIAL_LINKS = [
    {
        title: 'GitHub',
        link: 'https://github.com/Artem14072003'
    },
    {
        title: 'Telegram',
        link: 'https://t.me/Tema10300202'
    },
    {
        title: 'VK',
        link: 'https://vk.ru/love_my_little_kitten'
    }
]

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
    SOCIAL_LINKS
};
