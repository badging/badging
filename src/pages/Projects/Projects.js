import React, { useState } from "react";
import "../../assets/styles/global.scss";
import "./project.scss";
import { AboutDeiMobile, Footer, Header } from "../../components";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { Pagination, TablePagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  AZicon,
  DateIcon,
  Filter,
  ScheduleIcon,
  SearchIcon,
  badge,
  curlyBraces,
} from "../../assets/images";
import { Publish } from "@mui/icons-material";
import { fetchProjects } from "../../hooks/fetchProjects";
import RandomString from "../../components/RandomString";
import AboutNew from "../../components/AboutDeiBadgingCom/About";
import settings from '../../settings.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1C1C1C",
    color: theme.palette.common.white,
    borderBottom: "1px solid #030303",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#fff",
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "th, td": {
    borderBottom: "1px solid #030303",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTablePagination = styled(TablePagination)((theme) => ({
  backgroundColor: "#1C1C1C",
  color: "#fff",
}));

const Projects = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [filter, setFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState("Published");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [swap, setSwap] = useState("about")
  const { data, isLoading, error } = fetchProjects(`${settings.API_BASE_URL}/badgedRepos`);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterToggle = () => {
    setFilter((prev) => !prev);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const filteredData =
    data &&
    data
      .filter((row) =>
        // row.title.toLowerCase().includes(searchTerm.toLowerCase())
        row.repoLink.includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "Published") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortBy === "Badged") {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        } else if (sortBy === "Project") {
          return a.badgeType.localeCompare(b.badgeType);
        }
        return 0;
      });

  function extractImageUrl(markdownText) {
    const imageUrlRegex = /!\[.*?\]\((.*?)\)/;
    const match = markdownText.match(imageUrlRegex);
    return match ? match[1] : null;
  }

const swapHandler = (toggle) => {
  setSwap(toggle)
}

  return (
    <main>
      <div className='overlay'>
            <div className='bgRight'></div>
            <div className='bgCenter'></div>
            <div className='bgLeft'></div>
        </div>
      <Header />
      <div className="container jumbotron__container">
      {/* <div className='overlay'>
        <div className='bgRight'></div>
        <div className='bgCenter'></div>
        <div className='bgLeft'></div>
      </div> */}
        {/* <img src={curlyBraces} alt="badging-logo" /> */}
        <h1>Project Badging</h1>
        <div className="about-project">
          <button onClick={() =>swapHandler('about')} className={swap == 'about' ? 'buttonActive' : 'buttonInActive'}>About Project Badging</button>
          <button onClick={() => swapHandler('project')} className={swap == 'project' ? 'buttonActive' : 'buttonInActive'}>Badged Projects</button>
        </div>
      </div>


      <section className="project">
        {
          swap && swap == 'project' ? (
            <>
            <p className="projectIntro container">
        CHAOSS Project Badging is helping open source 
        communities prioritize diversity, equity, and inclusion.
         Using the CHAOSS DEI metrics as an industry benchmark, we are 
         creating more inclusive and welcoming open-source environments for all. 
         Our badged projects serve as exemplary demonstrations:
         <hr className="divider" />
        </p>
        
        {!isLoading ? (
          <div className="badging container">
            <div className="container-holder">
              <div className="table-top-header">
                <p>DEI Projects</p>
                <div className="filter-projects">
                  <div className="search">
                    <img
                      src={SearchIcon}
                      width={25}
                      height={25}
                      alt="filter-icon"
                    />
                    <input
                      type="text"
                      value={searchTerm}
                      placeholder="Search for projects..."
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="filter" onClick={handleFilterToggle}>
                    <button>Filter</button>
                    <img
                      src={Filter}
                      width={25}
                      height={25}
                      alt="filter-icon"
                    />
                  </div>
                  <div
                    className="filter-dropdown"
                    style={{ display: filter == true ? "" : "none" }}
                  >
                    <ul>
                      <li
                        className={sortBy == "Published" ? "activeFilter" : ""}
                        onClick={() => setSortBy("Published")}
                      >
                        <img
                          src={ScheduleIcon}
                          width={25}
                          className="ccc"
                          height={25}
                          alt="filter-icon"
                        />
                        <span>Published Date</span>
                      </li>
                      <li
                        className={sortBy == "Badged" ? "activeFilter" : ""}
                        onClick={() => setSortBy("Badged")}
                      >
                        <img
                          src={DateIcon}
                          width={25}
                          height={25}
                          alt="filter-icon"
                        />
                        <span>Badged Date</span>
                      </li>
                      <li
                        className={sortBy == "Project" ? "activeFilter" : ""}
                        onClick={() => setSortBy("Project")}
                      >
                        <img
                          src={AZicon}
                          width={25}
                          height={25}
                          alt="filter-icon"
                        />
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
                        {/* <StyledTableCell>S/N</StyledTableCell> */}
                        <StyledTableCell align="left">
                          Badge Date
                        </StyledTableCell>
                        {/* <StyledTableCell align="left">
                          Project Title
                        </StyledTableCell> */}
                        <StyledTableCell align="left">
                          DEI Badge
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          Project Repository
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {filteredData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => (
                          <StyledTableRow key={index}>
                            {/* <StyledTableCell component="th" scope="row">
                              {row.id}
                            </StyledTableCell> */}
                            <StyledTableCell align="left">
                              {formatDate(row.createdAt)}
                            </StyledTableCell>
                            {/* <StyledTableCell align="left">
                              {(() => {
                                const text = row.repoLink.split("/");
                                return text[3];
                              })()}
                            </StyledTableCell> */}
                            <StyledTableCell align="left">
                              <img
                                src={extractImageUrl(row.attachment)}
                                width={100}
                                height={100}
                                alt="badgeImage"
                              />
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              <a
                                href={row.repoLink}
                                target="_blank"
                                style={{ color: "#000" }}
                                rel="noreferrer"
                              >
                                {row.repoLink}
                              </a>
                            </StyledTableCell>
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
                  count={Math.ceil(data.length / rowsPerPage)}
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
        ) : (
          <p>Error Retrieving Data....</p>
        )}
            </>
          ): (
          <AboutNew />
          )
        }
        

        
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
