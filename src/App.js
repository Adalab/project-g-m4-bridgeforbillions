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
    const attribute = this.findCareerById(attributeSelected);

    attribute.currentValue = value;

    this.setState({
      careerInfo: [...careerInfo]
    });
  }

  selectAttribute(event) {
    const currentAttributeId = parseInt(event.currentTarget.id, 10);

    this.setState({
      attributeSelected: currentAttributeId
    });
  }

  findCareerById(id) {
    const { careerInfo } = this.state;

    return careerInfo.find((career) => career.newid === id);
  }

  render() {
    const { careerInfo, attributeSelected } = this.state;
    const attribute = this.findCareerById(attributeSelected);

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
