import "../styles/email-confirmation.css";

export default function EmailConfirmation() {
  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        <div className="check-wrap">
          <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">

            <circle className="circle-bg" cx="36" cy="36" r="32" />

            <circle className="circle-ring" cx="36" cy="36" r="32" />

            <path
              className="check-path"
              d="M22 37l10 10 18-20"
            />

          </svg>
        </div>

        <div className="pill">
          <span className="pill-dot"></span>
          Verified
        </div>

        <h1>Email Confirmed</h1>

        <p>
          Your email address has been successfully verified.
          You can now open the app and sign in to your account.
        </p>

        <div className="divider"></div>

        <p className="footer-note">
          You may close this tab.
        </p>

      </div>

    </div>
  );
}