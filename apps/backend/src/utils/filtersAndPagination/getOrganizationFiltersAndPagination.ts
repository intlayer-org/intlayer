import type { Request } from 'express';
import {
  type FiltersAndPagination,
  getFiltersAndPaginationFromBody,
} from './getFiltersAndPaginationFromBody';

export type OrganizationFilters = {
  ids?: string;
  name?: string;
};

/**
 * Extracts filters and pagination information from the request body.
 * @param req - Express request object.
 * @returns Object containing filters, page, pageSize, and getNumberOfPages functions.
 */
export const getOrganizationFiltersAndPagination = (
  req: Request<FiltersAndPagination<OrganizationFilters>>
) => {
  const { filters: filtersRequest, ...pagination } =
    getFiltersAndPaginationFromBody<OrganizationFilters>(req);

  let filters = {};

  if (Object.keys(filtersRequest).length > 0) {
    const { name, ids } = filtersRequest;

    filters = {};

    if (ids) {
      const idsArray = ids.split(',');
      filters = { ...filters, id: { $in: idsArray } };
    }

    if (name) {
      filters = { ...filters, name: new RegExp(name, 'i') };
    }
  }

  return { filters, ...pagination };
};