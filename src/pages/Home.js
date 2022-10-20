import { Fragment} from 'react';
import Notification from '../component/Notification';
import CreateProject from '../component/CreateProject';
import Allprojects from '../component/Allprojects';
import { useSelector } from 'react-redux';


const Home=()=>{
  const notification=useSelector(state=>state.notificationSlice.Notification);

    return(
<Fragment>
 { notification && <Notification status={notification.status} message={notification.message}/>}
<CreateProject />
<Allprojects />
</Fragment>
        );
}
export default Home;
