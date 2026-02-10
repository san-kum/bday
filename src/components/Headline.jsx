export default function Headline() {
    return (
        <section className="section">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] text-ink">
                It's{' '}
                <span className="font-script text-4xl sm:text-[2.8rem] md:text-[3.5rem] font-normal text-accent">
                    Pranav's
                </span>{' '}
                Birthday!
            </h2>
            <hr className="rule-thin mt-4" />
        </section>
    )
}
