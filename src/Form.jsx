// import React, { useState } from 'react'

// const Form = () => {
//     let [input,SetInput]= useState('')
//     let[data,SetData]=useState([ ])
//     function fun1(e){
//         SetInput(e.target.value)
//     }

//     function fun2(){
//         SetData([...data,input])
//         SetInput('')
//     }
//   return (
//     <div>
//          <p>{data}</p>
//        <fieldset>
       
//         <input type="text" placeholder='Enter Your name' value={input} onChange={fun1} />
//         <br />
//         <br />
//         {/* <input type="Email " placeholder='Enter Your name' onChange={fun1} /> */}

//         <button onClick={fun2}>add</button>
//        </fieldset>

//     </div>
//   )
// }

// export default Form





// import React, { useState } from 'react'

// const Form = () => {
//   let [input, SetInput]= useState('')
//   let[data,SetData]= useState([ ])

//   function fun1(e){
//     SetInput(e.target.value)
//   }
//    function fun2(){
//   SetData([...data,input])
//     SetInput('')
//   }
       

//   return (
//     <div>
//       <p>{data}</p>
//       <fieldset>
//         <input type="text" placeholder='Enter Your name' value={input} onChange={fun1} />
//         <br />
//         <br />

//         <button onClick={fun2}>add</button>
//       </fieldset>
//     </div>
//   )
// }

// export default Form