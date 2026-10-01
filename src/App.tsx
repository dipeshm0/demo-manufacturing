import { useEffect, useState, type FormEvent, type ReactNode } from "react"

const photos = {
  hero: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1800&q=85",
  factory:
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=1200&q=85",
  engineering:
    "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1100&q=85",
  component:
    "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=1000&q=85",
  machinery:
    "https://images.unsplash.com/photo-1717386255767-52643970d483?w=1000&q=85",
  custom:
    "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?w=1000&q=85",
  equipment:
    "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?w=1000&q=85",
  fabricated:
    "https://images.unsplash.com/photo-1740209475472-aa7d280f7452?w=1000&q=85",
  assembly:
    "https://images.unsplash.com/photo-1701328778019-e95dedbf5346?w=1000&q=85",
  process:
    "https://images.unsplash.com/photo-1711418235334-8895331a6cf9?w=1100&q=85",
  robot:
    "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?w=1000&q=85",
  textile:
    "https://images.unsplash.com/photo-1610891015188-5369212db097?w=1000&q=85",
}

const products = [
  {
    name: "Precision Components",
    category: "COMPONENTS",
    desc: "Engineered parts made for accuracy, consistency and demanding applications.",
    image: photos.component,
  },
  {
    name: "Industrial Machinery",
    category: "MACHINERY",
    desc: "Dependable equipment designed to support efficient production operations.",
    image: photos.machinery,
  },
  {
    name: "Custom Solutions",
    category: "CUSTOM PRODUCTION",
    desc: "Purpose-built manufacturing solutions shaped around your requirements.",
    image: photos.custom,
  },
  {
    name: "Manufacturing Equipment",
    category: "EQUIPMENT",
    desc: "Practical equipment solutions for evolving industrial environments.",
    image: photos.equipment,
  },
  {
    name: "Fabricated Products",
    category: "FABRICATION",
    desc: "Quality-focused fabricated solutions for a wide range of end uses.",
    image: photos.fabricated,
  },
  {
    name: "Industrial Assemblies",
    category: "ASSEMBLIES",
    desc: "Integrated assemblies developed with performance and reliability in mind.",
    image: photos.assembly,
  },
]

const industries = [
  {
    name: "Automotive",
    desc: "Built for performance-driven supply chains.",
    image: photos.robot,
  },
  {
    name: "Engineering",
    desc: "Supporting complex technical requirements.",
    image: photos.engineering,
  },
  {
    name: "Food & Processing",
    desc: "Solutions for productive operations.",
    image: photos.equipment,
  },
  {
    name: "Textile",
    desc: "Enabling efficient manufacturing workflows.",
    image: photos.textile,
  },
  {
    name: "Energy",
    desc: "Dependable solutions for critical needs.",
    image: photos.factory,
  },
  {
    name: "Industrial Equipment",
    desc: "Components and systems built to work.",
    image: photos.machinery,
  },
]

const capabilities = [
  {
    title: "Engineering & Design",
    desc: "Thoughtful technical planning that translates your needs into practical solutions.",
    icon: "draft",
  },
  {
    title: "Precision Manufacturing",
    desc: "Disciplined production processes built around consistency and accuracy.",
    icon: "gear",
  },
  {
    title: "Quality Inspection",
    desc: "Careful checks at the right stages to keep quality at the forefront.",
    icon: "check",
  },
  {
    title: "Custom Manufacturing",
    desc: "Flexible capabilities to support unique specifications and applications.",
    icon: "layers",
  },
]

const benefits = [
  {
    title: "Precision",
    desc: "Reliable manufacturing with consistent standards.",
    icon: "target",
  },
  {
    title: "Quality",
    desc: "Quality-focused production and inspection.",
    icon: "check",
  },
  {
    title: "Flexibility",
    desc: "Solutions adapted to customer requirements.",
    icon: "layers",
  },
  {
    title: "Delivery",
    desc: "Structured production and delivery processes.",
    icon: "arrow",
  },
]

function Icon({ name, size = 20 }: { name: string size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    diagonal: (
      <>
        <path d="M5 17 17 5" />
        <path d="M7 5h10v10" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    menu: (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </>
    ),
    close: (
      <>
        <path d="M5 5 19 19M19 5 5 19" />
      </>
    ),
    draft: (
      <>
        <path d="M4 20h16M5 17l2-9 9-2 3 3-2 9-9 2-3-3Z" />
        <path d="m8 16 8-8M13 6l5 5" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path
          d="M10 2h4l.5 2.2 2 .9 1.9-1.2 2.8 2.8L20 8.6l.9 2L23 11v3l-2.1.5-.9 2 1.2 1.9-2.8 2.8-1.9-1.2-2 .9L14 23h-4l-.5-2.1-2-.9-1.9 1.2-2.8-2.8L4 16.5l-.9-2L1 14v-3l2.1-.4.9-2-1.2-1.9 2.8-2.8L7.5 5l2-.9L10 2Z"
          transform="translate(1 0) scale(.92)"
        />
      </>
    ),
    check: (
      <>
        <path d="M12 2 20 5v6c0 5-3.3 8.3-8 11-4.7-2.7-8-6-8-11V5l8-3Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M5 3h4l1 4-2 2a16 16 0 0 0 7 7l2-2 4 1v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="1" />
        <path d="m2 6 10 8 10-8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V3m-5 5 5-5 5 5M4 16v4h16v-4" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  )
}

function LinkButton({
  to,
  children,
  variant = "primary",
  icon = true,
  className = "",
}: {
  to: string
  children: ReactNode
  variant?: "primary" | "outline" | "light" | "text"
  icon?: boolean
  className?: string
}) {
  return (
    <a href={`#${to}`} className={`btn btn-${variant} ${className}`}>
      {children}
      {icon && <Icon name="arrow" size={17} />}
    </a>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span className="eyebrow-line" />
      {children}
    </div>
  )
}

function SectionIntro({
  label,
  title,
  text,
  align = "left",
}: {
  label: string
  title: string
  text?: string
  align?: "left" | "center"
}) {
  return (
    <div className={`section-intro ${align === "center" ? "center" : ""}`}>
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Header({ route }: { route: string }) {
  const [open, setOpen] = useState(false)
  const nav = [
    "About",
    "Products",
    "Industries",
    "Capabilities",
    "Facility",
    "Quality",
    "Contact",
  ]
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener("hashchange", close)
    return () => window.removeEventListener("hashchange", close)
  }, [])
  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>ENGINEERING CONFIDENCE INTO EVERY DETAIL</span>
          <span>
            Have a requirement?{" "}
            <a href="#/contact">
              Let’s talk <Icon name="diagonal" size={12} />
            </a>
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#/" aria-label="XYZ Industries home">
            <span className="brand-symbol">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-type">
              <strong>XYZ</strong>
              <small>INDUSTRIES</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <a
                key={item}
                href={`#/${item.toLowerCase()}`}
                aria-current={
                  route === `/${item.toLowerCase()}` ? "page" : undefined
                }
              >
                {item}
              </a>
            ))}
          </nav>
          <LinkButton to="/request-quote" className="header-cta">
            Request a Quote
          </LinkButton>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={25} />
          </button>
        </div>
      </header>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => (
            <a
              key={item}
              href={`#/${item.toLowerCase()}`}
              aria-current={
                route === `/${item.toLowerCase()}` ? "page" : undefined
              }
            >
              {item}
              <Icon name="arrow" size={17} />
            </a>
          ))}
          <LinkButton to="/request-quote">Request a Quote</LinkButton>
        </nav>
      )}
    </>
  )
}

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(7,18,34,.94) 0%, rgba(7,18,34,.82) 39%, rgba(7,18,34,.26) 100%), url(${photos.hero})`,
      }}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <Eyebrow light>ENGINEERED FOR INDUSTRY</Eyebrow>
          <h1>
            Precision
            <br />
            Manufacturing.
            <br />
            <em>Built for Performance.</em>
          </h1>
          <p>
            Reliable manufacturing solutions engineered to meet demanding
            industrial requirements with precision, consistency and quality.
          </p>
          <div className="hero-actions">
            <LinkButton to="/products">Explore Products</LinkButton>
            <LinkButton to="/request-quote" variant="outline">
              Request a Quote
            </LinkButton>
          </div>
          <div className="hero-cred">
            <span className="cred-dot" />
            Trusted Manufacturing <b>•</b> Quality Focused <b>•</b> Built for
            Industry
          </div>
        </div>
      </div>
      <div className="hero-side-note">01 / MANUFACTURING EXCELLENCE</div>
    </section>
  )
}

function Stats() {
  const data = [
    ["25+", "Years Experience"],
    ["500+", "Products Delivered"],
    ["15+", "Industries Served"],
    ["98%", "On-Time Delivery"],
  ]
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {data.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="demo-note">
          * Illustrative statistics for template demonstration. Replace with
          verified company figures.
        </p>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-layout">
        <div className="about-visual">
          <img
            src={photos.factory}
            alt="Industrial production facility with manufacturing equipment"
            loading="lazy"
          />
          <div className="image-index">
            01 <span>/ OUR COMPANY</span>
          </div>
          <div className="image-corner" />
        </div>
        <div className="about-copy">
          <SectionIntro
            label="ABOUT XYZ INDUSTRIES"
            title="Manufacturing Expertise That Moves Industry Forward"
          />
          <p>
            XYZ Industries combines engineering expertise, modern manufacturing
            capabilities and rigorous quality processes to deliver reliable
            solutions for industrial customers.
          </p>
          <p>
            From initial specifications to final delivery, our customer-focused
            approach brings together technical knowledge, production capability
            and an unwavering attention to quality.
          </p>
          <div className="highlight-row">
            <span>Precision</span>
            <span>Quality</span>
            <span>Reliability</span>
          </div>
          <LinkButton to="/about" variant="text">
            Discover Our Company
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
}: {
  product: typeof products[number]
  index: number
}) {
  return (
    <a href="#/product-detail" className="product-card">
      <div className="card-image">
        <img
          src={product.image}
          alt={`${product.name} manufacturing example`}
          loading="lazy"
        />
        <span className="image-count">0{index + 1} / 06</span>
      </div>
      <div className="product-card-body">
        <span className="card-label">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <span className="card-link">
          View Product <Icon name="diagonal" size={17} />
        </span>
      </div>
    </a>
  )
}

function ProductsSection({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`section products-section ${full ? "page-products" : ""}`}
    >
      <div className="container">
        <div className="section-head-row">
          <SectionIntro
            label="WHAT WE MAKE"
            title="Our Products & Solutions"
            text="Explore our range of engineered products and manufacturing solutions designed for diverse industrial applications."
          />
          {!full && (
            <LinkButton to="/products" variant="text" className="desktop-only">
              View All Products
            </LinkButton>
          )}
        </div>
        <div className="products-grid">
          {products.slice(0, full ? 6 : 3).map((product, i) => (
            <ProductCard product={product} index={i} key={product.name} />
          ))}
        </div>
        {!full && (
          <div className="mobile-only section-bottom-link">
            <LinkButton to="/products" variant="text">
              View All Products
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  )
}

function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="container featured-grid">
        <div className="featured-image">
          <img
            src={photos.process}
            alt="Close-up of precision industrial machining process"
            loading="lazy"
          />
          <span className="feature-image-label">FEATURED / 01</span>
        </div>
        <div className="featured-copy">
          <Eyebrow light>FEATURED SOLUTION</Eyebrow>
          <h2>Precision Industrial Components</h2>
          <p>
            High-quality components manufactured to meet demanding dimensional,
            performance and application requirements.
          </p>
          <div className="spec-grid">
            {[
              ["Manufacturing", "Precision Production"],
              ["Material", "Customizable"],
              ["Application", "Industrial"],
              ["Quality", "Inspected"],
            ].map(([key, val]) => (
              <div key={key}>
                <span>{key}</span>
                <strong>{val}</strong>
              </div>
            ))}
          </div>
          <LinkButton to="/product-detail">View Product Details</LinkButton>
        </div>
      </div>
    </section>
  )
}

function CapabilitiesSection() {
  return (
    <section className="section capabilities-section">
      <div className="container">
        <div className="section-head-row">
          <SectionIntro
            label="OUR EXPERTISE"
            title="Built Around Manufacturing Capability"
            text="The right combination of people, processes and production expertise to bring complex requirements to life."
          />
          <LinkButton
            to="/capabilities"
            variant="text"
            className="desktop-only"
          >
            Explore Capabilities
          </LinkButton>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, i) => (
            <a
              className="capability-card"
              href="#/capabilities"
              key={item.title}
            >
              <div className="cap-top">
                <span>0{i + 1}</span>
                <Icon name={item.icon} size={31} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="small-arrow">
                  <Icon name="diagonal" size={18} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustriesSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section industries-section">
      <div className="container">
        <div className="section-head-row">
          <SectionIntro
            label="WHERE WE WORK"
            title="Industries We Serve"
            text="Versatile manufacturing capabilities that support businesses across a broad range of industries."
          />
          {!full && (
            <LinkButton
              to="/industries"
              variant="text"
              className="desktop-only"
            >
              Explore Industries
            </LinkButton>
          )}
        </div>
        <div className="industry-grid">
          {industries.map((item, i) => (
            <a className="industry-card" href="#/industries" key={item.name}>
              <img
                src={item.image}
                alt={`${item.name} industry application`}
                loading="lazy"
              />
              <div className="industry-shade" />
              <div className="industry-content">
                <span>0{i + 1} / INDUSTRY</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
              <span className="industry-arrow">
                <Icon name="diagonal" size={19} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FacilitySection({ full = false }: { full?: boolean }) {
  return (
    <section className="section facility-section">
      <div className="container">
        <div className="facility-heading">
          <SectionIntro
            label="OUR FACILITY"
            title="Inside Our Manufacturing Facility"
            text="Modern infrastructure, skilled professionals and disciplined production processes come together to deliver consistent results."
          />
          <LinkButton to="/facility" variant="text" className="desktop-only">
            Explore Our Facility
          </LinkButton>
        </div>
        <div className="facility-gallery">
          <div className="gallery-main">
            <img
              src={photos.factory}
              alt="Wide view of a modern industrial production floor"
              loading="lazy"
            />
            <span>PRODUCTION ENVIRONMENT / 01</span>
          </div>
          <div className="gallery-side">
            <img
              src={photos.engineering}
              alt="Engineers working at an industrial facility"
              loading="lazy"
            />
            <img
              src={photos.robot}
              alt="Industrial automation machinery"
              loading="lazy"
            />
          </div>
        </div>
        <div className="facility-features">
          {[
            "Modern Infrastructure",
            "Skilled Workforce",
            "Quality Processes",
          ].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              <strong>{x}</strong>
              <Icon name="diagonal" size={17} />
            </div>
          ))}
        </div>
        {full && (
          <div className="center-action">
            <LinkButton to="/gallery" variant="text">
              View Facility Gallery
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  )
}

function QualitySection() {
  const steps = [
    "Raw Material Inspection",
    "Production",
    "Quality Inspection",
    "Testing",
    "Final Dispatch",
  ]
  return (
    <section className="section quality-section">
      <div className="container">
        <div className="quality-layout">
          <div className="quality-copy">
            <SectionIntro
              label="OUR COMMITMENT"
              title="Quality You Can Trust"
              text="Our commitment to quality is integrated into every stage of the manufacturing process."
            />
            <p>
              Every project deserves a considered approach. Our process puts
              clear checkpoints in place from incoming materials to final
              dispatch.
            </p>
            <LinkButton to="/quality" variant="text">
              Our Quality Approach
            </LinkButton>
            <div className="cert-heading">
              CERTIFICATION & ASSURANCE AREAS <span>— DEMO PLACEHOLDERS</span>
            </div>
            <div className="cert-row">
              {["ISO CERTIFIED", "QUALITY CONTROL", "TESTING & INSPECTION"].map(
                (x) => (
                  <div key={x}>
                    <Icon name="check" size={22} />
                    <span>{x}</span>
                  </div>
                ),
              )}
            </div>
            <p className="cert-note">
              Illustrative badges only. Replace with actual, verified
              certifications and quality claims.
            </p>
          </div>
          <div className="process-panel">
            <div className="process-panel-head">
              <span>THE QUALITY PROCESS</span>
              <span>01 — 05</span>
            </div>
            {steps.map((step, i) => (
              <div className="process-step" key={step}>
                <span>0{i + 1}</span>
                <strong>{step}</strong>
                <Icon name="arrow" size={18} />
              </div>
            ))}
            <div className="process-panel-foot">
              CONSISTENCY AT EVERY STAGE <span>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="section benefits-section">
      <div className="container">
        <SectionIntro
          label="THE XYZ DIFFERENCE"
          title="Why Industry Leaders Choose Us"
          text="A dependable partner for the details that matter most."
        />
        <div className="benefits-grid">
          {benefits.map((item, i) => (
            <div className="benefit-card" key={item.title}>
              <span className="benefit-number">0{i + 1}</span>
              <Icon name={item.icon} size={29} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Industrial Equipment",
      type: "EQUIPMENT APPLICATION",
      image: photos.machinery,
      desc: "Manufacturing solutions built for demanding production environments.",
    },
    {
      title: "Custom Components",
      type: "PRECISION APPLICATION",
      image: photos.component,
      desc: "Engineered components developed for specific operating needs.",
    },
    {
      title: "Production Solutions",
      type: "MANUFACTURING APPLICATION",
      image: photos.custom,
      desc: "Practical approaches to complex production challenges.",
    },
  ]
  return (
    <section className="section projects-section">
      <div className="container">
        <div className="section-head-row">
          <SectionIntro
            label="APPLICATIONS"
            title="Manufacturing in Action"
            text="A closer look at the kinds of solutions our capabilities can make possible."
          />
          <LinkButton to="/gallery" variant="text" className="desktop-only">
            Explore Gallery
          </LinkButton>
        </div>
        <div className="project-grid">
          {projects.map((item) => (
            <a href="#/gallery" className="project-card" key={item.title}>
              <div className="project-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="project-copy">
                <span className="card-label">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="card-link">
                  Explore <Icon name="diagonal" size={17} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="section trust-section">
      <div className="container">
        <SectionIntro
          label="PARTNERSHIPS"
          title="Built for Long-Term Partnerships"
          text="Good manufacturing is about more than the finished product. It’s about the confidence that comes with working together."
        />
        <div className="testimonial-grid">
          <div className="testimonial">
            <span className="quote-mark">“</span>
            <blockquote>
              XYZ Industries delivered exactly what we needed with consistent
              quality and excellent communication.
            </blockquote>
            <div className="testimonial-footer">
              <span>MANUFACTURING CLIENT</span>
              <span>DEMO TESTIMONIAL</span>
            </div>
          </div>
          <div className="testimonial">
            <span className="quote-mark">“</span>
            <blockquote>
              Their attention to our specifications and dependable approach made
              the entire process straightforward.
            </blockquote>
            <div className="testimonial-footer">
              <span>INDUSTRIAL CLIENT</span>
              <span>DEMO TESTIMONIAL</span>
            </div>
          </div>
        </div>
        <p className="demo-note trust-note">
          Testimonials and client marks shown below are illustrative
          placeholders. Replace with approved client content.
        </p>
        <div className="logo-strip">
          <span>
            PARTNER <b>01</b>
          </span>
          <span>
            COMPANY <b>02</b>
          </span>
          <span>
            INDUSTRIAL <b>03</b>
          </span>
          <span>
            GROUP <b>04</b>
          </span>
          <span>
            PARTNER <b>05</b>
          </span>
        </div>
      </div>
    </section>
  )
}

function QuoteBanner() {
  return (
    <section className="quote-banner">
      <div className="container quote-banner-inner">
        <div>
          <Eyebrow light>LET'S BUILD SOMETHING BETTER</Eyebrow>
          <h2>
            Have a Manufacturing
            <br />
            Requirement?
          </h2>
          <p>
            Tell us what you need. Our team will review your requirements and
            get back to you.
          </p>
        </div>
        <div className="quote-banner-actions">
          <LinkButton to="/request-quote">Request a Quote</LinkButton>
          <LinkButton to="/contact" variant="outline">
            Contact Our Team
          </LinkButton>
        </div>
      </div>
      <div className="banner-grid" aria-hidden="true" />
    </section>
  )
}

function PageHero({
  label,
  title,
  text,
  image,
}: {
  label: string
  title: string
  text: string
  image?: string
}) {
  return (
    <section
      className={`page-hero ${image ? "page-hero-image" : ""}`}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg, rgba(7,18,34,.95), rgba(7,18,34,.7) 55%, rgba(7,18,34,.32)), url(${image})`,
            }
          : undefined
      }
    >
      <div className="container">
        <Eyebrow light>{label}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="breadcrumb">
          <a href="#/">Home</a>
          <span>/</span>
          {title}
        </div>
      </div>
    </section>
  )
}

function ProductDetail() {
  return (
    <>
      <PageHero
        label="PRODUCTS / FEATURED SOLUTION"
        title="Precision Industrial Components"
        text="Engineered for exacting requirements. Designed to perform in the environments that matter."
        image={photos.component}
      />
      <section className="section detail-section">
        <div className="container detail-layout">
          <div className="detail-image">
            <img
              src={photos.process}
              alt="Precision machining of an industrial metal component"
            />
          </div>
          <div className="detail-copy">
            <Eyebrow>PRODUCT OVERVIEW</Eyebrow>
            <h2>Precision in every detail.</h2>
            <p>
              High-quality components manufactured to meet demanding
              dimensional, performance and application requirements. This
              example product page demonstrates how detailed specifications,
              imagery and a direct enquiry path can work together.
            </p>
            <p>
              Capabilities, materials and specifications are customizable to
              reflect your actual product offering.
            </p>
            <div className="detail-specs">
              {[
                ["Manufacturing", "Precision Production"],
                ["Material", "Customizable"],
                ["Application", "Industrial"],
                ["Quality", "Inspected"],
              ].map(([k, v]) => (
                <div key={k}>
                  <span>{k}</span>
                  <strong>{v}</strong>
                </div>
              ))}
            </div>
            <LinkButton to="/request-quote">
              Enquire About This Product
            </LinkButton>
          </div>
        </div>
      </section>
      <ProductsSection />
      <QuoteBanner />
    </>
  )
}

function ContactDetails() {
  return (
    <div className="contact-details">
      {[
        [
          "pin",
          "Office Address",
          "Your company address, city, state, country — replace with actual location",
        ],
        ["phone", "Phone", "+00 000 000 0000 — demo number"],
        ["mail", "Email", "hello@xyzindustries.example"],
        ["clock", "Business Hours", "Monday – Friday  |  9:00 AM – 6:00 PM"],
      ].map(([icon, title, text]) => (
        <div className="contact-detail" key={title}>
          <span className="contact-icon">
            <Icon name={icon} size={21} />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="GET IN TOUCH"
        title="Let's Start a Conversation"
        text="Whether you have a specific requirement or a question about our capabilities, we're ready to connect."
        image={photos.factory}
      />
      <section className="section contact-section">
        <div className="container contact-layout">
          <div>
            <SectionIntro
              label="CONTACT XYZ INDUSTRIES"
              title="We're Here to Help"
              text="Reach out to our team and let's discuss how we can support your manufacturing requirements."
            />
            <ContactDetails />
            <div className="quick-links">
              <a href="tel:+000000000000">
                <Icon name="phone" size={17} /> Call
              </a>
              <a href="mailto:hello@xyzindustries.example">
                <Icon name="mail" size={17} /> Email
              </a>
              <a href="#/request-quote">
                <Icon name="arrow" size={17} /> WhatsApp / Enquire
              </a>
            </div>
            <p className="demo-note">
              Demo contact details. Replace with real phone, email, address and
              WhatsApp link before publishing.
            </p>
          </div>
          <div className="map-placeholder">
            <div className="map-cross" />
            <div className="map-label">
              <Icon name="pin" size={27} />
              <strong>Your facility location</strong>
              <span>Google Maps embed placeholder</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions <Icon name="diagonal" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <QuoteBanner />
    </>
  )
}

function QuotePage() {
  const [fileName, setFileName] = useState("")
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.hash = "/confirmation"
  }
  return (
    <>
      <PageHero
        label="START YOUR PROJECT"
        title="Request a Quote"
        text="Share your requirements, drawings or specifications and our team will get back to you."
      />
      <section className="section form-section">
        <div className="container form-layout">
          <div className="form-aside">
            <Eyebrow>LET'S GET STARTED</Eyebrow>
            <h2>Tell us what you're working on.</h2>
            <p>
              Every great partnership starts with a conversation. The more
              detail you share, the better we can understand your requirements.
            </p>
            <div className="form-aside-rule" />
            <div className="form-aside-item">
              <span>01</span>
              <div>
                <strong>Share your requirement</strong>
                <p>Tell us about your product or project.</p>
              </div>
            </div>
            <div className="form-aside-item">
              <span>02</span>
              <div>
                <strong>We review the details</strong>
                <p>Our team looks at your specifications.</p>
              </div>
            </div>
            <div className="form-aside-item">
              <span>03</span>
              <div>
                <strong>Let's move forward</strong>
                <p>We'll connect about the next steps.</p>
              </div>
            </div>
            <div className="form-aside-note">
              This is a front-end demo form. Connect to your CRM or enquiry
              inbox before launch.
            </div>
          </div>
          <form className="quote-form" onSubmit={submit}>
            <div className="form-heading">
              <span>ENQUIRY FORM</span>
              <h3>Project details</h3>
              <p>Fields marked * are required.</p>
            </div>
            <div className="form-grid">
              <label>
                Full Name *
                <input name="name" placeholder="Your full name" required />
              </label>
              <label>
                Company Name *
                <input name="company" placeholder="Company name" required />
              </label>
              <label>
                Email *
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label>
                Phone *
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                />
              </label>
              <label>
                Product / Service *
                <select name="product" required defaultValue="">
                  <option value="" disabled>
                    Select a product or service
                  </option>
                  {products.map((p) => (
                    <option key={p.name}>{p.name}</option>
                  ))}
                  <option>Other requirement</option>
                </select>
              </label>
              <label>
                Estimated Quantity
                <input name="quantity" placeholder="e.g. 500 units" />
              </label>
              <label className="full-field">
                Upload Drawing / Specification
                <span className="upload-field">
                  <Icon name="upload" size={22} />
                  <span>
                    {fileName || "Choose a file to upload"}
                    <small>PDF, JPG or PNG · Max 10 MB</small>
                  </span>
                  <input
                    type="file"
                    name="drawing"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || "")
                    }
                  />
                </span>
              </label>
              <label className="full-field">
                Additional Requirements
                <textarea
                  name="requirements"
                  rows={5}
                  placeholder="Tell us about materials, dimensions, timelines or any other details..."
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Submit Enquiry <Icon name="arrow" size={17} />
            </button>
            <p className="form-disclaimer">
              By submitting, you agree to be contacted about your enquiry. Demo
              form; no data is transmitted.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}

function DesignSystemPage() {
  return (
    <>
      <PageHero
        label="TEMPLATE REFERENCE"
        title="Design System"
        text="A practical visual foundation for adapting this website to your manufacturing brand."
      />
      <section className="section ds-section">
        <div className="container">
          <SectionIntro
            label="01 / FOUNDATIONS"
            title="Built to be yours."
            text="Replace the company identity, imagery, approved claims and contact information while keeping the underlying components and layouts."
          />
          <div className="ds-colors">
            {[
              ["Deep Navy", "#0B1628"],
              ["Charcoal", "#1F2937"],
              ["Engineering Orange", "#F59E0B"],
              ["Industrial Gray", "#F5F7FA"],
              ["White", "#FFFFFF"],
            ].map(([name, value], i) => (
              <div key={name}>
                <span className={`ds-swatch ds-swatch-${i}`} />
                <strong>{name}</strong>
                <small>{value}</small>
              </div>
            ))}
          </div>
          <div className="ds-showcase">
            <div>
              <Eyebrow>02 / TYPOGRAPHY</Eyebrow>
              <h2>
                Clear thinking.
                <br />
                Strong execution.
              </h2>
              <p>
                Inter is used for confident headings, readable content and
                precise UI labels.
              </p>
            </div>
            <div>
              <Eyebrow>03 / COMPONENTS</Eyebrow>
              <div className="ds-buttons">
                <LinkButton to="/request-quote">Primary Button</LinkButton>
                <LinkButton to="/products" variant="text">
                  Text Button
                </LinkButton>
              </div>
              <div className="ds-example-tags">
                <span>FEATURED SOLUTION</span>
                <span>QUALITY FOCUSED</span>
              </div>
              <input
                placeholder="Input / Text field"
                aria-label="Example input"
              />
            </div>
          </div>
          <div className="ds-components">
            <Eyebrow>04 / REUSABLE PATTERNS</Eyebrow>
            <p>
              Navigation · Buttons · Inputs · Badges · Stats · Product Cards ·
              Industry Cards · Capability Blocks · Quote Form · Footer
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function ConfirmationPage() {
  return (
    <section className="confirmation">
      <div className="container confirmation-inner">
        <div className="confirmation-icon">
          <Icon name="check" size={38} />
        </div>
        <Eyebrow>ENQUIRY DEMO</Eyebrow>
        <h1>Thank you for your enquiry.</h1>
        <p>
          This template demonstrates the confirmation state. No information was
          sent; connect the form to your preferred enquiry system before using
          it for real leads.
        </p>
        <LinkButton to="/">Back to Homepage</LinkButton>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <a className="brand brand-footer" href="#/">
              <span className="brand-symbol">
                <span />
                <span />
                <span />
              </span>
              <span className="brand-type">
                <strong>XYZ</strong>
                <small>INDUSTRIES</small>
              </span>
            </a>
            <p>
              Engineering-led manufacturing solutions built with precision,
              quality and long-term partnerships in mind.
            </p>
            <span className="footer-demo">
              MASTER WEBSITE TEMPLATE / DEMO CONTENT
            </span>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <a href="#/about">About</a>
            <a href="#/facility">Facility</a>
            <a href="#/quality">Quality</a>
            <a href="#/gallery">Gallery</a>
          </div>
          <div className="footer-col">
            <h3>Explore</h3>
            <a href="#/products">Products</a>
            <a href="#/capabilities">Capabilities</a>
            <a href="#/industries">Industries</a>
            <a href="#/request-quote">Request Quote</a>
          </div>
          <div className="footer-col footer-contact">
            <h3>Contact</h3>
            <span>+00 000 000 0000</span>
            <span>hello@xyzindustries.example</span>
            <span>
              Your company address,
              <br />
              city, country
            </span>
            <a href="#/contact">
              Get in touch <Icon name="diagonal" size={15} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 XYZ Industries. All Rights Reserved.{" "}
            <span className="footer-placeholder">Demo website concept.</span>
          </span>
          <div>
            <a href="#/privacy">Privacy Policy</a>
            <a href="#/terms">Terms & Conditions</a>
            <a href="#/design-system">Design System</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ProductsSection />
      <FeaturedSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <FacilitySection />
      <QualitySection />
      <BenefitsSection />
      <ProjectsSection />
      <TrustSection />
      <QuoteBanner />
    </>
  )
}

function App() {
  const [route, setRoute] = useState(
    window.location.hash.slice(1).split("?")[0] || "/",
  )
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.slice(1).split("?")[0] || "/")
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])
  let content: ReactNode
  switch (route) {
    case "/about":
      content = (
        <>
          <PageHero
            label="WHO WE ARE"
            title="Built on a Better Way to Make"
            text="A manufacturing partner bringing together engineering expertise, production capability and an enduring commitment to quality."
            image={photos.engineering}
          />
          <AboutSection />
          <BenefitsSection />
          <TrustSection />
          <QuoteBanner />
        </>
      )
      break
    case "/products":
      content = (
        <>
          <PageHero
            label="OUR OFFERING"
            title="Products & Solutions"
            text="Explore adaptable manufacturing solutions designed for a broad range of industrial applications."
            image={photos.machinery}
          />
          <ProductsSection full />
          <FeaturedSection />
          <QuoteBanner />
        </>
      )
      break
    case "/product-detail":
      content = <ProductDetail />
      break
    case "/industries":
      content = (
        <>
          <PageHero
            label="INDUSTRIES"
            title="Made for What Moves You"
            text="Flexible capabilities for evolving requirements across a diverse industrial landscape."
            image={photos.robot}
          />
          <IndustriesSection full />
          <QuoteBanner />
        </>
      )
      break
    case "/capabilities":
      content = (
        <>
          <PageHero
            label="OUR CAPABILITIES"
            title="The Capability to Deliver"
            text="Engineering thinking, production expertise and quality-conscious processes, working together."
            image={photos.process}
          />
          <CapabilitiesSection />
          <QualitySection />
          <QuoteBanner />
        </>
      )
      break
    case "/facility":
      content = (
        <>
          <PageHero
            label="OUR FACILITY"
            title="Where Expertise Takes Shape"
            text="A closer look at the people, infrastructure and processes behind every project."
            image={photos.factory}
          />
          <FacilitySection full />
          <CapabilitiesSection />
          <QuoteBanner />
        </>
      )
      break
    case "/quality":
      content = (
        <>
          <PageHero
            label="OUR COMMITMENT"
            title="Quality in Every Step"
            text="A considered approach to manufacturing, from incoming materials to final dispatch."
            image={photos.process}
          />
          <QualitySection />
          <BenefitsSection />
          <QuoteBanner />
        </>
      )
      break
    case "/gallery":
      content = (
        <>
          <PageHero
            label="OUR WORK"
            title="A Closer Look"
            text="Explore the environments, processes and applications that define modern manufacturing."
            image={photos.factory}
          />
          <FacilitySection full />
          <ProjectsSection />
          <QuoteBanner />
        </>
      )
      break
    case "/request-quote":
      content = <QuotePage />
      break
    case "/contact":
      content = <ContactPage />
      break
    case "/confirmation":
      content = <ConfirmationPage />
      break
    case "/design-system":
      content = <DesignSystemPage />
      break
    case "/privacy":
    case "/terms":
      content = (
        <>
          <PageHero
            label="TEMPLATE INFORMATION"
            title={
              route === "/privacy" ? "Privacy Policy" : "Terms & Conditions"
            }
            text="This is a demonstration page. Replace this content with reviewed legal information before publishing."
          />
          <section className="section">
            <div className="container legal-note">
              <p>
                Legal copy has intentionally not been invented for this
                template. Add your company's approved policy here before launch.
              </p>
            </div>
          </section>
        </>
      )
      break
    default:
      content = <Home />
  }
  return (
    <>
      <Header route={route} />
      <main>{content}</main>
      <Footer />
    </>
  )
}

export default App
