import { Children, cloneElement } from 'react'

export default function NewspaperLayout({ children }) {
    return (
        <div className="min-h-screen bg-cream">
            <article className="newspaper-page">
                {Children.map(children, (child, i) =>
                    child ? (
                        <div
                            key={i}
                            className="print-section"
                            style={{ animationDelay: `${i * 150}ms` }}
                        >
                            {child}
                        </div>
                    ) : null
                )}
            </article>
        </div>
    )
}
