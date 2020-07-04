import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Full from './components/layout/Full'


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <Full />
      </div >
    );
  }
}

export default App;