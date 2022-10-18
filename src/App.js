import {useState,useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Notification from './component/Notification';
import Pdf from './pages/GeneratePDF';
import { Postdata,getdata } from "./redux/Actions";
import ProjectStats from './pages/Statistics';
import ProjectID from './pages/ProjectID';
import { Fragment } from 'react';

let isInitial=true;
function App() {
  const dispatch=useDispatch();
  const [showNotification,setshowNotification]= useState(false);
    const Request=useSelector(state=>state.dataFetchSlice);
  const notification=useSelector(state=>state.dataFetchSlice.Notification);
  const {changed}=Request;
  const {dataArray}=Request;
  
  
    useEffect(()=>{
      setshowNotification(true)
      dispatch(getdata())
       setTimeout(() => {
         console.log('Fetched!')
         setshowNotification(false)
      }, 1500);
         },[dispatch])
  
      useEffect(()=>{
          if(isInitial){
              isInitial=false;
              return
          }
          else if(changed){
          setshowNotification(true)
          dispatch(Postdata(dataArray))
       setTimeout(() => {
         console.log('Posted')
         setshowNotification(false)
      }, 1500);
          }
        },[changed,dispatch]);


  return (
    <Fragment>
     <Navbar/>
 {showNotification && notification && <Notification status={notification.status} message={notification.message}/>}
      <div >
     <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/pdf" element={<Pdf/>}/>
  <Route path="/statistics" element={<ProjectStats/>}/>
  <Route path="/project/:id" element={<ProjectID/>}/>
  </Routes>
  </div>
  </Fragment>
    );
  }

export default App;
