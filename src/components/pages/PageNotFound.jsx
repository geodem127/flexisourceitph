import React from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Box } from "@mui/material";
// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  min-height: calc(100vh - 150px);
  display: grid;
  place-content: center;
  /* padding-bottom: 2rem; */

  & #container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  & #visual {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 250px;
    width: 400px;
    /* margin-bottom: 2rem; */
    transform: scale(0.5);
  }

  & #screen {
    border: 10px solid rgba(100, 100, 100, 0.4);
    width: 80%;
    height: 130px;
    border-radius: 12px 12px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & #eye-wrapper {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .eye {
    color: rgba(100, 100, 100, 0.4);
    font-size: 2rem;
    font-weight: 600;
  }

  & #mouth {
    width: 20%;
    height: 20px;
    padding: 0;
  }

  .wave {
    animation: moveTheWave 3400ms linear infinite;
    stroke-dasharray: 0 16 101 16;
  }

  @keyframes moveTheWave {
    0% {
      stroke-dashoffset: 0;
      transform: translate3d(0, 0, 0);
    }

    100% {
      stroke-dashoffset: -133;
      transform: translate3d(-90px, 0, 0);
    }
  }

  & #keyboard {
    width: 100%;
    min-height: 15px;
    background: rgba(100, 100, 100, 0.6);
    border-radius: 4px;
  }

  & #home-button {
    background: #199a57;
    padding: 13px 20px;
    border: none;
    color: #fff;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 3rem;
    text-decoration: none;
  }
`;

// ----------------------------------------------------------------------

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <ContentStyle
      sx={{ textAlign: "center", alignItems: "center", transform: "scale(1)" }}
    >
      <div id="container">
        <div id="visual">
          <div id="screen">
            <div id="eye-wrapper">
              <span className="eye">✖</span>
              <span className="eye">✖</span>
            </div>
            <div id="mouth">
              <svg width="100%" height="40" viewBox="5 0 80 60">
                <path
                  className="wave"
                  fill="none"
                  stroke="#a4a7ab"
                  strokeWidth="10"
                  strokeLinecap="round"
                  d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"
                />
              </svg>
            </div>
          </div>
          <Box id="keyboard"></Box>
        </div>
        <Typography variant="h1" component="div">
          404
        </Typography>
        <Typography variant="h3" component="div" color="text.secondary">
          Page Not Found
        </Typography>
        <Button
          size="medium"
          variant="contained"
          onClick={() => navigate(-1)}
          sx={{ mt: 4 }}
        >
          Go Back
        </Button>
      </div>
    </ContentStyle>
  );
}
