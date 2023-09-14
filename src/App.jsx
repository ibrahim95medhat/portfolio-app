
import './App.css';
import Layout from './Components/Layout/Layout';
import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom';
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home';
import 'bootstrap/dist/js/bootstrap.bundle';
let routers=createHashRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>}]
  }
])


function App() {
  return (
    <>
     <RouterProvider router={routers}></RouterProvider>
   
    </>
  );
}

export default App;
