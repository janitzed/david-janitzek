import React from 'react';

import trans from '../Translations/trans';

import { uuid } from 'react-revolution';

import possibleLayouts from '../Functions/possibleLayouts';

import PopupBox from 'react-revolution/public/PopupBox';

class HeaderSkinPopup extends React.Component 
{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setAppLayout(this.getLocalStorageValue('layout', 'light'));
    }

    getLocalStorageValue(valueToGet, defaultValue) {
        let value = localStorage.getItem(valueToGet);

        if (null == value) {
            value = defaultValue;
        }

        return value;
    }

    setLayout(layout) {

        if (!possibleLayouts.includes(layout)) {
            layout = 'light';
        }

        localStorage.setItem('layout', layout);
        this.setAppLayout(layout);
    }

    setAppLayout(layout) {
        const app = document.getElementById('app');

        if (!possibleLayouts.includes(layout)) {
            layout = 'light';
        }

        if (app) {
            app.removeAttribute('class');

            if (layout !== 'light') {
                app.setAttribute('class', layout);
            }
        }
    }

    generateLayouts() {
        const items = [];

        possibleLayouts.map(name => {
            items.push(
                <li className="ellipsis" key={uuid()} onClick={() => this.setLayout(name)}>
                    {
                        trans(`${name}Theme`)
                    }
                </li>
            );
        })

        return (
            <ul>
                {
                    items
                }
            </ul>
        );
    }

    render() {

        return (
            <PopupBox
                globalStyle={true}
                animationTime={300}
                animation='top-right'
                icon={
                    <i className='fas fa-tint' />
                }
                data={
                    <span className="popup">
                        <h1 className="ellipsis title">
                            <i className='fas fa-tint' />
                            {
                                trans('changeTintTitle')
                            }
                        </h1>
                        {
                            this.generateLayouts()
                        }
                    </span>
                }
            />
        );
    }
}

export default HeaderSkinPopup;
