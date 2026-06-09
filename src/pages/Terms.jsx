import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import "../styles/document.css";

export default function Terms() {
  return (
    <Container>

      <div className="document-page">

        {/* Header */}
        <div className="document-header">
          <h1>
            Terms of Service
          </h1>

          <p className="text-muted">
            Last Updated: March 6, 2026
          </p>
        </div>

        {/* Intro */}
        <section className="text-muted document-section">
          <p>
            By downloading or using the Explorer App,
            you agree to these Terms of Service.
          </p>

          <p>
            If you do not agree with these Terms,
            please do not use the application.
          </p>
        </section>

        {/* Sections */}
        <div className="document-content">

          <TermsSection title="1. Acceptance of Terms">
            <p>
              By using Explorer, you agree to comply with these Terms of Service.
            </p>
          </TermsSection>

          <TermsSection title="2. Description of Service">
            <p>
              Explorer is a location-based application that allows users
              to discover places, upload photos, and share information
              about locations including names and vibes.
            </p>

            <p>
              Users may also mark places as favorites and navigate
              using map services.
            </p>
          </TermsSection>

          <TermsSection title="3. User Accounts">
            <p>
              Users must create an account using email authentication
              to create or update places.
            </p>

            <p>
              Users are responsible for maintaining the confidentiality
              of their account credentials.
            </p>
          </TermsSection>

          <TermsSection title="4. User Generated Content">
            <p>Users may submit content including:</p>

            <ul>
              <li>Photos</li>
              <li>Place names</li>
              <li>Vibes or descriptions</li>
            </ul>

            <p>
              By submitting content, users grant Explorer
              a non-exclusive, worldwide, royalty-free license
              to store, display, and distribute content within the application.
            </p>

            <p>
              Explorer reserves the right to remove or modify
              content that violates these Terms.
            </p>
          </TermsSection>

          <TermsSection title="5. Location Data">
            <p>
              Explorer uses GPS location data when users create
              or update places and when navigation features are used.
            </p>

            <p>
              This helps ensure that place submissions occur
              at accurate physical locations.
            </p>
          </TermsSection>

          <TermsSection title="6. Acceptable Use">
            <p>Users agree not to:</p>

            <ul>
              <li>Submit false or misleading information</li>
              <li>Upload inappropriate or illegal images</li>
              <li>Attempt to manipulate or damage the service</li>
              <li>Interfere with other users' use of the application</li>
            </ul>

            <p>
              Violations may result in suspension or termination of access.
            </p>
          </TermsSection>

          <TermsSection title="7. Data Storage and Third-Party Services">
            <p>
              Explorer relies on trusted third-party services including:
            </p>

            <ul>
              <li>Cloud storage providers</li>
              <li>Authentication services</li>
              <li>Mapping services</li>
            </ul>

            <p>
              These services may process user data according
              to their own privacy policies.
            </p>
          </TermsSection>

          <TermsSection title="8. Ownership of Content">
            <p>
              Places submitted to Explorer do not belong
              to individual users and may be managed by platform administrators.
            </p>

            <p>
              Explorer may modify, curate, or remove place data
              to maintain platform integrity.
            </p>
          </TermsSection>

          <TermsSection title="9. Service Availability">
            <p>
              Explorer is provided on an "as-is" basis.
            </p>

            <p>
              We do not guarantee uninterrupted or error-free service availability.
            </p>
          </TermsSection>

          <TermsSection title="10. Limitation of Liability">
            <p>
              Explorer shall not be liable for damages arising from
              the use or inability to use the application.
            </p>
          </TermsSection>

          <TermsSection title="11. Changes to Terms">
            <p>
              These Terms may be updated periodically.
            </p>

            <p>
              Continued use of the application after updates
              indicates acceptance of the revised Terms.
            </p>
          </TermsSection>

          <TermsSection title="12. Contact">
            <p>
              Questions or concerns regarding these Terms may be sent to:
            </p>

            <p className="document-contact">
              ascm.technologies@outlook.com
            </p>
          </TermsSection>

        </div>

      </div>

    </Container>
  );
}

/* ---------- REUSABLE SECTION COMPONENT ---------- */

function TermsSection({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="document-section">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <section className="document-section">

      <h2>{title}</h2>

      <div>
        {children}
      </div>

    </section>
  );
}

