
import React from 'react';

import Website from '../Modules/Website';

import Timeline from 'react-revolution/public/Timeline';

import TextWriter from 'react-revolution/public/TextWriter';

import mediaBreakAt from '../Functions/mediaBreakAt';

class History extends React.Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Website
                    addClass='History'
                    location='history'
                    content={
                        (
                            <div>
                                <h1 className='h1-title'>
                                    History
                                </h1>
                                <Timeline
                                    lineMiddle={true}
                                    lineTitle={false}
                                    borderStyle='dashed' 
                                    dashedSize='large' 
                                    mediaBreak={mediaBreakAt}
                                    data={
                                        [
                                            {
                                                title: '2019',
                                                align: 'left',
                                                content: (
                                                    <ul>
                                                        <li>
                                                            <TextWriter
                                                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                                                speed={30}
                                                            />
                                                        </li>
                                                    </ul>
                                                )
                                            },
                                            {
                                                title: '2019',
                                                align: 'right',
                                                content: (
                                                    <ul>
                                                        <li>
                                                            <TextWriter
                                                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                                                speed={30}
                                                            />
                                                        </li>
                                                    </ul>
                                                )
                                            },
                                            {
                                                title: '2019',
                                                align: 'left',
                                                content: (
                                                    <ul>
                                                        <li>
                                                            <TextWriter
                                                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                                                speed={30}
                                                            />
                                                        </li>
                                                    </ul>
                                                )
                                            },
                                            {
                                                title: '2019',
                                                align: 'right',
                                                content: (
                                                    <ul>
                                                        <li>
                                                            <TextWriter
                                                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                                                speed={30}
                                                            />
                                                        </li>
                                                    </ul>
                                                )
                                            },
                                            {
                                                title: '2019',
                                                align: 'left',
                                                content: (
                                                    <ul>
                                                        <li>
                                                            <TextWriter
                                                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
                                                                speed={30}
                                                            />
                                                        </li>
                                                    </ul>
                                                )
                                            }
                                        ]
                                    }
                                />
                            </div>
                        )
                    }
                />
            </div>
        );
    }
}

export default History;
