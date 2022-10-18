import { Fragment,useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import './GeneratePDF.css';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
 const data= useSelector(state=>state.dataFetchSlice.dataArray);
 const componentRef = useRef();
 const handlePrint = useReactToPrint({
   content: () => componentRef.current,
 });



  return (
    <Fragment>
    <div className='margin' >
    <TableContainer component={Paper}  ref={componentRef}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project ID</StyledTableCell>
            <StyledTableCell align="right">Project Name</StyledTableCell>
            <StyledTableCell align="right">Budget (in Cr.)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell align="right">{item.ProjectName}</StyledTableCell>
              <StyledTableCell align="right">{item.Budget}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Button onClick={handlePrint} variant='contained' className='button1'>GeneratePDF</Button>
    </Fragment>
  );
}
