import React from 'react'
// import axios from 'axios'

class PasswordLists extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('saya sudah datang');
  }

  renderTBody(){
    return(
      <tbody>
      { this.props.data.map(item =>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.url}</td>
          <td>{item.username}</td>
          <td>{item.password}</td>
          <td>
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
    console.log('sata lagi datang');
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
      </div>
    )
  }
}


export default PasswordLists