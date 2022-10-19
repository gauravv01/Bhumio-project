import {useState,useEffect} from 'react';
import { Routes,Route} from 'react-router-dom';
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
  const notification=useSelector(state=>state.notificationSlice.Notification);
 
  console.log('AppJS loaded');
  console.log(Request)
  
    useEffect(()=>{
      console.log('useEffec1')
      setshowNotification(true)
      dispatch(getdata())
         },[dispatch])
  
      useEffect(()=>{
        console.log('useEffect2',isInitial)
          if(isInitial){
              isInitial=false;
              return
          }
          else if(Request.changed){
          setshowNotification(true)
          dispatch(Postdata(Request))
          }
        },[Request,dispatch]);

if(showNotification){
  console.log('settimout running')
        setTimeout(() => {
          setshowNotification(false)
       }, 1500);}

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
