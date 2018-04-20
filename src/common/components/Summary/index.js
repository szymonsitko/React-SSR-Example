import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { JobCard, Header } from '@components';

const Summary = props => {
  return (
    <React.Fragment>
      <Header>
        <h1>Search summary</h1>
      </Header>
      { props.queryData.map(each => {
        return (
              <div key={each.id} className="parent-container">
                  <JobCard>
                      <div className="search-result">
                          <h2 className="title">{each.title}</h2>
                          <p className="date">{each.created_at}</p>
                          <p className="type">Type: {each.type}</p>
                      </div>
                  </JobCard>
              </div>
        )
      })}
    </React.Fragment>
  )
}

export default Summary;
