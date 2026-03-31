import './App.css'
import transparentLogo from './assets/transparent_logo.png'

function App() {
  const services = [
    {
      name: 'BBQ Clean + Repair',
      detail: 'Deep clean, tune-ups, and fixes to keep your grill happy.',
    },
    {
      name: 'Chimney Sweep',
      detail: 'Soot removal, safety checks, and cozy-season prep.',
    },
    {
      name: 'Dryer Vent Clean',
      detail: 'Lint clearing and airflow checks for safer laundry days.',
    },
    {
      name: 'Mosquito Magnet',
      detail: 'Seasonal setup and service to keep your yard comfy.',
    },
  ]

  const locations = [
    {
      name: 'Firefly Propane - Westchester',
      address: '980 N Broadway, Thornwood, NY 10594',
      phone: '(914) 769-3336',
    },
  ]

  const quickFacts = [
    'Office hours: Mon-Fri 9:00am-5:00pm',
    'Same-week appointments when available',
    'Email: barrie@fireflypropane.com',
    'Payment methods: card, cash, check',
  ]

  return (
    <>
      <div className="site-header">
        <img className="site-logo" src={transparentLogo} alt="Firefly Propane logo" />
        <img className="site-logo" src={transparentLogo} alt="Firefly Propane logo" />
      </div>
      <div className="page">
      <header className="hero">
        <div className="hero-banner">
          <span className="pill">We're currently re-making our website. New look, Same friendly crew!</span>
          <h1>
            <span className="headline-highlight">
              <span className="brand-fire">Firefly Propane</span>
              <span> new website is being made!</span>
            </span>
          </h1>
          <p className="lead">
            Our shiny new website is almost ready. For now, give us a quick call
            to book a service visit or ask a question.
          </p>
          <div className="cta">
            <a className="cta-button" href="tel:9147693336">
              Call (914) 769-3336
            </a>
            <div className="cta-meta">
              <span>Appointments and service support</span>
              <span>Mon-Fri 9:00am-5:00pm</span>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <h2>Quick info</h2>
            <ul className="fact-list">
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div className="panel-card accent">
            <h2>Heads up</h2>
            <p>
              If you smell gas or suspect a leak, leave the area and call 911
              right away.
            </p>
          </div>
        </div>
      </header>

      <section className="split-section">
        <div className="split-card">
          <h2>Service area</h2>
          <p>
            We currently serve Westchester and Lower Fairfield County. Ask about
            service outside the immediate area.
          </p>
          <div className="tag-row">
            <span>Westchester</span>
            <span>Lower Fairfield County</span>
            <span>Greenwich</span>
            <span>Stamford</span>
            <span>Norwalk</span>
            <span>Darien</span>
          </div>
        </div>
        <div className="split-card">
          <h2>Before you call</h2>
          <ul className="checklist">
            <li>Tell us which service you need.</li>
            <li>Have your address and best callback time ready.</li>
            <li>Ask about seasonal specials and bundles.</li>
          </ul>
        </div>
      </section>

      <section className="grid-section">
        <div className="section-header">
          <h2>Services</h2>
          <p>We keep things clean, safe, and running smoothly.</p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="info-card" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-section">
        <div className="section-header">
          <h2>Location</h2>
          <p>One friendly shop, right here in Westchester.</p>
        </div>
        <div className="card-grid">
          {locations.map((location) => (
            <article className="info-card" key={location.name}>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <p className="subtle">{location.phone}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          This cheerful placeholder keeps the essentials front and center. The
          full website is on the way.
        </p>
        <p className="subtle">Mailing: 980 N Broadway, Thornwood, NY 10594</p>
      </footer>
      </div>
    </>
  )
}

export default App
