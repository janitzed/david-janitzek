import React from 'react';

import { Link } from 'react-router-dom';

import trans from '../Translations/trans';

import HeaderLanguagePopup from './HeaderLanguagePopup';

class Header extends React.Component 
{

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="Header">
        <div className="flex flex-space-between">
          <div>
            <Link to="/history">
              {
                trans('history')
              }
            </Link>
            <Link to="/projects">
              {
                trans('projects')
              }
            </Link>
          </div>
          <div>
            <HeaderLanguagePopup />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
