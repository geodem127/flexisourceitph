import { useState } from "react";
import { PropTypes } from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { Box, IconButton, Skeleton, styled, useTheme } from "@mui/material";
import ConfirmationDialog from "./ConfirmationDialog";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  // { id: "student_id", label: "Student ID", minWidth: 100 },
  { id: "last_name", label: "Last Name", minWidth: 100 },
  { id: "first_name", label: "First Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "dob",
    label: "Date of Birth",
    minWidth: 80,
  },
  // {
  //   id: "createdAt",
  //   label: "Date Created",
  //   minWidth: 100,
  // },

  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const tableLoadingSkeleton = (rows, columns) => {
  return (
    <>
      {[...new Array(rows)].map((rowIndex) => (
        <StyledTableRow key={rowIndex}>
          {[...new Array(columns)].map((colIndex) => (
            <StyledTableCell key={colIndex}>
              <Skeleton animation="wave" />
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </>
  );
};

export default function DataTable({ students = [], deleteStudent }) {
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

  const handleRemoveRow = async () => {
    await deleteStudent(idToDelete);
    handleCloseConfirmDialog();
  };

  return (
    <Box mt={2} sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ width: "100%" }}>
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead
              sx={{
                overflow: "hidden",
                backgroundColor: theme.palette.grey[500],
                color: theme.palette.common.white,
              }}
            >
              <TableRow>
                {columns?.map((column) => (
                  <StyledTableCell
                    key={column?.id}
                    align={column?.align}
                    style={{
                      top: 2,
                      left: 2,
                      right: 2,
                      minWidth: column?.minWidth,
                    }}
                  >
                    {column?.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflow: "hidden" }}>
              {students && students.length > 0
                ? students
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    ?.map((row, index) => (
                      <StyledTableRow key={row?.id}>
                        <StyledTableCell component="th" scope="row">
                          {index + 1 + page * rowsPerPage}
                        </StyledTableCell>
                        {/* <StyledTableCell component="th" scope="row">
                        {row?.student_id}
                      </StyledTableCell> */}
                        <StyledTableCell align="left">
                          {row?.last_name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row?.first_name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row?.email}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row?.dob
                            ? new Date(row?.dob).toLocaleDateString()
                            : ""}
                        </StyledTableCell>
                        {/* <StyledTableCell align="left">
                        {row?.createdAt
                          ? new Date(row?.createdAt).toLocaleDateString()
                          : ""}
                      </StyledTableCell> */}
                        <StyledTableCell align="center">
                          <IconButton
                            size="small"
                            onClick={handleOpenConfirmDialog(row?.id)}
                          >
                            <DeleteForeverOutlinedIcon color="error" />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                : tableLoadingSkeleton(6, columns.length)}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={students && students.length <= 0 ? 0 : students?.length}
          rowsPerPage={students && students.length <= 0 ? 10 : rowsPerPage}
          page={students && students.length <= 0 ? 1 : page}
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
  students: PropTypes.array,
  deleteStudent: PropTypes.func.isRequired,
};
