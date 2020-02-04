import React from 'react';

import './message.scss';

function Message(props) {
  return (
    <div className={"message-panel " + props.className}>
      <i className={"fa " + props.icon} aria-hidden="true"></i>
      <div className="message-body">
        {props.body || props.children}
      </div>
      {props.actions && (
        <div className="message-actions">
          {props.actions}
        </div>
      )}
    </div>
  );
}

export default Message;
