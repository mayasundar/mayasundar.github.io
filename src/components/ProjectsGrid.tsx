'use client';

import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import Navbar from "@/components/Navbar";
import ImageSlideshow from "@/components/ImageSlideshow";
import { useState, useMemo } from 'react';

interface IndexPageClientProps {
    posts: SanityDocument[];
}

export default function IndexPageClient({ posts }: IndexPageClientProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const allTags = useMemo(() => {
        const tagSet = new Set<string>();

        posts.forEach(post => {
            if (post.tags && Array.isArray(post.tags)) {
                post.tags.forEach((tag: string) => {
                    if (tag && tag.trim()) {
                        tagSet.add(tag.toLowerCase());
                    }
                });
            }
        });

        return Array.from(tagSet).sort();
    }, [posts]);

    const filteredPosts = useMemo(() => {
        if (selectedTags.length === 0) return posts;

        return posts.filter(post => {
            if (!post.tags || !Array.isArray(post.tags)) return false;

            const postTags = post.tags.map((tag: string) => tag.toLowerCase());

            return selectedTags.every((selectedTag) =>
                postTags.includes(selectedTag)
            );
        });
    }, [posts, selectedTags]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    const renderExternalLinks = (post: SanityDocument) => {
        if (!post.externalLinks || !Array.isArray(post.externalLinks)) {
            return null;
        }

        return post.externalLinks.map((link) => {
            if (!link || !link.url) return null;

            return (
                <a
                    key={link._key || link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link tool website inline-block mr-2 px-2 py-1"
                >
                    {link.label || link.url}
                </a>
            );
        });
    };

    return (
        <div>
            <Navbar />

            <main className="mx-auto w-full px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    <aside className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 md:sticky md:top-8">
                        <div className="flex flex-col gap-6">

                            <div className="bg-white p-8 rounded-sm">
                                <h2 className="mb-4">About Me</h2>

                                <div className="space-y-4">
                                    <p>
                                        I'm a designer, writer, and technologist
                                        with an eye for branding, accessibility,
                                        and user experience.
                                    </p>

                                    <p>
                                        I have experience across front-end
                                        engineering, growth marketing, product
                                        design, and brand strategy.
                                    </p>

                                    <p>
                                        You can reach me at{" "}
                                        <a
                                            href="mailto:mayajsundar@gmail.com"
                                            className="font-semibold"
                                        >mayajsundar@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {allTags.length > 0 && (
                                <div className="px-4 py-4 bg-[#F2E8E8]/50 rounded-lg">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-semibold">
                                            Filter by tags:
                                        </h3>

                                        {selectedTags.length > 0 && (
                                            <button
                                                onClick={clearFilters}
                                                className="text-sm text-[#D0A9A6] hover:text-[#5D5D5D] font-medium"
                                            >
                                                Clear all
                                            </button>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {allTags.map((tag) => {
                                            const isSelected =
                                                selectedTags.includes(tag);

                                            return (
                                                <button
                                                    key={tag}
                                                    onClick={() =>
                                                        toggleTag(tag)
                                                    }
                                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors border border-[#E4CDCC] ${
                                                        isSelected
                                                            ? "bg-[#E4CDCC] text-[#5D5D5D]"
                                                            : "bg-[#f7f1f1] text-[#5D5D5D] hover:bg-[#E4CDCC]"
                                                    }`}
                                                >
                                                    {tag}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {selectedTags.length > 0 && (
                                        <p className="mt-3 text-sm text-[#5D5D5D]">
                                            Showing {filteredPosts.length} of{" "}
                                            {posts.length} projects
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </aside>

                    <section className="w-full md:w-2/3 lg:w-3/4">
                        <div className="flex flex-col gap-6">
                            {filteredPosts.length === 0 ? (
                                <p className="text-center text-gray-500 py-8">
                                    No projects found with the selected tags.
                                </p>
                            ) : (
                                filteredPosts.map((post) => {
                                    const slideshowImages = [];

                                    if (post.image) {
                                        slideshowImages.push(post.image);
                                    }

                                    if (
                                        post.imagesGallery &&
                                        Array.isArray(post.imagesGallery)
                                    ) {
                                        const galleryImages =
                                            post.imagesGallery.filter(
                                                (img) =>
                                                    img._key !==
                                                    post.image?._key
                                            );

                                        slideshowImages.push(...galleryImages);
                                    }

                                    return (
                                        <article
                                            key={post._id}
                                            className="bg-white p-8 rounded-sm w-full"
                                        >
                                            <div className="mb-4">
                                                <Link
                                                    href={`/content/${post.slug.current}`}
                                                    className="group inline-block"
                                                >
                                                    <h2 className="text-2xl font-bold group-hover:underline inline">
                                                        {post.title}
                                                    </h2>
                                                </Link>

                                                {renderExternalLinks(post) && (
                                                    <span className="text-3xl font-bold ml-4">
                                                        {renderExternalLinks(
                                                            post
                                                        )}
                                                    </span>
                                                )}
                                            </div>

                                            {post.tags &&
                                                post.tags.length > 0 && (
                                                    <div className="mb-4">
                                                        {post.tags.map(
                                                            (
                                                                tag: string,
                                                                index: number
                                                            ) => {
                                                                const isSelected =
                                                                    selectedTags.includes(
                                                                        tag.toLowerCase()
                                                                    );

                                                                return (
                                                                    <button
                                                                        key={`${tag}-${index}`}
                                                                        onClick={() =>
                                                                            toggleTag(
                                                                                tag.toLowerCase()
                                                                            )
                                                                        }
                                                                        className={`inline-block text-xs px-2 py-1 rounded-full mr-2 mb-2 transition-colors border border-[#E4CDCC] ${
                                                                            isSelected
                                                                                ? "bg-[#E4CDCC] text-[#5D5D5D]"
                                                                                : "bg-[#f7f1f1] text-[#5D5D5D] hover:bg-[#E4CDCC]"
                                                                        }`}
                                                                    >
                                                                        {tag}
                                                                    </button>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                )}

                                            <p className="mb-2">
                                                {post.summary}
                                            </p>

                                            <Link
                                                href={`/content/${post.slug.current}`}
                                            >
                                                <button className="mb-4 inline-block text-sm px-3 py-1 rounded-full mt-2 transition-colors border border-[#efe5e5] bg-[#f7f1f1] text-[#5D5D5D] hover:bg-[#efe5e5]">
                                                    Read More →
                                                </button>
                                            </Link>

                                            {slideshowImages.length > 0 && (
                                                <ImageSlideshow
                                                    images={slideshowImages}
                                                    className="hover:opacity-90 transition-opacity cursor-pointer"
                                                />
                                            )}
                                        </article>
                                    );
                                })
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}