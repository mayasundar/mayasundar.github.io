import Link from 'next/link';
import { getAllPosts } from '../../../lib/markdown';
import ClientViewToggle from './/toggle';

export default function BlogPage({ searchParams }) {
    const isMini = searchParams?.mini === 'true';
    const posts = getAllPosts();

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Blog - {isMini ? 'Mini View' : 'Full Page View'}
            </h1>

            <div className="prose">
                <p>
                    This is the {isMini ? 'mini view of the blog, shown in the sidebar layout' : 'full standalone view of the blog'}.
                </p>
            </div>

            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.slug} className="border-b pb-4">
                        <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-100 p-2 rounded">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-sm text-gray-600">{post.date}</p>
                            {post.excerpt && <p className="mt-2">{post.excerpt}</p>}
                        </Link>
                    </li>
                ))}
            </ul>

            <ClientViewToggle isMini={isMini} />
        </div>
    );
}