import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'

import './code.scss';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const OPTIONS = {
  mode: 'javascript',
  lineNumbers: true,
  lineWrapping: true,
};

function Code(props) {
  return (
    <div className="code">
      <CodeMirror
        value={props.value}
        options={OPTIONS}
        onChange={(editor, data, value) => {
        }}
      />
    </div>
  );
}

export default Code;
