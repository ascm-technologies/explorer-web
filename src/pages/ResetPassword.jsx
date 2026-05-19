import { useMemo, useState } from "react";
import "../styles/reset-password.css";
import {
  verifyRecoveryToken,
  updatePassword,
} from "../services/authService";

import {
  extractRecoveryTokens,
} from "../utils/authTokens";

export default function ResetPassword() {

  const { accessToken, tokenHash } = useMemo(() => {
    return extractRecoveryTokens();
  }, []);

  /* -----------------------------
     STATE
  ----------------------------- */

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [done, setDone] = useState(false);

  /* -----------------------------
     PASSWORD STRENGTH
  ----------------------------- */

  const strength = useMemo(() => {

    let score = 0;

    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (password.length >= 10) score++;

    const map = [
      { width: "0%", bg: "transparent", text: "" },
      { width: "33%", bg: "#f85149", text: "Weak" },
      { width: "66%", bg: "#d29922", text: "Fair" },
      { width: "100%", bg: "#3fb950", text: "Strong" },
      { width: "100%", bg: "#3fb950", text: "Strong" },
    ];

    return map[Math.min(score, 4)];

  }, [password]);

  /* -----------------------------
     VALIDATION
  ----------------------------- */

  const isValid =
    password.length >= 6 &&
    password === confirm;

  /* -----------------------------
     MESSAGE
  ----------------------------- */

  function showMsg(text, type) {
    setMessage(text);
    setMessageType(type);
  }

  /* -----------------------------
     SUBMIT
  ----------------------------- */

  async function submitReset() {

    setLoading(true);

    try {

      let sessionToken = accessToken;

      /* -----------------------------
         token hash validation
      ----------------------------- */
      if (tokenHash) {
        sessionToken = await verifyRecoveryToken(tokenHash);
      }

      /* -----------------------------
         token validation
      ----------------------------- */

      if (!sessionToken) {

        showMsg(
          "Reset link is invalid or has expired. Please request a new one from the app.",
          "error"
        );

        setLoading(false);

        return;
      }

      /* -----------------------------
         PASSWORD UPDATE
      ----------------------------- */

      await updatePassword(
        sessionToken,
        password
      );
      /* -----------------------------
         SUCCESS
      ----------------------------- */

      showMsg(
        "Password updated successfully. You can now sign in to the app.",
        "success"
      );

      setDone(true);

    } catch (error) {

      showMsg(
        error.message ||
        "Connection error. Please check your network and try again.",
        "error"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="reset-page">

      <div className="reset-card">

        {/* ICON */}

        <div className="icon-wrap">

          <svg viewBox="0 0 24 24">

            <rect
              x="3"
              y="11"
              width="18"
              height="11"
              rx="2"
            />

            <path d="M7 11V7a5 5 0 0 1 10 0v4" />

          </svg>

        </div>

        <h1>Set New Password</h1>

        <p className="subtitle">
          Choose a strong password for your account.
        </p>

        {/* PASSWORD */}

        <div className="field">

          <label>New password</label>

          <div className="input-wrap">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="At least 6 characters"
              autoComplete="new-password"
              value={password}
              disabled={done}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="toggle-btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>

          </div>

          <div className="strength-bar">

            <div
              className="strength-fill"
              style={{
                width: strength.width,
                background: strength.bg,
              }}
            />

          </div>

          <div
            className="strength-label"
            style={{ color: strength.bg }}
          >
            {strength.text}
          </div>

        </div>

        {/* CONFIRM */}

        <div className="field">

          <label>Confirm password</label>

          <div className="input-wrap">

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Repeat your password"
              autoComplete="new-password"
              value={confirm}
              disabled={done}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button
              className="toggle-btn"
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              👁
            </button>

          </div>

        </div>

        {/* BUTTON */}

        <button
          className="btn btn-primary"
          disabled={!isValid || loading || done}
          onClick={submitReset}
        >
          {
            done
              ? "Done"
              : loading
                ? "Updating..."
                : "Update Password"
          }
        </button>

        {/* MESSAGE */}

        {
          message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )
        }

        <div className="divider"></div>

        <p className="footer-note">
          You may close this tab after updating.
        </p>

      </div>

    </div>
  );
}