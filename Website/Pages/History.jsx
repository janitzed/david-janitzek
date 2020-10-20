
import React from 'react';

import Website from '../Modules/Website';

import Timeline from 'react-revolution/Timeline';

import TextWriter from 'react-revolution/TextWriter';

import mediaBreakAt from '../Functions/mediaBreakAt';

import trans from '../Translations/trans';

class History extends React.Component {
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
                                    <TextWriter
                                        text={trans('area_history')}
                                        speed={30}
                                        pipeDisplay={true}
                                        pipeChar={''}
                                        pipeSite='right'
                                        pipePersist={false}
                                    />
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
                                                title: `2019 - ${trans('now')}`,
                                                align: 'left',
                                                content: (
                                                    <div className="box">
                                                        <div className='title'>
                                                            <h1>
                                                                {
                                                                    `neubau kompass AG, ${trans('munich')}`
                                                                }
                                                            </h1>
                                                            <h2>
                                                                Full Stack Developer
                                                            </h2>
                                                        </div>
                                                        <div className='tasks'>
                                                            {
                                                                trans('2019_now')
                                                            }
                                                            <div className='icons'>
                                                                <i className="fab fa-php php"></i>
                                                                <i className="fab fa-node node"></i>
                                                                <i className="fab fa-js-square js"></i>
                                                                <i className="fab fa-react react"></i>
                                                                <i className="fab fa-css3 css"></i>
                                                                <i className="fab fa-html5 html"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: '2018 - 2019',
                                                align: 'right',
                                                content: (
                                                    <div className="box">
                                                        <div className='title'>
                                                            <h1>
                                                                {
                                                                    `Fonds Finanz Maklerservice GmbH, ${trans('munich')}`
                                                                }
                                                            </h1>
                                                            <h2>
                                                                Full Stack Developer
                                                            </h2>
                                                        </div>
                                                        <div className='tasks'>
                                                            {
                                                                trans('2018_2019')
                                                            }
                                                            <div className='icons'>
                                                                <i className="fab fa-php php"></i>
                                                                <i className="fab fa-node node"></i>
                                                                <i className="fab fa-js-square js"></i>
                                                                <i className="fab fa-react react"></i>
                                                                <i className="fab fa-css3 css"></i>
                                                                <i className="fab fa-html5 html"></i>
                                                                <i className="fab fa-docker docker"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: '2017 - 2018',
                                                align: 'left',
                                                content: (
                                                    <div className="box">
                                                        <div className='title'>
                                                            <h1>
                                                                {
                                                                    `Fonds Finanz Maklerservice GmbH, ${trans('munich')}`
                                                                }
                                                            </h1>
                                                            <h2>
                                                                Full Stack Developer - Junior
                                                            </h2>
                                                        </div>
                                                        <div className='tasks'>
                                                            {
                                                                trans('2017_2018')
                                                            }
                                                            <div className='icons'>
                                                                <i className="fab fa-php php"></i>
                                                                <i className="fab fa-node node"></i>
                                                                <i className="fab fa-js-square js"></i>
                                                                <i className="fab fa-react react"></i>
                                                                <i className="fab fa-css3 css"></i>
                                                                <i className="fab fa-html5 html"></i>
                                                                <i className="fab fa-docker docker"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: '2015 - 2017',
                                                align: 'right',
                                                content: (
                                                    <div className="box">
                                                        <div className='title'>
                                                            <h1>
                                                                IBM Deutschland CSS GmbH, Erfurt
                                                            </h1>
                                                            <h2>
                                                                IBM CSS Service Desk - Helpliner
                                                            </h2>
                                                        </div>
                                                        <div className='tasks'>
                                                            {
                                                                trans('2015_2017')
                                                            }
                                                            <div className='icons'>
                                                                <i className="fas fa-phone"></i>
                                                                <i className="fab fa-windows docker"></i>
                                                                <i className="fas fa-laptop html"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: '2013 - 2014',
                                                align: 'left',
                                                content: (
                                                    <div className="box">
                                                        <div className='title'>
                                                            <h1>
                                                                {
                                                                    `Capgemini, ${trans('kattowitz')}`
                                                                }
                                                            </h1>
                                                            <h2>
                                                                Assistent für technische Störungen - IT Service Desk (Deutsche Bahn AG)
                                                            </h2>
                                                        </div>
                                                        <div className='tasks'>
                                                            {
                                                                trans('2013_2014')
                                                            }
                                                            <div className='icons'>
                                                                <i className="fas fa-phone"></i>
                                                                <i className="fab fa-windows docker"></i>
                                                                <i className="fas fa-laptop html"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                            {
                                                title: '2007 - 2013',
                                                align: 'right',
                                                content: (
                                                    <div className="box">
                                                        <div className='title'>
                                                            <h1>
                                                                {
                                                                    `Jani Fitness Fun, ${trans('tarnowitz')}`
                                                                }
                                                            </h1>
                                                            <h2>
                                                                Personal Trainer
                                                            </h2>
                                                        </div>
                                                        <div className='tasks'>
                                                            {
                                                                trans('2007_2013')
                                                            }
                                                            <div className='icons'>
                                                                <i className="fas fa-dumbbell"></i>
                                                                <i className="fas fa-running js"></i>
                                                                <i className="fas fa-biking js"></i>
                                                                <i className="fas fa-heartbeat heart"></i>
                                                                <i className="fas fa-weight node"></i>
                                                                <i className="fas fa-clipboard-list docker"></i>
                                                            </div>
                                                        </div>
                                                    </div>
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
