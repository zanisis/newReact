import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {addPassword} from '../actions/passwordAction'


class PasswordForms extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
              url : '',
              username : '',
              password : '',
      }
    }
  }

  componentWillMount(){
    //
  }

  componentDidMount(){
    //
  }

  handleChange(e){
    let newState = {
      form : {
        ...this.state.form
      }
    }
    newState.form[e.target.name] = e.target.value
    this.setState(newState)
  }

  postPassword(){
    let { form } = this.state
    let { passwords } = this.props
    let newPassword = {
      id : passwords.length ? passwords[passwords.length-1].id + 1:1,
      ...form
    }
    this.props.addPassword(newPassword)
    console.log('---',newPassword);
    // axios.post('http://localhost:4000/password',
    // newPassword)
    // .then(response =>{
    //   console.log(response.data);
    //   this.props.onPostPassword(response.data)
    // }).catch(err =>{
    //   console.log(err);
    // })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Url
          </label>
          <input
          name="url"
          type="text"
          onChange={this.handleChange.bind(this)} /><br />
          <label>
          {this.state.url}
          </label>
          <br />
          <label>
            Username
          </label>
          <input
          name="username"
          type="text"
          onChange={this.handleChange.bind(this)} /><br />
          <label>
          {this.state.username}
          </label>
          <br />
          <label>
            Password
          </label>
          <input
          name="password"
          type="password"
          onChange={this.handleChange.bind(this)} /><br />
          <label>
          {this.state.password}
          </label>
          <br />
          <button
          type='button'
          onClick={()=> this.postPassword()}>
            save
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  passwords : state
})

const mapDispatchToProps = dispatch => ({
  addPassword : data => dispatch(addPassword(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForms)