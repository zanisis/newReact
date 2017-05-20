import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'


import {deletePassword} from '../actions/passwordAction'
import PasswordEdit from './PasswordEdit'


class PasswordLists extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
        id:0,
        url:'',
        username:'',
        password:''
      }
    }
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

  renderTBody(){
    return(
      <tbody>
      { this.props.passwords.map(item =>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.url}</td>
          <td>{item.username}</td>
          <td>{item.password}</td>
          <td>
          <button
          type='button'
          onClick={()=> this.setState({
            form:{
              id: item.id,
              url: item.url,
              username: item.username,
              password: item.password
            }
            })
          }>
          Edit
          </button>
            <button
            type='button'
            onClick={()=>this.props.deletePassword(item.id)}>
            Delete
            </button>
          </td>
        </tr>
      ))}
      </tbody>
    )
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Url </th>
              <th> Username </th>
              <th> Password </th>
              <th> Delete </th>
            </tr>
          </thead>
          {this.renderTBody()}
        </table>
        <br/>
        <PasswordEdit {...this.state.form} handleChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  passwords : state
})

const mapDispatchToProps = dispatch => ({
  deletePassword : id => dispatch(deletePassword(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordLists)