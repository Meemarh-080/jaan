import './AboutPage.css'

function AboutPage() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'GitHub']

  return (
    <section id="about" className="page about-page">
      <div className="section-heading">
        <p className="eyebrow">About me</p>
        <h1>Front-end development</h1>
      </div>

      <div className="about-grid">
        <div className="info-card">
          <p>
            Hi, i'm Hapsat Muhammed, a tech enthusiast possionate about learning,
             creativity, and building amezing things with tecnolog. I'm always ready to learn,
             grow, and explore new opportunities.
            </p> 
        </div>

        <div className="info-card">
          <h3>What I am learning</h3>
          <p>
           I'm learning to build websites and create new things with code.
          </p>
        </div>
      </div>

      <div className="skills-wrap">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default AboutPage
