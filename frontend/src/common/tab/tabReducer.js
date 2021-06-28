const INITIAL_STATE = { selected: '' }

// parâmetro padrão do ES6
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TAB_SELECTED': 
            return { ...state, selected: action.payload} 
        default: 
            return state
    }
}