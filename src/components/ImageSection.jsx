import ImageBlock from '../components/ImageBlock'

export default function ImageSection() {
    return (
        <section className="px-4 py-6">
            <div className="flex items-center gap-3 mb-4">
                <h3 className="font-headline text-2xl font-bold tracking-tight whitespace-nowrap">
                    Gallery
                </h3>
                <hr className="newspaper-rule-thin flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_280px] gap-0">
                <ImageBlock
                    src={null}
                    caption="Pranav, photographed on the eve of his 27th birthday — a portrait of composure, ambition, and quiet brilliance."
                    size="large"
                />

                <div className="column-divider hidden md:block" />

                <div className="mt-4 md:mt-0">
                    <ImageBlock
                        src={null}
                        caption="The birthday boy in his element."
                        size="portrait"
                        className="mb-4"
                    />
                    <div className="p-3 border border-rule-light bg-cream-dark">
                        <p className="font-headline text-xs font-bold uppercase tracking-wider mb-1">
                            Photo Credit
                        </p>
                        <p className="font-body text-xs text-ink-muted italic">
                            All photographs courtesy of friends &amp; family archives. Unauthorized
                            reproduction will result in missing out on birthday cake.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="newspaper-rule mt-6" />
        </section>
    )
}
