import { RegisterUser } from "../../services/authentication/authApi";
import { requestApi } from "../../services/api";
import { REQUEST_REGISTER_USER } from "../types";

export type Action =
  | { type: "REQUEST_REGISTER_USER"; payload: any; error: Error }
  | { type: "REQUEST_REGISTER_USER_REQUEST"; payload: any; error: Error }
  | { type: "REQUEST_REGISTER_USER_RESPONSE"; payload: any; error: Error }
  | { type: "REQUEST_REGISTER_USER_ERROR"; payload: any; error: Error };

interface ParamsRegisterUser {
  iid: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const registerUser = (params: ParamsRegisterUser) => async (
  dispatch: any
): Promise<any> => {
  await dispatch(
    requestApi({
      type: REQUEST_REGISTER_USER,
      method: RegisterUser,
      params,
      authenticated: false
    })
  );
};
