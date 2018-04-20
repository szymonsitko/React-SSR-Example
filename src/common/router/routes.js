/*
    Here is the homework part:
    --------------------------
    
    1) Add two new components:

        a. Summary
        b. About

    Which will act as a routes for the application. Under "Summary",
    we should get overview of our search results made on initial page visit.
    The data returned is up to you!

    The "About" component should render some static data about the application.

    BOTH components should be styled by applying some StyledComponents, with
    css rendered server side.

    2) Add a simple router to the app, which will work as follows:

        a. When visiting http://localhost:3000/summary the "Summary" will be rendered
        with proper content

        b. Similarly, when hitting the http://localhost:3000/about, we should get
        "About" component rednered with the static content.

    USEFUL LINKS:

        Medium:
            https://medium.com/@phoebe.greig/headache-free-isomorphic-app-tutorial-react-js-react-router-node-js-ssr-with-state-and-es6-797a8d8e493a
            https://crypt.codemancers.com/posts/2017-06-03-reactjs-server-side-rendering-with-router-v4-and-redux/
        
        React Training:
            https://reacttraining.com/react-router/web/guides/server-rendering

        YouTube:
            https://www.youtube.com/watch?v=duhudXkHRf4
            https://www.youtube.com/watch?v=mZEv4mHsU5E

    I encourage you to take the full liberty on how it might be done. The only requirement
    is simple: it must work!

    Good luck!
*/

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import "isomorphic-fetch";

import App from '@common/App';
import * as constants from '@constants';
import { Html } from '@lib';

export default (req, res) => {
    const { APP_TITLE, BUNDLE_PATH, DEFAULT_LOCATION } = constants;
    const sheet = new ServerStyleSheet();

    const render = (jsonData) => {
      const markup = renderToString(sheet.collectStyles(<StaticRouter context={{}} location={req.url}><App data={jsonData}/></StaticRouter>));
      const styles = sheet.getStyleTags();
      res.send(Html(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
    }

    switch(true) {
      case /^\/about$/.test(req.url):
        render();
        break;
      default:
        fetch(`https://jobs.github.com/positions.json?description=javascript&location=${DEFAULT_LOCATION}`)
        .then(response => response.json())
        .then(jsonData => {
          render(jsonData);
        });
    }
};
