const INITIAL_STATE = { selected: '', visible: {} }

// parâmetro padrão do ES6
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TAB_SELECTED': 
            return { ...state, selected: action.payload} 
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload}
        default: 
            return state
    }
}