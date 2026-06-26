export const setAuthCookie = (res, token) => {
  const isProd = process.env.NODE_ENV === "production";
  res.cookie("token", token, {
    httpOnly: true, // not accessible via JS
    secure: isProd, // HTTPS only in prod
    sameSite: isProd ? "none" : "lax", // none-For cross-origin SPA + API deployments:  lax- works for local same-machine dev
    maxAge: 8 * 60 * 60 * 1000, // 8 hours in ms
  });
};

export const clearAuthCookie = (res) => {
  res.clearCookie("token");
};
