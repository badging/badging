import React, { useState } from 'react';
import '../../assets/styles/global.scss';
import './project.scss';
import { Footer, Header } from '../../components';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Pagination, TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AZicon, DateIcon, Filter, ScheduleIcon, SearchIcon, badge, curlyBraces } from '../../assets/images';
import { Publish } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1C1C1C',
    color: theme.palette.common.white,
    borderBottom: '1px solid #030303',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: '#131314',
    color: theme.palette.common.white,
  },
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  'th, td': {
    borderBottom: '1px solid #030303',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, date, title, badge, repository) {
  return { id, date, title, badge, repository };
}

const rows = [
  createData(1, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(2,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(3, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(4, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(5, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(6,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(7,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(8,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(9, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(10,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(11, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(12, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(13, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(14,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(15, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(16, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(17, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(18, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(19, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(20, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(21, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(22, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(23, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(24,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(25,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(26,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(27,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(26, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(29,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(10,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(11, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(12, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(13, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(14,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(15, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(16, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(17, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(18, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(19, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(20, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(21, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(22, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(23, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(24,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(25,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(26,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(27,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(26, 'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(29,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github'),
  createData(30,'dd-mm-yy', 'Mesh Inclusive Project', 'Img', 'bitly/mesh/github')
  // ...rest of the rows
];

const StyledTablePagination = styled(TablePagination)(theme => ({
  backgroundColor: '#1C1C1C',
  color: '#fff',
}));

const Projects = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [filter, setFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState("Published");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterToggle = () => {
    setFilter((prev) =>  !prev)
  }

  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <main>
      <Header />
      {/* <Jumbotron
        title="DEI Badged Projects"
        description="Lorem ipsum dolor sit amet consectetur. Sed risus ultrices sit nibh sed.
        Interdum urna molestie fames porttitor elementum a diam laoreet. Sed
        tempor habitant phasellus velit sagittis mauris lorem pretium.
        Arcu neque id duis eu pellentesque in amet et. Ipsum ultricies
        a etiam est. Viverra eleifend tortor iaculis fringilla sed."
      /> */}
        <div className="container jumbotron__container">
					<img src={curlyBraces} alt="badging-logo" />
					<h1>DEI Badged Projects</h1>
				</div>
      <section className="project">
       
        <p className='projectIntro container'>
            The All in CHAOSS Badging project is 
            helping open source communities prioritize diversity, 
            equity, and inclusion. Using the CHAOSS DEI metrics 
            as an industry benchmark, we are creating more 
            inclusive and welcoming open-source environments 
            for all. Our badged projects serve as exemplary 
            demonstrations:
        </p>
        <hr className='divider' />
         <div className="badging container">
          <div className='container-holder'>
            <div className="table-top-header">
              <p>DEI Projects</p>
              <div className='filter-projects'>
                <div className="search">
                  <img src={SearchIcon} width={25} height={25} alt='filter-icon'/>
                  <input type="text" placeholder='Search for projects...' />
                </div>
                <div className="filter" onClick={handleFilterToggle}>
                  <button>Filter</button>
                  <img src={Filter} width={25} height={25} alt='filter-icon'/>
                </div>
                <div className="filter-dropdown" style={{display: filter == true ? '' : 'none'}}>
                    <ul>
                      <li className={filterStatus == "Published" ? 'activeFilter' : ''} onClick={ () => setFilterStatus("Published")}>
                        <img src={ScheduleIcon} width={25} className='ccc' height={25} alt='filter-icon'/> 
                          <span>Published Date</span>
                      </li>
                      <li className={filterStatus == "Badged" ? 'activeFilter' : ''}  onClick={() => setFilterStatus("Badged")}>
                        <img src={DateIcon} width={25} height={25} alt='filter-icon'/> 
                          <span>Badged Date</span>
                      </li>
                      <li className={filterStatus == "Project" ? 'activeFilter' : ''}  onClick={() => setFilterStatus("Project")}>
                        <img src={AZicon} width={25} height={25} alt='filter-icon'/> 
                          <span>Project Title</span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          <div className="badging-table">
            <TableContainer component={Paper}>
             
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="left">Badge Assigned Date</StyledTableCell>
                    <StyledTableCell align="left">Project Title</StyledTableCell>
                    <StyledTableCell align="left">Badge Assigned</StyledTableCell>
                    <StyledTableCell align="left">Project Repository</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                  ).map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.date}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.title}</StyledTableCell>
                      <StyledTableCell align="left">
                        <img src={badge} alt="badgeImage" />
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.repository}</StyledTableCell>
                    </StyledTableRow>
                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="badging-footer">
          <Pagination
              count={Math.ceil(rows.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, newPage) => setPage(newPage - 1)}
              variant="outlined"
              shape="rounded"
              color="success"
              className="pagination"
            />
          </div>
          </div>
          
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
