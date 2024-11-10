import React, { useState } from "react";
import "../../assets/styles/global.scss";
import "./project.scss";
import { Footer, Header } from "../../components";
import { Pagination } from "@mui/material";
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
} from "../../assets/images";
import { fetchProjects } from "../../hooks/fetchProjects";
import AboutNew from "../../components/AboutDeiBadgingCom/About";
import settings from "../../settings.json";

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
  "th, td": {
    borderBottom: "1px solid #030303",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Projects = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(4);
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [swap, setSwap] = useState("about");
  const { data, isLoading } = fetchProjects(
    `${settings.API_BASE_URL}/badgedRepos`
  );

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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const filteredData =
    data &&
    data
      .filter((row) => row.repoLink.includes(searchTerm.toLowerCase()))
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
    setSwap(toggle);
  };

  return (
    <main>
      <div className="overlay">
        <div className="bgRight"></div>
        <div className="bgCenter"></div>
        <div className="bgLeft"></div>
      </div>
      <Header />
      <div className="container jumbotron__container">
        <h1>Project Badging</h1>
        <div className="about-project">
          <button
            onClick={() => swapHandler("about")}
            className={swap === "about" ? "buttonActive" : "buttonInActive"}
          >
            About Project Badging
          </button>
          <button
            onClick={() => swapHandler("project")}
            className={swap === "project" ? "buttonActive" : "buttonInActive"}
          >
            Badged Projects
          </button>
        </div>
      </div>

      <div className="bg-white">
        <section className="project">
          {swap && swap === "project" ? (
            <>
              <p className="projectIntro container">
                CHAOSS Project Badging is helping open source communities
                prioritize diversity, equity, and inclusion. Using the CHAOSS
                DEI metrics as an industry benchmark, we are creating more
                inclusive and welcoming open-source environments for all. Our
                badged projects serve as exemplary demonstrations:
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
                        <div
                          className="filter"
                          onClick={handleFilterToggle}
                          tabIndex="0"
                          role="button"
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleFilterToggle()
                          }
                        >
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
                          style={{ display: filter ? "" : "none" }}
                        >
                          <ul>
                            <li
                              className={
                                sortBy === "Published" ? "activeFilter" : ""
                              }
                              onClick={() => setSortBy("Published")}
                              tabIndex="0"
                              role="button"
                              onKeyDown={(e) =>
                                e.key === "Enter" && setSortBy("Published")
                              }
                            >
                              <img
                                src={ScheduleIcon}
                                width={25}
                                height={25}
                                alt="filter-icon"
                              />
                              <span>Published Date</span>
                            </li>
                            <li
                              className={
                                sortBy === "Badged" ? "activeFilter" : ""
                              }
                              onClick={() => setSortBy("Badged")}
                              tabIndex="0"
                              role="button"
                              onKeyDown={(e) =>
                                e.key === "Enter" && setSortBy("Badged")
                              }
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
                              className={
                                sortBy === "Project" ? "activeFilter" : ""
                              }
                              onClick={() => setSortBy("Project")}
                              tabIndex="0"
                              role="button"
                              onKeyDown={(e) =>
                                e.key === "Enter" && setSortBy("Project")
                              }
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
                              <StyledTableCell align="left">
                                Badge Date
                              </StyledTableCell>
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
                                  <StyledTableCell
                                    align="left"
                                    style={{ color: "black" }}
                                  >
                                    {formatDate(row.createdAt)}
                                  </StyledTableCell>
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
                              <TableRow
                                style={{
                                  height: 53 * emptyRows,
                                }}
                              >
                                <TableCell colSpan={6} />
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                    <Pagination
                      count={Math.ceil(data.length / rowsPerPage)}
                      color="secondary"
                      shape="rounded"
                      onChange={(e, value) => setPage(value - 1)}
                    />
                  </div>
                </div>
              ) : (
                <div className="loading">Loading...</div>
              )}
            </>
          ) : (
            <AboutNew />
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Projects;
