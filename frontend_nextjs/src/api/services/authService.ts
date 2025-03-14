import axios from "../Api";

export const loginUser = async (credentials: { email: string, password: string }) => {
    const response = await axios.post('auth/login', credentials);
    return response.data;
}