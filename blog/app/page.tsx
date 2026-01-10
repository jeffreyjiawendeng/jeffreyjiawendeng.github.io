export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        Hi! I&apos;m Jeff <span className="text-lg">:)</span>
      </p>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300">
        Welcome to my GitHub page!
      </p>

      {/* General Information Section */}
      <h2 className="mt-8 mb-4 text-xl font-semibold tracking-tight">
        General Information
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Academics</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- 3rd-year CS + Math + Honors @ UMass Amherst</li>
        <li>- Undergraduate Course Assistant (UCA): CS 383 Artificial Intelligence (Spring 2026)</li>
        <li>- Coursework: Artificial Intelligence, Machine Learning, Neural Networks, Natural Language Processing, Robotics</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Goals</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- Honors Thesis: develop Vision-Language-Action (VLA) models for multimodal reasoning driven manipulation and robust real-world task execution</li>
        <li>- Academic: pursue a PhD in CS/AI focused on developing state-of-the-art, multimodal models for embodied agents</li>
        <li>- Career: work in R&D on scalable, cutting-edge, multimodal AI systems for real-world applications</li>
        <li>- My ultimate goal is to build intelligent, general-purpose AI systems that advance us toward embodied AGI and deliver positive, real-world impact</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Interests</h3>
      <ul className="mb-8 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- AI: Machine Learning, Computer Vision, Natural Language Processing, Robotics</li>
        <li>- Math: I am currently learning Category Theory to pursue a more principled mathematical framework for AI</li>
      </ul>

      {/* Technical Skills Section */}
      <h2 className="mt-8 mb-4 text-xl font-semibold tracking-tight">
        Technical Skills
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Languages</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- Python, Java, C#</li>
        <li>- C, C++</li>
        <li>- JavaScript, TypeScript, HTML5, CSS3</li>
        <li>- SQL (MySQL, PostgreSQL), NoSQL (MongoDB)</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Machine Learning</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- PyTorch, TensorFlow, Keras</li>
        <li>- scikit-learn, XGBoost, CatBoost, LightGBM</li>
        <li>- NumPy, Pandas, SciPy, Matplotlib</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Computer Vision</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- OpenCV, Pillow (PIL)</li>
        <li>- torchvision, MMCV</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Natural Language Processing</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- Hugging Face Transformers/Datasets/Tokenizers</li>
        <li>- spaCy, NLTK</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Robotics & Simulation</h3>
      <ul className="mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- MuJoCo, Gazebo, Isaac Sim</li>
        <li>- Gymnasium, Stable-Baselines3</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">Other</h3>
      <ul className="mb-8 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- Node.js, Next.js, React</li>
        <li>- Unity, Unreal Engine</li>
        <li>- Git, GitHub</li>
        <li>- LaTeX (Overleaf)</li>
      </ul>

      {/* Misc Section */}
      <h2 className="mt-8 mb-4 text-xl font-semibold tracking-tight">
        Misc
      </h2>
      <ul className="mb-8 space-y-2 text-neutral-700 dark:text-neutral-300">
        <li>- I&apos;m a classically trained violinist, and I started playing at the age of 7.</li>
        <li>- I like Pokémon, and my favorite is Eevee! </li>
        <li>- I also like cats and video games.</li>
      </ul>

    </section>
  )
}
