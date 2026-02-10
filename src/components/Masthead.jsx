export default function Masthead() {
    return (
        <header className="section !pb-0">
            <h1 className="font-masthead text-4xl sm:text-5xl md:text-6xl text-ink leading-none font-black text-center">
                The Birthday Times
            </h1>

            <hr className="rule-thick mt-3" />

            <div className="flex items-center justify-between py-1.5 text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] uppercase font-body text-ink-muted">
                <span>11th February</span>
                <span className="hidden sm:inline">Special Birthday Edition</span>
                <span className="font-bold text-accent">Breaking News</span>
            </div>

            <hr className="rule-thick" />
        </header>
    )
}
