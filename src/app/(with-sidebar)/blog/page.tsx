import Link from 'next/link';
import {getAllPosts} from '../../../../lib/markdown';
import SidebarInitializer from "@/components/SidebarInitializer";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <SidebarInitializer posts={posts} />

            <div className="p-8 max-w-4xl mx-auto">
            <h3>Blog ☺&#xFE0E;</h3>

            <div className="blog">
                {posts.map(post => (
                    <div key={post.slug} className="">
                        <Link href={`/blog/${post.slug}`} className="blog-block">
                            <div className="blog-item">
                                <div className="post-details">
                                    <p className=" post-title">{post.title}</p>
                                    {post.excerpt && (
                                        <p>{post.excerpt}</p>
                                    )}
                                </div>
                                <p>{post.date}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}