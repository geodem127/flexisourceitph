import React from "react";
import {
  Box,
  Button,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
// import "./codeMirror.css";
import "./monokai.css";
import { SCRIPT_CODE } from "./scriptData";

const PageContainer = styled(Box)(({ theme }) => ({
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
  maxWidth: "100%",
}));

const BoxWrapper = styled(Paper)(() => ({
  height: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexGrow: 1,
  flexShrink: 0,

  whiteSpace: "pre-wrap",
  position: "relative",
  overflow: "hidden",
}));

const CodeWrapper = styled("code")(() => ({
  borderColor: "#353737",
  borderStyle: "solid",
  borderTopWidth: "17px",
  borderLeftWidth: "17px",
  background: "#131313",
  color: "#c9c7c7",
  height: "100%",
  width: "100%",
  overflow: "scroll",
  position: "relative",
  left: 0,
  top: 0,
  padding: "0",
  fontSize: ".75rem",
  paddingLeft: "1.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "& > *": {
    width: "100%",
    height: "1.25rem",
    lineHeight: "1.25rem",
    padding: 0,
    margin: 0,
    flexGrow: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  "& .CodeMirror-gutter-wrapper": {
    marginTop: "-1.25rem",
    marginLeft: "-1rem",
    padding: 0,
    width: "2rem",
    lineHeight: "1.25rem",
    fontWeight: "bold",
    "& .CodeMirror-linenumber": {
      color: "#696868",
    },
  },
}));

let TEST_DATA = `
4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440`;

const CodingChallengePage = () => {
  const [inputValue, setInputValue] = React.useState(TEST_DATA.trim());
  const [outputValue, setOutputValue] = React.useState("");

  const handleClear = () => {
    setInputValue("");
    setOutputValue("");
  };

  const handleReset = () => {
    setInputValue(TEST_DATA.trim());
    setOutputValue("");
  };
  const handleViewCode = () => {
    setOutputValue(
      <CodeWrapper
        className=" cm-s-monokai"
        dangerouslySetInnerHTML={{ __html: SCRIPT_CODE.trim() }}
      />
    );
  };

  const handleRun = () => {
    const cleanInputValue = inputValue.trim();

    let testCases = processInput(cleanInputValue);
    let results = assignActivities(testCases);
    setOutputValue(results);
  };

  return (
    <PageContainer>
      <PageWrapper>
        <Typography variant="h4">Coding Challenge</Typography>
        <Box
          sx={{
            height: "80vh",
            minHeight: "40vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            columnGap: 2,
          }}
        >
          <BoxWrapper sx={{ width: "30%" }}>
            <TextField
              fullWidth
              multiline
              maxRows={10}
              rows={25}
              variant="filled"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              sx={{ width: "100%", columnGap: 1 }}
            >
              <Button variant="contained" color="error" onClick={handleClear}>
                Clear
              </Button>
              <Button variant="contained" color="warning" onClick={handleReset}>
                Reset
              </Button>
              <Button variant="contained" color="info" onClick={handleViewCode}>
                Code
              </Button>
              <Button variant="contained" color="primary" onClick={handleRun}>
                Run
              </Button>
            </Box>
          </BoxWrapper>
          <BoxWrapper sx={{ width: "60%" }}>{outputValue}</BoxWrapper>
        </Box>
      </PageWrapper>
    </PageContainer>
  );
};

// Helper function to process the input
function processInput(input) {
  let lines = input.trim().split("\n");
  let T = parseInt(lines[0]); // Number of test cases
  let testCases = [];
  let lineIndex = 1;

  // Read each test case
  for (let t = 0; t < T; t++) {
    let N = parseInt(lines[lineIndex]); // Number of activities
    let activities = [];
    for (let i = 0; i < N; i++) {
      let [S, E] = lines[lineIndex + 1 + i].split(" ").map(Number);
      activities.push([S, E]);
    }
    testCases.push(activities);
    lineIndex += N + 1;
  }

  return testCases;
}

// Helper function to assign activities to Loraine ('C') or Charles ('J')
function assignActivities(testCases) {
  let results = [];

  // Loop through each test case
  testCases.forEach((activities, index) => {
    let n = activities.length;

    // Add index to each activity so we can reconstruct the order later
    activities = activities.map((activity, i) => ({
      index: i,
      start: activity[0],
      end: activity[1],
    }));

    // Sort activities by start time
    activities.sort((a, b) => a.start - b.start);

    let schedule = Array(n).fill(null); // Array to store 'C' or 'J'
    let endC = 0,
      endJ = 0; // End times for Loraine ('C') and Charles ('J')

    let possible = true;

    // Try to assign activities to Loraine ('C') or Charles ('J')
    for (let i = 0; i < n; i++) {
      let activity = activities[i];

      if (activity.start >= endC) {
        // Assign to Loraine ('C')
        schedule[activity.index] = "C";
        endC = activity.end;
      } else if (activity.start >= endJ) {
        // Assign to Charles ('J')
        schedule[activity.index] = "J";
        endJ = activity.end;
      } else {
        // Neither can take it, so it's impossible
        possible = false;
        break;
      }
    }

    // Construct the result for the current test case
    if (possible) {
      results.push(`\nCase #${index + 1}: ${schedule.join("")}`);
    } else {
      results.push(`\nCase #${index + 1}: IMPOSSIBLE`);
    }
  });

  return results;
}

export default CodingChallengePage;
