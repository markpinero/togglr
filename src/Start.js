import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export class Start extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
