import React from 'react';
import HomePage from './home-page';
import OtherPage from './other-page';

export default class App extends React.Component {
  render() {
    return (
      <div id='pages'>
        <HomePage />
        <OtherPage />
      </div>
    );
  }
};
