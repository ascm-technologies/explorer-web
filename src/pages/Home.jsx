import {
  MapPin,
  Compass,
  Users,
  Navigation,
} from "lucide-react";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import FeatureCard from "../components/ui/FeatureCard";
import StepCard from "../components/ui/StepCard";

export default function Home() {

  return (

    <Container className="home-layout">

      {/* HERO */}

      <Section className="text-center">

        <div className="hero-grid">

          <div className="hero-copy">

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

            </div>

          </div>

          <div className="hero-preview">

            <div className="preview-card">

              <div className="preview-map">

                Explorer Map Preview

              </div>

            </div>

          </div>

        </div>

      </Section>

      {/* FEATURES */}

      <Section className="section-cta">

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

      </Section>

      {/* HOW IT WORKS */}

      <Section className="section-alt">

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

      </Section>

      {/* CTA */}

      <Section className="section-cta text-center">

        <h2>
          Start exploring smarter today
        </h2>

        <p className="text-muted">
          Join a new way of discovering places.
        </p>

        <Button className="mt-8">
          Launch App
        </Button>

      </Section>

    </Container>

  );
}