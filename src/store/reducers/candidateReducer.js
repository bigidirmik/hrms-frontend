import { LOGIN, LOGOUT } from "../actions/candidateActions";
import { candidateInitials } from "../initialValues/candidateInitials";

const initialState = {
  candidateInitials: candidateInitials,
};

export default function candidateReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      let candidate = state.candidateInitials.find((cI) => cI.candidate.id === payload.id);
      if (candidate) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          candidateInitials: [...state.candidateInitials, { candidate: payload }],
        };
      }
    case LOGOUT:
      return {
        ...state,
        candidateInitials: state.candidateInitials.filter(
          (cI) => cI.candidate.id !== payload.id
        )
      };
    default:
      return state;
  }
}
