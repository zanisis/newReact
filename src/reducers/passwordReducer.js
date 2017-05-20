const fetchPassword = (payload) => {
  // let newState = [...state, payload]
  return payload
}

const addPassword = (state, payload) => {
  let newState = [...state, payload]
  return newState
}

const editPassword = (state, data) => {
  let newState = state.map(item=>{
    return item.id === data.id ? data : item
  })
  return newState
}

const deletePassword = (state, id)=>{
console.log(state);
  let newState = state.filter(item => item.id !== id)
  return newState
}

const passwordReducer = (state=[], {type, payload})=>{
  switch (type) {
    case 'FETCH_PASSWORD': return fetchPassword(payload)
    case 'ADD_PASSWORD': return addPassword(state, payload)
    case 'EDIT_PASSWORD': return editPassword(state, payload)
    case 'DELETE_PASSWORD': return deletePassword(state, payload)
    default: return state
  }
}

export default passwordReducer