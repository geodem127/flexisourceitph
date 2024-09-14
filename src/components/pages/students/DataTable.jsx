import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
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
import ConfirmationDialog from "./ConfirmationDialog";

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

export default function DataTable({ isLoading, students, deleteStudent }) {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenConfirmDialog = (id) => {
    return () => {
      setIdToDelete(id);
      setConfirmDialogOpen(true);
    };
  };
  const handleCloseConfirmDialog = () => {
    setIdToDelete(null);
    setConfirmDialogOpen(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //   const handleEditRow = (id) => {
  //     return () => {
  //       alert("EDIT: " + id);
  //     };
  //   };

  //   const handleViewRow = (id) => {
  //     return () => {
  //       alert("VIEW: " + id);
  //     };
  //   };

  const handleRemoveRow = async () => {
    await deleteStudent(idToDelete);
    handleCloseConfirmDialog();
  };

  // useEffect(() => {
  //   if (isLoading) return;
  //   console.log({ STUDENT_DATA, rows, students });

  //   setRows(students);
  // }, [isLoading, students]);

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
              {students
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <StyledTableRow key={row?.id}>
                    <StyledTableCell component="th" scope="row">
                      {row?.student_id}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row?.last_name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row?.first_name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row?.email}</StyledTableCell>
                    <StyledTableCell align="left">{row?.dob}</StyledTableCell>
                    <StyledTableCell align="center">
                      {/* <Button onClick={handleRemoveRow()}>Del</Button> */}

                      {/* <IconButton size="small" onClick={handleViewRow(row?.id)}>
                        <OpenInNewOutlinedIcon />
                      </IconButton>
                      <IconButton size="small" onClick={handleEditRow(row?.id)}>
                        <DriveFileRenameOutlineOutlinedIcon />
                      </IconButton> */}
                      <IconButton
                        size="small"
                        // onClick={handleRemoveRow(row?.id)}
                        onClick={handleOpenConfirmDialog(row?.id)}
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
          count={students?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ConfirmationDialog
        open={confirmDialogOpen}
        onClose={handleCloseConfirmDialog}
        title="Please confirm"
        content="Delete this user?"
        action={handleRemoveRow}
      />
    </Box>
  );
}

DataTable.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};
