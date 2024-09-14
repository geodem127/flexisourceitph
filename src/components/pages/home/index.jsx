import { Box, Container, styled } from "@mui/material";

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

const HomePage = () => {
  return (
    <PageContainer maxWidth="lg" disableGutters>
      <PageWrapper>HOME</PageWrapper>
    </PageContainer>
  );
};

export default HomePage;
