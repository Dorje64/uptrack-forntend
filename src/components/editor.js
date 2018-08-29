import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export default class Editor extends Component {
  state = {
    value: RichTextEditor.createEmptyValue(),
  }

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <RichTextEditor
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
