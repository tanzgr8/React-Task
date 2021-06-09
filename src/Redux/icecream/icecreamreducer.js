const initialState={
    numofice:20
}
const icereducer =( state=initialState,action)=>{
    switch(action.type){
        case "BUY_ICE":return{
            ...state,
            numofice:state.numofice-1
        }
        default: return state
    }
}
export default icereducer;