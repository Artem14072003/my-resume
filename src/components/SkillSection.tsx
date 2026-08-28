import MotionSection from "./UI/MotionSection.tsx";
import {TECHNICAL_SKILLS} from "../constants.ts";

const SkillSection = () => {
    return (
        <MotionSection className={'max-w-300 mx-auto px-0 md:px-8 mb-40'}>
            <section>
                <div className={'mb-16'}>
                    <h2
                        className={'text-[28px] md:[36px] lg:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-mercury mb-4'}
                    >
                        Технический арсенал
                    </h2>
                    <p
                        className={'text-base md:text-[18px] leading-[1.6] tracking-normal max-w-2xl text-submarine'}
                    >
                        Тщательно подобранный набор современных технологий, выбранных с учетом производительности,
                        масштабируемости и удобства для разработчиков
                    </p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
                    {TECHNICAL_SKILLS.map(({id, label, techStack, text, icon: Icon}) =>
                        <div
                            key={id}
                            className={'skillGlassPanel p-10 rounded-xl relative overflow-hidden group'}
                        >
                            <div
                                className={'absolute inset-0 bg-linear-to-br from-oyster-bay/5 to-transparent ' +
                                    'opacity-0 group-hover:opacity-100 transition-opacity duration-500'}
                            />
                            <div
                                className={'flex items-center gap-4 mb-8'}
                            >
                                <Icon className={`${text} text-3xl shrink-0`}/>
                                <h3 className={'text-[26px] md:text-[32px] leading-[1.3] tracking-[-0.01em] font-semibold text-mercury'}>{label}</h3>
                            </div>
                            <div className={'space-y-6'}>
                                {techStack.map((skill) => (
                                    <div key={skill.label}>
                                        <div
                                            className={'flex justify-between mb-2 text-xs leading-[1.4] ' +
                                                'tracking-widest font-medium'}
                                        >
                                            <span className={'text-mercury'}>{skill.label}</span>
                                            <span className={`${text} font-bold`}>{skill.percentage}</span>
                                        </div>
                                        <div className={'h-1 bg-cape-cod rounded-full overflow-hidden'}>
                                            <div className={`h-full bg-linear-to-r from-mauve to-cyan 
                                                ${skill.width} progressBarFill`}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </MotionSection>
    );
};

export default SkillSection;