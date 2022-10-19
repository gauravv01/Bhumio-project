import {useEffect} from 'react';
import { Routes,Route} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Pdf from './pages/GeneratePDF';
import { Postdata,getdata } from "./redux/Actions";
import ProjectStats from './pages/Statistics';
import ProjectID from './pages/ProjectID';
import { Fragment } from 'react';

let isInitial=true;
function App() {
  const dispatch=useDispatch();
    const Request=useSelector(state=>state.dataFetchSlice);
   
    useEffect(()=>{
      dispatch(getdata())
         },[dispatch])
  
      useEffect(()=>{
          if(isInitial){
              isInitial=false;
              return
          }
          else if(Request.changed){
          dispatch(Postdata(Request))
          }
        },[Request,dispatch]);

  return (
    <Fragment>
     <Navbar>
     <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/pdf" element={<Pdf/>}/>
  <Route path="/statistics" element={<ProjectStats/>}/>
  <Route path="/project/:id" element={<ProjectID/>}/>
  </Routes>
  </Navbar>
  </Fragment>
    );
  }

export default App;
