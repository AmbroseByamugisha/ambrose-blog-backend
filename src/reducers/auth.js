import * as actions from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false,
  },
  recoverPassword: {
    error: null,
    loading: false,
  },
  profileEdit: {
    error: null,
    loading: false,
  },
  deleteUser: {
    loading: false,
    error: null,
  },
};

// HELPER FUNCTIONS

const authStart = state => {
    return { ...state, loading: true };
  };
  
  const authEnd = state => {
    return { ...state, loading: false };
  };
  
  const authFail = (state, payload) => {
    return { ...state, error: payload };
  };
  
  const authSuccess = state => {
    return { ...state, error: false };
  };

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_START:
            return authStart(state);

        case actions.AUTH_END:
            return authEnd(state);

        case actions.AUTH_FAIL:
            return authFail(state, payload);

        case actions.AUTH_SUCCESS:
            return authSuccess(state);
        default:
            return state;
    }
};