import MotionSection from "./UI/MotionSection.tsx";
import {TECHNICAL_SKILLS} from "../constants.ts";

const SkillSection = () => {
    return (
        <MotionSection className={'max-w-300 mx-auto px-8 mb-40'}>
            <section>
                <div className={'mb-16'}>
                    <h2
                        className={'text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-mercury mb-4'}
                    >
                        Технический арсенал
                    </h2>
                    <p
                        className={'text-[18px] leading-[1.6] tracking-normal max-w-2xl text-submarine'}
                    >
                        Тщательно подобранный набор современных технологий, выбранных с учетом производительности,
                        масштабируемости и удобства для разработчиков
                    </p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
                    {TECHNICAL_SKILLS.map(() =>
                        <div
                            className={'$'}
                        >

                        </div>
                    )}
                </div>
            </section>
        </MotionSection>
    );
};

export default SkillSection;