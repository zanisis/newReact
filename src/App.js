import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import './App.css';

import {fetchPassword} from './actions/passwordAction'
import PasswordForms from './components/PasswordForm'
import PasswordList from './components/PasswordList'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchPassword()
  }


  render() {
    return (
      <div >
          <PasswordForms />
          <br/>
          <PasswordList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  passwords : state
})
const mapDispatchToProps = dispatch => ({
  fetchPassword : () => dispatch(fetchPassword())
})

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
// ini awal sebelum dispatchToprops
