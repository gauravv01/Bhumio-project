import HomeIcon from '@mui/icons-material/Home';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {Link} from 'react-router-dom';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import "./Navbar.css";
const Navbar=(props)=>{
	return(
		<div className='maindiv'>
		<ul>
		<li><Link to="/"><HomeIcon  /></Link></li><br/><br/>
		<li><Link to="/pdf"><PictureAsPdfIcon /></Link></li><br/><br/>
		<li><Link to="/statistics"><LeaderboardIcon /></Link></li>
		</ul>
		<div className='internal_div'>{props.children}</div>
</div>
	
	);
}
export default Navbar;