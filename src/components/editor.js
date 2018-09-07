import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import {
  Button,
} from 'reactstrap';
import { createUpdate } from '../api';

// const toolbarConfig = {
//     // Optionally specify the groups to display (displayed in the order listed).
//     display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
//     INLINE_STYLE_BUTTONS: [
//       {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
//       {label: 'Italic', style: 'ITALIC'},
//       {label: 'Underline', style: 'UNDERLINE'}
//     ],
//     BLOCK_TYPE_DROPDOWN: [
//       {label: 'Normal', style: 'unstyled'},
//       {label: 'Heading Large', style: 'header-one'},
//       {label: 'Heading Medium', style: 'header-two'},
//       {label: 'Heading Small', style: 'header-three'}
//     ],
//     BLOCK_TYPE_BUTTONS: [
//       {label: 'UL', style: 'unordered-list-item'},
//       {label: 'OL', style: 'ordered-list-item'}
//     ]
//   };

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    }
  }

  onChange = (value) => {
    this.setState({ value });
  };

  handleClick = () => {
    const { value } = this.state;
    const { projectId, updateData } = this.props;
    const payload = { project: projectId, text: value.toString('html') }
    createUpdate(payload)
      .then((res) => {
        this.setState({ value: RichTextEditor.createEmptyValue() });
        updateData(res);
      })
  }


  render() {
    const { value } = this.state;
    return (
      <div>
        <RichTextEditor
          value={value}
          onChange={this.onChange}
          // toolbarConfig={toolbarConfig}
          placeholder="Today's Update"
        />
        <Button onClick={this.handleClick} className="btn btn-primary create-button update-button"> Create Update </Button>
      </div>
    );
  }
}
