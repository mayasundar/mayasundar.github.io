import { getPostWithHTML, getAllPostSlugs } from '../../../../../lib/markdown';

interface PageProps{
    params:{
        slug:string;
    };
}
type Params = Promise<{ slug: string }>;

export default async function Post({ params }: { params: Params }) {
    const { slug } = await params;
    const postData = await getPostWithHTML(slug);

    return (
        <div className="tbox">
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <div className="text-gray-600 mb-2">{postData.date}</div>
            <div className="text-gray-600 mb-8">{postData.excerpt}</div>

            <div
                className="article prose prose-lg max-w-none
                    [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-12 [&_h1]:mb-4
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3
                    [&_h4]:text-lg [&_h4]:font-bold [&_h4]:mt-6 [&_h4]:mb-3
                    [&_p]:mb-4 [&_p]:leading-relaxed
                    [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ul]:space-y-2
                    [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_ol]:space-y-2
                    [&_li]:leading-relaxed
                    [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:my-6 [&_blockquote]:italic
                    [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
                    [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-4
                "
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </div>
    );
}