import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  Globe,
  Laptop,
  Mail,
  Menu,
  Monitor,
  Phone,
  ShieldAlert,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const ownerDetails = {
  name: "Himanshu Tiwari",
  email: "tiwarihimanshumfka@gmail.com",
  phone: "+919170769236",
  displayPhone: "+91 91707 69236",
  company: "Himanshu Computers",
  experience: "5+ years",
  clients: "500+",
};

const EMAILJS_SERVICE_ID = "service_fjxkl7x";
const EMAILJS_TEMPLATE_ID = "template_fohe65i";
const EMAILJS_PUBLIC_KEY = "hmlQ1NZ8VrDBWbM7I";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Computer repair",
    description: "Practical help with laptop and desktop problems, from slow performance to unexpected crashes.",
    icon: Laptop,
  },
  {
    title: "Diagnostics & setup",
    description: "Get your computer, operating system, and essential software set up the right way.",
    icon: Monitor,
  },
  {
    title: "Virus & security help",
    description: "Remove unwanted software and get guidance on keeping your device and accounts safer.",
    icon: ShieldAlert,
  },
  {
    title: "Data recovery",
    description: "Help locating and recovering important files from drives that have stopped behaving normally.",
    icon: Database,
  },
  {
    title: "Upgrades & tune-ups",
    description: "Improve everyday performance with considered hardware upgrades and system maintenance.",
    icon: Cpu,
  },
  {
    title: "Small business websites",
    description: "Clean, responsive websites that help local businesses present their services online.",
    icon: Globe,
  },
];

const faqs = [
  {
    question: "What kinds of devices do you work on?",
    answer: "Himanshu Computers supports laptops and desktop PCs, including common hardware, software, setup, and performance issues. Share your device details when you get in touch so we can confirm the right next step.",
  },
  {
    question: "Can you help remotely?",
    answer: "Yes, many software and setup issues can be handled remotely. Hardware repairs and some data recovery work need the device to be inspected in person.",
  },
  {
    question: "How long will a repair take?",
    answer: "Timing depends on the fault, the device, and whether parts are needed. After an initial diagnosis, you’ll get a clear idea of the next steps and expected timing.",
  },
  {
    question: "Will my files be safe?",
    answer: "Your files are treated with care. Tell us if you have important data before work begins, and we’ll discuss any relevant risks and backup options with you.",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState("idle");
  const [contactStatus, setContactStatus] = useState("idle");
  const [bookingError, setBookingError] = useState("");
  const [contactError, setContactError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (templateParams) => {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          ...templateParams,
          to_email: ownerDetails.email,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("The message could not be sent.");
    }
  };

  const handleBookingSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setBookingError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendEmail({
        from_name: formData.get("name"),
        reply_to: formData.get("phone"),
        request_type: "Slot Booking / Website Inquiry",
        date: formData.get("date"),
        time: formData.get("time"),
        message: formData.get("issue"),
      });
      setBookingStatus("success");
      form.reset();
    } catch {
      setBookingError("We couldn’t send your request. Please call or email us and we’ll be happy to help.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setContactError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendEmail({
        from_name: formData.get("name"),
        reply_to: formData.get("email"),
        request_type: "General Inquiry",
        date: "N/A",
        time: "N/A",
        message: formData.get("message"),
      });
      setContactStatus("success");
      form.reset();
    } catch {
      setContactError("We couldn’t send your message. Please call or email us and we’ll be happy to help.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Friendly computer support for home and business</span>
          <a href={"tel:" + ownerDetails.phone}>
            <Phone size={14} aria-hidden="true" />
            {ownerDetails.displayPhone}
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#home" aria-label="Himanshu Computers home" onClick={closeMobileMenu}>
            <span className="brand-mark"><Laptop size={21} strokeWidth={2.1} aria-hidden="true" /></span>
            <span className="brand-name">Himanshu <strong>Computers</strong></span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <a className="button button-primary nav-cta" href="#booking">
            Book a service <ArrowRight size={16} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMobileMenu}>{link.label}</a>
            ))}
            <a href="#booking" onClick={closeMobileMenu}>Book a service</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero section-anchor" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Personal, dependable tech support</p>
              <h1>Computer trouble?<br /><span>Let’s make it simple.</span></h1>
              <p className="hero-intro">
                From repairs and setup to safer, faster devices, get thoughtful computer support with clear advice at every step.
              </p>
              <div className="hero-actions">
                <a className="button button-primary button-large" href="#booking">
                  Tell us what you need <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-secondary button-large" href={"tel:" + ownerDetails.phone}>
                  <Phone size={17} aria-hidden="true" /> Call Himanshu
                </a>
              </div>
              <div className="hero-assurance">
                <span><CheckCircle2 size={16} aria-hidden="true" /> Clear, practical advice</span>
                <span><CheckCircle2 size={16} aria-hidden="true" /> Careful with your data</span>
                <span><CheckCircle2 size={16} aria-hidden="true" /> Remote or in-person help</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="support-window">
                <div className="window-bar">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span>Himanshu Computers</span>
                  <span className="window-status"><i /> Here to help</span>
                </div>
                <div className="window-body">
                  <div className="screen-label">YOUR LOCAL TECH SUPPORT</div>
                  <h2>Less downtime.<br />More peace of mind.</h2>
                  <p>Tell us what’s happening. We’ll help you find the right fix.</p>
                  <div className="screen-checklist">
                    <div><span className="check-icon"><CheckCircle2 size={17} /></span><span><strong>Clear diagnosis</strong><small>Understand the issue first</small></span><ChevronRight size={16} /></div>
                    <div><span className="check-icon"><Zap size={17} /></span><span><strong>Thoughtful repair</strong><small>Work explained in plain language</small></span><ChevronRight size={16} /></div>
                  </div>
                </div>
              </div>
              <div className="floating-service-card">
                <span className="floating-icon"><Wrench size={20} /></span>
                <span><strong>Here when tech gets tricky</strong><small>Friendly support, one step at a time</small></span>
              </div>
              <div className="visual-decoration decoration-one" />
              <div className="visual-decoration decoration-two" />
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Himanshu Computers experience">
          <div className="container trust-grid">
            <div><strong>{ownerDetails.experience}</strong><span>hands-on experience</span></div>
            <div><strong>{ownerDetails.clients}</strong><span>clients supported</span></div>
            <div><strong>One-to-one</strong><span>personal service</span></div>
            <div className="trust-note"><CheckCircle2 size={19} aria-hidden="true" /><span>Solutions that make sense for you</span></div>
          </div>
        </section>

        <section className="section services-section section-anchor" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">How we can help</p>
                <h2>Good tech should<br /><span>just work.</span></h2>
              </div>
              <p>Whether it’s one frustrating issue or a setup from scratch, get help that’s focused on what you need.</p>
            </div>
            <div className="services-grid">
              {services.map(({ title, description, icon: Icon }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">{<Icon size={22} strokeWidth={1.9} aria-hidden="true" />}</div>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#booking" className="text-link">Ask about this service <ArrowRight size={15} aria-hidden="true" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container process-layout">
            <div className="process-intro">
              <p className="eyebrow eyebrow-light">No guesswork</p>
              <h2>A straightforward<br />way to get help.</h2>
              <p>We’ll listen, explain the options, and agree on the next step together.</p>
              <a className="button button-light" href="#booking">Get started <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="process-steps">
              <article><span>01</span><div><h3>Tell us what’s going on</h3><p>Share the problem, device, and a time that works for you.</p></div></article>
              <article><span>02</span><div><h3>Get a clear diagnosis</h3><p>We’ll explain what we find and talk through practical options.</p></div></article>
              <article><span>03</span><div><h3>Get back to what matters</h3><p>Once you’re happy with the plan, we’ll take care of the fix.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section about-section section-anchor" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-mark"><Laptop size={42} strokeWidth={1.5} aria-hidden="true" /></div>
              <div className="about-caption"><span className="about-caption-icon"><CheckCircle2 size={19} /></span><span><strong>Personal attention</strong><small>Your request is handled with care</small></span></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">A little about us</p>
              <h2>Real help from<br /><span>a real person.</span></h2>
              <p>Himanshu Computers is led by Himanshu Tiwari, helping people and small businesses get more from their technology. The goal is simple: listen carefully, explain things clearly, and recommend work that fits your situation.</p>
              <p>Whether you need a computer back on its feet or a clean website for your business, you’ll get a direct point of contact from the first conversation.</p>
              <a className="text-link about-link" href="#contact">Meet your support contact <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section faq-section section-anchor" id="faqs">
          <div className="container faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">Helpful to know</p>
              <h2>Questions,<br /><span>answered.</span></h2>
              <p>Need to ask something else? We’re happy to talk it through.</p>
              <a className="text-link" href="#contact">Get in touch <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<ChevronRight size={19} aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-band section-anchor" id="booking">
          <div className="container booking-band-inner">
            <div>
              <p className="eyebrow eyebrow-light">Ready when you are</p>
              <h2>Let’s get your tech<br />back on track.</h2>
            </div>
            <div className="booking-band-actions">
              <p>Tell us a little about the issue and choose a convenient time. We’ll be in touch to confirm.</p>
              <a className="button button-light button-large" href="#booking-form">Book a service <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section contact-section section-anchor" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>We’re easy<br /><span>to reach.</span></h2>
              <p>Ask a question or tell us what’s not working. You’ll hear back from Himanshu directly.</p>
              <a className="contact-method" href={"tel:" + ownerDetails.phone}>
                <span className="contact-method-icon"><Phone size={19} aria-hidden="true" /></span>
                <span><small>Call us</small><strong>{ownerDetails.displayPhone}</strong></span>
              </a>
              <a className="contact-method" href={"mailto:" + ownerDetails.email}>
                <span className="contact-method-icon"><Mail size={19} aria-hidden="true" /></span>
                <span><small>Email</small><strong>{ownerDetails.email}</strong></span>
              </a>
            </div>
            <div className="contact-form-card">
              <div className="form-heading">
                <div><h3>Send a message</h3><p>We’ll get back to you as soon as we can.</p></div>
                <span className="form-heading-icon"><Mail size={20} aria-hidden="true" /></span>
              </div>
              {contactStatus === "success" ? (
                <div className="success-panel" role="status">
                  <CheckCircle2 size={36} aria-hidden="true" />
                  <h4>Thanks for getting in touch.</h4>
                  <p>Your message is on its way. We’ll reply soon.</p>
                  <button className="text-link" type="button" onClick={() => setContactStatus("idle")}>Send another message</button>
                </div>
              ) : (
                <form className="form-grid" onSubmit={handleContactSubmit}>
                  <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
                  <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                  <label className="field-full">How can we help?<textarea name="message" rows="5" placeholder="Tell us a little about what you need..." required /></label>
                  {contactError && <p className="form-error" role="alert">{contactError}</p>}
                  <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"} <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section booking-section section-anchor" id="booking-form">
          <div className="container booking-grid">
            <div className="booking-copy">
              <p className="eyebrow">Book a service</p>
              <h2>Tell us what<br /><span>you need.</span></h2>
              <p>Share a few details and a time that suits you. We’ll contact you to confirm the appointment and discuss the best next step.</p>
              <div className="booking-note"><Clock size={18} aria-hidden="true" /><span>Appointments are confirmed directly with you.</span></div>
            </div>
            <div className="booking-form-card">
              {bookingStatus === "success" ? (
                <div className="success-panel booking-success" role="status">
                  <CheckCircle2 size={42} aria-hidden="true" />
                  <h3>Request received.</h3>
                  <p>Thanks for reaching out. Himanshu will contact you to confirm a convenient time.</p>
                  <a className="button button-secondary" href={"tel:" + ownerDetails.phone}><Phone size={16} /> Call us directly</a>
                  <button className="text-link" type="button" onClick={() => setBookingStatus("idle")}>Make another booking request</button>
                </div>
              ) : (
                <form className="form-grid" onSubmit={handleBookingSubmit}>
                  <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
                  <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label>
                  <label>Date<span className="input-with-icon"><Calendar size={16} aria-hidden="true" /><input name="date" type="date" required /></span></label>
                  <label>Preferred time<span className="input-with-icon"><Clock size={16} aria-hidden="true" /><input name="time" type="time" required /></span></label>
                  <label className="field-full">What do you need help with?<textarea name="issue" rows="4" placeholder="Describe the problem or service you’re looking for..." required /></label>
                  {bookingError && <p className="form-error" role="alert">{bookingError}</p>}
                  <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending request..." : "Request an appointment"} <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><Laptop size={20} aria-hidden="true" /></span>
            <span className="brand-name">Himanshu <strong>Computers</strong></span>
          </a>
          <p>Friendly technology support, with a human touch.</p>
          <div className="footer-links">
            <a href="#services">Services</a><a href="#about">About</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Himanshu Computers</span>
          <a href={"mailto:" + ownerDetails.email}>{ownerDetails.email}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
