import axios from "../Api";

export const fetchStudents = async () => {
  const response = await axios.get("/students");
  return response.data;
};

export const fetchStudentById = async (id: string) => {
  const response = await axios.get(`/students/${id}`);
  return response.data;
};

export const addStudent = async (studentData: any) => {
  const response = await axios.post("/students", studentData);
  return response.data;
};
