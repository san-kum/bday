import { useState } from 'react'

export default function ImageBlock({
    src,
    alt,
    caption,
    size = 'large',
    className = '',
}) {
    const [loaded, setLoaded] = useState(false)

    const sizeStyles = {
        large: 'aspect-[4/3]',
        small: 'aspect-square',
        portrait: 'aspect-[3/4]',
    }

    return (
        <figure className={`relative overflow-hidden ${className}`}>
            <div
                className={`${sizeStyles[size]} bg-cream-dark w-full relative overflow-hidden border border-rule-light`}
            >
                {src ? (
                    <img
                        src={src}
                        alt={alt || caption || 'Birthday photo'}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-ink-muted font-body text-sm italic">
                        <div className="text-center">
                            <div className="text-4xl mb-2">📷</div>
                            <span>Photo placeholder</span>
                        </div>
                    </div>
                )}
            </div>
            {caption && (
                <figcaption className="font-body text-xs text-ink-muted mt-2 italic leading-snug">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}
