import {NAV_LINKS} from "../constants.ts";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash || '#about')

    useEffect(() => {
        const handleHashChang = () =>
            setActiveHash(window.location.hash)

        window.addEventListener('hashchange', handleHashChang)

        return () => {
            window.removeEventListener('hashchange', handleHashChang)
        }
    }, [])

    return (
        <nav
            className={'bg-woodsmoke/80 w-full backdrop-blur-xl ' +
                'border-limed-spruce/10 shadow-[0_10px_30px_rgba(0, 240, 255, 0.05]'}>
            <div className={'flex justify-between items-center px-8 py-4 mx-auto max-w-300'}>
                <div className={'text-[32px] leading-[1.3] font-bold text-mercury tracking-tighter'}>
                    KRIVENKO_AM
                </div>
                <div className={'hidden md:flex gap-8 items-center'}>
                    {NAV_LINKS.map(({label, href}) => (
                        <a
                            key={href}
                            href={href}
                            className={`pb-1 text-sm tracking-wider transition-colors duration-300 
                                ${activeHash === href ? 'text-oyster-bay font-bold border-b-2 border-oyster-bay' : 
                                'text-submarine hover:text-oyster-bay'}`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <button className={'bg-black text-white transition-transform ' +
                    'text-sm rounded cursor-pointer hover:scale-95 px-6 py-2 btnBoxShadow'}>Резюме
                </button>
            </div>
        </nav>
    );
};

export default Navbar;