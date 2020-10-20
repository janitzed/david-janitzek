import React from 'react';

import { Link } from 'react-router-dom';

import trans from '../Translations/trans';

import HeaderLanguagePopup from './HeaderLanguagePopup';

import HeaderSkinPopup from './HeaderSkinPopup';

import HeaderProfilesPopup from './HeaderProfilesPopup';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="Header">
        <div className="flex flex-space-between">
          <div>
            <Link className="a-animation" to="/history">
              {
                trans('history')
              }
            </Link>
            <Link className="a-animation" to="/projects">
              {
                trans('projects')
              }
            </Link>
          </div>
          <div>
            <HeaderProfilesPopup/>
            <HeaderSkinPopup />
            <HeaderLanguagePopup />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
