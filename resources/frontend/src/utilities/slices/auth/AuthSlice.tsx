import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState, IAuthPayload } from "../../types/slices/authSlice";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";

const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    user_role: 0,
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserSignIn.pending, (state) => {
                state.isLoading = true;
                state.token = "";
                state.isAuthenticated = false;
            })
            .addCase(UserSignIn.fulfilled, (state, { payload }) => {
                console.log(payload);
                setPayloadValuesIntoStore(state, payload);
            })
            .addCase(UserSignIn.rejected, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    },
});

const setPayloadValuesIntoStore = (
    state: IAuthInitialState,
    payload: IAuthPayload,
) => {
    if (!payload) {
        return;
    }

    state.user_id = payload.user_id;
    state.token = payload.user_token;
    state.user_role = payload.user_role;
    state.isAuthenticated = true;
    state.isLoading = false;

    localStorage.setItem('token', payload.user_token);
};

export default authSlice.reducer;
