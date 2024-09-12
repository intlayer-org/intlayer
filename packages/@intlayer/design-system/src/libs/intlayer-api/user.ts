import type {
  CreateUserBody,
  CreateUserResult,
  GetUserByAccountParams,
  GetUserByAccountResult,
  GetUserByEmailParams,
  GetUserByEmailResult,
  GetUserByIdParams,
  GetUserByIdResult,
  GetUsersParams,
  GetUsersResult,
  UpdateUserBody,
  UpdateUserResult,
} from '@intlayer/backend';
import { getConfiguration } from '@intlayer/config/client';
import { fetcher, type FetcherOptions } from './fetcher';

const backendURL = getConfiguration().editor.backendURL;
const USER_API_ROUTE = `${backendURL}/api/user`;

export const getUserAPI = (authAPIOptions: FetcherOptions = {}) => {
  /**
   * Retrieves a list of users based on filters and pagination.
   * @param filters - Filters and pagination options.
   * @returns List of users.
   */
  const getUsers = async (
    filters?: GetUsersParams,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<GetUsersResult>(
      USER_API_ROUTE,
      authAPIOptions,
      otherOptions,
      {
        params: filters,
      }
    );

  /**
   * Retrieves a user by ID.
   * @param userId - User ID.
   * @returns User object.
   */
  const getUserById = async (
    userId: GetUserByIdParams['userId'],
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<GetUserByIdResult>(
      `${USER_API_ROUTE}/${userId}`,
      authAPIOptions,
      otherOptions
    );

  /**
   * Retrieves a user by email.
   * @param email - User email.
   * @returns User object.
   */
  const getUserByEmail = async (
    email: GetUserByEmailParams['email'],
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<GetUserByEmailResult>(
      `${USER_API_ROUTE}/email/${email}`,
      authAPIOptions,
      otherOptions
    );

  /**
   * Retrieves a user by account.
   * @param providerAccountId - The provider account ID.
   * @param provider - The provider of the account.
   */
  const getUserByAccount = async (
    providerAccountId: GetUserByAccountParams['providerAccountId'],
    provider: GetUserByAccountParams['provider'],
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<GetUserByAccountResult>(
      `${USER_API_ROUTE}/account/${provider}/${providerAccountId}`,
      authAPIOptions,
      otherOptions
    );

  /**
   * Creates a new user.
   * @param user - User credentials.
   * @returns User object.
   */
  const createUser = async (
    user: CreateUserBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<CreateUserResult>(
      `${USER_API_ROUTE}/`,
      authAPIOptions,
      otherOptions,
      {
        method: 'POST',
        body: user,
      }
    );

  /**
   * Updates the user with the provided data.
   * @param user - Updated user data.
   * @returns User object.
   */
  const updateUser = async (
    user: UpdateUserBody,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<UpdateUserResult>(
      `${USER_API_ROUTE}`,
      authAPIOptions,
      otherOptions,
      {
        method: 'PUT',
        body: user,
      }
    );

  /**
   * Deletes a user with the provided ID.
   * @param userId - User ID.
   * @returns User object.
   */
  const deleteUser = async (
    userId: string,
    otherOptions: FetcherOptions = {}
  ) =>
    await fetcher<UpdateUserResult>(
      `${USER_API_ROUTE}/${userId}`,
      authAPIOptions,
      otherOptions,
      {
        method: 'DELETE',
      }
    );

  return {
    createUser,
    getUsers,
    getUserById,
    getUserByAccount,
    getUserByEmail,
    updateUser,
    deleteUser,
  };
};

export const userAPI = getUserAPI();
