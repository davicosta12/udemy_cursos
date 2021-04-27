export const changeUser = event => ({
  type: 'USER_CHANGED',
  payload: { name: event.target.name, value: event.target.value }
})