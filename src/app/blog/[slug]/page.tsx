import { getPostWithHTML, getAllPostSlugs } from '../../../../lib/markdown';

interface PostProps{
    params:{
        slug:string;
    };
}
export default async function Post({ params }: PostProps) {
    const postData = await getPostWithHTML(params.slug);

    return (
        <article className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
            <div className="text-gray-600 mb-6">{postData.date}</div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
}

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map(path => ({slug: path.params.slug}));
}