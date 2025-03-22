// import React, { useEffect } from 'react'
// import { useState } from 'react';

// const App = () => {
//   let [count,Setcount]=useState(0);
//   let [city,Setcity]=useState('bhopal');
//   function fun1(){
//     Setcount(count+1);
//   }
//   function fun2(){
//     Setcity('indore');
//   }

//   useEffect(()=>{
//     fetch('https://dummyjson.com/recipes')
//     .then(res => res.json()).then((data)=>{
//       console.log(data);

//     },[count])

//   })
//   return (
  
//     <div> 
//       <p>{count}</p>
//       <button onClick={fun1}> add </button>
//         <p>{city}</p>
//       <button onClick={fun2}>city</button>
     
//     </div>
//   )
// }
// export default App







// import React from 'react'
// import  NavBar from './NavBar.jsx'
// import { Route,Routes} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>

//       </Routes>
      
//     </div>
//   )
// }

// export default App







// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div><Form/></div>
//   )
// }

// export default App




// import React from 'react'
// import SingUp from './SingUp'
// import './App.css'

  
// const App = () => {
//   return (
//     <div><SingUp/></div>
//   )
// }

// export default App







// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//   let[Data,SetData]=useState([])
//   useEffect(()=>{
//       fetch('https://dummyjson.com/recipes').then((D)=>{
//         return D.json()
    
//       }).then((d)=>{
//         SetData(d.recipes)
//         console.log('heyeye');
    
//       })
    
    
//      },[])
    
//     function fun1(yewobuttonhai){
//       // console.log(id,'heheh');
//      let newD=  Data.filter((value,b)=>{
//         return value.id!=yewobuttonhai
    
//       })
//       console.log(newD,"heheh");
//       SetData(newD)
    
//     }
//    return (
//     <div>
//       {
//         Data.map((a)=>{
//           return(<>
//                <p>{a.id}</p>
//                <p>{a.name}</p>
//                <p>{a.cuisine}</p>
//                <button onClick={()=>fun1(a.id)}>delet</button>
//                <img   height='100' src={a.image}/>
//           </>)
//         })
//       }

//     </div>
//   )
// }

// export default App










// import React from 'react'
// import { useReducer } from 'react';

// const App = () => {
//   function reducer(state,action){
//     if(action.type=== 'incre'){
//       return state + 1;     
//     }
//     else if(action.type==='decer'){
//       return state - 1
//     }
//     else if(action.type==='reset'){
//       return 0
//     }
//     else {
//       return state
//     }
//   }
//   let [state,dispatch]=useReducer(reducer,0)
//   function fun3(){
//     dispatch({type: "incre"})
//   }
//   return (
//     <div>
//       <p>{state}</p>
//       <button onClick={fun3}>increment</button>
//        <button onClick={()=>dispatch({type:'decer'})}>Minus</button>
//        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
 



//     </div>
//   )
// }

// export default App






// import React from 'react'
// import { useReducer } from 'react';

// const App = () => {
//   function reducer(state,action){
//     if(action.type=== 'green'){
//       return state ='green';     
//     }
//     else if(action.type==='blue'){
//       return state ='blue';
//     }
//     else if(action.type==='yellow'){
//       return state ='yellow';
//     }
//     else {
//       return state
//     }
//   }
//   let [state,dispatch]=useReducer(reducer,'red')
//   function fun3(){
//     dispatch({type: "green"})
//   }
 
//   return (
//     <div style={{backgroundColor:state,height:'100vh'}}>
//       {/* <p>{state}</p> */}
//       <button onClick={fun3}>green</button>
//        <button onClick={()=>dispatch({type:'blue'})}>blue</button>
//        <button onClick={()=>dispatch({type:'yellow'})}>yellow</button>
 



//     </div>
//   )
// }

// export default App
 



// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>hello</div>
//   )
// }

// export default App





import React from 'react'
import Header from './Header'
import './Header.css'
import Login from './Login'
import './Login.css'

const App = () => {
  return (
    <div>
   
        <Header/>
    </div>
  )
}

export default App








// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import Dummy from './Dummy'


// const App = () => {
//   return (
//     <div>
//       <Routes>
//         {/* <Route path='/' element={<Home/>}  /> */}
//         <Route path='/:data' element={<Dummy/>}  />
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Boot from './Boot'
// const App = () => {
//   return (
//     <div>
//       <Boot/>
//     </div>
//   )
// }

// export default App





// import React, { useState } from 'react';
// import './App.css';
// import GridView from './components/GridView';
// import TileView from './components/TileView';
// import StudentDetail from './components/StudentDetail';

// const mockStudents = [
//   { id: 1, name: 'John Doe', age: 18, grade: 'A', class: 'Math' },
//   { id: 2, name: 'Jane Smith', age: 19, grade: 'B', class: 'Science' },
//   // Add more student data...
// ];

// function App() {
//   const [view, setView] = useState('grid'); // Switch between grid, tile, and detail view
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleTileClick = (student) => {
//     setSelectedStudent(student);
//     setView('detail');
//   };

//   return (
//     <div className="App">
//       <header>
//         <button className="hamburger" onClick={() => alert('Hamburger clicked!')}>☰</button>
//         <nav className="horizontal-menu">
//           <a href="#home">Home</a>
//           <a href="#students">Students</a>
//           <a href="#settings">Settings</a>
//         </nav>
//       </header>

//       <div className="content">
//         {view === 'grid' && <GridView students={mockStudents} onToggleView={() => setView('tile')} />}
//         {view === 'tile' && <TileView students={mockStudents} onTileClick={handleTileClick} />}
//         {view === 'detail' && <StudentDetail student={selectedStudent} onBack={() => setView('tile')} />}
//       </div>
//     </div>
//   );
// }

// export default App;














// import React, { useState } from 'react';
// import './HamburgerMenu.css';
// import './HorizontalMenu.jsx'
// // import './HorizontalMenu.css';
// import './StudentGrid.jsx';
// import './StudentGrid.css';
// import './StudentView.jsx'

// const HamburgerMenu = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleSubMenu = (index) => {
//     setActiveSubMenu(activeSubMenu === index ? null : index);
//   };

//   return (
//     <div className="hamburger-menu">
//       <button className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         &#9776;
//       </button>

//       {menuOpen && (
//         <ul className="menu">
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#services" onClick={() => toggleSubMenu(0)}>
//               Services
//             </a>
//             {activeSubMenu === 0 && (
//               <ul className="submenu">
//                 <li><a href="#web-design">Web Design</a></li>
//                 <li><a href="#seo">SEO</a></li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#portfolio" onClick={() => toggleSubMenu(1)}>
//               Portfolio
//             </a>
//             {activeSubMenu === 1 && (
//               <ul className="submenu">
//                 <li><a href="#project1">Project 1</a></li>
//                 <li><a href="#project2">Project 2</a></li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;
