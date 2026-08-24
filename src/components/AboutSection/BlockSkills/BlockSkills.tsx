import {SKILLS} from "../../../constants.ts";

const BlockSkills = () => {
    return (
        <div className={'flex gap-8 flex-col'}>
            <h3
                className={'text-[32px] leading-[1.3] tracking-[-0.01em] font-semibold text-mercury'}
            >
                Столпы практики
            </h3>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
                {SKILLS.map(({label, desc, icon: Icon, colorClasses}) =>
                    <div key={label} className={'glassPanel p-8 rounded-xl h-75 flex flex-col justify-end ' +
                        'relative overflow-hidden group'}>
                        <div
                            className={`absolute top-8 right-8 size-12 flex ${colorClasses.bg} rounded-full 
                                justify-center items-center ${colorClasses.hoverBg} transition-colors`}>
                            <Icon className={`${colorClasses.text}`}/>
                        </div>
                        <h4
                            className={'text-[24px] leading-[1.3] tracking-[-0.01em] font-semibold text-mercury mb-2'}
                        >
                            {label}
                        </h4>
                        <p className={'text-base leading-[1.6] tracking-normal text-submarine'}>{desc}</p>
                        <div
                            className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100
                             transition-transform origin-left bg-linear-to-r ${colorClasses.gradient} to-transparent`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlockSkills;