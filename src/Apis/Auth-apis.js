import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

//signup api body{name, userId, email, password, address, age, userType}
export async function signUp(data) {
  return await axios.post(`${BACKEND_URL}/mba/api/v1/auth/signup`, data);
}

//signin api body{userId, password}
export async function signIn(data) {
  return await axios.post(`${BACKEND_URL}/mba/api/v1/auth/signin`, data);
}
