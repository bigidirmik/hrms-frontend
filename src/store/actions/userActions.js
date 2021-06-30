export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function logout(user) {
  return {
    type: LOGOUT,
    payload: user
  };
}
