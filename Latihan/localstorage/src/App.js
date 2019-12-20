import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    var storedClicks = 0;

    if (localStorage.getItem('clicks')) {
      storedClicks = parseInt(localStorage.getItem('clicks'));

    }

    this.state = { totalClicks: storedClicks };
  }

  silahkanTekan = () => {
    var newClicks = this.state.totalClicks + 1;
    this.setState({ totalClicks: newClicks });
    localStorage.setItem('clicks', newClicks);
  }

  silahkanReset = () => {
    this.setState({ totalClicks: 0 });
    localStorage.removeItem('clicks');

  }

  render() {
    return (
      <div>
        <h2>Press The Button few times and refresh page</h2>
        <button onClick={this.silahkanTekan} >Click me</button> Counter {this.state.totalClicks}
        <br /> <br />
        {this.state.totalClicks > 0 &&
          <div>
            <h2>Press The Reset Button for reset a counter</h2>
            <button onClick={this.silahkanReset} >Reset</button>
          </div>
        }
      </div>
    );

  }
}


export default App;
