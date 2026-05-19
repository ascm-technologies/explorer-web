import {
  verifyRecoveryTokenRequest,
  setSession,
  updateUser,
} from "./apiClient";

/* =========================
   VERIFY RECOVERY TOKEN
========================= */

export async function verifyRecoveryToken(
  tokenHash
) {

  const { data, error } =
    await verifyRecoveryTokenRequest(tokenHash);

  if (error || !data.session?.access_token) {

    const expired =
      error?.message
        ?.toLowerCase()
        .includes("expired");

    throw new Error(
      expired
        ? "This reset link has expired. Please request a new one from the app."
        : "Invalid reset link. Please request a new one."
    );
  }

  return data.session.access_token;
}

/* =========================
   UPDATE PASSWORD
========================= */

export async function updatePassword(
  sessionToken,
  password
) {

  /* -------------------------
     SET TEMP SESSION
  ------------------------- */

  const {
    error: sessionError,
  } = await setSession(
    sessionToken,
    sessionToken
  );

  if (sessionError) {

    throw new Error(
      "Session expired. Please request a new reset link."
    );
  }

  /* -------------------------
     UPDATE PASSWORD
  ------------------------- */

  const { error } =
    await updateUser(password);

  if (error) {

    const expired =
      error.message
        ?.toLowerCase()
        .includes("expired");

    throw new Error(

      expired
        ? "This reset link has expired. Please request a new one from the app."
        : (
            error.message ||
            "Update failed. Please try again."
          )
    );
  }

  return true;
}