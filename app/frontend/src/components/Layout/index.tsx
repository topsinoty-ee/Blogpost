/** @format */

import React, { ComponentType } from 'react';
import Sidebar from './Sidebar';
import HeaderComponent from './Header';

const WithLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> => {
  return ({ ...props }: P) => {
    return (
      <div>
        <Sidebar />
        <HeaderComponent />
        <main>
          <WrappedComponent {...(props as P)} />
        </main>
      </div>
    );
  };
};

export default WithLayout;