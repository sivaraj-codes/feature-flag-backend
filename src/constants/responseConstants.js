// HTTP Status Codes — no magic numbers
export const HTTP_STATUS = {
  // 2xx Success
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,

  // 4xx Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR: 500,
};

export const MESSAGES = {
  // auth
  LOGIN_SUCCESS: "Login successful",
  LOGOUT_SUCCESS: "Logout successfull",
  SIGNUP_SUCCESS: "Signup successful",
  INVALID_CREDENTIALS: "Invalid credentials",
  GET_USER_SUCCESS: "User fetched successfully",
  // orgs
  ORG_CREATED: "Organization created successfully",
  ORG_LIST_FETCHED: "Organizations fetched successfully",
  // flags
  FLAG_CREATED: "Feature flag created successfully",
  FLAG_UPDATED: "Feature flag updated successfully",
  FLAG_DELETED: "Feature flag deleted successfully",
  FLAG_LIST_FETCHED: "Feature flags fetched successfully",
  FLAG_CHECKED: "Feature flag checked successfully",
};
