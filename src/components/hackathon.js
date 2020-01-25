import React from 'react';

import Container from './container';

import './hackathon.scss';

const Hackathon = ({id, date, title, start, end, total, location, locationUrl, isTeaser, children}) => (
  <div className={'hackathon ' + (isTeaser ? 'hackathon-teaser' : '')}>
    <Container>
      <div className="hackathon-meta">
        <span className="hackathon-id">{date} <span className="nowrap">{start}&ndash;{end} ({total} h)</span></span>{location && <>
          , <span className="hackathon-location"><a href={locationUrl} target="_blank">{location}</a></span>
        </>}
      </div>
      <h1 className="hackathon-title">{title}</h1>

      {children && 
        <div className="hackathon-projects">
          {children}
        </div>
      }
    </Container>
  </div>
);

export default Hackathon;