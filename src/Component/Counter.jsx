import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

function Counter() {
  const [amount,setAmount] = useState(0)
  const dispatch = useDispatch()
 const count =  useSelector(state=>state.counterReducer.count)
 const handleIncrementByAmount = ()=>{
  if(amount){
    dispatch(incrementByAmount(amount))
  }else{
    alert("Enter The Valid Amount")
  }
 }
  return (
    <>
   <div style={{height:"400px",width:"500px",backgroundColor:"black"}}  className='container border rounded p-5  mt-5 text-center'>
     
     <h1 style={{fontSize:'100px',color:"red"}}>[ {count} ]</h1>
     <div className='mt-5' style={{display:"flex" ,justifyContent:"space-between",alignItems:"center"}}>
     <button onClick={()=>dispatch(decrement())}   className='btn btn-warning'>Decrement</button>
     <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
     <button  onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
</div>
<div className='d-flex justify content-between mt-5'>
     <input onChange={e=>setAmount(e.target.value)}  type="text" className='form-control' placeholder='increment amount' />
     <button  onClick={handleIncrementByAmount}  className='btn btn-primary ms-4'>INCREMENT BY AMOUNT</button>
</div>
 </div>
  
    </>
  )
}

export default Counter