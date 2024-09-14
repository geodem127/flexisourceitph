import React from "react";
import { Box, Container, styled } from "@mui/material";

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

const HomePage = () => {
  return (
    <PageContainer maxWidth="lg" disableGutters>
      <PageWrapper>HOME</PageWrapper>
    </PageContainer>
  );
};

export default HomePage;
