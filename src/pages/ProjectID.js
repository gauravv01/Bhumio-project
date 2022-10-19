import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './ProjectID.css';

const Reg=()=>{
  const items =useSelector(state=>state.dataFetchSlice.dataArray);
	const {id}=useParams();
 const data=items.find(item=>item.id===+id);
      
	return(
		 <div className='position'>
		{data && <Grid container spacing={3} >
 <Grid container item spacing={2}>
			<Card  className="head1">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      Project-Id:{data.id}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     Project-Name :{data.ProjectName}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Project-Manager:{data.ProjectManager}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Start-Date:{data.StartDate}
    </Typography>
     </CardContent>
      </Card>
      <Card  className="head1">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      Site-Address:{data.SiteAddress}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    Railway-juction :{data.Railwayjuction}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Budget(Cr.):      {data.Budget}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       EndDate:    {data.EndDate}
    </Typography>
     </CardContent>
      </Card>
      <Card  className="head1">
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      suplier1:   {data.suplier1}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    contactperson :{data.contactperson}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      phone:{data.phone}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      email:{data.email}
    </Typography>
     </CardContent>
      </Card>
      <Card spacing={2}  className='head1'>
               <CardContent>
             <Typography color="textSecondary" gutterBottom >

      ProjectStatus:{data.ProjectStatus}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
                           {data.ProjectStatus1}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      				{data.ProjectStatus2}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       {data.ProjectStatus3}
    </Typography>
     </CardContent>
      </Card>
      </Grid> 
</Grid>}
<Link to='/' className='link'><Button variant='contained' className='button2' ><ArrowLeftIcon/> Back</Button></Link>
<h2 className='details'>Project Details</h2>
	</div>
	);

}
export default Reg;


