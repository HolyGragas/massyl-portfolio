
import './App.css'

const projects = [
  {
    number: '01',
    category: 'GENERATIVE AI · MASTER THESIS',
    title: 'Local LLM & RAG Chatbot',
    description:
      'A local AI assistant designed for university teaching, combining document retrieval with large language models to provide context-aware answers.',
    tags: ['Python', 'RAG', 'Ollama', 'Embeddings', 'Vector DB'],
    status: 'MASTER THESIS',
  },
  {
    number: '02',
    category: 'MACHINE LEARNING',
    title: 'Machine Learning Lab',
    description:
      'A space for machine learning experiments, model evaluation, and applied AI projects. More projects will be added as they are completed.',
    tags: ['Python', 'ML', 'Experiments'],
    status: 'MORE TO COME',
  },
]

const skills = [
  'Python',
  'Large Language Models',
  'Retrieval-Augmented Generation',
  'Ollama',
  'Embeddings',
  'Vector Databases',
  'Machine Learning',
  'Git & GitHub',
]

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home">
          MASSYL<span>.</span>AI
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's connect <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              ARTIFICIAL INTELLIGENCE · MACHINE LEARNING
            </div>

            <p className="eyebrow">HELLO, WORLD. I'M MASSYL.</p>

            <h1>
              Engineering
              <br />
              intelligence<span className="accent">.</span>
              <br />
              <span className="muted-heading">Building what's next.</span>
            </h1>

            <p className="hero-description">
              MSc Artificial Intelligence student focused on local LLMs,
              Retrieval-Augmented Generation, and building practical
              intelligent systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#about">
                Discover my story
              </a>
            </div>

            <div className="hero-footer">
              <span>BASED IN GERMANY</span>
              <span>INTERESTED IN AI ENGINEERING</span>
            </div>
          </div>

          <div className="visual-panel" aria-label="AI system illustration">
            <div className="visual-top">
              <span>SYSTEM_01</span>
              <span>INTELLIGENCE ENGINE</span>
            </div>

            <div className="orbital">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core">
                <span>AI</span>
              </div>
              <span className="orbit-point point-one" />
              <span className="orbit-point point-two" />
              <span className="orbit-point point-three" />
            </div>

            <div className="visual-caption">
              <div>
                <span className="caption-label">CURRENT FOCUS</span>
                <strong>Local AI Systems</strong>
              </div>
              <span className="live-label">
                <span className="status-dot" /> EXPLORING
              </span>
            </div>

            <div className="visual-grid" />
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <span>LOCAL LLMs</span>
          <span className="ticker-star">✳</span>
          <span>RETRIEVAL SYSTEMS</span>
          <span className="ticker-star">✳</span>
          <span>MACHINE LEARNING</span>
          <span className="ticker-star">✳</span>
          <span>GENERATIVE AI</span>
        </section>

        <section className="section content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span className="muted-heading">Engineer by ambition.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm an Artificial Intelligence master's student interested
              in turning research and emerging AI technologies into
              useful, real-world systems.
            </p>
            <p className="body-copy">
              My current focus is Retrieval-Augmented Generation and
              locally running large language models. Through my thesis,
              I'm exploring how AI can help university students access
              information from educational documents while keeping the
              system under local control.
            </p>
            <p className="body-copy">
              I'm building my skills in AI engineering, model integration,
              retrieval pipelines, and system evaluation, and looking
              forward to applying them to challenging projects.
            </p>
          </div>
        </section>

        <section className="section content-section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                Ideas into
                <br />
                <span className="muted-heading">intelligent systems.</span>
              </h2>
            </div>
            <span className="section-index">PROJECTS / 2026</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card-bottom">
                  <span>TECHNICAL PROJECT</span>
                  <span className="project-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">
            Project descriptions will be refined as implementation,
            testing, and evaluation progress.
          </p>
        </section>

        <section className="section content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">03 / TECHNICAL TOOLKIT</p>
            <h2>
              Tools for
              <br />
              <span className="muted-heading">building what's next.</span>
            </h2>
          </div>

          <div className="skills-content">
            <p className="body-copy">
              Technologies and concepts relevant to my studies and
              current AI work.
            </p>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-plus">↗</span>
                </div>
              ))}
            </div>
            <p className="project-note">
              This list is a starting point. We'll adjust it to reflect
              your actual experience and proficiency.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">04 / THE NEXT STEP</p>
            <h2>
              Let's build
              <br />
              something <span className="accent">intelligent.</span>
            </h2>
            <p className="contact-description">
              Interested in AI engineering, machine learning, or
              collaborating on an interesting project? Let's connect.
            </p>

            <a
              className="button button-primary"
              href="https://github.com/HolyGragas"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          MASSYL<span>.</span>AI
        </a>
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
