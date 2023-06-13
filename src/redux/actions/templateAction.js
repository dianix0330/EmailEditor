const addComponent = (body) => ({
  type: 'ADD_COMPONENT',
  payload: {
    body
  },
})

const exchangeComponent = (startIndex, endIndex) => ({
  type: 'EXCHANGE_COMPONENTS',
  payload: {
    startIndex,
    endIndex
  },
})

export default {
  addComponent,
  exchangeComponent,
}