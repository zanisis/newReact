import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {editPassword} from '../actions/passwordAction'


class PasswordEdit extends React.Component {
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
          value={this.props.url}
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
          value={this.props.username}
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
          value={this.props.password}
          onChange={this.handleChange.bind(this)} /><br />
          <label>
          {this.state.password}
          </label>
          <br />
          <button
          type='button'
          onClick={()=>{
            let {id, url, username, password } =this.props
            this.props.editPassword({
              id, url, username, password
            })
          }}>
            Update
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editPassword : data => dispatch(editPassword(data))
})

export default connect(null, mapDispatchToProps)(PasswordEdit)