import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Box, IconButton, styled, useTheme } from "@mui/material";

import STUDENT_DATA from "./studentsData";

//student_id, first_name  last_name, email, dob
const columns = [
  { id: "student_id", label: "Student ID", minWidth: 100 },
  { id: "last_name", label: "Last Name", minWidth: 170 },
  { id: "first_name", label: "First Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  {
    id: "dob",
    label: "Date of Birth",
    minWidth: 100,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 150,
    align: "center",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.grey[500],
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    padding: "1rem ",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataTable() {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditRow = (id) => {
    return () => {
      alert("EDIT: " + id);
    };
  };

  const handleRemoveRow = (id) => {
    return () => {
      alert("REMOVE: " + id);
    };
  };
  const handleViewRow = (id) => {
    return () => {
      alert("VIEW: " + id);
    };
  };

  useEffect(() => {
    console.log({ STUDENT_DATA, rows });
    setRows(STUDENT_DATA);
  }, [STUDENT_DATA, rows]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ minHeight: "550px", maxHeight: "550px" }}>
          <Table aria-label="sticky table" size="small" dense table>
            <TableHead
              sx={{
                overflow: "hidden",
                backgroundColor: theme.palette.grey[500],
                color: theme.palette.common.white,
              }}
            >
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      top: 2,
                      left: 2,
                      right: 2,
                      minWidth: column.minWidth,
                    }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflow: "hidden" }}>
              {/* student_id, last_name, first_name, email, dob, action */}
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.student_id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.first_name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="left">{row.dob}</StyledTableCell>
                    <StyledTableCell align="center">
                      {/* <Button onClick={handleRemoveRow()}>Del</Button> */}

                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={handleViewRow(row.id)}
                      >
                        <OpenInNewOutlinedIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={handleEditRow(row.id)}
                      >
                        <DriveFileRenameOutlineOutlinedIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={handleRemoveRow(row.id)}
                      >
                        <DeleteForeverOutlinedIcon color="error" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
