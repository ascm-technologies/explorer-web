import { ENV } from "../config/env";

/* =========================
   VERIFY RECOVERY TOKEN
========================= */

export async function verifyRecoveryToken(tokenHash) {

  const verifyRes = await fetch(
    `${ENV.SUPABASE_URL}/auth/v1/verify`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "apikey": ENV.SUPABASE_ANON_KEY,
      },

      body: JSON.stringify({
        token_hash: tokenHash,
        type: "recovery",
      }),
    }
  );

  const verifyData = await verifyRes.json();

  if (!verifyRes.ok || !verifyData.access_token) {

    const expired =
      verifyRes.status === 401 ||
      (
        verifyData.error_description ||
        verifyData.message ||
        ""
      )
        .toLowerCase()
        .includes("expir");

    throw new Error(
      expired
        ? "This reset link has expired. Please request a new one from the app."
        : "Invalid reset link. Please request a new one."
    );
  }

  return verifyData.access_token;
}

/* =========================
   UPDATE PASSWORD
========================= */

export async function updatePassword(
  sessionToken,
  password
) {

  const res = await fetch(
    `${ENV.SUPABASE_URL}/auth/v1/user`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "apikey": ENV.SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${sessionToken}`,
      },

      body: JSON.stringify({
        password,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {

    const isExpired =
      res.status === 401 ||
      (
        data.msg ||
        data.message ||
        data.error_description ||
        ""
      )
        .toLowerCase()
        .includes("expir");

    throw new Error(

      isExpired
        ? "This reset link has expired. Please request a new one from the app."
        : (
            data.msg ||
            data.message ||
            data.error_description ||
            "Update failed. Please try again."
          )
    );
  }

  return data;
}
