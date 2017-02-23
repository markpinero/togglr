import React, { Component } from 'react';
import {CurrentTimer, CurrentTimerTitle} from './styled-components';

export default class Timer extends Component {
  render() {
    return (
      <CurrentTimer>
        <CurrentTimerTitle>Title</CurrentTimerTitle>
        10:10:00
      </CurrentTimer>
    );
  }
}
