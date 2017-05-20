import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import './App.css';

import PasswordForms from './components/PasswordForm'
import PasswordList from './components/PasswordList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
    this.onPostPassword = this.onPostPassword.bind(this)
  }

  componentWillMount(){
    axios.get('http://localhost:4000/password')
    .then(response =>{
      console.log(response.data);
      this.setState({data: response.data})
    })
    .catch(err =>{
      console.log(err);
    })
  }

  onPostPassword(newData){
    // let { data } = this.state
    // let newState = {
    //   data : [...data, newData]
    // }
    // this.setState(newState)
  }

  deletePassword(id){
    let {data} = this.state
    axios.delete('http://localhost:4000/password/'+id)
    .then(response=>{
      let newState = data.filter(item => item.id !== id)
      console.log('ini newState',newState);
      this.setState({data : newState})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div >
          <PasswordForms />
          <br/>
          <PasswordList
            data={this.props.passwords}
            deletePassword={this.deletePassword.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  passwords : state
})
// const mapDispatchToProps = dispatch => ({
//   addPassword : data => dispatch(addPassword(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, null)(App);
// ini awal sebelum dispatchToprops
