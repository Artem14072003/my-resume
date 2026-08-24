import MotionSection from "./UI/MotionSection.tsx";
import {ArrowRight, CodeXml} from "lucide-react";
import {PROJECT_THUMBNAIL, PROJECTS} from "../constants.ts";

const URL_UTS = 'https://github.com/Artem14072003/UTS-client'

const ProjectSection = () => {
    const handleProject = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <MotionSection className={"max-w-300 mx-auto px-8 mb-40"}>
            <section id={'projects'}>
                <div className="flex flex-col md:flex-row mb-16 md:items-end justify-between gap-6">
                    <div>
                        <h2
                            className={'text-[34px] shrink leading-[1.2] tracking-[-0.02em] font-bold text-mercury mb-4'}
                        >
                            Проекты, в которых воплощены лучшие практики
                        </h2>
                        <p
                            className={'text-[18px] leading-[1.6] tracking-normal text-submarine max-w-2xl'}
                        >
                            Подборка недавних работ, где производительность, продуманная архитектура UI и следование
                            современным веб-стандартам выходят на первый план.
                        </p>
                    </div>
                    <button
                        onClick={() => handleProject('https://github.com/Artem14072003')}
                        className={'inline-flex grow shrink-0 items-center gap-2 text-sm leading-[1.4] tracking-wider font-medium ' +
                            'text-oyster-bay hover:text-cyan transition-colors cursor-pointer'}
                    >
                        Просмотреть архив
                        <ArrowRight className={'animateRight text-xs transition-transform duration-500'}/>
                    </button>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-12 gap-8"}>
                    <div className={"lg:col-span-12"}>
                        <div
                            className={"glassCard rounded-xl overflow-hidden group flex flex-col lg:flex-row h-full"}
                        >
                            <div className={'lg:w-3/5 relative overflow-hidden h-75 lg:h-auto'}>
                                <img
                                    src={PROJECT_THUMBNAIL}
                                    className={'w-full h-full object-cover transition-transform duration-700 ' +
                                        'group-hover:scale-105'}
                                    alt={'first project'}
                                    draggable={false}
                                />
                                <div
                                    className="absolute inset-0 bg-linear-to-t to-transparent lg:bg-linear-to-r
                                    from-woodsmoke via-woodsmoke/50"
                                />
                                <div
                                    className={'absolute inset-0 bg-linear-to-r from-woodsmoke/75 to-cyan-900/75 ' +
                                        'group-hover:from-transparent group-hover:to-transparent transition-colors ' +
                                        'duration-700'}
                                />
                            </div>
                            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <span
                                        className={'w-2 h-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]'}
                                    />
                                    <span
                                        className="text-xs leading-[1.4] font-medium text-cyan uppercase tracking-wider"
                                    >
                                        лучшая работа
                                    </span>
                                </div>
                                <h3
                                    className={'text-[24px] leading-[1.3] tracking-[-0.01em] font-semibold mb-4 ' +
                                        'text-mercury'}
                                >
                                    Сайт United Truck Services
                                </h3>
                                <p
                                    className={'text-base leading-[1.6] tracking-normal mb-8 text-submarine'}
                                >
                                    Разработал новую версию сайта для UTS. Старый сайт был статичным — любые правки
                                    требовали разработчика, что затягивало обновление данных. Мой проект — адаптивный, с
                                    серверной логикой и удобной админ-панелью: теперь любой сотрудник без знаний кода
                                    может редактировать информацию о грузовиках и управлять контентом. Это делает сайт
                                    гибким, экономит ресурсы и ускоряет работу.
                                </p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <button
                                        className={'inline-flex items-center justify-center text-xs px-6 py-2.5 rounded ' +
                                            'text-woodsmoke bg-mercury border border-transparent leading-[1.4] ' +
                                            'tracking-wider font-medium hover:bg-woodsmoke hover:text-oyster-bay ' +
                                            'transition-all hover:border-oyster-bay duration-300 cursor-pointer ' +
                                            'hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'}
                                    >
                                        Демо сайта
                                    </button>
                                    <button
                                        onClick={() => handleProject(URL_UTS)}
                                        className={'inline-flex items-center justify-center text-xs px-6 py-2.5 rounded ' +
                                            'text-mercury bg-transparent border border-limed-spruce leading-[1.4] ' +
                                            'tracking-wider font-medium hover:text-oyster-bay ' +
                                            'transition-all hover:border-oyster-bay duration-300 cursor-pointer'}
                                    >Исходный код
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {PROJECTS.map((project) =>
                        <div
                            key={project.id}
                            className={'lg:col-span-6'}
                        >
                            <div className={"glassCard rounded-xl overflow-hidden group h-full flex flex-col"}>
                                <div className={"relative overflow-hidden h-60"}>
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        draggable={false}
                                        className={'size-full object-cover transition-transform duration-700 ' +
                                            'group-hover:scale-105'}
                                    />
                                    <div
                                        className={'absolute inset-0 bg-linear-to-r from-woodsmoke/75 to-cyan-900/75 ' +
                                            'group-hover:from-transparent group-hover:to-transparent transition-colors ' +
                                            'duration-700'}
                                    />
                                </div>
                                <div className={'p-8 grow flex flex-col relative z-10'}>
                                    <h3
                                        className={'text-[32px] leading-[1.3] tracking-[-0.01em] font-medium ' +
                                            'text-mercury mb-3'}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className={'text-base leading-[1.6] tracking-normal mb-6 grow text-submarine'}
                                    >
                                        {project.desc}
                                    </p>
                                    <div className={"flex items-center gap-4 pt-4 border-t border-limed-spruce/20"}>
                                        <button
                                            onClick={() => handleProject(project.view)}
                                            className={'text-sm leading-[1.4] tracking-wider flex font-medium ' +
                                                'text-oyster-bay hover:text-cyan items-center transition-colors ' +
                                                'gap-1 cursor-pointer'}
                                        >
                                            Details
                                            <ArrowRight className={'size-5'}/>
                                        </button>
                                        <button
                                            onClick={() => handleProject(project.project)}
                                            className={'text-sm leading-[1.4] tracking-wider flex font-medium ' +
                                                'text-submarine hover:text-mercury items-center transition-colors ' +
                                                'gap-1 ml-auto cursor-pointer'}
                                        >
                                            <CodeXml className={'size-5'}/>
                                            Repo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </MotionSection>
    );
};

export default ProjectSection;