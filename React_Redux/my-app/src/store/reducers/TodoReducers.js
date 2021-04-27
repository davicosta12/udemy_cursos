const INITIAL_STATE = {
  data: [
    { id: 1, description: 'Pagar fatura do cartão', done: true },
    { id: 2, description: 'Reunião com a equipe às 10:00', done: false },
    { id: 3, description: 'Consulta médicas na terça depois do almoço', done: false }
  ],
  user: { name: '', lastName: '', email: '', notes: '' },
}


export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case 'USER_CHANGED':
      return {...state, user: {...state.user, [action.payload.name]: action.payload.value}}
    default:
      return state
  }
}
