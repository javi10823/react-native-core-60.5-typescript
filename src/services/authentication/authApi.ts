import { getConfig } from "../../config";

const config = getConfig();

const handleResponse = async (response: any) => {
  if (response.status === 500) throw new Error(await response.text());
  const body = await response.json();
  return { ok: response.ok, status: response.status, body };
};

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: config.API_URL,
  accept: "application/json"
});

interface ParamsRegisterUser {
  iid: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const RegisterUser = async (params: ParamsRegisterUser) => {
  const response = await fetch(`${config.API_URL}/register`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      iid: params.iid,
      email: params.email,
      password: params.password,
      firstName: params.firstName,
      lastName: params.lastName
    })
  });

  return handleResponse(response);
};
