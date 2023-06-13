const addComponent = (body) => ({
  type: 'ADD_COMPONENT',
  payload: {
    body
  },
})

export default {
  addComponent,
}