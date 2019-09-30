import React from 'react';
import careerPath from './services/careerPath'; 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careerInfo: {}
    };
  }

  componentDidMount(){
      this.getCareerInfo()
  }

  getCareerInfo = () => {
    careerPath()
    .then(data => {
      this.setState({
        serverData: data
      })
      console.log(data)
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
