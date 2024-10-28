'use client';

import type {
  OAuth2Token,
  Organization,
  Project,
  UserAPI,
} from '@intlayer/backend';
import {
  type PropsWithChildren,
  type FC,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useCSRF } from './useCSRF';
import { useOAuth2 } from './useOAuth2';
import { useSession } from './useSession';

export type Session = {
  user: UserAPI | null;
  organization: Organization | null;
  project: Project | null;
};

type SessionContextProps = {
  session: Session | null | undefined;
  setSession: (session: Session | null) => void;
  fetchSession: () => Promise<void>;
  revalidateSession: () => Promise<void>;
  csrfToken: string | null | undefined;
  csrfTokenFetched: boolean;
  setCsrfToken: (csrfToken: string | null) => void;
  oAuth2AccessToken: OAuth2Token | null | undefined;
  setOAuth2AccessToken: (oAuth2AccessToken: OAuth2Token | null) => void;
  isProjectAdmin: boolean;
  isOrganizationAdmin: boolean;
};

export const AuthContext = createContext<SessionContextProps>({
  session: undefined,
  setSession: () => null,
  fetchSession: () => Promise.resolve(),
  revalidateSession: () => Promise.resolve(),
  csrfToken: null,
  csrfTokenFetched: false,
  setCsrfToken: () => null,
  oAuth2AccessToken: null,
  setOAuth2AccessToken: () => null,
  isProjectAdmin: false,
  isOrganizationAdmin: false,
});

export const useAuth = () => useContext(AuthContext);

export type AuthProviderProps = PropsWithChildren<{
  /**
   * auth session
   */
  session?: Session | null;
}>;

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({
  children,
  session: sessionProp,
}) => {
  const { csrfToken, setCsrfToken, csrfTokenFetched } = useCSRF();
  const { session, fetchSession, revalidateSession, setSession } =
    useSession(sessionProp);
  const { oAuth2AccessToken, setOAuth2AccessToken, fetchAccessToken } =
    useOAuth2(csrfToken);
  const [isProjectAdmin, setIsProjectAdmin] = useState<boolean>(false);
  const [isOrganizationAdmin, setIsOrganizationAdmin] =
    useState<boolean>(false);

  useEffect(() => {
    if (session?.user && session.organization) {
      setIsOrganizationAdmin(
        session.organization.adminsIds.includes(session.user._id)
      );
    }
    if (session?.user && session.project) {
      setIsProjectAdmin(
        session.project?.adminsIds.includes(session.user._id) ?? false
      );
    }
  }, [session]);

  const memoValue: SessionContextProps = useMemo(
    () => ({
      session,
      fetchSession,
      setSession,
      revalidateSession,
      csrfToken,
      csrfTokenFetched,
      setCsrfToken,
      oAuth2AccessToken,
      setOAuth2AccessToken,
      fetchAccessToken,
      isProjectAdmin,
      isOrganizationAdmin,
    }),
    [
      session,
      setSession,
      fetchSession,
      revalidateSession,
      csrfToken,
      csrfTokenFetched,
      setCsrfToken,
      oAuth2AccessToken,
      setOAuth2AccessToken,
      fetchAccessToken,
      isProjectAdmin,
      isOrganizationAdmin,
    ]
  );

  return (
    <AuthContext.Provider value={memoValue}>{children}</AuthContext.Provider>
  );
};
