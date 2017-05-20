import React from 'react'
import axios from 'axios'

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
    console.log('saya sudah datang');
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
    let { data } = this.props
    let newPassword = {
      id : data[data.length-1].id + 1,
      ...form
    }
    console.log('---',newPassword);
    axios.post('http://localhost:4000/password',
    newPassword)
    .then(response =>{
      console.log(response.data);
      this.props.onPostPassword(response.data)
    }).catch(err =>{
      console.log(err);
    })
  }

  render() {
    console.log('sata lagi datang');
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


export default PasswordForms