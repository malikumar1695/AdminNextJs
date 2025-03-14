import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/authService";

interface authState {
    user: any;
    token: string | null,
    loading: boolean,
    error: string | null;
}

const initialState: authState = {
    user: {},
    token: null,
    loading: false,
    error: null
}

const login = createAsyncThunk("auth/login",
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            return await loginUser(credentials);
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "login failed");
        }
    });

const authSlice = createSlice({
    name: '',
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, state => {
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;