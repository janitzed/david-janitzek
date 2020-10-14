import React from 'react';

import trans from '../Translations/trans';

import possibleLanguagesLong from '../Functions/language/possibleLanguagesLong';

import setLanguage from '../Functions/language/setLanguage';

import PopupBox from 'react-revolution/public/PopupBox';

class HeaderLanguagePopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    setLanguage(language = 'English') {
        setLanguage(language);
        window.location.reload();
    }

    render() {

        return (
            <PopupBox
                globalStyle={true}
                animationTime={300}
                animation='top-right'
                icon={
                    <i className='fas fa-globe-europe' />
                }
                data={
                    <span className="popup">
                        <h1 className="ellipsis title">
                            <i className='fas fa-globe-europe' />
                            {
                                trans('changeLanguageTitle')
                            }
                        </h1>
                        <ul>
                            {
                                possibleLanguagesLong.map(language => {
                                    return (
                                        <li className="ellipsis" key={`language-${language}`} onClick={() => this.setLanguage(language)}>
                                            {
                                                language
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </span>
                }
            />
        );
    }
}

export default HeaderLanguagePopup;
