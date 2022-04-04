
const initialState = {
  currentCity: ''
};


//currently have initial state set to any type
// revise once we know more about state contents
const mapReducer = (state: any = initialState, action: Action) => {
  switch (action.type){
    //add different cases
    case 'changeCity':
      return {
        ...state,
        currentCity
      }
    default:
      return state;
  }
}

export default mapReducer;