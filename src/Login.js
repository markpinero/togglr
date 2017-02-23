import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import btoa from 'btoa';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const apiURL = 'https://www.toggl.com/api/v8';

    const apiToken = '3f9a1616fd28ed65e416dc902371625b';

    const token = btoa(apiToken + ':api_token');

    fetch('https://www.toggl.com/api/v8/me', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
      }
    }).then((response) => {
      console.log(response);
    });
  }

  render() {

    return (
      <div></div>
    );
  }
}
