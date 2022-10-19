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
		 <>
		{data && <Grid container spacing={3} >
 <Grid container item spacing={2}>
			<Card  className="head1">
               <CardContent className='Card1'>
                <div>
             <Typography color="textSecondary" gutterBottom >

      Project-Id:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     Project-Name :
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Project-Manager:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Start-Date:
    </Typography>
    </div>
    <div>
             <Typography color="textSecondary" gutterBottom >

      {data.id}
    </Typography>
    <Typography color="textSecondary" sx={{ fontWeight: 'bold' }} gutterBottom>
     {data.ProjectName}
    </Typography>
    <Typography color="textSecondary" sx={{ fontWeight: 'bold' }} gutterBottom>
     {data.ProjectManager}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     {data.StartDate}
    </Typography>
    </div>
     </CardContent>
      </Card>
      <Card  className="head1">
               <CardContent className='Card1'>
                <div>
             <Typography color="textSecondary" gutterBottom >
      Site-Address:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    Railway-juction :
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       Budget(Cr.):
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       EndDate:
    </Typography>
    </div>
    <div>
             <Typography color="textSecondary" gutterBottom >
      {data.SiteAddress}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    {data.Railwayjuction}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     {data.Budget}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
       {data.EndDate}
    </Typography>
    </div>
     </CardContent>
      </Card>
      <Card  className="head1">
               <CardContent className='Card1'>
                <div>
             <Typography color="textSecondary" gutterBottom >
      Suplier: 
    </Typography>
    <Typography color="textSecondary" gutterBottom>
    Contactperson:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Phone:
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Email:
    </Typography>
    </div>
    <div>
             <Typography color="textSecondary" gutterBottom >
      {data.suplier1}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
   {data.contactperson}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
     {data.phone}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
  {data.email}
    </Typography>
    </div>
     </CardContent>
      </Card>
      <Card spacing={2}  className='head1'>
               <CardContent className='Card1'>
                <div>
             <Typography color="textSecondary" gutterBottom >
      ProjectStatus:
    </Typography>
    </div>
    <div>
             <Typography color="textSecondary" gutterBottom >
      {data.ProjectStatus}
    </Typography>
    </div>
     </CardContent>
      </Card>
      </Grid> 
</Grid>}
<Link to='/' className='link'><Button variant='contained' className='button2' ><ArrowLeftIcon/> Back</Button></Link>
<h2 className='details'>Project Details</h2>
	</>
	);

}
export default Reg;


