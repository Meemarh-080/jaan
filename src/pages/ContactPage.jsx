import './ContactPage.css'

function ContactPage() {
  return (
    <section id="contact" className="page contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let’s connect</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Contact details</h3>
          <p>Email: muhammaedhapsat20@gmail.com</p>
          <p>Role: Front-end Web Developer</p>
          <p>Learning and developing simple, modern websites.</p>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/muhammaedhapsat20@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_template" value="table" />

          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" placeholder="Write your message" required />
          </label>

          <button type="submit" className="primary-btn submit-btn">
            Send message
          </button>

        </form>
      </div>
    </section>
  )
}

export default ContactPage
