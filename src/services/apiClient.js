import { supabase } from "../lib/supabase";

/* =========================
   VERIFY RECOVERY TOKEN
========================= */

export async function verifyRecoveryTokenRequest(tokenHash) {

  const res = await fetch(
    `${supabaseUrl}/auth/v1/verify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
      },
      body: JSON.stringify({
        token_hash: tokenHash,
        type: "recovery",
      }),
    }
  );

  const data = await res.json();

  return { data, error: !res.ok ? data : null };
}

/* =========================
   SET SESSION
========================= */

export async function setSession(
  accessToken,
  refreshToken
) {

  const { data, error } =
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

  return { data, error };
}

/* =========================
   UPDATE USER
========================= */

export async function updateUser(password) {

  const { data, error } =
    await supabase.auth.updateUser({
      password,
    });

  return { data, error };
}