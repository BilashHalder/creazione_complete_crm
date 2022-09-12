const initMenu={
    menuId:1
}

export const menuReducer=(state=initMenu,action)=>{
    switch (action.type) {
        case "UPDATE":
           return{
            ...state,
            menuId:action.payload
           }
    
        default:
            return{
                ...state
            }
    }
}