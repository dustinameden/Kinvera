import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  DoorOpen,
  Flower2,
  Home,
  KeyRound,
  Leaf,
  LockKeyhole,
  Mail,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserCheck,
  Users,
  Wifi,
  Wrench
} from "lucide-react";

const howItWorks = [
  {
    icon: Home,
    title: "Create your home",
    text: "Tell us where your property is, how access should work, and what kind of support you need."
  },
  {
    icon: UserCheck,
    title: "Match with a trusted professional",
    text: "Kinvera connects you with vetted local providers who fit your service needs and location."
  },
  {
    icon: Camera,
    title: "Receive visit reports",
    text: "After every visit, you get photos, notes, timestamps, and a clear summary of what was completed."
  },
  {
    icon: ShieldCheck,
    title: "Relax",
    text: "Your home is cared for even when you are at work, traveling, or across the world."
  }
];

const services = [
  {
    icon: Home,
    title: "Home Watch",
    text: "Scheduled property checks, security confirmation, leak detection, mail collection, and photo reports."
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    text: "Routine cleaning, deep cleaning, move-in/out support, and vacation-home turnover cleaning."
  },
  {
    icon: Leaf,
    title: "Plant Care",
    text: "Watering, plant health checks, care notes, and vacation plant support."
  },
  {
    icon: Trash2,
    title: "Trash Support",
    text: "Trash day bin placement, return service, reminders, and light household removal requests."
  }
];

const futureServices = [
  { icon: Wifi, title: "Tech Support" },
  { icon: Car, title: "Car Care" },
  { icon: Paintbrush, title: "Interior Design" },
  { icon: Wrench, title: "Contractor Coordination" },
  { icon: Flower2, title: "Seasonal Setup" }
];

const markets = [
  {
    city: "Washington, DC",
    label: "Busy primary residences",
    text: "Home support for professionals, travelers, condo owners, and townhome owners."
  },
  {
    city: "Pittsburgh",
    label: "Family homes and recurring care",
    text: "Reliable cleaning, trash support, home checks, and household coordination."
  },
  {
    city: "Rehoboth Beach",
    label: "Vacation home monitoring",
    text: "Second-home inspections, turnover cleaning, storm checks, and owner updates."
  },
  {
    city: "Puerto Vallarta",
    label: "Remote property stewardship",
    text: "Peace of mind for vacation owners, snowbirds, expats, and international travelers."
  }
];

const accessOptions = [
  {
    icon: LockKeyhole,
    title: "Smart Locks",
    text: "Temporary codes and scheduled access windows."
  },
  {
    icon: KeyRound,
    title: "Lockboxes",
    text: "Secure owner-controlled key access."
  },
  {
    icon: DoorOpen,
    title: "Owner Present",
    text: "Meet your provider at the home."
  },
  {
    icon: ShieldCheck,
    title: "Kinvera Key Vault",
    text: "Future secure custody with access logs."
  }
];

const packages = [
  {
    name: "Kinvera Check",
    eyebrow: "Peace of mind visit",
    text: "A simple home walkthrough when you are away.",
    items: ["Interior/exterior check", "Doors and windows verified", "Mail/packages collected", "Photo report sent"]
  },
  {
    name: "Kinvera Care",
    eyebrow: "Ongoing household support",
    text: "The everyday home tasks that are easiest to fall behind on.",
    items: ["Cleaning support", "Plant care", "Trash support", "Service notes"],
    featured: true
  },
  {
    name: "Kinvera Away",
    eyebrow: "Extended travel coverage",
    text: "Scheduled home stewardship while you are out of town.",
    items: ["Recurring home checks", "Storm/issue checks", "Mail, plants, trash", "Priority alerts"]
  }
];

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Kinvera homepage">
          <span className="brandMark"><KeyRound size={21} /></span>
          <span>
            <strong>Kinvera</strong>
            <small>Home, looked after.</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#how">How It Works</a>
          <a href="#security">Security</a>
          <a href="#services">Services</a>
          <a href="#locations">Locations</a>
        </nav>

        <a className="headerCta" href="#contact">Request Access</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="pill">
                <ShieldCheck size={16} />
                Trusted home stewardship in four launch markets
              </div>

              <h1>Home, looked after.</h1>

              <p>
                Whether you're away for a weekend, a season, or half the year,
                Kinvera keeps an eye on the places you care about most.
              </p>

              <div className="heroActions">
                <a className="btn primary" href="#contact">
                  Care for My Home <ArrowRight size={18} />
                </a>
                <a className="btn secondary" href="#join">
                  Join Kinvera
                </a>
              </div>

              <div className="proof">
                <div>
                  <strong>4</strong>
                  <span>Launch markets</span>
                </div>
                <div>
                  <strong>Vetted</strong>
                  <span>Professionals</span>
                </div>
                <div>
                  <strong>Photo</strong>
                  <span>Visit reports</span>
                </div>
              </div>
            </div>

            <div className="heroVisual">
              <div className="visitCard">
                <div className="visitHeader">
                  <div>
                    <span>Visit report</span>
                    <h2>Rehoboth Home Check</h2>
                  </div>
                  <Camera size={28} />
                </div>

                <div className="scene">
                  <div className="moon" />
                  <div className="house">
                    <div className="roof" />
                    <div className="body" />
                    <div className="door" />
                    <div className="window w1" />
                    <div className="window w2" />
                  </div>
                  <div className="walkway" />
                </div>

                <div className="visitStats">
                  <div><Clock size={16} /> 22 min visit</div>
                  <div><BadgeCheck size={16} /> Access logged</div>
                </div>

                <div className="checkList">
                  {[
                    "Front door secured",
                    "No visible leaks",
                    "Mail collected",
                    "Plants watered",
                    "Photos uploaded"
                  ].map((item) => (
                    <div className="check" key={item}>
                      <CheckCircle2 size={19} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="floatingNote noteA">
                <Mail size={18} /> Report sent
              </div>
              <div className="floatingNote noteB">
                <LockKeyhole size={18} /> Keys handled
              </div>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="container statementGrid">
            <div>
              <span className="kicker">What Kinvera does</span>
              <h2>Not just cleaning. Home stewardship.</h2>
            </div>
            <p>
              Most service companies focus on one task. Kinvera brings trusted
              professionals together under one standard, one experience, and one
              relationship — so homeowners have someone reliable looking after
              the home.
            </p>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">How it works</span>
              <h2>The entire experience should feel simple.</h2>
              <p>
                Kinvera starts with a home profile, trusted access, and documented
                visits. Everything else grows from there.
              </p>
            </div>

            <div className="howGrid">
              {howItWorks.map(({ icon: Icon, title, text }, index) => (
                <article className="howCard" key={title}>
                  <div className="stepNumber">{index + 1}</div>
                  <div className="iconBox"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="section security">
          <div className="container securityGrid">
            <div>
              <span className="kicker">Your keys. Your rules.</span>
              <h2>Security is the product, not a footnote.</h2>
              <p>
                Homeowners choose how Kinvera professionals access the property.
                Every visit should be logged, documented, and easy to review.
              </p>

              <div className="securityChecklist">
                <div><CheckCircle2 size={19} /> Time logged</div>
                <div><CheckCircle2 size={19} /> Professional assigned</div>
                <div><CheckCircle2 size={19} /> Visit documented</div>
                <div><CheckCircle2 size={19} /> Photo confirmation</div>
              </div>
            </div>

            <div className="accessGrid">
              {accessOptions.map(({ icon: Icon, title, text }) => (
                <article className="accessCard" key={title}>
                  <Icon size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="sectionHead">
              <span className="kicker">Services</span>
              <h2>Start with the services homeowners already understand.</h2>
              <p>
                Home watch is the anchor. Cleaning, plant care, and trash support
                become the natural first add-ons.
              </p>
            </div>

            <div className="serviceGrid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="serviceCard" key={title}>
                  <div className="iconBox"><Icon size={25} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="futureServices">
              <span>Future concierge services</span>
              {futureServices.map(({ icon: Icon, title }) => (
                <div key={title}><Icon size={17} /> {title}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section packages">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Simple ways to start</span>
              <h2>Three packages. One clear promise.</h2>
            </div>

            <div className="packageGrid">
              {packages.map((pkg) => (
                <article className={pkg.featured ? "packageCard featured" : "packageCard"} key={pkg.name}>
                  {pkg.featured && <div className="badge">Best starting point</div>}
                  <span className="packageEyebrow">{pkg.eyebrow}</span>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.text}</p>
                  <ul>
                    {pkg.items.map((item) => (
                      <li key={item}><CheckCircle2 size={18} /> {item}</li>
                    ))}
                  </ul>
                  <a className={pkg.featured ? "btn primary full" : "btn secondary full"} href="#contact">
                    Request early access
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="section locations">
          <div className="container">
            <div className="sectionHead">
              <span className="kicker light">Launch markets</span>
              <h2>Built for the places people live, vacation, and leave behind.</h2>
            </div>

            <div className="marketGrid">
              {markets.map((market) => (
                <article className="marketCard" key={market.city}>
                  <MapPin size={25} />
                  <h3>{market.city}</h3>
                  <strong>{market.label}</strong>
                  <p>{market.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="section join">
          <div className="container joinGrid">
            <div>
              <span className="kicker">Join Kinvera</span>
              <h2>For trusted professionals who care about service.</h2>
              <p>
                Kinvera is for cleaners, home watchers, organizers, plant
                specialists, concierge providers, and property care experts who
                want consistent work through a trusted home stewardship brand.
              </p>
              <a className="btn primary" href="#contact">
                Apply to Join <ChevronRight size={18} />
              </a>
            </div>

            <div className="joinSteps">
              {[
                ["Apply", "Share your skills, service area, availability, and experience."],
                ["Verify", "Complete identity, background, reference, and insurance review."],
                ["Train", "Learn Kinvera access rules, reporting standards, and service expectations."],
                ["Serve", "Accept work, complete visits, upload reports, and build reputation."]
              ].map(([title, text], index) => (
                <div className="joinStep" key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contactCard">
            <div>
              <span className="kicker light">Early access</span>
              <h2>Help shape Kinvera’s first launch.</h2>
              <p>
                Start with one home, one service, and one trusted visit. Early
                customers and professionals will help shape packages, pricing,
                training, and the future Kinvera app.
              </p>
            </div>

            <form className="leadForm" name="kinvera-interest" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="kinvera-interest" />

              <label>
                I am interested in
                <select name="interest" defaultValue="home">
                  <option value="home">Care for my home</option>
                  <option value="join">Joining Kinvera</option>
                  <option value="both">Both</option>
                </select>
              </label>

              <label>
                Market
                <select name="market" defaultValue="Washington, DC">
                  {markets.map((market) => (
                    <option key={market.city} value={market.city}>{market.city}</option>
                  ))}
                </select>
              </label>

              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>

              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>

              <label className="wide">
                What do you need?
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Example: I travel often and need weekly home checks plus plant watering."
                />
              </label>

              <button className="btn formBtn full" type="submit">
                Request early access
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <a className="brand footerBrand" href="#top">
            <span className="brandMark"><KeyRound size={18} /></span>
            <span>
              <strong>Kinvera</strong>
              <small>Home, looked after.</small>
            </span>
          </a>
          <div className="footerText">
            DC · Pittsburgh · Rehoboth Beach · Puerto Vallarta
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
