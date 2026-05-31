import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  DoorOpen,
  Home,
  KeyRound,
  Leaf,
  LockKeyhole,
  Mail,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Trash2,
  UserCheck,
  Users,
  Wifi,
  Wrench
} from "lucide-react";

const howItWorks = [
  {
    icon: Home,
    title: "Create your home profile",
    text: "Add the property, access preferences, emergency contacts, pets, plants, and the services you want."
  },
  {
    icon: UserCheck,
    title: "Get matched locally",
    text: "Kinvera connects your home with a trusted local care provider who fits your market and needs."
  },
  {
    icon: Camera,
    title: "Receive visit reports",
    text: "After every visit, you receive photos, notes, timestamps, and a simple checklist of what was completed."
  },
  {
    icon: ShieldCheck,
    title: "Know everything is handled",
    text: "Whether you are across town or across the world, your home has someone looking after it."
  }
];

const services = [
  {
    icon: Home,
    title: "Home Watch",
    text: "Scheduled property checks, security confirmation, leak detection, temperature checks, and photo reports."
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
    title: "Trash & Recycling",
    text: "Bin pull-out, bin return, trash day reminders, and light household removal support."
  }
];

const futureServices = [
  { icon: Wifi, title: "Tech Support" },
  { icon: Car, title: "Car Care" },
  { icon: Paintbrush, title: "Interior Design" },
  { icon: Wrench, title: "Contractor Access" }
];

const markets = [
  {
    city: "Washington, DC",
    label: "Busy primary residences",
    text: "Support for professionals, travelers, condo owners, townhomes, and recurring household care."
  },
  {
    city: "Pittsburgh",
    label: "Family homes and recurring care",
    text: "Reliable cleaning, trash support, home checks, seasonal needs, and household coordination."
  },
  {
    city: "Rehoboth Beach",
    label: "Vacation home monitoring",
    text: "Second-home inspections, turnover cleaning, storm checks, package collection, and owner updates."
  },
  {
    city: "Puerto Vallarta",
    label: "Remote property confidence",
    text: "Home care visibility for vacation owners, snowbirds, expats, and international travelers."
  }
];

const accessOptions = [
  {
    icon: LockKeyhole,
    title: "Smart lock",
    text: "Temporary access codes and scheduled windows."
  },
  {
    icon: KeyRound,
    title: "Lockbox",
    text: "Secure homeowner-controlled key access."
  },
  {
    icon: DoorOpen,
    title: "Owner present",
    text: "Meet your provider at the property."
  },
  {
    icon: ShieldCheck,
    title: "Kinvera Vault",
    text: "Future secure key custody and checkout logs."
  }
];

const packages = [
  {
    name: "Kinvera Check",
    eyebrow: "Peace of mind",
    text: "A documented home walkthrough when you are away.",
    items: ["Interior/exterior check", "Doors and windows verified", "Mail/packages collected", "Photo report sent"]
  },
  {
    name: "Kinvera Care",
    eyebrow: "Most popular",
    text: "Ongoing support for the home tasks that pile up.",
    items: ["Cleaning support", "Plant care", "Trash support", "Service notes"],
    featured: true
  },
  {
    name: "Kinvera Away",
    eyebrow: "Travel coverage",
    text: "Recurring home care while you are out of town.",
    items: ["Scheduled inspections", "Storm or issue checks", "Mail, plants, trash", "Priority alerts"]
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
          <a href="#homeowners">For Homeowners</a>
          <a href="#security">Security</a>
          <a href="#services">Services</a>
          <a href="#providers">For Providers</a>
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
                Trusted home care in DC, Pittsburgh, Rehoboth & Puerto Vallarta
              </div>

              <h1>Never wonder what’s happening at home again.</h1>

              <p>
                Kinvera gives homeowners a trusted second set of hands for home watch,
                cleaning, plant care, trash support, secure access, and documented visit reports.
              </p>

              <div className="heroActions">
                <a className="btn primary" href="#contact">
                  Care for My Home <ArrowRight size={18} />
                </a>
                <a className="btn secondary" href="#providers">
                  Join the Network
                </a>
              </div>

              <div className="proof">
                <div>
                  <strong>4</strong>
                  <span>Launch markets</span>
                </div>
                <div>
                  <strong>Vetted</strong>
                  <span>Care providers</span>
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
                  <div><Thermometer size={16} /> 72° inside</div>
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
                <LockKeyhole size={18} /> Access logged
              </div>
            </div>
          </div>
        </section>

        <section id="homeowners" className="statement">
          <div className="container statementGrid">
            <div>
              <span className="kicker">For homeowners</span>
              <h2>One trusted relationship for everything your home needs.</h2>
            </div>
            <p>
              Cleaning companies clean. Property managers manage rentals. Neighbors help when they can.
              Kinvera is different: a trusted home care network built around the actual anxiety homeowners have —
              “Is everything okay at the house?”
            </p>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">How it works</span>
              <h2>Simple for homeowners. Structured behind the scenes.</h2>
              <p>
                Kinvera starts with a home profile, trusted access, and documented visits.
                That foundation can support cleaning, home watch, plant care, trash support, and future concierge services.
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
              <h2>Access is the hardest part. Kinvera makes it the clearest part.</h2>
              <p>
                Every home has an access plan. Customers choose how providers enter the property,
                and every completed visit is logged, documented, and reviewable.
              </p>

              <div className="securityChecklist">
                <div><CheckCircle2 size={19} /> Time logged</div>
                <div><CheckCircle2 size={19} /> Provider assigned</div>
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
              <span className="kicker">Core services</span>
              <h2>Start with what homeowners already need.</h2>
              <p>
                Home watch is the anchor. Cleaning, plant care, and trash support become the natural first add-ons.
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
              <span>Future concierge add-ons</span>
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

        <section id="providers" className="section providers">
          <div className="container providerGrid">
            <div>
              <span className="kicker">For care providers</span>
              <h2>Join a trusted network built around better home service.</h2>
              <p>
                Kinvera is for cleaners, home watchers, organizers, plant specialists,
                concierge providers, and property care professionals who want consistent work
                through a trusted brand.
              </p>
              <a className="btn primary" href="#contact">
                Join the Network <ChevronRight size={18} />
              </a>
            </div>

            <div className="providerCards">
              {[
                ["Apply", "Share your skills, service area, availability, and experience."],
                ["Verify", "Complete identity, background, reference, and insurance review."],
                ["Train", "Learn Kinvera access rules, reporting standards, and service expectations."],
                ["Serve", "Accept work, complete visits, upload reports, and build reputation."]
              ].map(([title, text], index) => (
                <div className="providerStep" key={title}>
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
                Start with one home, one service, and one trusted visit. Early customers and care providers
                will help shape packages, pricing, training, and the future Kinvera app.
              </p>
            </div>

            <form className="leadForm" name="kinvera-interest" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="kinvera-interest" />

              <label>
                I am interested in
                <select name="interest" defaultValue="home">
                  <option value="home">Care for my home</option>
                  <option value="provider">Joining as a care provider</option>
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
