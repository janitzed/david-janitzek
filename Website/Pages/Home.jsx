
import React from 'react';

import Cards from 'react-revolution/public/Cards';

import TextWriter from 'react-revolution/public/TextWriter';

import ArticlesImages from 'react-revolution/public/ArticlesImages';

import trans from '../Translations/trans';

import { Link } from 'react-router-dom';

import Header from '../Modules/Header';

import Footer from '../Modules/Footer';

import mediaBreakAt from '../Functions/mediaBreakAt';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    generateCardsData(icon, h1Title, content, link) {
        return {
            title: (
                <div className='flex flex-column'>
                    <i className={icon}></i>
                    <h1>
                        {
                            trans(h1Title)
                        }
                    </h1>
                </div>
            ),
            content: (
                <span>
                    {
                        trans(content)
                    }
                    <div className='link'>
                        <Link to={`/${link}`} className='link-animation'>
                            {
                                trans('readMore')
                            }
                        </Link>
                    </div>
                </span>
            )
        };
    }

    render() {
        return (
            <div className="Home">
                <Header/>
                <div className="picture">
                    <div className='text'>
                        <h1>
                            David Janitzek
                    </h1>
                        <h2>

                            <TextWriter
                                text={trans("coder")}
                                speed={30}
                                pipeDisplay={true}
                                pipeChar={'#'}
                                pipeSite='left'
                                pipePersist={true}
                            />
                        </h2>
                    </div>
                </div>
                <div className="data">
                    <Cards
                        itemsPerLine={2}
                        mediaBreak={mediaBreakAt}
                        data={
                            [
                                this.generateCardsData('fas fa-stream', 'history', 'historyBox', 'history'),
                                this.generateCardsData('fas fa-tasks', 'projects', 'projectsBox', 'projects')
                            ]
                        }
                    />
                </div>
                <h1 className='h1-title'>
                    {
                        trans('recentProjects')
                    }
                </h1>
                <ArticlesImages
                    animation='opacity'
                    toggleOn='text'
                    persist={true}
                    itemsPerLine={1}
                    mediaBreak={mediaBreakAt}
                    data={
                        [
                            {
                                title: 'React Revolution',
                                image: `${process.env.HOST}public/images/react-revolution.png`,
                                text: (
                                    <span>
                                        {
                                            trans('project_reactRevolution')
                                        }
                                    </span>
                                ),
                            },
                            {
                                title: 'Chat',
                                image: `${process.env.HOST}public/images/chat.png`,
                                text: (
                                    <span>
                                        {
                                            trans('project_chat')
                                        }
                                    </span>
                                ),
                            },
                        ]
                    }
                />
                <Footer/>
            </div>
        );
    }
}

export default Home;
