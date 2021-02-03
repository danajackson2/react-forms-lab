import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: "",
      charRemain: 280
    };
  }

  handleChange = (event) => {
    let numLeft = 280 - event.target.value.length
    this.setState({
      tweet: event.target.value,
      charRemain: numLeft
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.tweet}/><br />
        <span name="char-remain">Only {this.state.charRemain} characters left you verbose piglet!</span>
      </div>
    );
  }
}

export default TwitterMessage;
