import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-2 mb-4 p-4 rounded-lg transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.metadata.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
                  {post.metadata.summary}
                </p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums text-sm mt-2 md:mt-0 md:text-right">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            {post.metadata.tags && Array.isArray(post.metadata.tags) && post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {post.metadata.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-xs rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
    </div>
  )
}
