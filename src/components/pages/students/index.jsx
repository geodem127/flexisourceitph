import { useEffect, useState } from "react";
import {
  Container,
  Box,
  styled,
  Button,
  Typography,
  Dialog,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "./DataTable";
import AddStudentForm from "./AddStudentForm";
import useStudents from "./useStudents";
import LoadingButton from "../../common/LoadingButton";
import toast from "react-hot-toast";
const PageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",

  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + 10}px)`,
}));

const PageWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",
  padding: "1rem 0",
}));
const ContentHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  height: "50px",
  flexGrow: 0,
}));
const ContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "relative",

  flexGrow: 1,
}));

const StudenstPage = () => {
  const [open, setOpen] = useState(false);
  const [refreshInProgress, setRefreshInProgress] = useState(false);
  const [studentRows, setStudentRows] = useState([]);
  const { isLoading, students, getStudents, deleteStudent, createNewStudent } =
    useStudents();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRefresh = async () => {
    setRefreshInProgress(true);
    const res = await getStudents();
    setRefreshInProgress(false);
    if (res?.status === "success") {
      toast.success("Latest students data has been loaded.", {
        id: "studentIndexSuccessGetStudent",
      });
    }

    if (res?.status === "failed") {
      toast.error("Failed to get the list of students.", {
        id: "studentIndexFailedGetStudent",
      });
    }
  };

  const handleDeleteStudent = async (id) => {
    setRefreshInProgress(true);
    const deleteResponse = await deleteStudent(id);
    await getStudents();
    setRefreshInProgress(false);
    if (deleteResponse?.status === "success") {
      toast.success(`Student [ ${id} ] has been deleted successfully.`);
    }

    if (deleteResponse?.status === "failed") {
      toast.error(`Failed to delete student: ${id}`);
    }
  };

  const handleCreateStudent = async (data) => {
    setRefreshInProgress(true);
    const createResponse = await createNewStudent({ ...data });
    await getStudents();

    setRefreshInProgress(false);
    if (createResponse?.status === "success") {
      toast.success(`Successfully created student: ${data?.id}`);
    }

    if (createResponse?.status === "failed") {
      toast.error(`Failed to create student: ${data?.id}`);
    }
  };

  useEffect(() => {
    if (refreshInProgress || isLoading) return;
    setStudentRows(students?.data);
  }, [refreshInProgress, isLoading, students]);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <PageContainer maxWidth="lg" disableGutters>
        <PageWrapper>
          <ContentHeader>
            <Box>
              <Typography variant="h4" component="div" color="text.secondary">
                Students
              </Typography>
            </Box>

            <Box>
              <LoadingButton
                variant="contained"
                startIcon={<CachedIcon />}
                onClick={handleRefresh}
                sx={{
                  marginRight: ".5rem",
                }}
                isLoading={refreshInProgress || isLoading}
                label="Refresh"
              />

              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
              >
                Create New Student
              </Button>
            </Box>
          </ContentHeader>
          <ContentContainer>
            <DataTable
              students={studentRows}
              deleteStudent={handleDeleteStudent}
            />
          </ContentContainer>
        </PageWrapper>
      </PageContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries(formData.entries());
            // const email = formJson.email;
            handleClose();
          },
        }}
      >
        <AddStudentForm
          onClose={handleClose}
          createNewStudent={handleCreateStudent}
          isLoading={refreshInProgress}
        />
      </Dialog>
    </>
  );
};

export default StudenstPage;
