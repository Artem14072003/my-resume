import {SIDE_BAR} from "../constants.ts";

const SideBar = () => {
    return (
        <>
            {SIDE_BAR.length > 0 ? (
                <aside className={'fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6'}>
                    {SIDE_BAR.map(({Components, href}) => (
                        <a href={href} className={'text-submarine hover:text-oyster-bay transition-colors'}>
                            <Components className={'size-6'}/>
                        </a>
                    ))}
                    <div className={'w-px h-24 mx-auto mt-4 bg-limed-spruce/30'}></div>
                </aside>) : <></>}
        </>
    )
};

export default SideBar;