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
        
      </div>
    );
  }

}

export default SplashPage;
