import 'regenerator-runtime/runtime';
import './stylesheets/main.scss';
import React from 'react';
import Home from '@Components/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}
