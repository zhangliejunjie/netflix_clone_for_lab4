import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
export const initialState = {
  loading: false,
  error: false,
  accounts: [],
};

// our slice
const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setAccounts: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.accounts = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

// export the actions
export const { setLoading, setAccounts, setError } = accountSlice.actions;

// export the selector (".accounts" being same as in slices/index.js's "accounts: something")
export const accountsSelector = (state) => state.accounts;

// export the default reducer
export default accountSlice.reducer;

// set up axios - simple json-server prototype config here
const api = axios.create({
  baseURL: "https://636a51dbb10125b78fd78f7f.mockapi.io/netflixx/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// fetch all accounts
export function fetchAccounts() {
  return async (dispatch) => {
    await api
      .get("/accounts")
      .then((response) => {
        dispatch(setAccounts(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}

// add new account
export function addAnAccount(account) {
  return async (dispatch) => {
    api
      .post("/accounts", {
        "name": account.name,
        "cover": account.cover,
        "email": account.email,
        "phone": account.phone,
        "program": account.program,
        "message": account.message,
      })
      .then((response) => {
        // dispatch(setAccounts(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}

// update new account
export function updateAnAccount(id, account) {
  return async (dispatch) => {
    api
      .put(`/accounts/${id}`, {
        "name": account.name,
        "cover": account.cover,
        "email": account.email,
        "phone": account.phone,
        "program": account.program,
        "message": account.message,
      })
      .then((response) => {
        // dispatch(setAccounts(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}

// delete new account
export function deleteAnAccount(id) {
  return async (dispatch) => {
    api
      .delete(`/accounts/${id}`)
      .then((response) => {
        // dispatch(setAccounts(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}
