import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Fragment} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './AllProjects.css';

const Allprojects=()=>{
const data=useSelector(state=>state.dataFetchSlice.dataArray);

   return(
	<Fragment >
	   {
      data && data.map((item,i)=>{
         return(
            <div key={item.id} className='main' > 
       <Link to={`/project/${item.id}`}  className="Link" >   
       <Card  className="head">
               <CardContent>
             <Typography  color="textSecondary" gutterBottom keys={i}>

      Project-Id:{item.id}
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
     Project-Name :{item.ProjectName}
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
       Budget(Cr.):{item.Budget}
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
       EndDate:{item.EndDate}
    </Typography>
     </CardContent>
      </Card> </Link>

            </div>
            );
      })
    }
	</Fragment>
	);
}
export default Allprojects;