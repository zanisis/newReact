const addPassword = (state, payload) => {
  let newState = [...state, payload]
  return newState
}

const passwordReducer = (state, action)=>{
  switch (action.type) {
    case 'ADD_PASSWORD': return addPassword(state, action.payload)
    default: return state
  }
}

export default passwordReducer