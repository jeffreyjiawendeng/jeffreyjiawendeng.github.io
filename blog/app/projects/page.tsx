import { ProjectsGallery } from "app/components/projects-gallery"

export const metadata = {
  title: "Projects",
  description: "My projects.",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectsGallery />
    </section>
  )
}
