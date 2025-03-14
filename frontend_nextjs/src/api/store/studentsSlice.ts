import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../api/studentsService";

// Define the state type
interface StudentsState {
  students: any[]; // You can replace `any` with a proper student type
  loading: boolean;
  error: string | null;
}

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null,
};

export const getStudents = createAsyncThunk<
  any[], // Replace with the actual response type
  void,
  { rejectValue: string }
>("students/getStudents", async (_, { rejectWithValue }) => {
  try {
    return await fetchStudents();
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Error fetching students");
  }
});

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudents.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.students = action.payload;
        state.error = null; // Clear error on success
      })
      .addCase(getStudents.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error occurred"; // Ensure it's always a string
      });
  },
});

export default studentsSlice.reducer;
