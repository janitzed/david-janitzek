
import React from 'react';

import Cards from 'react-revolution/Cards';

import TextWriter from 'react-revolution/TextWriter';

import ArticlesImages from 'react-revolution/ArticlesImages';

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

    getRandomBackground(){

        const images = [
            'jonatan-pie-3l3RwQdHRHg-unsplash.jpg',
            'roman-synkevych-vXInUOv1n84-unsplash.jpg',
            'yancy-min-842ofHC6MaI-unsplash.jpg',
        ];

        return `./public/images/${images[Math.floor(Math.random() * images.length)]}`;
    }

    render() {
        const image = this.getRandomBackground();

        return (
            <div className="Home">
                <Header />
                <div
                    className="picture"
                    style={
                        {
                            backgroundImage: `url(${image})`,
                        }
                    }
                >
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
                <Footer />
            </div>
        );
    }
}

export default Home;
