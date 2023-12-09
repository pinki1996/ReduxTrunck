import React from 'react'
import { fetchUser } from './redux.js'
import {useDispatch,useSelector} from "react-redux"


function UserData() {

    // const [userData, setUserData] = React.useState([])

    const output = useSelector(function(data)
    {
        return data.myReducer.users
    })
    // console.log(output.myReducer.users)

    // const [userData, setUserdata] =  React.useState([])
    const dispatch = useDispatch()

    React.useEffect(function(){
        // Axios.get("https://fakestoreapi.com/users")
        // .then(function(result)
        // {
        //     // console.log(result.data)
        //     dispatch(addUsers(result.data))

        // })
        // .catch(function(error)
        // {
        //     console.log(error)
        // })

        dispatch(fetchUser())
    })
  return (
    <div>
        {
            output.map(function(user)
            {
                return <li>{user.username}</li>
            })
        }
    </div>
  )
}

export default UserData