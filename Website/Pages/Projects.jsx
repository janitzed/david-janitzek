
import React from 'react';

import Website from '../Modules/Website';

import ArticlesImages from 'react-revolution/ArticlesImages';

import TextWriter from 'react-revolution/TextWriter';

import trans from '../Translations/trans';

import mediaBreakAt from '../Functions/mediaBreakAt';

class Projects extends React.Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Website
                    addClass='Projects'
                    location='projects'
                    content={
                        (
                            <div>
                                <h1 className='h1-title'>
                                    <TextWriter
                                        text={trans('area_projects')}
                                        speed={30}
                                        pipeDisplay={true}
                                        pipeChar={''}
                                        pipeSite='right'
                                        pipePersist={false}
                                    />
                                </h1>
                                <ArticlesImages
                                    addClass='projects'
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
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://react-revolution.j.pl" target='_blank'>
                                                                {
                                                                    trans('open_website')
                                                                }
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/react-revolution" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'Tracker',
                                                image: `${process.env.HOST}public/images/tracker.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_tracker')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/browser-activity-tracking/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                            <a className="link-animation my-2" href="https://tracker-manager.cba.pl" target='_blank'>
                                                                {
                                                                    trans('open_website')
                                                                }
                                                            </a>
                                                        </div>
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
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/chat-message/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                            <a className="link-animation my-2" href="https://chat-manager.j.pl" target='_blank'>
                                                                {
                                                                    trans('open_website')
                                                                }
                                                            </a>
                                                        </div>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'Image Downloader',
                                                image: `${process.env.HOST}public/images/image-downloader.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_imageDownloader')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/images-downloader-origin/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/firefox-addon-images-downloader" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'Network Monitor',
                                                image: `${process.env.HOST}public/images/network-monitor.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_networkMonitor')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/network-monitor/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/firefox-addon-network-monitor" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'Script Injector',
                                                image: `${process.env.HOST}public/images/script-injector.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_scriptInjector')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/x-script-injection/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/firefox-addon-script-injector" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'Source Code',
                                                image: `${process.env.HOST}public/images/source-code.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_sourceCode')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/source-code-x/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/firefox-addon-source-code" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'Protector',
                                                image: `${process.env.HOST}public/images/protector.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_protector')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="https://addons.mozilla.org/de/firefox/addon/master-protector/" target='_blank'>
                                                                Mozilla
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/firefox-addon-ninja-protect" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
                                            {
                                                title: 'React Divcreator',
                                                image: `${process.env.HOST}public/images/react-divcreator.png`,
                                                text: (
                                                    <span>
                                                        {
                                                            trans('project_reactDivcreator')
                                                        }
                                                        <div className='link'>
                                                            <a className="link-animation" href="http://react-divcreator.cba.pl" target='_blank'>
                                                                {
                                                                    trans('open_website')
                                                                }
                                                            </a>
                                                        </div>
                                                        <a className="github-link" href="https://github.com/janitzed/react-divcreator" target='_blank'>
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    </span>
                                                ),
                                            },
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

export default Projects;
