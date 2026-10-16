import './ContactPage.css'

function ContactPage() {
  return (
    <section id="contact" className="page contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let’s connect</h1>
      </div>

      <div className="contact-grid">
        

        <form
          className="contact-form"
          action='https://formspree.io/f/mvkzdlyd'
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
