import './HomePage.css'

function HomePage() {
  return (
    <section id="home" className="page hero-page">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I am</p>
        <h1>
          <span className="name-highlight">Hapsat</span> Muhammed
        </h1>
        <h2>Front-end Web Developer</h2>
        <p>
          I am learning and growing as a front-end developer, building simple,
          clean, and user-friendly websites with HTML, CSS, and React.
        </p>
        <div className="cta-row">
          <a href="/about" className="primary-btn">
            About me
          </a>
          <a href="/contact" className="secondary-btn">
            Contact
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="mini-badge">Learning & building</div>
        <div className="profile-ring">
          <div className="profile-inner">HM</div>
        </div>
        <ul>
          <li>
            <span>Skills</span>
            <strong>HTML, CSS, React</strong>
          </li>
          <li>
            <span>Focus</span>
            <strong>Simple websites</strong>
          </li>
          <li>
            <span>Goal</span>
            <strong>Grow as a developer</strong>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HomePage
