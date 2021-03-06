import React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'

export default function useNotifications() {
  const dispatch = useDispatch()
  return React.useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [dispatch])
}
