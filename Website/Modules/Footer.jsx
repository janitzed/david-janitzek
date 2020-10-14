import React from 'react';
import trans from '../Translations/trans';

class Footer extends React.Component 
{
  render() {

    return (
      <div className="Footer">
          <h1>
            David Janitzek
          </h1>
          <h2>
            {
              trans('coder')
            }
          </h2>
      </div>
    );
  }
}

export default Footer;
