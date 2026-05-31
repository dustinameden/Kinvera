import {
  ArrowRight,
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
  Star,
  Thermometer,
  Trash2,
  UserCheck,
  Wifi,
  Wrench
} from "lucide-react";

const howItWorks = [
  {
    icon: Home,
    title: "Tell us about your home",
    text: "Add your location, property type, access preferences, pets, plants, and the services you need."
  },
  {
    icon: UserCheck,
    title: "We match the right provider",
    text: "Kinvera connects your home with a trusted local care provider based on service needs, market, and availability."
  },
  {
    icon: Camera,
    title: "You get a visit report",
    text: "Every completed visit includes notes, timestamps, checklists, and photos so you know exactly what happened."
  },
  {
    icon: ShieldCheck,
    title: "You stay confident",
    text: "Whether you are at work, traveling, or managing a second home, your property is being looked after."
  }
];

const homeownerNeeds = [
  "I need my home checked while I am away.",
  "I need cleaning or turnover support.",
  "I need plants watered, mail collected, or trash handled.",
  "I need someone trustworthy to access my home.",
  "I need proof that everything was completed."
];

const services = [
  {
    icon: Home,
    title: "Home Watch",
    text: "Scheduled property checks, security confirmation, leak detection, temperature checks, mail collection, and photo reports."
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    text: "Routine cleaning, deep cleaning, move-in/out support, and vacation-home turnover cleaning."
  },
  {
    icon: Leaf,
    title: "Plant Care",
    text: "Watering, basic plant health checks, care notes, and vacation plant support."
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
  { icon: Paintbrush, title: "Interior Refresh" },
  { icon: Wrench, title: "Contractor Access" }
];

const providerSkills = [
  {
    skill: "Home Watch",
    demand: "High",
    pay: "$25–$45 / visit",
    upside: "Strong repeat demand from travelers and second-home owners."
  },
  {
    skill: "Cleaning",
    demand: "High",
    pay: "$25–$40 / hour",
    upside: "Higher tips and repeat bookings when reviews are strong."
  },
  {
    skill: "Plant Care",
    demand: "Medium",
    pay: "$15–$30 / visit",
    upside: "Great add-on service for customers already booking home checks."
  },
  {
    skill: "Trash & Recycling",
    demand: "Medium",
    pay: "$10–$25 / task",
    upside: "Simple recurring work with strong neighborhood density potential."
  },
  {
    skill: "Tech Support",
    demand: "Future",
    pay: "$35–$75 / visit",
    upside: "Premium add-on for smart locks, Wi‑Fi, cameras, and home devices."
  },
  {
    skill: "Car Care",
    demand: "Future",
    pay: "$40–$100 / service",
    upside: "Strong concierge add-on for busy homeowners and vacation homes."
  }
];

const markets = [
  {
    city: "Washington, DC",
    label: "Busy homes and apartments",
    text: "Support for renters, homeowners, professionals, travelers, condos, apartments, and townhomes."
  },
  {
    city: "Pittsburgh",
    label: "Everyday home support",
    text: "Reliable cleaning, trash support, home checks, seasonal help, and household coordination."
  },
  {
    city: "Rehoboth Beach",
    label: "Vacation home monitoring",
    text: "Second-home inspections, turnover cleaning, storm checks, package collection, and owner updates."
  },
  {
    city: "Puerto Vallarta",
    label: "Remote property confidence",
    text: "Home care visibility for vacation owners, renters, snowbirds, expats, and international travelers."
  }
];

const accessOptions = [
  {
    icon: LockKeyhole,
    title: "Smart lock",
    text: "Temporary access codes and scheduled visit windows."
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
    text: "A documented walkthrough when you are away.",
    items: ["Interior/exterior check", "Doors and windows verified", "Mail/packages collected", "Photo report sent"]
  },
  {
    name: "Kinvera Care",
    eyebrow: "Most popular",
    text: "Ongoing help with the home tasks that pile up.",
    items: ["Cleaning support", "Plant care", "Trash support", "Service notes"],
    featured: true
  },
  {
    name: "Kinvera Away",
    eyebrow: "Travel coverage",
    text: "Recurring care while you are out of town.",
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
          <a href="#homeowners">Homeowners & Renters</a>
          <a href="#services">Services</a>
          <a href="#security">Security</a>
          <a href="#skills">Skills & Pay</a>
          <a href="#providers">Care Providers</a>
        </nav>

        <a className="headerCta" href="#contact">Get Started</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="pill">
                <ShieldCheck size={16} />
                Trusted home care for homeowners, renters, and travelers
              </div>

              <h1>Join the Kinvera Network.</h1>

              <p>
                Kinvera connects homeowners, renters, and local care providers through
                trusted service, secure access, documented visits, and peace of mind.
              </p>

              <div className="heroActions">
                <a className="btn primary" href="#network">
                  Choose Your Path <ArrowRight size={18} />
                </a>
                <a className="btn secondary" href="#how">
                  How It Works
                </a>
              </div>

              <div className="proof">
                <div>
                  <strong>4</strong>
                  <span>Launch markets</span>
                </div>
                <div>
                  <strong>Vetted</strong>
                  <span>Members & providers</span>
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

        <section id="network" className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Choose your path</span>
              <h2>One network. Two ways to join.</h2>
              <p>
                Kinvera works because both sides of the network are built around trust:
                customers who need reliable home care and providers who want to deliver it.
              </p>
            </div>

            <div className="packageGrid">
              <article className="packageCard featured">
                <div className="badge">For homeowners & renters</div>
                <span className="packageEyebrow">I need help with my home</span>
                <h3>Join as a Home Member</h3>
                <p>
                  For homeowners, renters, travelers, and second-home owners who want
                  trusted help and documented peace of mind.
                </p>
                <ul>
                  <li><CheckCircle2 size={18} /> Home watch visits</li>
                  <li><CheckCircle2 size={18} /> Cleaning and turnover support</li>
                  <li><CheckCircle2 size={18} /> Plant care, mail, and trash support</li>
                  <li><CheckCircle2 size={18} /> Secure access and photo reports</li>
                </ul>
                <a className="btn primary full" href="#contact">
                  Join as a Home Member
                </a>
              </article>

              <article className="packageCard">
                <span className="packageEyebrow">I want to provide care</span>
                <h3>Join as a Care Provider</h3>
                <p>
                  For cleaners, home watchers, organizers, plant specialists, and
                  service professionals who want consistent work through Kinvera.
                </p>
                <ul>
                  <li><CheckCircle2 size={18} /> Join a trusted local network</li>
                  <li><CheckCircle2 size={18} /> Get matched with customer requests</li>
                  <li><CheckCircle2 size={18} /> Follow clear service standards</li>
                  <li><CheckCircle2 size={18} /> Build reputation over time</li>
                </ul>
                <a className="btn secondary full" href="#providers">
                  Become a Care Provider
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="homeowners" className="statement">
          <div className="container statementGrid">
            <div>
              <span className="kicker">For homeowners and renters</span>
              <h2>Home Members get a clearer way to care for their space.</h2>
            </div>
            <p>
              Kinvera is built for people who want their home cared for without chasing
              different vendors, texting neighbors, or wondering whether something was done.
              Whether you own, rent, travel often, or manage a second home, the network gives
              you a trusted way to request help and receive proof that the work was completed.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">What customers need</span>
              <h2>Start with the real homeowner questions.</h2>
              <p>
                The product should feel obvious because it is built around the moments
                when people actually need help.
              </p>
            </div>

            <div className="howGrid">
              {homeownerNeeds.map((need, index) => (
                <article className="howCard" key={need}>
                  <div className="stepNumber">{index + 1}</div>
                  <div className="iconBox"><CheckCircle2 size={24} /></div>
                  <h3>{need}</h3>
                  <p>Kinvera turns that need into a clear request, a trusted provider, and a documented result.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">How it works</span>
              <h2>A simple experience for customers. A structured system behind it.</h2>
              <p>
                Kinvera starts with a home profile, trusted access, and documented visits.
                That foundation can support cleaning, home watch, plant care, trash support,
                and future concierge services.
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

        <section id="services" className="section services">
          <div className="container">
            <div className="sectionHead">
              <span className="kicker">Services</span>
              <h2>Book the help your home needs most.</h2>
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
              <span>Future customer add-ons</span>
              {futureServices.map(({ icon: Icon, title }) => (
                <div key={title}><Icon size={17} /> {title}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="section security">
          <div className="container securityGrid">
            <div>
              <span className="kicker">Security and access</span>
              <h2>Your home. Your access rules. Clear documentation every time.</h2>
              <p>
                Customers choose how providers enter the property. Every completed visit
                should be logged, documented, and reviewable so the homeowner or renter
                never has to wonder what happened.
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

        <section className="section packages">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Simple ways to start</span>
              <h2>Pick the level of support that fits your home.</h2>
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
              <h2>Built for the places people live, rent, vacation, and leave behind.</h2>
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

        <section id="skills" className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Provider skills marketplace</span>
              <h2>What skills do you have?</h2>
              <p>
                Care Providers can join the Kinvera Network by selecting the services they are qualified to offer.
                Over time, Kinvera can show demand, estimated pay, reviews, tips, and repeat-booking potential by skill and market.
              </p>
            </div>

            <div className="serviceGrid">
              {providerSkills.map((item) => (
                <article className="serviceCard" key={item.skill}>
                  <div className="iconBox"><Star size={25} /></div>
                  <h3>{item.skill}</h3>
                  <p>{item.upside}</p>
                  <div className="securityChecklist skillStats">
                    <div><CheckCircle2 size={19} /> Demand: {item.demand}</div>
                    <div><CheckCircle2 size={19} /> Pay: {item.pay}</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="statement miniStatement">
              <div className="container statementGrid">
                <div>
                  <span className="kicker">How earning grows</span>
                  <h2>Better reviews should unlock better opportunities.</h2>
                </div>
                <p>
                  Kinvera can rank providers by reliability, customer reviews, completed visits, response time,
                  and tips. The goal is simple: great providers should earn more, receive more requests,
                  and build a trusted local reputation inside the network.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="providers" className="section providers">
          <div className="container providerGrid">
            <div>
              <span className="kicker">For future Kinvera care providers</span>
              <h2>Join a customer-first home care network.</h2>
              <p>
                Kinvera is for cleaners, home watchers, organizers, plant specialists,
                concierge providers, and property care professionals who want consistent work,
                clear expectations, visible demand, review-driven reputation, and a trusted brand behind them.
              </p>
              <a className="btn primary" href="#contact">
                Become a Care Provider <ChevronRight size={18} />
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
              <span className="kicker light">Join the network</span>
              <h2>Tell us which side of Kinvera you are joining.</h2>
              <p>
                Home Members join to request trusted care for their property.
                Care Providers join to deliver that care through Kinvera.
                Both sides help shape the future network.
              </p>
            </div>

            <form className="leadForm" name="kinvera-interest" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="kinvera-interest" />

              <label>
                I am interested in
                <select name="interest" defaultValue="home">
                  <option value="home">Joining as a Home Member</option>
                  <option value="provider">Joining as a Care Provider</option>
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
                Join the Kinvera Network
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
