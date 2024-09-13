import React, { useState } from "react";
import {
  Container,
  Box,
  styled,
  Button,
  Typography,
  Dialog,
} from "@mui/material";
import DataTable from "./DataTable";
import AddStudentForm from "./AddStudentForm";
const PageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",

  //   outlineOffset: "-5px",
  //   width: "100%",
  //   overflow: "scroll",
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + 10}px)`,
}));

const PageWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",
  padding: "1rem 0",
  //   height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
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
  //   height: "50px",
  flexGrow: 1,
}));

const StudenstPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <Button variant="contained" onClick={handleClickOpen}>
                Add Student
              </Button>
            </Box>
          </ContentHeader>
          <ContentContainer>
            <DataTable />
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
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <AddStudentForm onClose={handleClose} />
      </Dialog>
    </>
  );
};

export default StudenstPage;
