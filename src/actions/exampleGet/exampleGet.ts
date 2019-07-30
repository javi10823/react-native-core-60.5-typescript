import {
  getExampleWithParams,
  getExampleWithoutParamsAuth
} from "../../services/exampleGet/exampleGet";
import { requestApi } from "../../services/api";
import { REQUEST_EXAMPLE_GET } from "../types";

export type Action =
  | { type: "REQUEST_EXAMPLE_GET"; payload: any; error: Error }
  | { type: "REQUEST_EXAMPLE_GET_REQUEST"; payload: any; error: Error }
  | { type: "REQUEST_EXAMPLE_GET_RESPONSE"; payload: any; error: Error }
  | { type: "REQUEST_EXAMPLE_GET_ERROR"; payload: any; error: Error };

interface ParamsExample {
  param1: string;
}

export const exampleGetActionWithParams = (params: ParamsExample) => async (
  dispatch: any
): Promise<any> => {
  await dispatch(
    requestApi({
      type: REQUEST_EXAMPLE_GET,
      method: getExampleWithParams,
      params,
      authenticated: false
    })
  );
};

export const getExampleActionWithoutParamsAuth = () => async (
  dispatch: any
): Promise<any> => {
  await dispatch(
    requestApi({
      type: REQUEST_EXAMPLE_GET,
      method: getExampleWithoutParamsAuth,
      params: {},
      authenticated: true
    })
  );
};
