import React from 'react';
import 'antd/dist/antd.css';
import careerPath from './services/careerPath';
import Description from './components/Description';
import Attributes from './components/Attributes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careerInfo: [],
      levelSelected: ''
    };
  }

  componentDidMount() {
    this.getCareerInfo();
  }

  getCareerInfo() {
    careerPath()
      .then((data) => {
        const newData = data.map((item, index) => {
          return { ...item, newid: index + 1 };
        });
        this.setState({
          careerInfo: newData
        });
      });
  }

  render() {
    const { careerInfo, levelSelected } = this.state;
    return (
      <div className="App">
		<Attributes
          	careerInfo={careerInfo}
          	levelSelected={levelSelected}
        />
		<Description 
			careerInfo={careerInfo} 
		/>
      </div>
    );
  }
}

export default App;
