const initialState = {
  components: []
}

export default function templateReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPONENT": {
      const updateState = {
        components: [...state.components, action.payload.body]
      }
      return updateState;
    }
    default:
      return state;
  }
} 