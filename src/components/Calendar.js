import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap'
// import axios from 'axios';

class Cal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(date) {
    this.setState({
      date: date
    })
  }

  handleSubmit() {
    console.log(`https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:sagittarius`)
  }

  // state = {
  //   date: new Date(),
  // }

  // onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <br/>
        <br/>
        <Button outline color="secondary" onClick={this.handleSubmit}>Generate!</Button>
      </div>
    );
  }
}

export default Cal