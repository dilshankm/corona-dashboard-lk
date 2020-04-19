import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Full from './components/layout/Full'


class App extends React.Component {
  constructor(props) {
    super(props);
  }



  appStyle = () => {
    return {
      backgroundColor: '#5A5560'
    }
  }

  render() {
    return (
      <div className="App" style={this.appStyle()} >
        <Full />
      </div >
    );
  }
}

export default App;