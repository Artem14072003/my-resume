import {SOCIAL_LINKS} from "../constants.ts";

const FooterSection = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={'bg-woodsmoke w-full py-16 border-t border-limed-spruce/5'}>
            <div className={'flex flex-col md:flex-row justify-between items-center px-8 max-w-300 mx-auto gap-8'}>
                <div className={'font-bold text-mercury'}>KRIVENKO_AM</div>
                <div className={'text-base leading-[1.6] tracking-normal text-submarine text-center md:text-left'}>
                    &copy; {currentYear} KRIVENKO_AM. Построенный для будущего.
                </div>
                <div className={'flex gap-6 text-xs leading-[1.4] tracking-widest font-medium'}>
                    {SOCIAL_LINKS.map(({title, link}) => (
                        <a
                            href={link}
                            target={'_blank'}
                            className={'text-submarine hover:text-cyan transition-all hover:-translate-y-0.5'}
                        >{title}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;