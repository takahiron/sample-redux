import React from 'react'
import { connect } from 'react-redux'
import { ioData } from '../actions/action'
import App from '../components/App'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: text => {dispatch(ioData(text))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
