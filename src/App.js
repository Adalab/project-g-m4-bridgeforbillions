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
      attributeSelected: '', // selected "newid"
    };
    this.selectAttribute = this.selectAttribute.bind(this);
    this.setLevelInfo = this.setLevelInfo.bind(this);
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

  setLevelInfo(value) {
    const { attributeSelected, careerInfo } = this.state;
    const attribute = careerInfo.find((career) => career.newid === attributeSelected);

    attribute.currentValue = value;

    this.setState({
      careerInfo: [...careerInfo]
    });
  }

  selectAttribute(event) {
    const currentAttributeId = parseInt(event.currentTarget.id, 10);
    const attributeObject = this.state.careerInfo.find((item) => item.newid === currentAttributeId);

    this.setState({
      attributeSelected: attributeObject.newid
    });
  }

  render() {
    const { careerInfo, levelSelected, attributeSelected, categoryChecked } = this.state;
    const attribute = careerInfo.find((career) => career.newid === attributeSelected);

    return (
      <div className="App">
        <Attributes
          careerInfo={careerInfo}
          getAttributeId={this.selectAttribute}
        />
        <Description
          attributeSelected={attribute}
          getLevelInfo={this.setLevelInfo}
        />
      </div>
    );
  }
}

export default App;
