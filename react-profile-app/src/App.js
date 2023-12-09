import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'you will never regret time spent with your cat!.',
        imgSrc: 'https://i.pinimg.com/564x/82/cc/0f/82cc0f2dae02b896a895ffe2533e2c38.jpg', // Placeholder image URL
        profession: 'hello cat',
      },
      show: false,
      mountTime: 0,
    };
  }

  componentDidMount() {
    this.mountTimeTimer = setInterval(() => {
      this.setState((prevState) => ({
        mountTime: prevState.mountTime + 1,
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.mountTimeTimer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>React Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {mountTime} seconds</p>
      </div>
    );
  }
}

export default App;
