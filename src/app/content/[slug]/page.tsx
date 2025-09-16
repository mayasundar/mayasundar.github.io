import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

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

    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/" className="hover:underline">
                ← Back to posts
            </Link>
            {/*{postImageUrl && (*/}
            {/*    <img*/}
            {/*        src={postImageUrl}*/}
            {/*        alt={project.title}*/}
            {/*        className="aspect-video rounded-xl"*/}
            {/*        width="550"*/}
            {/*        height="310"*/}
            {/*    />*/}
            {/*)}*/}
            <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
            <div className="prose">
                <p>Published: {new Date(project.publishedAt).toLocaleDateString()}</p>
                {Array.isArray(project.body) && <PortableText value={project.body} />}
            </div>

            {/* Image Gallery */}
            {project.imagesGallery && Array.isArray(project.imagesGallery) && project.imagesGallery.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.imagesGallery.map((image: any, index: number) => {
                            const imageUrl = urlFor(image)?.width(400).height(300).quality(100).url();
                            return imageUrl ? (
                                <div key={index} className="overflow-hidden rounded-lg">
                                    <Image
                                        src={imageUrl}
                                        alt={image.alt || `Gallery image ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            )}
        </main>
    );
}