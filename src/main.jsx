import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import  {BrowserRouter}   from 'react-router-dom'
import Context from './Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>  */}
    {/* <Context.Provider value='helloooo'> */}
    <App />
    {/* </Context.Provider> */}
    {/* </BrowserRouter> */}

  </React.StrictMode>,
)
