const intialState ={
    numofcakes:20
}
const cakeReducer =(state=intialState,action)=>{
    switch(action.type){
        case "BUY_CAKE":return{
            ...state,
            numofcakes:state.numofcakes-action.payload
        }
        default: return state

        }
    }
export default cakeReducer;