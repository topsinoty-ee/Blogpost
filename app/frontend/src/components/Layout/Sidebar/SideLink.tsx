/** @format */

import { Link } from 'gatsby';
import React from 'react';

// Base interface with common properties
interface BaseSideLink {
  title: string;
  type?: 'modal' | 'link' | 'dropbox'; // 'type' is optional here
}

// Interface for 'link' type
interface LinkSideLink extends BaseSideLink {
  type?: 'link'; // Default type is 'link'
  path: string;
}

// Interface for 'modal' type
interface ModalSideLink extends BaseSideLink {
  type: 'modal';
  id?: string;
}

// Interface for 'dropbox' type
interface DropboxSideLink extends BaseSideLink {
  type: 'dropbox';
  dropboxOptions: SideLinkProps[]; // Recursively use SideLinkProps for nested dropdowns
}

// Union type for all possible SideLink props
export type SideLinkProps = LinkSideLink | ModalSideLink | DropboxSideLink;

const SideLink: React.FC<SideLinkProps> = (props) => {
  const { title, type = 'link' } = props; // Default to 'link' if type is not specified

  switch (type) {
    case 'modal':
      // Type assertion needed here for `id` if used in Modal component
      return <div>{/* Modal component */}</div>;

    case 'dropbox':
      const { dropboxOptions } = props as DropboxSideLink;
      return (
        <div>
          <h3>{title}</h3>
          <ul>
            {dropboxOptions.map((item, index) => (
              <li key={index}>
                <SideLink {...item} />
              </li>
            ))}
          </ul>
        </div>
      );

    case 'link':
    default:
      const { path } = props as LinkSideLink;
      return <Link to={path}>{title}</Link>;
  }
};

export default SideLink;
