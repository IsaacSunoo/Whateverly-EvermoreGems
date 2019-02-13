import React, { Component } from 'react'

class SplashPage extends Component {
    constructor() {
        super();
        this.state = {
          splashPage: false
        };

    }

    hideSplash = e => {
        this.setState({
            splashPage: true
        });
    }

    render() {
        const splashDisplay = this.state.splashPage ? { display: 'none' } : {};

    return (
      <div style={splashDisplay}>
        <div>
          <h1>Evermore Gems</h1>
          <h2>Welcome ...</h2>
          <button onClick={this.hideSplash}>
            Continue
          </button>
        </div>
      </div>
    );
  }

}

export default SplashPage;
