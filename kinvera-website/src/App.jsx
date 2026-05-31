import {
  ArrowRight,
  Car,
  Camera,
  CheckCircle2,
  Home,
  KeyRound,
  Laptop,
  Leaf,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Trash2,
  Users
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Watch",
    text: "Scheduled walkthroughs, security checks, mail/package collection, leak checks, and photo reports."
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    text: "Recurring, one-time, deep cleaning, move-in/move-out, and vacation home turnover support."
  },
  {
    icon: Leaf,
    title: "Plant Care",
    text: "Watering, basic plant health checks, and care notes while you're away."
  },
  {
    icon: Trash2,
    title: "Trash Support",
    text: "Trash day support, bin pull-out, bin return, and light household removal requests."
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    text: "Future concierge support for room refreshes, styling, decor, and seasonal setup."
  },
  {
    icon: Car,
    title: "Car Washing",
    text: "Future add-on for driveway car washes and detailing coordination."
  },
  {
    icon: Laptop,
    title: "Tech Support",
    text: "Future help with Wi-Fi, smart locks, cameras, TVs, printers, and home tech setup."
  }
];

const markets = ["Washington, DC", "Pittsburgh", "Rehoboth Beach", "Puerto Vallarta"];

const trustItems = [
  "Background-checked stewards",
  "Identity verification",
  "Insurance requirements",
  "Secure key access options",
  "Visit logs and photo reports",
  "Admin-reviewed service history"
];

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#top" aria-label="Kinvera home">
          <div className="brandIcon">
            <KeyRound size={21} />
          </div>
          <div>
            <div className="brandName">Kinvera</div>
            <div className="brandSub">Home Care Network</div>
          </div>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#trust">Trust</a>
          <a href="#locations">Locations</a>
          <a href="#stewards">Stewards</a>
        </nav>

        <a className="button small" href="#start">Get Started</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">
                <ShieldCheck size={16} />
                Trusted home care for busy owners and travelers
              </div>

              <h1>Your home deserves someone looking after it.</h1>

              <p className="heroText">
                Kinvera connects homeowners with trusted local Home Stewards for
                cleaning, home watch visits, plant care, trash support, secure
                access, and future concierge services.
              </p>

              <div className="actions">
                <a className="button" href="#start">
                  Care for My Home <ArrowRight size={18} />
                </a>
                <a className="button secondary" href="#stewards">
                  Become a Steward
                </a>
              </div>

              <div className="stats">
                <div>
                  <strong>4</strong>
                  <span>Launch markets</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Home confidence</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Visit visibility</span>
                </div>
              </div>
            </div>

            <div className="reportCard">
              <div className="reportTop">
                <div>
                  <div className="reportLabel">Visit Report</div>
                  <h2>Rehoboth Home Check</h2>
                </div>
                <Camera />
              </div>

              <div className="photoMock">
                <div className="sun" />
                <div className="house">
                  <div className="roof" />
                  <div className="homeBody" />
                  <div className="door" />
                </div>
              </div>

              <div className="checklist">
                {[
                  "Front door secured",
                  "No visible leaks",
                  "Mail collected",
                  "Plants watered",
                  "Photos uploaded"
                ].map((item) => (
                  <div className="checkItem" key={item}>
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="start" className="container splitCards">
          <div className="card">
            <Users size={36} />
            <h2>For homeowners</h2>
            <p>
              Create a Home Profile, choose services, set your access preferences,
              and receive documented reports after every visit.
            </p>
            <a className="button small" href="mailto:hello@kinvera.com?subject=Care%20for%20my%20home">
              Care for My Home
            </a>
          </div>

          <div className="card dark">
            <ShieldCheck size={36} />
            <h2>For Home Stewards</h2>
            <p>
              Apply to join Kinvera, complete trust and safety checks, list your
              skills, and get matched with homes that need care.
            </p>
            <a className="button light small" href="mailto:hello@kinvera.com?subject=Become%20a%20Kinvera%20Steward">
              Become a Steward
            </a>
          </div>
        </section>

        <section id="services" className="section white">
          <div className="container">
            <div className="sectionIntro">
              <span className="sectionKicker">Services</span>
              <h2>Start simple. Expand naturally.</h2>
              <p>
                Kinvera starts with the services people need most, then grows into
                the trusted home concierge network for everything else.
              </p>
            </div>

            <div className="serviceGrid">
              {services.map(({ icon: Icon, title, text }) => (
                <div className="serviceCard" key={title}>
                  <div className="serviceIcon">
                    <Icon size={24} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="container trustGrid">
          <div>
            <span className="sectionKicker">Trust & Access</span>
            <h2>Security is not an add-on. It is the product.</h2>
            <p>
              Homeowners can choose smart lock access, lockbox access, owner-present
              visits, or a future Kinvera Key Vault for secure key custody and
              chain-of-access logging.
            </p>
          </div>

          <div className="trustList">
            {trustItems.map((item) => (
              <div className="trustItem" key={item}>
                <ShieldCheck size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="locations" className="section darkSection">
          <div className="container">
            <div className="sectionIntro">
              <span className="sectionKicker muted">Launch Markets</span>
              <h2>Built for the places people live, visit, and leave behind.</h2>
            </div>

            <div className="marketGrid">
              {markets.map((market) => (
                <div className="marketCard" key={market}>
                  <MapPin />
                  <h3>{market}</h3>
                  <p>Local stewards. Local service. One Kinvera standard.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stewards" className="container stewardSection">
          <div className="stewardPanel">
            <div>
              <span className="sectionKicker">Kinvera Stewards</span>
              <h2>A better name for better service.</h2>
              <p>
                The people serving homes are not random gig workers. They are
                trusted Home Stewards: vetted, reviewed, documented, and matched
                to services they are qualified to perform.
              </p>
            </div>

            <div className="steps">
              {["Apply", "Verify", "Train", "Serve", "Build reputation"].map(
                (step, index) => (
                  <div className="step" key={step}>
                    <span>{index + 1}</span>
                    {step}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="container finalCta">
          <h2>Kinvera keeps home simple.</h2>
          <p>
            Start with cleaning, home watch, and plant care. Grow into the trusted
            operating system for every home someone cares about.
          </p>
          <div className="actions center">
            <a className="button light" href="mailto:hello@kinvera.com?subject=Care%20for%20my%20home">
              Care for My Home
            </a>
            <a className="button outline" href="mailto:hello@kinvera.com?subject=Become%20a%20Kinvera%20Steward">
              Become a Steward
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <strong>Kinvera</strong>
          <span>Home, looked after.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
