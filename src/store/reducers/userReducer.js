import { LOGIN, LOGOUT } from "../actions/userActions";
import { userInitials } from "../initialValues/userInitials";

const initialState = {
  userInitials: userInitials,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return{
        userInitials: [{ user: payload }]
      }
      // let user = state.userInitials.find((uI) => uI.user.id === payload.id);
      // if (user) {
      //   return {
      //     ...state,
      //   };
      // } else {
      //   return {
      //     ...state,
      //     userInitials: [{ user: payload }],
      //   };
      // }
    case LOGOUT:
      return{
        userInitials: []
      }
      // return {
      //   ...state,
      //   userInitials: state.userInitials.filter(
      //     (uI) => uI.user.id !== payload.id
      //   )
      // };
    default:
      return state;
  }
}
