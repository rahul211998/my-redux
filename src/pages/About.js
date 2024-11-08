import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteUsers } from '../slices/userSlice'

const About = () => {
    const users = useSelector((state)=> state.usersInfo.users)
    const dispatch = useDispatch()

    const remove = (index)=>{
        dispatch(deleteUsers(index))
        // dispatch = அனுப்புதல்
    }

    // console.log(users)
  return (
    <div>{users.length !== 0 ? users.map((v,i)=>(
        <div key={i}>
            <h1>{v.name}</h1>
            <h1>{v.age}</h1>
            <h1>{v.email}</h1>
            <h1>{v.contact}</h1>
            <button onClick={() => remove(i)}>remove</button>
        </div>
    )):<h4>no datas</h4>}</div>
  )
}

export default About