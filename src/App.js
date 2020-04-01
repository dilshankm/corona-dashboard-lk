import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header.js'
import DailyData from './components/DailyData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <br></br>
        <React.Fragment>
          <DailyData></DailyData>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
