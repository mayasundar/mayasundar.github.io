import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface PostMetaData{
    title: string;
    date: string;
    excerpt: string;

}

interface PostData extends PostMetaData{
    slug: string;
    content: string;
}

interface PostWithHTML extends PostData {
    contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), '/content');

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        };
    });
}

export function getPostData(slug: string): PostData {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const metadata = matterResult.data as Partial<PostMetaData>;

    return {
        slug,
        title: metadata.title ?? "Untitled",
        date: metadata.date ?? "Unknown",
        excerpt: metadata.excerpt ?? "",
        content: matterResult.content,
    };
}

export async function getPostWithHTML(slug:string):  Promise<PostWithHTML>{
    const post = getPostData(slug);
    const processedContent = await remark()
        .use(html)
        .process(post.content);

    const contentHtml = processedContent.toString();
    return {
        ...post,
        contentHtml
    };
}


export function getAllPosts(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        const metadata = matterResult.data as Partial<PostMetaData>;

        return {
            slug,
            title: metadata.title ?? "Untitled",
            date: metadata.date ?? "Unknown",
            excerpt: metadata.excerpt ?? "",
            content: matterResult.content,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}