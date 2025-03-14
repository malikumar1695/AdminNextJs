import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Error {
    status: number;
    message?: string;
    isLoading?: boolean
}

const initialState: Error = {
    status: 0,
    message: "",
    isLoading: false
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addError: (state, action: PayloadAction<Error>) => {
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const { addError,setLoading } = errorSlice.actions;

export default errorSlice.reducer;