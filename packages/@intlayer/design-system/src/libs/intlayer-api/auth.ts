import type {
  AskResetPasswordBody,
  AskResetPasswordResult,
  CreateSessionBody,
  CreateSessionResult,
  GetSessionInformationQuery,
  GithubLoginQueryParams,
  GoogleLoginQueryParams,
  GetSessionInformationResult,
  LoginBody,
  LoginResult,
  RegisterBody,
  RegisterResult,
  ResetPasswordParams,
  ResetPasswordResult,
  UpdatePasswordBody,
  UpdatePasswordResult,
  ValidEmailParams,
  ValidEmailResult,
  SetCSRFTokenResult,
} from '@intlayer/backend';
import { getConfiguration } from '@intlayer/config/client';
import { fetcher, type FetcherOptions } from './fetcher';

const backendURL = getConfiguration().editor.backendURL;
const AUTH_API_ROUTE = `${backendURL}/api/auth`;

export const getAuthAPI = (authAPIOptions: FetcherOptions = {}) => {
  /**
   * Logs in a user with the provided credentials.
   * @param user - User credentials.
   */
  const login = async (user: LoginBody, otherOptions: FetcherOptions = {}) =>
    await fetcher<LoginResult>(
      `${AUTH_API_ROUTE}/login`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
        body: user,
      }
    );

  /**
   * Gets the login with GitHub URL.
   * @param params - The parameters for the login with GitHub URL.
   * @returns The login with GitHub URL.
   */
  const getLoginWithGitHubURL = (params: GithubLoginQueryParams): string => {
    const searchParams = new URLSearchParams(params);

    return `${AUTH_API_ROUTE}/login/github?${searchParams.toString()}`;
  };

  /**
   * Gets the login with Google URL.
   * @param params - The parameters for the login with Google URL.
   * @returns The login with Google URL.
   */
  const getLoginWithGoogleURL = (params: GoogleLoginQueryParams): string => {
    const searchParams = new URLSearchParams(params);

    return `${AUTH_API_ROUTE}/login/google?${searchParams.toString()}`;
  };

  /**
   * Registers a new user with the provided credentials.
   * @param user - User credentials.
   * @returns User object.
   */
  const register = async (
    user: RegisterBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<RegisterResult>(
      `${AUTH_API_ROUTE}/register`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
        body: user,
      }
    );

  /**
   * Signs out the user.
   * @returns User object.
   */
  const logout = async (otherOptions: FetcherOptions = {}) =>
    await fetcher<void>(
      `${AUTH_API_ROUTE}/logout`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
      }
    );

  /**
   * Ask to resets the password of a user with the provided email address.
   * @param email - Email address of the user.
   * @returns User object.
   */
  const askResetPassword = async (
    email: AskResetPasswordBody['email'],
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<AskResetPasswordResult>(
      `${AUTH_API_ROUTE}/password/reset`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
        body: { email },
      }
    );

  /**
   * Resets the password of a user with the provided email address.
   * @param email - Email address of the user.
   * @returns User object.
   */
  const resetPassword = async (
    params: ResetPasswordParams,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<ResetPasswordResult>(
      `${AUTH_API_ROUTE}/password/reset`,
      authAPIOptions,
      otherOptions,
      { params, method: 'POST' }
    );

  /**
   * Changes the password of a user with the provided data.
   * @param data - New password and confirmation.
   * @returns User object.
   */
  const changePassword = async (
    data: UpdatePasswordBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<UpdatePasswordResult>(
      `${AUTH_API_ROUTE}/password`,
      authAPIOptions,
      otherOptions,
      {
        method: 'PUT',
        body: data,
      }
    );

  /**
   * Verifies the email address of a user with the provided token.
   * @param params - User ID and secret key.
   * @returns User object.
   */
  const verifyEmail = async (
    { userId, secret }: ValidEmailParams,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<ValidEmailResult>(
      `${AUTH_API_ROUTE}/active/${userId}/${secret}`,
      authAPIOptions,
      otherOptions,
      {
        method: 'PUT',
      }
    );

  /**
   * Creates a session for a user.
   * @param params - User ID and secret key.
   * @returns User object.
   */
  const createSession = async (
    data: CreateSessionBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<CreateSessionResult>(
      `${AUTH_API_ROUTE}/session`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
        body: data,
      }
    );

  /**
   * Gets a session and user.
   * @param params - User ID and secret key.
   * @returns User object.
   */
  const getSession = async (
    sessionToken?: GetSessionInformationQuery['session_token'],
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<GetSessionInformationResult>(
      `${backendURL}/session`,
      authAPIOptions,
      otherOptions,
      { params: { session_token: sessionToken } }
    );

  /**
   * Gets the CSRF token.
   * @returns The CSRF token.
   */
  const getCSRFToken = async (otherOptions: FetcherOptions = {}) =>
    await fetcher<SetCSRFTokenResult>(
      `${backendURL}/csrf-token`,
      authAPIOptions,
      otherOptions
    );

  return {
    login,
    getLoginWithGitHubURL,
    getLoginWithGoogleURL,
    register,
    logout,
    resetPassword,
    askResetPassword,
    verifyEmail,
    changePassword,
    createSession,
    getSession,
    getCSRFToken,
  };
};

export const authAPI = getAuthAPI();
