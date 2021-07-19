import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import classNames from 'classnames';
import 'semantic-ui-css/semantic.min.css'
import * as actions from '../actions';


const icons = {
  info: 'announcement',
  success: 'checkmark',
  error: 'remove',
  warning: 'warning circle'
};

export const TRANSITION_DELAY = 150;

export const TRANSITION_DOWN_DURATION = 200;

const getTransitionStyles = (offset, anchorOrigin) => ({
  [anchorOrigin.vertical]: offset,
  WebKitTransition: `all ${TRANSITION_DOWN_DURATION}ms`,
  MozTransition: `all ${TRANSITION_DOWN_DURATION}ms`,
  msTransition: `all ${TRANSITION_DOWN_DURATION}ms`,
  OTransition: `all ${TRANSITION_DOWN_DURATION}ms`,
  transition: `all ${TRANSITION_DOWN_DURATION}ms`,
  transitionDelay: `${TRANSITION_DELAY}ms`,
});
function Notifications({ allIds, byId, dismissNotification }) {

  // Only render if notifications exist
  if (!allIds || !Object.keys(allIds).length) {
    return null;
  }


  return (
    <div>
      {allIds.map((id, i) => {
        const { type, header, content} = byId[id];
        const computedIcon = icons[type];
        return (
          <Message
          key={id}
          {...{ [type]: true }}
          header={header}
          content={content}
          icon={computedIcon}
          floating
          />
        );
      })}
    </div>
  );
}

Notifications.propTypes = {
  allIds: PropTypes.array.isRequired,
  byId: PropTypes.object.isRequired,
  dismissNotification: PropTypes.func.isRequired,
};
export default 
  connect(
    ({ notifications: { allIds, byId } }) => ({ allIds, byId }),
    actions
  )(Notifications)
