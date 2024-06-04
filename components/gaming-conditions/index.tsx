export const GamingCondition = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-4 text-white">
            <h1 className="text-center text-3xl font-semibold">Ultimate <span className="text-amber-500 font-bold">Winning</span> Experience</h1>
            <div className="aspect-video md:hidden">
                <img
                    src="/experience-center-image.png"
                    alt="Experience"
                />
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 items-center justify-center">
                <div className="space-y-3">
                    <div className="border-y border-l border-primary p-4 pl-8 rounded-tl-full rounded-bl-full space-y-1">
                        <h4 className="text-xl text-amber-500 font-semibold">10-minute Format</h4>
                        <p className="text-sm text-slate-300">This is the most amazing real money game in India right now. Fair & square! The intelligent</p>
                    </div>
                    <div className="border-y border-l border-primary p-4 pl-8 rounded-tl-full rounded-bl-full space-y-1">
                        <h4 className="text-xl text-amber-500 font-semibold">10-minute Format</h4>
                        <p className="text-sm text-slate-300">This is the most amazing real money game in India right now. Fair & square! The intelligent</p>
                    </div>
                    <div className="border-y border-l border-primary p-4 pl-8 rounded-tl-full rounded-bl-full space-y-1">
                        <h4 className="text-xl text-amber-500 font-semibold">10-minute Format</h4>
                        <p className="text-sm text-slate-300">This is the most amazing real money game in India right now. Fair & square! The intelligent</p>
                    </div>
                </div>
                <div className="aspect-video hidden md:block">
                    <img
                        src="/experience-center-image.png"
                        alt="Experience"
                    />
                </div>
                <div className="space-y-3">
                    <div className="border-y border-r border-primary p-4 pr-8 rounded-tr-full rounded-br-full space-y-1">
                        <h4 className="text-xl text-amber-500 font-semibold text-end">10-minute Format</h4>
                        <p className="text-sm text-slate-300 text-end">This is the most amazing real money game in India right now. Fair & square! The intelligent</p>
                    </div>
                    <div className="border-y border-r border-primary p-4 pr-8 rounded-tr-full rounded-br-full space-y-1">
                        <h4 className="text-xl text-amber-500 font-semibold text-end">10-minute Format</h4>
                        <p className="text-sm text-slate-300 text-end">This is the most amazing real money game in India right now. Fair & square! The intelligent</p>
                    </div>
                    <div className="border-y border-r border-primary p-4 pr-8 rounded-tr-full rounded-br-full space-y-1">
                        <h4 className="text-xl text-amber-500 font-semibold text-end">10-minute Format</h4>
                        <p className="text-sm text-slate-300 text-end">This is the most amazing real money game in India right now. Fair & square! The intelligent</p>
                    </div>
                </div>
            </div>
        </div>
    )
}