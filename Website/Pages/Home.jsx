
import React from 'react';

import Cards from 'react-revolution/public/Cards';

import trans from '../Translations/trans';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <div className="picture"></div>
                <div className="data">
                    <Cards
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={
                            [
                                {
                                    title: trans('history'),
                                    content: 'Content',
                                },
                                {
                                    title: trans('projects'),
                                    content: 'Content',
                                }
                            ]
                        }
                    />
                </div>
            </div>
        );
    }
}

export default Home;
