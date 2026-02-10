export default function FeatureStory() {
    return (
        <section className="section">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-4">
                <div>
                    <img
                        src="/assets/pranav-portrait.jpg"
                        alt="Pranav"
                        className="w-full object-cover border border-rule-light"
                        loading="lazy"
                    />
                    <p className="font-body text-[0.65rem] text-ink-muted mt-1.5 italic leading-snug">
                        A photo of the famous and brilliant Pranav — the smile that wins over everyone.
                    </p>
                </div>

                <div className="col-rule" />

                <div>
                    <h3 className="font-headline text-2xl font-black leading-tight mb-2">
                        PRANAV TURNS 27!
                    </h3>
                    <p className="col-text drop-cap mb-2">
                        In today's special edition, we are thrilled to bring to everyone's attention the
                        special occasion of Pranav's <strong>Twenty-Seventh</strong> Birthday — a day of
                        thanking the presence of this beautiful, intelligent, fun soul that brightens
                        everyone's day.
                    </p>
                    <p className="col-text">
                        This event marks another milestone and a great year passed, filled with personal
                        growth, achieved dreams, bright smiles and overcome fears.
                    </p>
                </div>
            </div>

            <hr className="rule-thin mt-4" />
        </section>
    )
}
