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
            return selectedTags.every(selectedTag => postTags.includes(selectedTag));
        });
    }, [posts, selectedTags]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    const renderExternalLinks = (post: SanityDocument) => {
        if (post.externalLinks && Array.isArray(post.externalLinks)) {
            return post.externalLinks.map((link) => {
                if (link && link.url) {
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
                }
                return null;
            });
        }
        return null;
    };

    return (
        <div>
            <Navbar/>
            <main className="mx-auto p-8 w-full h-full justify-between">
                {allTags.length > 0 && (
                    <div className="mb-4 px-4 py-4 bg-[#F2E8E8]/50 rounded-lg lg:max-w-[calc(50%-12px)] sm:max-w-full">                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-semibold">Filter by tags:</h3>
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
                            {allTags.map(tag => {
                                const isSelected = selectedTags.includes(tag);
                                return (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors border border-[#E4CDCC] ${
                                            isSelected
                                                ? 'bg-[#E4CDCC] text-[#5D5D5D]'
                                                : 'bg-[#f7f1f1] text-[#5D5D5D] hover:bg-[#E4CDCC]'
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>

                        {selectedTags.length > 0 && (
                            <p className="mt-3 text-sm text-[#5D5D5D]">
                                Showing {filteredPosts.length} of {posts.length} projects
                            </p>
                        )}
                    </div>
                )}

                <div className="columns-1 md:columns-2 lg:columns-2 gap-6">
                    {filteredPosts.length === 0 ? (
                        <p className="text-center text-gray-500 py-8 col-span-full">
                            No projects found with the selected tags.
                        </p>
                    ) : (
                        filteredPosts.map((post) => {
                            const slideshowImages = [];
                            if (post.image) {
                                slideshowImages.push(post.image);
                            }
                            if (post.imagesGallery && Array.isArray(post.imagesGallery)) {
                                const galleryImages = post.imagesGallery.filter(img => img._key !== post.image?._key);
                                slideshowImages.push(...galleryImages);
                            }

                            return (
                                <div key={post._id} className="break-inside-avoid mb-6">
                                    <article className="bg-white p-8 rounded-sm w-full">
                                        <div className="mb-4">
                                            <Link href={`/content/${post.slug.current}`} className="group inline-block">
                                                <h2 className="text-2xl font-bold group-hover:underline inline">
                                                    {post.title}
                                                </h2>
                                            </Link>
                                            <span className="text-3xl font-bold ml-4">{renderExternalLinks(post)}</span>
                                        </div>
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="mb-4">
                                                {post.tags.map((tag: string, index: number) => {
                                                    const isSelected = selectedTags.includes(tag.toLowerCase());
                                                    return (
                                                        <button
                                                            key={`${tag}-${index}`}
                                                            onClick={() => toggleTag(tag.toLowerCase())}
                                                            className={`inline-block text-xs px-2 py-1 rounded-full mr-2 mb-2 transition-colors border border-[#E4CDCC] ${
                                                                isSelected
                                                                    ? 'bg-[#E4CDCC] text-[#5D5D5D]'
                                                                    : 'bg-[#f7f1f1] text-[#5D5D5D] hover:bg-[#E4CDCC]'
                                                            }`}
                                                        >
                                                            {tag}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        <p  className="mb-2">{post.summary}</p>

                                        <Link href={`/content/${post.slug.current}`}>
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
                                </div>
                            );
                        })
                    )}
                </div>
            </main>
        </div>
    );
}