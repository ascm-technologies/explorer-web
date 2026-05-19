export function extractRecoveryTokens() {

  const hashParams = new URLSearchParams(
    window.location.hash.replace("#", "")
  );

  const queryParams = new URLSearchParams(
    window.location.search
  );

  return {

    accessToken:
      hashParams.get("access_token") ||
      queryParams.get("access_token"),

    tokenHash:
      queryParams.get("token_hash"),

  };
}