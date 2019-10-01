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
      levelSelected: '',
      attributeSelected: 2
    };
    this.getAttributeId = this.getAttributeId.bind(this);
  }

  componentDidMount() {
    this.getCareerInfo();
  }

  getAttributeId(event) {
    const currentAttributeId = parseInt(event.currentTarget.id);
    this.setState({
      attributeSelected: currentAttributeId
    });
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
    const { careerInfo, levelSelected, attributeSelected } = this.state;
    return (
      <div className="App">
        <Attributes
          careerInfo={careerInfo}
          levelSelected={levelSelected}
          getAttributeId={this.getAttributeId}
        />
        <Description
          careerInfo={careerInfo}
          attributeSelected={attributeSelected}
        />
      </div>
    );
  }
}

export default App;
