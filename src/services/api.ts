interface ApiRequestParams {
  type: string;
  params: object;
}

type ApiResponseParams = {
  response: ResponseType;
} & ApiRequestParams;

type ApiErrorParams = {
  error: object;
} & ApiRequestParams;

interface ResponseType {
  status: number;
}

const apiRequest = ({ type, params }: ApiRequestParams) => ({
  type: `${type}_REQUEST`,
  requestType: type,
  params,
});

const apiResponse = ({ type, params, response }: ApiResponseParams) => ({
  type: `${type}_RESPONSE`,
  requestType: type,
  payload: response,
  params,
});

const apiError = ({ type, params, error }: ApiErrorParams) => ({
  type: `${type}_ERROR`,
  requestType: type,
  params,
  error: { error, type },
});

interface RequestApiParams {
  authenticated: boolean;
  params: object;
  method: (auth: any, params: object) => Promise<any>;
  type: string;
}

export const requestApi = ({
  type,
  method,
  params,
  authenticated = false,
}: RequestApiParams) => async (dispatch: any, getState: any) => {
  try {
    dispatch(apiRequest({ type, params }));

    let auth;
    if (authenticated) {
      auth = getState().account.user;
    }

    const response = await method(auth, params);

    switch (response.status) {
      case 401:
        return response;
      case 200:
      case 201:
      case 422:
        dispatch(apiResponse({ type, params, response }));
        return response;
      default:
        // TODO auto-retry downtime errors (test out restarting the server)
        throw new Error(`Unhandled API response ${response.status}`);
    }
  } catch (error) {
    // Logger.error(error, { params, state: getState() });
    dispatch(apiError({ type, params, error }));
    throw error;
  }
};
