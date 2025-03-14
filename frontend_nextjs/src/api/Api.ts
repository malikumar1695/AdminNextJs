import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "./store/store";
import { addError, setLoading } from "./error/errorSlice";

axios.defaults.baseURL = "http://localhost:5000"; //"https://quransiteapis.azurewebsites.net/api";//"https://localhost:7065/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(
  async (resp) => {
    return resp;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { data, status } = error.response;

      switch (status) {
        case 200:
          console.log("success request 200");
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
        case 400:
          console.log("bad request 400");
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
        case 401:
          console.log("unathorized 401"); //, detail:" + data!);
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
        case 403:
          console.log("forbidden 403"); //, detail:" + data!);
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
        case 404:
          console.log("Not Found 404"); //, detail:" + data!);
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
        case 408:
          console.log("request timeout 408"); //, detail:" + data!);
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
        case 500:
          console.log("server error 500"); //detail:");// + data!);
          store.dispatch(
            addError({
              message: typeof data === "string" ? data : undefined,
              status: status,
            })
          );
          store.dispatch(setLoading(false));
          break;
      }
    } else {
      store.dispatch(addError({ status: 0, message: error.message }));
      store.dispatch(setLoading(false));
    }
    console.error("default " + error);
    return Promise.reject(error);
  }
);

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};
// const email = {
//   postContactUsForm: (url: string, body: MessageFormDto) =>
//     request.post<boolean>(`${url}`, body),

// };

const Api = {
  //email,
};

export default axios;