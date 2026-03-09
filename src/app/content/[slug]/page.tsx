import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import ImageSlideshow from "@/components/ImageSlideshow";

const POST_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const project = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
    const postImageUrl = project.image
        ? urlFor(project.image)?.width(550).height(310).quality(100).url()
        : null;

    const slideshowImages = [];
    if (project.image) {
        slideshowImages.push(project.image);
    }
    if (project.imagesGallery && Array.isArray(project.imagesGallery)) {
        const galleryImages = project.imagesGallery.filter(img => img._key !== project.image?._key);
        slideshowImages.push(...galleryImages);
    }

    const renderExternalLinks = () => {
        if (project.externalLinks && Array.isArray(project.externalLinks)){
            for (const link of project.externalLinks) {
                if (link){
                    return (
                        <a key={link._key} href={link.url} target="_blank" rel="noopener noreferrer" className="external-link tool website">
                            {link.label || link.url}
                        </a>
                    );

                }
            }
        }
        return null;
    }

    return (
        <main className=" mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/" className="hover:underline">
                ← Back to posts
            </Link>
            {postImageUrl && (
                <img
                    src={postImageUrl}
                    alt={project.title}
                    className="aspect-video rounded-xl"
                    width="550"
                    height="310"
                />
            )}
            <div className="flex items-center gap-4 align-middle">
                <div className="text-4xl font-bold mb-8">{project.title}</div>
                <div className="text-3xl font-bold mb-8">{renderExternalLinks()}</div>
            </div>
            <div className="prose">
                {Array.isArray(project.body) && <PortableText value={project.body} />}
            </div>

            {slideshowImages.length > 0 && (
                <ImageSlideshow
                    images={slideshowImages}
                    className="hover:opacity-90 transition-opacity cursor-pointer"
                />
            )}
        </main>
    );
}
