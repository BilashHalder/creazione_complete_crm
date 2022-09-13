const initState={
user:null
}

export const userReducer=(state=initState,action)=>{
    switch (action.type) {
        case "ADD":
           return{
            user:action.payload
           }
        default:
            return state;
    }
}