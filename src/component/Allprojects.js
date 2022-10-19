import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Fragment} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './AllProjects.css';

const Allprojects=()=>{
   const data=useSelector(state=>state.dataFetchSlice.dataArray);

   const getProjects = () =>{
   return(
	<Fragment >
	   {
      data.map((item,i)=>{
         return(
            <div key={item.id}  > 
       <Link to={`/project/${item.id}`} className='link'>   
       <Card  className="head">
               <CardContent className='Card'>
                  <div>
             <Typography  color="textSecondary" gutterBottom keys={i}>
      ProjectId: 
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
     ProjectsName:
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
       Budget(Cr.):
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
       EndDate:
    </Typography>
    </div>
    <div>
    <Typography  color="textSecondary" gutterBottom>
    {item.id}
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
    {item.ProjectName}
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
    {item.Budget}
    </Typography>
    <Typography  color="textSecondary" gutterBottom>
    {item.EndDate}
    </Typography>
      </div>
     </CardContent>
      </Card> </Link>
            </div>
            );
      })
    }
	</Fragment>
	);
    }
    return (
      <div style={{display:'flex',flexWrap:'wrap'}}>
         {getProjects()}
      </div>
    )

}
export default Allprojects;