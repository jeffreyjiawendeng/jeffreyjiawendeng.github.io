import Link from "next/link"
import { getProjects } from "app/projects/utils"

export function ProjectsGallery() {
  let allProjects = getProjects()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-lg dark:hover:shadow-xl hover:shadow-neutral-200 dark:hover:shadow-neutral-800"
          >
            {project.metadata.image && (
              <div className="mb-4 overflow-hidden rounded h-40 bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.metadata.image}
                  alt={project.metadata.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            
            <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.metadata.title}
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
              {project.metadata.summary}
            </p>

            {project.metadata.tags && Array.isArray(project.metadata.tags) && project.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.metadata.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {new Date(project.metadata.publishedAt).toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
    </div>
  )
}
