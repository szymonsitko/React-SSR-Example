import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { Container, Header } from '@components';

const SearchResults = props => {
  return (
    <React.Fragment>
      <Header>
        <h1>Search results</h1>
      </Header>
      { props.queryData.map(each => {
        return (
              <div key={each.id} className="parent-container">
                  <Container>
                      <div className="search-result">
                          <Header>
                              <h2 className="title">{each.title}</h2>
                          </Header>
                          <hr />
                          <p className="date">{each.created_at}</p>
                          <p className="type">Type: {each.type}</p>
                          <div className="description">Job description: {ReactHtmlParser(each.description)}</div>
                      </div>
                  </Container>
              </div>
        )
      })}
    </React.Fragment>
  )
}

export default SearchResults;
