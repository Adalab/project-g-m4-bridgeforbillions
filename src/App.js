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
      attributeId: 1,
      defaultObject: {}
    };
    this.getAttributeId = this.getAttributeId.bind(this);
    this.getLevelInfo = this.getLevelInfo.bind(this);
  }

  componentDidMount() {
    this.getCareerInfo();
  }

  getAttributeId(event) {
    const currentAttributeId = parseInt(event.currentTarget.id);
    this.setState({
      attributeId: currentAttributeId,
      categoryChecked: true
    });
  }

  getCareerInfo() {
    careerPath()
      .then((data) => {
        const newData = data.map((item, index) => {
          return { ...item, newid: index + 1, currentLevel: 0 };
        });
        this.setState({
          careerInfo: newData,
          defaultObject: newData[0]
        });
      });
  }

  getLevelInfo(value) {
    const { careerInfo, attributeId } = this.state;
    const attributeLevel = careerInfo.find((item) => item.newid === attributeId);
    attributeLevel.currentLevel = value;
    this.setState({
      careerInfo: [...careerInfo]
    });
  }

  render() {
    const { careerInfo, attributeId, defaultObject } = this.state;

    const attributeObject = careerInfo.find((item) => item.newid === attributeId);

    return (
      <div className="App">
        <Attributes
          careerInfo={careerInfo}
          attributeObject={attributeObject}
          getAttributeId={this.getAttributeId}
        />
        <Description
          defaultObject={defaultObject}
          attributeObject={attributeObject}
          getLevelInfo={this.getLevelInfo}
        />
      </div>
    );
  }
}

export default App;
