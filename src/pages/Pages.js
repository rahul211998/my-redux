import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNums } from '../slices/userSlice'

const Pages = () => {
  const selectors = useSelector(state => state.usersInfo.nums)
  const dipatch = useDispatch()

  const adds = ()=>{
    let t = 1
    dipatch(addNums(t)) 
}
  return (
    <div>{selectors}
    <button onClick={adds}>clicks</button>
    </div>
  )
}

export default Pages