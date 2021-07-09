import React from 'react'
import Notifications from './components/Notifications'

export default (WrappedComponent) => (props) => {
  return (
    <div>
      <Notifications />
      <WrappedComponent {...props} />
    </div>
  )
}
