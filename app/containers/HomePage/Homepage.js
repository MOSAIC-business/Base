/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import Header from '../../components/Header/Header.js';
// import Footer from '../../components/Footer/Footer.js';
import { Helmet } from 'react-helmet-async';

const heading_text = "Start here"
const heading_text_2 = "Base"

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content=""
          />
        </Helmet>
        <div className="home-page flex mw8 center justify-center tc ">
          <section className="centered">
            <h2 className="    pt5 pb0 black ttc fw6 tl  ">{ heading_text }</h2>
            <h1 className=" poster_text pv5 f1 black-10 ">{ heading_text_2 }</h1>
            <p className=" f4 fw5 black-50 lh-copy">
              A minimal <i>React-Redux</i> boilerplate with all the best
              practices
            </p>
          </section>
        </div>
      </article>
    );
  }
}
