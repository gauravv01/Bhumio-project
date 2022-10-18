import { Fragment} from 'react';
import Grid from '@mui/material/Grid';
import CreateProject from '../component/CreateProject';
import Allprojects from '../component/Allprojects';


const Home=()=>{
    return(
<Fragment>
<div className="button">
<CreateProject />
</div>
<Grid container spacing={3}  className="grid">
 <Grid container item spacing={2} >
<Allprojects/>
    </Grid>
</Grid>
</Fragment>
        );
}
export default Home;
