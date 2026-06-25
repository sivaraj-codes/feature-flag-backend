export const setAuthCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true, // not accessible via JS
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "none", // For cross-origin SPA + API deployments:
    maxAge: 8 * 60 * 60 * 1000, // 8 hours in ms
  });
};

export const clearAuthCookie = (res) => {
  res.clearCookie("token");
};
