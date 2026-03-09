'use client';

import { useState } from 'react';
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

interface ImageSlideshowProps {
    images: any[];
    className?: string;
}

export default function ImageSlideshow({ images, className = "" }: ImageSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentImageUrl = urlFor(images[currentIndex])?.maxWidth(800).quality(100).url();

    return (
        <div className={`relative w-full ${className}`}>
            {/* Main Image */}
            <div className="relative  bg-gray-100 rounded-xl overflow-hidden">
                {currentImageUrl && (
                    <img
                        src={currentImageUrl}
                        alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                        width="800"
                    />
                )}

                {/* Navigation Arrows - Only show if more than 1 image */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnail Navigation - Only show if more than 1 image */}
            {/*{images.length > 1 && (*/}
            {/*    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">*/}
            {/*        {images.map((image, index) => {*/}
            {/*            const thumbnailUrl = urlFor(image)?.width(100).height(75).url();*/}
            {/*            return thumbnailUrl ? (*/}
            {/*                <button*/}
            {/*                    key={index}*/}
            {/*                    onClick={() => goToSlide(index)}*/}
            {/*                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${*/}
            {/*                        index === currentIndex*/}
            {/*                            ? 'border-blue-500'*/}
            {/*                            : 'border-transparent hover:border-gray-300'*/}
            {/*                    }`}*/}
            {/*                >*/}
            {/*                    <img*/}
            {/*                        src={thumbnailUrl}*/}
            {/*                        alt={`Thumbnail ${index + 1}`}*/}
            {/*                        className="w-full h-full object-cover"*/}
            {/*                        width="100"*/}
            {/*                        height="75"*/}
            {/*                    />*/}
            {/*                </button>*/}
            {/*            ) : null;*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}
