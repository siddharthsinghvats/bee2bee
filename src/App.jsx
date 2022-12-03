import React from 'react';
import Home from './components/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Product from './components/Product';


const App = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Product/>}/>
        </Routes>
        </BrowserRouter>
          
        </>
    )
}


export default App;