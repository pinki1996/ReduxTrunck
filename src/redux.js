

const Redux = require("redux")
export const Fetch_Users = "FETCH_USERS";
export const Add_Users = "ADD_USERS"

const initialData = {
    users: []
}

export function fetchUser()
{
    return{
        type:Fetch_Users
    }
}




// export function fetchUsers()
// {
// //   return (dispatch)=>
// //   {
//     Axios.get("https://fakestoreapi.com/users")
//     .then(function(result)
//     {
//         dispatch({
//             type:"FETCH_USERS",
//             payload:result.data
//         })
//     })  
// //   }
// }

// export function addUsers(info)
//     {
//         // console.log(info)
//         return{
//             type:Add_Users,
//             payload:info
//         }
//     }



const myReducer = (state = initialData, action) => 
{
    if(action.type == "ADD_USERS" )
    {
        //lOGIC TO ADD THE USERS TO USER ARRAY
        return{
            users:action.payload
        }
    }
    return state
}


export const rootReducer = Redux.combineReducers({
    myReducer: myReducer
})

// export const myStore = Redux.createStore(rootReducer)