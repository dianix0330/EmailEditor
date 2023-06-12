const initialState = {
  templateID: 0,
  components: []
}

export default function templateReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMPONENT": {
      const updateState = {
        templateID: action.payload.templateID,
        components: [...state, action.payload.component]
      }
      return updateState;
    }
    default:
      return state;
  }
} 