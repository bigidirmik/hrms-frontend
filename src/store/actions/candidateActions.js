export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(candidate) {
  return {
    type: LOGIN,
    payload: candidate,
  };
}

export function logout(candidate) {
  return {
    type: LOGOUT,
    payload: candidate
  };
}
