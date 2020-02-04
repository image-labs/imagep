import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'

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
        onBeforeChange={(editor, data, value) => props.onChange(value)}
      />
    </div>
  );
}

export default Code;
