import React, { useState } from "react";
import "./badgedEvents.scss";
import { Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AZicon, Filter, ScheduleIcon, SearchIcon } from "../../assets/images";
import { fetchProjects } from "../../hooks/fetchProjects";
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

const BadgedEvents = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(4);
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");

  const { data, isLoading } = fetchProjects(
    `${settings.API_BASE_URL}/badged_events`
  );

  const handleFilterToggle = () => {
    setFilter((prev) => !prev);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const filteredData =
    data &&
    data
      .filter((row) => row.event_name.includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === "Published") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortBy === "Badge") {
          return a.badge.name.localeCompare(b.badge.name);
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

  return (
    <div>
      <main>
        <section className="event">
          <>
            <p className="projectIntro container">
              CHAOSS Event Badging is helping open source communities prioritize
              diversity, equity, and inclusion. Using the CHAOSS DEI metrics as
              an industry benchmark, we are creating more inclusive and
              welcoming open-source environments for all. Our badged events
              serve as exemplary demonstrations:
              <hr className="divider" />
            </p>

            {!isLoading ? (
              <div className="badging container">
                <div className="container-holder">
                  <div className="table-top-header">
                    <p>DEI Events</p>
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
                          placeholder="Search for events..."
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
                        style={{ display: filter === true ? "" : "none" }}
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
                              className="ccc"
                              height={25}
                              alt="filter-icon"
                            />
                            <span>Published Date</span>
                          </li>
                          <li
                            className={sortBy === "Badge" ? "activeFilter" : ""}
                            onClick={() => setSortBy("Badge")}
                            tabIndex="0"
                            role="button"
                            onKeyDown={(e) =>
                              e.key === "Enter" && setSortBy("Badge")
                            }
                          >
                            <img
                              src={AZicon}
                              width={25}
                              height={25}
                              alt="filter-icon"
                            />
                            <span>Badge Name</span>
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
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">
                              Event Name
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Badge
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Reviewers
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Application ID & Link
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
                                  <a
                                    href={row.event_URL}
                                    target="_blank"
                                    style={{
                                      color: "#000",
                                      textDecoration: "underline",
                                    }}
                                    rel="noreferrer"
                                  >
                                    {row.event_name}
                                  </a>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  <img
                                    src={row.badge.badgeURL}
                                    alt="badgeImage"
                                  />
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {row.reviewers.map((reviewer, index) => (
                                    <a
                                      key={index}
                                      href={reviewer.github_profile_link}
                                      target="_blank"
                                      style={{
                                        color: "#000",
                                        textDecoration: "underline",
                                      }}
                                      rel="noreferrer"
                                    >
                                      {reviewer.name}
                                      {index !== row.reviewers.length - 1 &&
                                        ", "}
                                    </a>
                                  ))}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  <a
                                    href={row.application.app_URL}
                                    target="_blank"
                                    style={{
                                      color: "#000",
                                      textDecoration: "underline",
                                    }}
                                    rel="noreferrer"
                                  >
                                    #{row.application.app_no}
                                  </a>
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}

                          {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                              <TableCell colSpan={5} />
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
        </section>
      </main>
    </div>
  );
};

export default BadgedEvents;
