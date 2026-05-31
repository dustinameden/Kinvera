import { useMemo, useState } from "react";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  DoorOpen,
  Home,
  Leaf,
  LockKeyhole,
  Mail,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Snowflake,
  Star,
  Thermometer,
  Trash2,
  UserCheck,
  Wifi,
  Wrench
} from "lucide-react";

const memberNeeds = [
  "I need my place checked while I am away.",
  "I need cleaning or turnover support.",
  "I need plants watered, mail collected, trash handled, or seasonal upkeep.",
  "I need someone trustworthy to access my home.",
  "I need proof that everything was completed."
];

const howItWorks = [
  {
    icon: Home,
    title: "Tell us about your place",
    text: "Add your location, property type, access preferences, pets, plants, and the services you need."
  },
  {
    icon: UserCheck,
    title: "We match the right provider",
    text: "Kinvera connects your request with a trusted local care provider based on service needs, market, and availability."
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
  },
  {
    icon: Leaf,
    title: "Lawn Care",
    text: "Grass cutting, light yard maintenance, and seasonal outdoor upkeep for homes and rentals."
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    text: "Walkway, steps, driveway, and entry clearing after winter weather."
  }
];

const futureServices = [
  { icon: Wifi, title: "Tech Support" },
  { icon: Paintbrush, title: "Interior Refresh" },
  { icon: Wrench, title: "Contractor Access" },
  { icon: Mail, title: "Package Management" }
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
    icon: ShieldCheck,
    title: "Lockbox",
    text: "Secure customer-controlled key access."
  },
  {
    icon: DoorOpen,
    title: "Owner or renter present",
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

const providerSkills = [
  {
    skill: "Home Watch",
    demand: "High",
    pay: "$25–$50 / visit",
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
    pay: "$15–$35 / visit",
    upside: "Great add-on service for customers already booking home checks."
  },
  {
    skill: "Trash & Recycling",
    demand: "High",
    pay: "$10–$25 / task",
    upside: "Simple recurring work with strong neighborhood density potential."
  },
  {
    skill: "Lawn Care",
    demand: "Seasonal",
    pay: "$30–$75 / visit",
    upside: "Strong spring and summer demand for members who need regular outdoor upkeep."
  },
  {
    skill: "Snow Removal",
    demand: "Seasonal",
    pay: "$25–$80 / visit",
    upside: "High urgency winter work, especially for steps, walkways, driveways, and rental properties."
  },
  {
    skill: "Pet Visits",
    demand: "Future",
    pay: "$20–$60 / visit",
    upside: "Natural add-on for members who travel frequently."
  },
  {
    skill: "Package Management",
    demand: "Future",
    pay: "$10–$25 / visit",
    upside: "Useful recurring support for apartments, condos, and second homes."
  }
];

const earningSkills = [
  {
    id: "homeWatch",
    title: "Home Watch",
    icon: Home,
    demand: 5,
    rate: 35,
    unit: "visit",
    weeklyUnitsAt10Hours: 5,
    description: "Property checks, doors, leaks, mail, and photo reports."
  },
  {
    id: "plantCare",
    title: "Plant Care",
    icon: Leaf,
    demand: 3,
    rate: 20,
    unit: "visit",
    weeklyUnitsAt10Hours: 3,
    description: "Watering, plant checks, and vacation support."
  },
  {
    id: "cleaning",
    title: "Cleaning",
    icon: Sparkles,
    demand: 4,
    rate: 120,
    unit: "job",
    weeklyUnitsAt10Hours: 1,
    description: "Routine cleaning, deep cleaning, and turnover support."
  },
  {
    id: "trash",
    title: "Trash Support",
    icon: Trash2,
    demand: 4,
    rate: 15,
    unit: "task",
    weeklyUnitsAt10Hours: 4,
    description: "Bin pull-out, bin return, and trash day support."
  },
  {
    id: "lawnCare",
    title: "Lawn Care",
    icon: Leaf,
    demand: 4,
    rate: 45,
    unit: "visit",
    weeklyUnitsAt10Hours: 2,
    description: "Grass cutting and light seasonal outdoor upkeep."
  },
  {
    id: "snowRemoval",
    title: "Snow Removal",
    icon: Snowflake,
    demand: 5,
    rate: 50,
    unit: "visit",
    weeklyUnitsAt10Hours: 2,
    description: "Walkway, steps, driveway, and entry clearing after winter weather."
  },
  {
    id: "petVisits",
    title: "Pet Visits",
    icon: ShieldCheck,
    demand: 3,
    rate: 25,
    unit: "visit",
    weeklyUnitsAt10Hours: 4,
    description: "Future add-on for members who travel frequently."
  }
];

const reputationMultipliers = {
  1: { label: "New Provider", multiplier: 1, tipBoost: 40, repeatBoost: 0 },
  2: { label: "Building Trust", multiplier: 1.08, tipBoost: 75, repeatBoost: 80 },
  3: { label: "Reliable Provider", multiplier: 1.18, tipBoost: 120, repeatBoost: 180 },
  4: { label: "Strong Reviews", multiplier: 1.32, tipBoost: 180, repeatBoost: 320 },
  5: { label: "Top Provider", multiplier: 1.52, tipBoost: 260, repeatBoost: 520 }
};

function App() {
  const [selectedSkills, setSelectedSkills] = useState(["homeWatch", "plantCare", "trash"]);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [reputation, setReputation] = useState(3);

  const selectedEarningSkills = earningSkills.filter((skill) => selectedSkills.includes(skill.id));
  const reputationModel = reputationMultipliers[reputation];

  const baseMonthlyEarnings = useMemo(() => {
    return selectedEarningSkills.reduce((total, skill) => {
      const weeklyUnits = skill.weeklyUnitsAt10Hours * (hoursPerWeek / 10);
      return total + weeklyUnits * skill.rate * 4;
    }, 0);
  }, [selectedEarningSkills, hoursPerWeek]);

  const projectedMonthlyEarnings = Math.round(baseMonthlyEarnings * reputationModel.multiplier);
  const topProviderPotential = Math.round(baseMonthlyEarnings * reputationMultipliers[5].multiplier);
  const estimatedTips = reputationModel.tipBoost;
  const estimatedRepeatBoost = reputationModel.repeatBoost;

  const toggleSkill = (skillId) => {
    setSelectedSkills((current) =>
      current.includes(skillId)
        ? current.filter((id) => id !== skillId)
        : [...current, skillId]
    );
  };

  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Kinvera homepage">
          <img
            src="/kinvera-logo.png"
            alt="Kinvera"
            style={{
              height: "52px",
              width: "52px",
              borderRadius: "18px",
              objectFit: "cover",
              boxShadow: "0 12px 26px rgba(34, 51, 40, 0.22)"
            }}
          />
          <span>
            <strong>KINVERA</strong>
            <small>Home, looked after.</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#membership">Membership</a>
          <a href="#services">Services</a>
          <a href="#security">Security</a>
          <a href="#earnings">Ways to Earn</a>
          <a href="#contact">Join</a>
        </nav>

        <a className="headerCta" href="#contact">Get Early Access</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="pill">
                <ShieldCheck size={16} />
                Trusted care for people who are not always home
              </div>

              <h1>Never wonder what&apos;s happening at home again.</h1>

              <p>
                Kinvera helps members get trusted care for their property, while giving local
                providers a clear way to earn through verified, documented service.
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
                  <strong>Members</strong>
                  <span>& providers</span>
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
                    <span>Kinvera Report</span>
                    <h2>Property Check Complete</h2>
                    <p style={{ margin: "10px 0 0", color: "#c9d3c8", fontWeight: 700 }}>
                      Rehoboth Beach, DE • May 28, 2026 • 11:42 AM
                    </p>
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "11px 15px",
                      borderRadius: "999px",
                      background: "#f4efe6",
                      color: "#223328",
                      fontWeight: 900,
                      whiteSpace: "nowrap"
                    }}
                  >
                    <CheckCircle2 size={18} />
                    Visit Complete
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                    padding: "24px 24px 16px"
                  }}
                >
                  <div
                    style={{
                      minHeight: "190px",
                      borderRadius: "28px",
                      overflow: "hidden",
                      background:
                        "linear-gradient(135deg, rgba(34,51,40,0.82), rgba(34,51,40,0.22)), linear-gradient(160deg, #d9c9ae 0%, #f6efe2 48%, #4a392d 49%, #2d241f 56%, #efe6d6 57%)",
                      position: "relative",
                      border: "1px solid #e7dfd5"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        padding: "8px 10px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.86)",
                        color: "#223328",
                        fontSize: "13px",
                        fontWeight: 900
                      }}
                    >
                      Front Door Photo
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "38%",
                        bottom: "0",
                        width: "54px",
                        height: "84px",
                        borderRadius: "14px 14px 0 0",
                        background: "#223328"
                      }}
                    />
                  </div>

                  <div
                    style={{
                      minHeight: "190px",
                      borderRadius: "28px",
                      overflow: "hidden",
                      background:
                        "radial-gradient(circle at 50% 42%, #ffffff 0%, #ffffff 22%, #ece7dd 23%, #ece7dd 45%, #d9d0c2 46%, #bfb3a3 100%)",
                      position: "relative",
                      border: "1px solid #e7dfd5"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        padding: "8px 10px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.9)",
                        color: "#223328",
                        fontSize: "13px",
                        fontWeight: 900
                      }}
                    >
                      Thermostat Photo
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        inset: "0",
                        display: "grid",
                        placeItems: "center",
                        color: "#223328",
                        fontSize: "46px",
                        fontWeight: 950,
                        letterSpacing: "-0.06em"
                      }}
                    >
                      72°
                    </div>
                  </div>
                </div>

                <div className="visitStats">
                  <div><Clock size={16} /> 22 min visit</div>
                  <div><Thermometer size={16} /> 72° inside</div>
                </div>

                <div className="visitStats">
                  <div><Camera size={16} /> 8 photos uploaded</div>
                  <div><LockKeyhole size={16} /> Access logged</div>
                </div>

                <div className="checkList">
                  {[
                    "Front door secured",
                    "Mail collected",
                    "Plants watered",
                    "No visible leaks",
                    "Member notified"
                  ].map((item) => (
                    <div className="check" key={item}>
                      <CheckCircle2 size={19} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    margin: "0 24px 24px",
                    padding: "16px",
                    border: "1px solid #eee8de",
                    borderRadius: "22px",
                    background: "#fbfaf7"
                  }}
                >
                  <div>
                    <div style={{ color: "#91877d", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      Completed by
                    </div>
                    <div style={{ marginTop: "4px", fontWeight: 950, fontSize: "18px" }}>
                      Sarah M. • Kinvera Verified Provider
                    </div>
                  </div>
                  <div style={{ color: "#d6a94f", fontWeight: 950, whiteSpace: "nowrap" }}>
                    ★★★★★ 4.9
                  </div>
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
                members who need reliable property care and providers who want to deliver it.
              </p>
            </div>

            <div className="packageGrid">
              <article className="packageCard featured">
                <div className="badge">For people who need care</div>
                <span className="packageEyebrow">I need help with my home</span>
                <h3>Explore Membership</h3>
                <p>
                  For renters, homeowners, travelers, second-home owners, and anyone who wants
                  trusted help and documented peace of mind.
                </p>
                <ul>
                  <li><CheckCircle2 size={18} /> Home watch visits</li>
                  <li><CheckCircle2 size={18} /> Cleaning and turnover support</li>
                  <li><CheckCircle2 size={18} /> Plant care, mail, trash, lawn, and snow support</li>
                  <li><CheckCircle2 size={18} /> Secure access and photo reports</li>
                </ul>
                <a className="btn primary full" href="#membership">
                  See Member Benefits
                </a>
              </article>

              <article className="packageCard">
                <span className="packageEyebrow">I want to provide care</span>
                <h3>Become a Provider</h3>
                <p>
                  For cleaners, home watchers, organizers, plant specialists, lawn/snow helpers,
                  and service professionals who want consistent work through Kinvera.
                </p>
                <ul>
                  <li><CheckCircle2 size={18} /> Join a trusted local network</li>
                  <li><CheckCircle2 size={18} /> Get matched with member requests</li>
                  <li><CheckCircle2 size={18} /> Follow clear service standards</li>
                  <li><CheckCircle2 size={18} /> Build reputation over time</li>
                </ul>
                <a className="btn secondary full" href="#earnings">
                  See Ways to Earn
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="membership" className="statement">
          <div className="container statementGrid">
            <div>
              <span className="kicker">Membership</span>
              <h2>For people who are not always home.</h2>
            </div>
            <p>
              Whether you rent, own, travel frequently, or manage a second property,
              Kinvera helps you stay connected to your space through trusted local help,
              secure access, photo reports, and clear documentation.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Why members use Kinvera</span>
              <h2>The real reason people use Kinvera.</h2>
              <p>
                Members are not just buying tasks. They are buying trust, visibility,
                and confidence that their home is being cared for.
              </p>
            </div>

            <div className="howGrid">
              {memberNeeds.map((need, index) => (
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

        <section id="services" className="section services">
          <div className="container">
            <div className="sectionHead">
              <span className="kicker">Services</span>
              <h2>Book the help your place needs most.</h2>
              <p>
                Home watch is the anchor. Cleaning, plant care, trash support,
                lawn care, and snow removal become natural first add-ons.
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
              <span>Future member add-ons</span>
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
              <h2>Trust comes before service.</h2>
              <p>
                Members choose how providers enter the property. Every completed visit is logged,
                documented, and reviewable so you never have to wonder what happened.
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

        <section id="how" className="section">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">How it works</span>
              <h2>A simple experience for members. A structured system behind it.</h2>
              <p>
                Kinvera starts with a property profile, trusted access, and documented visits.
                That foundation supports home watch, cleaning, plant care, trash support,
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

        <section className="section packages">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Simple ways to start</span>
              <h2>Pick the level of support that fits your space.</h2>
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

        <section id="earnings" className="section earnings">
          <div className="container">
            <div className="sectionHead center">
              <span className="kicker">Ways to earn</span>
              <h2>Could Kinvera fit into your life?</h2>
              <p>
                Choose the services you would enjoy doing, set your weekly availability,
                and see how reviews, tips, and repeat members can influence earning potential.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.05fr 0.95fr",
                gap: "24px",
                alignItems: "stretch"
              }}
            >
              <div
                style={{
                  padding: "30px",
                  border: "1px solid #e7dfd5",
                  borderRadius: "36px",
                  background: "#ffffff",
                  boxShadow: "0 12px 34px rgba(24, 21, 18, 0.055)"
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span className="kicker">Select services</span>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "34px",
                      lineHeight: 1,
                      letterSpacing: "-0.055em"
                    }}
                  >
                    What would you enjoy doing?
                  </h3>
                  <p style={{ margin: 0, color: "#655f58", lineHeight: 1.65 }}>
                    Pick the skills you already have or services you would be willing to learn.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                    marginBottom: "26px"
                  }}
                >
                  {earningSkills.map(({ id, title, icon: Icon, demand, rate, unit, description }) => {
                    const isSelected = selectedSkills.includes(id);

                    return (
                      <button
                        type="button"
                        key={id}
                        onClick={() => toggleSkill(id)}
                        style={{
                          textAlign: "left",
                          padding: "18px",
                          border: isSelected ? "2px solid #223328" : "1px solid #e7dfd5",
                          borderRadius: "24px",
                          background: isSelected ? "#f4efe6" : "#fbfaf7",
                          cursor: "pointer",
                          boxShadow: isSelected ? "0 14px 28px rgba(34, 51, 40, 0.12)" : "none"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "12px",
                            alignItems: "flex-start",
                            marginBottom: "18px"
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              placeItems: "center",
                              width: "48px",
                              height: "48px",
                              borderRadius: "18px",
                              color: "#223328",
                              background: "#ffffff"
                            }}
                          >
                            <Icon size={23} />
                          </div>

                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              color: isSelected ? "#223328" : "#91877d",
                              fontWeight: 950
                            }}
                          >
                            {isSelected ? <CheckCircle2 size={18} /> : null}
                            {isSelected ? "Selected" : "Add"}
                          </div>
                        </div>

                        <h4
                          style={{
                            margin: "0 0 7px",
                            fontSize: "21px",
                            letterSpacing: "-0.04em"
                          }}
                        >
                          {title}
                        </h4>

                        <p style={{ margin: "0 0 14px", color: "#655f58", lineHeight: 1.45, fontSize: "14px" }}>
                          {description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "12px",
                            alignItems: "center",
                            paddingTop: "14px",
                            borderTop: "1px solid #e7dfd5"
                          }}
                        >
                          <span style={{ color: "#d6a94f", fontWeight: 950 }}>
                            {"🔥".repeat(demand)}
                          </span>
                          <strong style={{ color: "#223328" }}>
                            Provider earns ~${rate} / {unit}
                          </strong>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px"
                  }}
                >
                  <div
                    style={{
                      padding: "18px",
                      border: "1px solid #e7dfd5",
                      borderRadius: "22px",
                      background: "#fbfaf7"
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        color: "#655f58",
                        fontSize: "13px",
                        fontWeight: 950,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase"
                      }}
                    >
                      Hours per week
                    </label>
                    <select
                      value={hoursPerWeek}
                      onChange={(event) => setHoursPerWeek(Number(event.target.value))}
                      style={{
                        width: "100%",
                        padding: "14px",
                        border: "1px solid #e7dfd5",
                        borderRadius: "16px",
                        background: "#ffffff",
                        color: "#181512",
                        fontWeight: 900
                      }}
                    >
                      <option value={5}>5 hours / week</option>
                      <option value={10}>10 hours / week</option>
                      <option value={15}>15 hours / week</option>
                      <option value={20}>20 hours / week</option>
                    </select>
                  </div>

                  <div
                    style={{
                      padding: "18px",
                      border: "1px solid #e7dfd5",
                      borderRadius: "22px",
                      background: "#fbfaf7"
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        color: "#655f58",
                        fontSize: "13px",
                        fontWeight: 950,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase"
                      }}
                    >
                      Market
                    </label>
                    <select
                      defaultValue="Rehoboth Beach"
                      style={{
                        width: "100%",
                        padding: "14px",
                        border: "1px solid #e7dfd5",
                        borderRadius: "16px",
                        background: "#ffffff",
                        color: "#181512",
                        fontWeight: 900
                      }}
                    >
                      <option>Washington, DC</option>
                      <option>Pittsburgh</option>
                      <option>Rehoboth Beach</option>
                      <option>Puerto Vallarta</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "30px",
                  borderRadius: "36px",
                  color: "#fbfaf7",
                  background:
                    "radial-gradient(circle at 10% 0%, rgba(214, 169, 79, 0.28), transparent 35%), linear-gradient(135deg, #223328, #151c17)",
                  boxShadow: "0 24px 80px rgba(24, 21, 18, 0.14)"
                }}
              >
                <span className="kicker light">For care providers</span>
                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#fbfaf7",
                    fontSize: "clamp(62px, 8vw, 96px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.07em"
                  }}
                >
                  ${projectedMonthlyEarnings.toLocaleString()}
                </h3>
                <p style={{ color: "#ddd8ce", lineHeight: 1.65, marginBottom: "24px" }}>
                  Estimated monthly provider income based on selected services, part-time availability,
                  and provider reputation.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "10px",
                    marginBottom: "24px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "14px",
                      padding: "14px",
                      border: "1px solid rgba(244, 239, 230, 0.14)",
                      borderRadius: "18px",
                      background: "rgba(255, 255, 255, 0.08)",
                      fontWeight: 850
                    }}
                  >
                    <span>Base monthly estimate</span>
                    <strong>${Math.round(baseMonthlyEarnings).toLocaleString()}</strong>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "14px",
                      padding: "14px",
                      border: "1px solid rgba(244, 239, 230, 0.14)",
                      borderRadius: "18px",
                      background: "rgba(255, 255, 255, 0.08)",
                      fontWeight: 850
                    }}
                  >
                    <span>Estimated tips</span>
                    <strong>+${estimatedTips.toLocaleString()}</strong>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "14px",
                      padding: "14px",
                      border: "1px solid rgba(244, 239, 230, 0.14)",
                      borderRadius: "18px",
                      background: "rgba(255, 255, 255, 0.08)",
                      fontWeight: 850
                    }}
                  >
                    <span>Repeat-member upside</span>
                    <strong>+${estimatedRepeatBoost.toLocaleString()}</strong>
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "24px",
                    padding: "18px",
                    borderRadius: "22px",
                    background: "rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <h4 style={{ margin: "0 0 12px", color: "#f6dfaa", fontSize: "20px" }}>
                    Review influence
                  </h4>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 1fr)",
                      gap: "8px",
                      marginBottom: "14px"
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((score) => (
                      <button
                        type="button"
                        key={score}
                        onClick={() => setReputation(score)}
                        style={{
                          padding: "10px 0",
                          border: reputation === score ? "2px solid #f6dfaa" : "1px solid rgba(244, 239, 230, 0.18)",
                          borderRadius: "14px",
                          background: reputation === score ? "rgba(246, 223, 170, 0.14)" : "rgba(255,255,255,0.06)",
                          color: "#f6dfaa",
                          cursor: "pointer",
                          fontSize: "18px",
                          fontWeight: 950
                        }}
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <div style={{ color: "#fbfaf7", fontWeight: 950 }}>
                    {reputationModel.label}
                  </div>
                  <p style={{ margin: "6px 0 0", color: "#ddd8ce", fontSize: "15px", lineHeight: 1.55 }}>
                    Better reviews should lead to more requests, repeat members, stronger tips,
                    and higher earning potential.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    marginBottom: "24px"
                  }}
                >
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.08)"
                    }}
                  >
                    <div style={{ color: "#f6dfaa", fontWeight: 950, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      Strong reviews
                    </div>
                    <strong style={{ display: "block", marginTop: "8px", fontSize: "24px" }}>
                      ${projectedMonthlyEarnings.toLocaleString()}
                    </strong>
                  </div>

                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.08)"
                    }}
                  >
                    <div style={{ color: "#f6dfaa", fontWeight: 950, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      Top providers
                    </div>
                    <strong style={{ display: "block", marginTop: "8px", fontSize: "24px" }}>
                      ${topProviderPotential.toLocaleString()}+
                    </strong>
                  </div>
                </div>

                <a className="btn primary full" href="#contact">
                  Apply to Join Kinvera
                </a>
              </div>
            </div>

            <div className="serviceGrid" style={{ marginTop: "28px" }}>
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
          </div>
        </section>

        <section id="providers" className="section providers">
          <div className="container providerGrid">
            <div>
              <span className="kicker">For care providers</span>
              <h2>Earn by becoming someone members can trust.</h2>
              <p>
                Kinvera is for cleaners, home watchers, organizers, plant specialists,
                lawn/snow helpers, concierge providers, and property care professionals who want flexible work,
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

        <section id="locations" className="section locations">
          <div className="container">
            <div className="sectionHead">
              <span className="kicker light">Launch markets</span>
              <h2>Now accepting early members and care providers.</h2>
            </div>

            <div className="marketGrid">
              {markets.map((market) => (
                <article className="marketCard" key={market.city}>
                  <MapPin size={25} />
                  <h3>{market.city}</h3>
                  <strong>{market.label}</strong>
                  <p>{market.text}</p>
                  <p style={{ color: "#f6dfaa", fontWeight: 900, marginTop: "18px" }}>
                    Now accepting members and providers
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contactCard">
            <div>
              <span className="kicker light">Get early access</span>
              <h2>Join the Kinvera Network.</h2>
              <p>
                Members join to request trusted care for their property.
                Care Providers join to deliver that care through Kinvera.
                Early members and providers will help shape the network before launch.
              </p>
            </div>

            <form className="leadForm" name="kinvera-interest" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="kinvera-interest" />

              <label>
                I am interested in
                <select name="interest" defaultValue="member">
                  <option value="member">Joining as a Member</option>
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
                What do you need or provide?
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
            <img
              src="/kinvera-logo.png"
              alt="Kinvera"
              style={{
                height: "42px",
                width: "42px",
                borderRadius: "15px",
                objectFit: "cover"
              }}
            />
            <span>
              <strong>KINVERA</strong>
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
