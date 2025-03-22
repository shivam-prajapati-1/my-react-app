// import React from 'react'


// export const Home = (news) => {
//     console.log();
//   return (
//     <div>
//          {/* <p>Lorem ipsum, dolor sit amet minima voluptatem rem deleniti neque?</p> */}

//          <h1>hom.b {news.b}</h1>
        
//     </div>
    
   
//   )
// }

// export default Home








// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home







import React, { useContext } from 'react'
import Context from './Context'

const Home = () => {
  let data= useContext(Context)
  console.log(data,"mujhe dekhna ha");
  return (
  <>
  <p>{data}</p>
  </>
  )
}

export default Home