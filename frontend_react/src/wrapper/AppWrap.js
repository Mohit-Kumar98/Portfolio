import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />

        {/* <div className="copyright">
          <p className="p-text">@2023 Mohit</p>
          <p className="p-text">All rights reserved</p>
        </div> */}
      </div>
      {/* In which section we are */}
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;