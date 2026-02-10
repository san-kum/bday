export default function QuoteBlock() {
    return (
        <section className="section">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-4 items-center">
                <div>
                    <p className="font-script text-xl sm:text-2xl text-ink leading-snug">
                        Wishing you a year filled with all that you want to achieve. Friends, family and
                        lots of memories.
                    </p>
                </div>

                <div className="col-rule" />

                <div>
                    <img
                        src="/assets/pranav-dog.jpg"
                        alt="Pranav with his dog"
                        className="w-full object-cover border border-rule-light"
                        loading="lazy"
                    />
                </div>
            </div>

            <hr className="rule-thin mt-4" />
        </section>
    )
}
