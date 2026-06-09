import {
  MapPin,
  Compass,
  Users,
  Navigation,
} from "lucide-react";

export default function Home() {

  return (

    <main className="container-custom home-layout">

      {/* HERO */}

      <section className="card section text-center">

        <div className="hero-content">

<<<<<<< Updated upstream
          <h1>
            Discover meaningful places around you
          </h1>

          <p className="text-muted hero-text">
            Explorer helps you find, share, and categorize
            real-world places based on vibe, location,
            and experience.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Get Started
            </button>

            <button className="btn-outline">
              Explore Features
            </button>
=======
          <span className="hero-badge">
            Discover • Share • Explore
          </span>

          <h1>
            Discover meaningful places around you
          </h1>

          <p className="text-muted hero-text">
            Explorer helps you find, share,
            and categorize real-world places
            based on vibe, location and experience.
          </p>

          <div className="hero-buttons">

            <Button>
              Get Started
            </Button>

            <Button variant="outline">
              Explore Features
            </Button>

          </div>

          <div className="hero-stats">

            <div>
              <strong>1000+</strong>
              <span>Places</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Exploration</span>
            </div>
>>>>>>> Stashed changes

          </div>

        </div>

      </section>


      <Section className="section-alt">
        <div className="hero-preview">

          <div className="preview-map">

            Explorer Map Preview

          </div>

        </div>
      </Section>

      {/* FEATURES */}

      <section className="card section-cta section">

        <div className="section-header text-center">

          <h2>
            Built for real-world exploration
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <FeatureCard
            icon={<MapPin size={26} />}
            title="Location Discovery"
            desc="Find nearby places instantly."
          />

          <FeatureCard
            icon={<Compass size={26} />}
            title="Vibe Categorization"
            desc="Sort places by mood."
          />

          <FeatureCard
            icon={<Users size={26} />}
            title="Community Driven"
            desc="Users contribute content."
          />

          <FeatureCard
            icon={<Navigation size={26} />}
            title="Smart Navigation"
            desc="Navigate easily."
          />

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="card section-alt section">

        <div className="section-header text-center">

          <h2>
            How it works
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <StepCard
            number="1"
            title="Discover places"
            desc="Find trending locations nearby."
          />

          <StepCard
            number="2"
            title="Share experiences"
            desc="Add and categorize places."
          />

          <StepCard
            number="3"
            title="Navigate easily"
            desc="Get directions instantly."
          />

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="card section-cta section text-center">

        <h2>
          Start exploring smarter today
        </h2>

        <p className="text-muted">
          Join a new way of discovering places.
        </p>

        <button className="btn-primary mt-8">
          Launch App
        </button>

      </section>

    </main>
  );
}

/* =========================
   FEATURE CARD
========================= */

function FeatureCard({
  icon,
  title,
  desc,
}) {

  return (

    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p className="text-muted">
        {desc}
      </p>

    </div>
  );
}

/* =========================
   STEP CARD
========================= */

function StepCard({
  number,
  title,
  desc,
}) {

  return (

    <div className="step-card">

      <div className="step-circle">
        {number}
      </div>

      <h3>
        {title}
      </h3>

      <p className="text-muted">
        {desc}
      </p>

    </div>
  );
}