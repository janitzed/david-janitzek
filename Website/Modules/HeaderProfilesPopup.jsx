import React from 'react';

import trans from '../Translations/trans';

import { uuid } from 'react-revolution';

import PopupBox from 'react-revolution/PopupBox';

class HeaderProfilesPopup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const icon = 'fas fa-user-circle';

        return (
            <PopupBox
                globalStyle={true}
                animationTime={300}
                animation='top-right'
                icon={
                    <i className={icon} />
                }
                data={
                    <span className="popup">
                        <h1 className="ellipsis title">
                            <i className={icon} />
                            {
                                trans('profiles')
                            }
                        </h1>
                        <ul>
                            {
                                [
                                    {
                                        text: 'Github',
                                        link: 'https://github.com/janitzed'
                                    },
                                ].map(object => {

                                    return (
                                        <li key={uuid()} className='p-0-15'>
                                            <a href={object.link} className='m-5-0 p-0 ellipsis' target='_blank'>
                                                {
                                                    object.text
                                                }
                                            </a>
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

export default HeaderProfilesPopup;
