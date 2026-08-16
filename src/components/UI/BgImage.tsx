const BgImage = () => (
    <>
        <div className={'fixed inset-0 z-[-2] bg-woodsmoke'}/>
        <div className={'fixed inset-0 z-[-1] grid-bg opacity-50 rotate-x-12 ' +
            'transform scale-150 origin-bottom'}/>
        <div className={'ambientGlow -top-25 -left-25'}/>
        <div className={'ambientGlow -top-[23%] -right-50 bgImage'}/>
    </>
);

export default BgImage;