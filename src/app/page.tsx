import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import ProjectsGrid from "@/components/ProjectsGrid";

const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(priority asc, publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  summary,
  tags,
  priority,
  publishedAt, 
  image,
  externalLinks,
  imagesGallery
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return <ProjectsGrid posts={posts} />;
}