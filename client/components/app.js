import React from 'react';
import HomePage from './home-page';
import StonksPage from './stonks-page';

export default class App extends React.Component {
  render() {
    return (
      <div id='pages'>
        <HomePage />
        <StonksPage />
      </div>
    );
  }
};
