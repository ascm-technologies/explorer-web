import { MapPin, Compass, Users, Navigation } from "lucide-react";

export default function Home() {
  return (
    <div className="container-custom">

      {/* HERO */}
      <section className="card section-padding text-center">
        <h1>
          Discover meaningful places around you
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-muted">
          Explorer helps you find, share, and categorize real-world places based on vibe, location, and experience.
        </p>

        <div className="hero-button mt-10">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">Explore Features</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="card section-padding text-center">
        <h2>
          Built for real-world exploration
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <FeatureCard icon={<MapPin size={26} />} title="Location Discovery" desc="Find nearby places instantly." />
          <FeatureCard icon={<Compass size={26} />} title="Vibe Categorization" desc="Sort places by mood." />
          <FeatureCard icon={<Users size={26} />} title="Community Driven" desc="Users contribute content." />
          <FeatureCard icon={<Navigation size={26} />} title="Smart Navigation" desc="Navigate easily." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="card section-padding text-center">
        <h2>
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <FeatureCard
            icon={<div className="step-circle">1</div>}
            title="Discover places"
            desc="Find trending locations nearby."
          />
          <FeatureCard
            icon={<div className="step-circle">2</div>}
            title="Share experiences"
            desc="Add and categorize places."
          />
          <FeatureCard
            icon={<div className="step-circle">3</div>}
            title="Navigate easily"
            desc="Get directions instantly."
          />
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="card section-padding text-center">
        <h2>
          Start exploring smarter today
        </h2>

        <p>
          Join a new way of discovering places.
        </p>

        <button className="mt-8 btn-light">Launch App</button>
      </section>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-primary">{icon}</div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="step-circle">{number}</div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{desc}</p>
    </div>
  );
}
