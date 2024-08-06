/** @format */

import React from 'react';
import SideLink, { SideLinkProps } from './SideLink';

const sideLinks: SideLinkProps[] = [
  {
    title: 'Home',
    type: 'link',
    path: '/',
  },
  {
    title: 'Stats',
    type: 'modal',
  },
  {
    title: 'Messages',
    type: 'modal',
  },
  {
    title: 'Account',
    type: 'dropbox',
    dropboxOptions: [
      { title: 'Profile', path: '/profile' },
      { title: 'Help', path: '/help' },
      { title: 'Support', path: '/support' },
      { title: 'Logout', path: '/logout' },
    ],
  },
  {
    title: 'Explore',
    path: '/explore',
  },
  {
    title: 'Settings',
    path: '/settings',
  },
];

const Sidebar = () => {
  return (
    <aside>
      {/* Logo */}
      <div>
        <code>LOGO</code>
      </div>
      <nav>
        {sideLinks.map((link, index) => (
          <SideLink
            key={index}
            {...link}
          />
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar