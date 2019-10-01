import React from 'react';
import careerPath from './services/careerPath';
import Description from './components/Description';
import 'antd/dist/antd.css';


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
        <Description careerInfo={careerInfo} />
      </div>
    );
  }
}

export default App;
