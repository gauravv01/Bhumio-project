import { Fragment, useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import Notification from '../component/Notification';
import CreateProject from '../component/CreateProject';
import Allprojects from '../component/Allprojects';
import { useSelector } from 'react-redux';


const Home=()=>{
   const [showNotification,setshowNotification]=useState(false);
  const notification=useSelector(state=>state.notificationSlice.Notification);
  useEffect(()=>{
setshowNotification(true)
  },[])
setTimeout(() => { 
    setshowNotification(false)
}, 1000);

    return(
<Fragment>
 {showNotification && notification && <Notification status={notification.status} message={notification.message}/>}
<div className="button">
<CreateProject />
</div>
<Grid container spacing={3}>
 <Grid container item spacing={2} >
<Allprojects />
    </Grid>
</Grid>
</Fragment>
        );
}
export default Home;
