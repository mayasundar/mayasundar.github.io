import { getPostWithHTML, getAllPostSlugs } from '../../../../../lib/markdown';

interface PageProps{
    params:{
        slug:string;
    };
}
export default async function Post({ params }: PageProps) {
    const { slug } = params;
    const postData = await getPostWithHTML(slug);

    return (
        <div className="tbox">
            <h1 className="">{postData.title}</h1>
            <div className="text-gray-600 mb-6">{postData.date}</div>
            <div className="article" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    );
}