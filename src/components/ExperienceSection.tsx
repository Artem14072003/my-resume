import MotionSection from "./UI/MotionSection.tsx";
import {EXPERIENCE} from "../constants.ts";

const ExperienceSection = () => {
    return (
        <MotionSection className={'max-w-300 mx-auto px-8 mb-40'}>
            <section id={'experience'}>
                <div className="mb-16">
                    <h2 className={'text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-mercury mb-4'}>Experience</h2>
                    <p
                        className={'text-[18px] leading-[1.6] tracking-normal text-submarine max-w-2xl'}
                    >
                        A history of building scalable solutions and leading engineering teams across diverse tech landscapes
                    </p>
                </div>
                <div className="relative ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
                    {EXPERIENCE.map((exp) =>
                        <div key={exp.company} className={'relative group'}>
                            <div
                                className={`absolute -left-9.25 md:-left-13.25 top-1 w-4 h-4 rounded-full bg-woodsmoke 
                                border-2 border-limed-spruce ${exp.colorClasses.hoverBg} transition-all 
                                ${exp.colorClasses.hoverBorder} duration-200 z-10 
                                group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]`}
                            />
                            <div className={'glassCard rounded-xl p-10 relative overflow-hidden'}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 relative z-10">
                                    <div className={''}>
                                        <h3
                                            className={'text-[32px] leading-[1.3] tracking-[-0.01em] font-semibold ' +
                                                'text-mercury mb-1'}
                                        >
                                            {exp.title}
                                        </h3>
                                        <p
                                            className={`text-[14px] leading-[1.4] tracking-wider font-medium 
                                            ${exp.colorClasses.text}`}
                                        >
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div
                                        className={"inline-flex items-center px-3 py-1 rounded-full " +
                                            "border-limed-spruce/30 bg-shark text-xs leading-[1.4] tracking-widest " +
                                            "font-medium text-submarine"}
                                    >
                                        {exp.date}
                                    </div>
                                </div>
                                <p
                                    className={'text-base leading-[1.6] tracking-normal ' +
                                        'text-submarine mb-6 relative z-10'}
                                >
                                    {exp.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {exp.techStack.map((stack) =>
                                        <span
                                            key={stack}
                                            className={'px-3 py-1 rounded text-xs tracking-widest font-medium text-submarine border border-limed-spruce/20'}
                                        >
                                            {stack}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </section>
        </MotionSection>
    );
};

export default ExperienceSection;