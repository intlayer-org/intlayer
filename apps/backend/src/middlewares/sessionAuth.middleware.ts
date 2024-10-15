/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrganizationModel } from '@models/organization.model';
import { ProjectModel } from '@models/project.model';
import {
  clearOrganizationAuth,
  clearProjectAuth,
} from '@services/sessionAuth.service';
import { getUserBySession as getUserBySessionService } from '@services/user.service';
import { Cookies } from '@utils/cookies';
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { Organization } from '@/types/organization.types';
import type { Project } from '@/types/project.types';
import type { User } from '@/types/user.types';

export enum AuthInformationType {
  IsNull,
  IsDefined,
}

type AuthInformationResult<
  T,
  U extends AuthInformationType | undefined,
> = U extends AuthInformationType.IsNull
  ? null
  : U extends AuthInformationType.IsDefined
    ? T
    : T | null;

export type AuthInformation<
  UserRule extends AuthInformationType | undefined = undefined,
  OrganizationRule extends AuthInformationType | undefined = undefined,
  ProjectRule extends AuthInformationType | undefined = undefined,
  AuthTypeRule extends AuthInformationType | undefined = undefined,
> = {
  user: AuthInformationResult<User, UserRule>;
  organization: AuthInformationResult<Organization, OrganizationRule>;
  project: AuthInformationResult<Project, ProjectRule>;
  authType: AuthInformationResult<'session' | 'oauth2', AuthTypeRule>;
};

export type ResponseWithInformation<
  ResBody = any,
  UserRule extends AuthInformationType | undefined = undefined,
  OrganizationRule extends AuthInformationType | undefined = undefined,
  ProjectRule extends AuthInformationType | undefined = undefined,
  AuthTypeRule extends AuthInformationType | undefined = undefined,
> = Response<
  ResBody,
  AuthInformation<UserRule, OrganizationRule, ProjectRule, AuthTypeRule>
>;

export const checkUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { [Cookies.JWT_AUTH]: sessionToken } = req.cookies;

  res.locals.user = null;
  res.locals.authType = null;

  try {
    if (sessionToken) {
      const user = await getUserBySessionService(sessionToken);

      if (user) {
        res.locals.user = user;
        res.locals.authType = 'session';
      }
    }
  } catch (error) {
    console.error('Error fetching session:', error);
  }

  return next();
};

export const checkOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwtTokenOrganization = req.cookies[Cookies.JWT_ORGANIZATION];

  res.locals.organization = null;

  try {
    if (!jwtTokenOrganization || jwtTokenOrganization === 'undefined') {
      clearOrganizationAuth(res);
      return next();
    }

    const organizationData = jwt.verify(
      jwtTokenOrganization,
      process.env.JWT_TOKEN_SECRET!
    ) as Organization;

    if (!organizationData) {
      clearOrganizationAuth(res);
      return next();
    }

    const organization = await OrganizationModel.findById(organizationData._id);

    if (!organization) {
      clearOrganizationAuth(res);
      return next();
    }

    res.locals.organization = organization;
  } catch (error) {
    console.error('Error fetching organization:', error);
  }

  return next();
};

export const checkProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwtTokenProject = req.cookies[Cookies.JWT_PROJECT];
  res.locals.project = null;

  try {
    if (!jwtTokenProject || jwtTokenProject === 'undefined') {
      clearProjectAuth(res);
      return next();
    }

    const decodedTokenProject = jwt.verify(
      jwtTokenProject,
      process.env.JWT_TOKEN_SECRET!
    ) as Project;

    if (!decodedTokenProject) {
      clearProjectAuth(res);
      return next();
    }

    const project = await ProjectModel.findById(decodedTokenProject._id);

    if (!project) {
      clearProjectAuth(res);
      return next();
    }

    res.locals.project = project;
  } catch (error) {
    console.error('Error fetching project:', error);
  }

  return next();
};