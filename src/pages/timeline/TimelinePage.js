import './TimelinePage.css';

import DOMPurify from 'dompurify';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPeopleGroup, faQuestion, } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

import timeline from './timeline.json';

const language = 'nl';

export default class TimelinePage extends React.Component {
    componentDidMount() {
        document.title = 'Tijdlijn - Place NL';
    }

    getTimelineContents() {
        return timeline.map((entry) => {
            const content = entry.content[language];
            return <div key={entry.id} id={entry.id} className='flex gap-2 mb-5'>
                <div className='timeline-icon'>
                    {this.getIcon(entry.icon)}
                </div>
                <div className='timeline-content'>
                    <h6>{new Date(entry.date).toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })}</h6>
                    <h2 className='text-xl'>{content.title}</h2>
                    <p className='leading-relaxed' dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.description, {
                            ADD_TAGS: ['iframe'],
                            ADD_ATTR: ['sandbox', 'scrolling']
                        })
                    }} />
                </div>
            </div>;
        });
    }

    getIcon(icon) {
        const circle = (color, icon) => <span className='rounded-full p-1 border-1' style={{ backgroundColor: color }}>{icon}</span>;

        switch (icon) {
            // Companies
            case 'discord': return circle('#5865F2', <FontAwesomeIcon icon={faDiscord} color='#FFFFFF' fixedWidth={true} />);
            case 'reddit': return circle('#FF4500', <FontAwesomeIcon icon={faReddit} color='#FFFFFF' fixedWidth={true} />);

            // Icons
            case 'community': return circle('#BC4B04', <FontAwesomeIcon icon={faPeopleGroup} color='#FFFFFF' fixedWidth={true} />);
            case 'automation': return circle('#0b824a', <FontAwesomeIcon icon={faCode} color='#FFFFFF' fixedWidth={true} />);

            default: return circle('#232DFE', <FontAwesomeIcon icon={faQuestion} color='#FFFFFF' fixedWidth={true} />);
        };
    };

    render() {
        return <div className='m-auto w-5/6 md:w-3/4'>
            {this.getTimelineContents()}
        </div>;
    }
}
