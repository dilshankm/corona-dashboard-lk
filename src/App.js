import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header.js'
import DailyData from './components/DailyData.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Container fluid>
          <DailyData />
        </Container>
      </div>
    );
  }
}

export default App;
