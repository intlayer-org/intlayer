'use client';

import { ProfileDropDown } from '@components/Auth/ProfileDropdown';
import { Link } from '@components/Link/Link';
import { LocaleSwitcher } from '@components/LocaleSwitcher/LocaleSwitcher';
import { SwitchThemeSwitcher } from '@components/ThemeSwitcherDropDown/SwitchThemeSwitcher';
import {
  Container,
  Logo,
  type Session,
  TabSelector,
} from '@intlayer/design-system';
import { usePathname } from 'next/navigation';
import React, { type FC, type ReactNode } from 'react';
import { type ExternalLinks, PagesRoutes } from '@/Routes';

export type NavbarProps = {
  links: {
    url: string | PagesRoutes | ExternalLinks;
    label: string;
    title: ReactNode;
  }[];
  session: Session | undefined | null;
};

export const DashboardNavbar: FC<NavbarProps> = ({ links, session }) => {
  const pathname = usePathname();
  const { organization, project } = session ?? {};

  return (
    <Container className="z-50 flex flex-col gap-3 p-4" roundedSize="none">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Link href={PagesRoutes.Home} label="Dashboard" color="text">
            <Logo type="logoOnly" className="size-6" />
          </Link>
          {organization && (
            <>
              <span>/</span>
              <div>{organization.name}</div>
            </>
          )}
          {project && (
            <>
              <span>/</span>
              <div>{project.name}</div>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <SwitchThemeSwitcher />
          <ProfileDropDown />
        </div>
      </div>
      <div className="flex gap-8 px-5">
        <TabSelector
          selectedChoice={pathname}
          tabs={links.map(({ url, label, title }) => (
            <Link
              key={url}
              href={url}
              label={label}
              color="text"
              variant="invisible-link"
              className="flex px-4 py-0.5"
            >
              {title}
            </Link>
          ))}
          hoverable
          color="text"
        />
      </div>
    </Container>
  );
};