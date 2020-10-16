
import React from 'react';

import Container from 'react-revolution/public/Container';

import SideBar from 'react-revolution/public/SideBar';

import { uuid } from 'react-revolution';

import MenuClickHorizontal from 'react-revolution/public/MenuClickHorizontal';

import trans from '../Translations/trans';

import HeaderLanguagePopup from './HeaderLanguagePopup';

import HeaderSkinPopup from './HeaderSkinPopup';

import { Link } from 'react-router-dom';

import mediaBreakAt from '../Functions/mediaBreakAt';

class Website extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            content: props.content,
            location: props.location,
            addClass: props.addClass
        }
    }

    getFooter(){
        const { location } = this.state;
        const links = [];

        const pushLink = (to, translation) => {
            links.push(
                <Link 
                    key={uuid()} 
                    to={`/${to}`} 
                    className='link-animation'
                >
                    {
                        trans(translation)
                    }
                </Link>
            );
        }

        if('history' == location){
            pushLink('', 'home');
            pushLink('projects', 'projects');
        }

        if('projects' == location){
            pushLink('history', 'history');
        }

        return (
            <div className='footer-links flex flex-space-between'>
                {
                    links  
                }
            </div>
        );
    }

    render() {
        const { content, addClass } = this.state;

        return (
            <Container
                addClass={addClass}
                persistUserSelection={false}
                clearPersistUserSelection={true}
                sidebarMinifiedAt={mediaBreakAt}
                sidebarMaxifiedAt={720}
                displayMinifyMaxifyIcon={true}
                minify={false}
                autopilot={true}
                toggleMenuHtml={
                    <i className="fas fa-bars " />
                }
                closeMenuHtml={
                    <i className="fas fa-angle-left" />
                }
                moduleSidebar={
                    <SideBar
                        image={<img alt="image" src={`${process.env.HOST}public/images/google-play-music-2-icon.png`} />}
                        textLong='David Janitzek'
                        textShort='developer'
                        href={`${process.env.HOST}`}
                        globalStyle={true}
                        moduleMenu={
                            <MenuClickHorizontal
                                reactRouter={true}
                                animation='height'
                                data={
                                    [
                                        {
                                            icon: <i className="fas fa-home"></i>,
                                            text: trans('home'),
                                            href: '/',
                                        },
                                        {
                                            icon: <i className="fas fa-stream"></i>,
                                            text: trans('history'),
                                            href: '/history',
                                        },
                                        {
                                            icon: <i className="fas fa-tasks"></i>,
                                            text: trans('projects'),
                                            href: '/projects',
                                        },
                                    ]
                                }
                            />
                        }
                    />
                }
                headerProps={undefined}
                headerData={
                    <div>
                        <HeaderLanguagePopup />
                        <HeaderSkinPopup />
                    </div>
                }
                contentProps={undefined}
                contentData={content}
                footerProps={undefined}
                footerData={this.getFooter()}
            />
        );
    }
}

export default Website;
