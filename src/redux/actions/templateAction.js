const addComponent = (body) => ({
  type: "ADD_COMPONENT",
  payload: {
    body,
  },
});

const exchangeComponent = (startIndex, endIndex) => ({
  type: "EXCHANGE_COMPONENTS",
  payload: {
    startIndex,
    endIndex,
  },
});

const updateComponent = (index, body) => ({
  type: "UPDATE_COMPONENT",
  payload: {
    index,
    body,
  },
});

export default {
  addComponent,
  exchangeComponent,
  updateComponent,
};
