import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import "../styles/document.css";

export default function PrivacyPolicy() {
  return (
    <Container>

      <div className="document-page">

        {/* Header */}
        <header className="document-header">

          <h1>Privacy Policy</h1>

          <p className="text-muted">
            Last Updated: March 8, 2026
          </p>

        </header>

        {/* Intro */}
        <section className="text-muted document-section">
          <p>
            Explorer respects your privacy and is committed to protecting the
            personal information of users who use the Explorer mobile application.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, store, and share
            information when you use our services.
          </p>

          <p>
            By using the Explorer App, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </section>

        {/* Sections */}
        <div className="document-content">

          <PolicySection title="1. Information We Collect">
            <SubSection title="Account Information">
              <ul>
                <li>Email address</li>
                <li>Authentication information</li>
              </ul>
            </SubSection>

            <SubSection title="Location Information">
              <ul>
                <li>Creating a new place</li>
                <li>Updating an existing place</li>
                <li>Using navigation or direction features</li>
              </ul>
            </SubSection>

            <SubSection title="Photos and User-Generated Content">
              <ul>
                <li>Photos of places</li>
                <li>Place names</li>
                <li>Place vibes or descriptions</li>
              </ul>
            </SubSection>

            <SubSection title="Favorites">
              <p>
                Favorite places may be synchronized across devices linked to the same account.
              </p>
            </SubSection>

            <SubSection title="Usage and Analytics Data">
              <ul>
                <li>App interaction data</li>
                <li>Device information</li>
                <li>Crash logs</li>
                <li>Performance metrics</li>
              </ul>
            </SubSection>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <ul>
              <li>Provide and maintain Explorer services</li>
              <li>Allow users to create and update places</li>
              <li>Enable navigation functionality</li>
              <li>Synchronize user data</li>
              <li>Improve reliability and performance</li>
              <li>Analyze app usage</li>
              <li>Detect abuse or misuse</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Data Storage">
            <p>
              Submitted data, including photos and place information,
              is securely stored using trusted cloud infrastructure providers.
            </p>

            <p>
              Reasonable measures are taken to protect information from
              unauthorized access, misuse, or loss.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            <ul>
              <li>Authentication Services</li>
              <li>Cloud Storage Services</li>
              <li>Mapping and Navigation Services</li>
              <li>Analytics Services</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. User-Generated Content Ownership">
            <p>
              Places created within Explorer are part of the shared platform ecosystem
              and may be moderated or managed by Explorer administrators.
            </p>
          </PolicySection>

          <PolicySection title="6. Content Moderation">
            <p>
              Reported content may be reviewed and removed if it violates
              Explorer platform guidelines.
            </p>
          </PolicySection>

          <PolicySection title="7. Data Sharing">
            <ul>
              <li>Map services</li>
              <li>Cloud infrastructure providers</li>
              <li>Authentication providers</li>
              <li>Analytics providers</li>
            </ul>
          </PolicySection>

          <PolicySection title="8. User Rights">
            <ul>
              <li>Request information about data usage</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request account removal where applicable</li>
            </ul>
          </PolicySection>

          <PolicySection title="9. Children's Privacy">
            <p>
              Explorer is not intended for children under 13 years of age.
            </p>
          </PolicySection>

          <PolicySection title="10. Changes to This Privacy Policy">
            <p>
              This policy may be updated periodically. Users are encouraged
              to review it regularly.
            </p>
          </PolicySection>

          <PolicySection title="11. Contact Us">
            <p>
              Questions or requests regarding this Privacy Policy may be sent to:
            </p>

            <p className="document-contact">
              ascm.technologies@outlook.com
            </p>
          </PolicySection>

        </div>

      </div>

    </Container>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="document-section">

      <h2>{title}</h2>

      <div className="text-muted">
        {children}
      </div>

    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="document-section">

      <h3>{title}</h3>

      {children}

    </div>
  );
}