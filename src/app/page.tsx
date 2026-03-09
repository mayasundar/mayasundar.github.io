import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import Navbar from "@/components/Navbar";

import { client } from "@/sanity/client";
import ImageSlideshow from "@/components/ImageSlideshow";

const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  summary,
  tags,
  publishedAt, 
  image,
  externalLinks,
  imagesGallery
}`;

const options = { next: { revalidate: 30 } };


export default async function IndexPage() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <div>
            <Navbar/>
            <main className=" mx-auto p-8 w-full h-full justify-between
">
                <div className="columns-1 sm:columns-2 lg:max-columns-3 gap-6">

                    {posts.map((post) => {
                        console.log(post.tags);

                        const slideshowImages = [];
                        if (post.image) {
                            slideshowImages.push(post.image);
                        }
                        if (post.imagesGallery && Array.isArray(post.imagesGallery)) {
                            const galleryImages = post.imagesGallery.filter(img => img._key !== post.image?._key);
                            slideshowImages.push(...galleryImages);
                        }

                        const renderExternalLinks = () => {
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
                            <div key={post._id} className="break-inside-avoid mb-6">
                                <article className="bg-white p-8 rounded-sm w-full">
                                    <div className="flex items-center gap-4 align-middle">
                                        <Link href={`/content/${post.slug.current}`} className="group">
                                            <h2 className="text-2xl font-bold mb-4 group-hover:underline">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <div className="text-3xl font-bold mb-8">{renderExternalLinks()}</div>
                                    </div>



                                    {post.tags && post.tags.length > 0 && (
                                        <div className="mb-4">
                                            {post.tags.map((tag: string, index: number) => (
                                                <span
                                                    key={`${tag}-${index}`}
                                                    className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                                                >
                                                {tag}
                                            </span>
                                            ))}
                                        </div>
                                    )}
                                    <p>{post.summary}</p>

                                    {slideshowImages.length > 0 && (
                                        <ImageSlideshow
                                            images={slideshowImages}
                                            className="hover:opacity-90 transition-opacity cursor-pointer"
                                        />
                                    )}
                                </article>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

