import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`
        Hello! I'm Jeffrey Deng, an aspiring AI Researcher and Engineer. 
        I'm interested in the intersection of Artificial Intelligence, 
        Machine Learning, Natural Language Processing, Computer Vision, 
        and Robotics, and my goal is to contribute to the development of 
        advanced multi-modal AI systems.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
