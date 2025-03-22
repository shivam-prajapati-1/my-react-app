import React from 'react'
import { useState } from 'react'


const SingUp = () => {
    let[input, SetInput]=useState({
        name:"",
        email:"",
        password:""
    })

    function fun1(e){
        let{name, value}= e.target
        SetInput({...input,[name]:value})
        console.log(input);
    }
    function done(){
        localStorage.setItem('user',JSON.stringify(input))
 
          let data= localStorage.getItem('user')
          console.log(JSON.parse(data));
    }
  return (
    <div id='div1'>
        <input type="text" name='name' value={input.name} onChange={fun1} placeholder='enter your name' />
      <br/>
      <br/>
      <input type="email" name='email' value={input.email} onChange={fun1} placeholder='enter your email' />
      <br/>
      <br/>
      <input type="password" name='password' value={input.password} onChange={fun1} placeholder='enter your password' />
      <br />
      <button onClick={done} id='bn'>save</button>
    </div>
  )
}

export default SingUp