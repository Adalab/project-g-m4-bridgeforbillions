import React from 'react';
import careerPath from './services/careerPath';
import Attributes from './components/Attributes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careerInfo: []
    };
  }

  componentDidMount() {
    this.getCareerInfo();
  }

  getCareerInfo() {
    careerPath()
      .then((data) => {
        this.setState({
          careerInfo: data
        });
      });
  }

  render() {
    const { careerInfo } = this.state;
    return (
      <div className="App">
        <Attributes
          careerInfo={careerInfo}
        />
      </div>
    );
  }
}

export default App;
