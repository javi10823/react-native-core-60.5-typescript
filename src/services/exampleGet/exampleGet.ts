// @ts-ignore
import { API_URL } from "react-native-dotenv";

const handleResponse = async (response: any) => {
  if (response.status === 500) throw new Error(await response.text());
  const body = await response.json();
  return { ok: response.ok, status: response.status, body };
};

export const headers = (authToken: string) => ({
  "Content-Type": "application/json",
  accept: "application/json",
  authorization: `Bearer ${authToken}`
});

export const getExampleWithoutParamsAuth = async (authToken: string) => {
  const uri = `${API_URL}/endpoint/`;
  const response = await fetch(uri, { headers: headers(authToken) });
  return handleResponse(response);
};

interface ParamsExample {
  param1: string;
}

const serialize = (obj: any) =>
  Object.keys(obj)
    .filter(key => obj[key])
    .map(key => `${encodeURIComponent(obj[key])}`)
    .join("/");

export const getExampleWithParams = async (params: ParamsExample) => {
  const uri = `${API_URL}/endpoint/${serialize({
    param1: params.param1
  })}`;

  const response = await fetch(uri);

  return handleResponse(response);
};
