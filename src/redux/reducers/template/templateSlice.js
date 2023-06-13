const initialState = {
  components: [],
};

export default function templateReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPONENT": {
      const updateState = {
        components: [...state.components, action.payload.body],
      };
      return updateState;
    }
    case "EXCHANGE_COMPONENTS": {
      const { startIndex, endIndex } = action.payload;
      const newComponents = [...state.components];
      const [removed] = newComponents.splice(startIndex, 1);
      newComponents.splice(endIndex, 0, removed);

      const updateState = {
        components: newComponents,
      };
      return updateState;
    }
    default:
      return state;
  }
}
