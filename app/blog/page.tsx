import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import QueryPagination from '@/components/query-pagination';
import { sortPosts } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Follow the journey of a developer with insights, challenges, and triumphs in tech.',
}

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function BlogPage({searchParams}: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter(post => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">Follow the journey of a developer with insights, challenges, and triumphs in tech.</p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map(post => {
            const { slug, title, description, date } = post
            return (
              <li key={slug}>
                <PostItem slug={slug} title={title} description={description} date={date} />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet!</p>
      )}
      <QueryPagination totalPages={totalPages} className='justify-end mt-4' />
    </div>
  )
}
