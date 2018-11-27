import React, {Component}     from 'react';
import { bindActionCreators } from 'redux'
import { Route, IndexRoute } from 'react-router';
import { connect } from 'react-redux'

import Header                      from '../../layout/Header'

import './style.css'


class App extends Component {

  constructor() {
    super()
  }

  render() {
    const { component: Component, ...rest } = this.props
    
    return (
      <Route {...rest} render={matchProps => (
        <div>
          <Header/>
          <div style={{ minHeight: 360, height: '100%' }}>
            <Component {...matchProps} />
          </div>
        </div>
      )}/>
    )
  }
}


export default App
