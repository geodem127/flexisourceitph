import React from "react";
import {
  alpha,
  Box,
  Button,
  Paper,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./monokai.css";

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + 20}px)`,
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
  "&:has(.codeWrapper)": {
    padding: "0!important",
  },
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
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
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
    const scData = scriptData().trim();
    setOutputValue(
      <CodeWrapper
        className="codeWrapper cm-s-monokai"
        dangerouslySetInnerHTML={{ __html: scData }}
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
            minHeight: "30vh",
            display: "flex",
            flexDirection: mdScreen ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            columnGap: 2,
          }}
        >
          <BoxWrapper sx={{ width: mdScreen ? "100%" : "48%" }}>
            <TextField
              fullWidth
              multiline
              maxRows={10}
              rows={20}
              minRows={20}
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
          <BoxWrapper
            sx={{
              width: mdScreen ? "100%" : "48%",
              background: alpha(theme.palette.background.paper, 0.5),
            }}
          >
            {outputValue}
          </BoxWrapper>
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

function scriptData() {
  return `<div class="codeWrapper" style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            1
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// Helper function to process the input</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            2
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">processInput</span>(<span class="cm-def">input</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            3
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">let</span> <span class="cm-def">lines</span> <span class="cm-operator">=</span> <span class="cm-variable-2">input</span>.<span class="cm-property">trim</span>().<span class="cm-property">split</span>(<span class="cm-string">"\\n"</span>);</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            4
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">let</span> <span class="cm-def">T</span> <span class="cm-operator">=</span> <span class="cm-variable">parseInt</span>(<span class="cm-variable-2">lines</span>[<span class="cm-number">0</span>]); <span class="cm-comment">// Number of test cases</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            5
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">let</span> <span class="cm-def">testCases</span> <span class="cm-operator">=</span> [];</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            6
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">let</span> <span class="cm-def">lineIndex</span> <span class="cm-operator">=</span> <span class="cm-number">1</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            7
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            8
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-comment">// Read each test case</span></span></pre>
      </div>
      <div style="position: relative" class="">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            9
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">t</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-variable-2">t</span> <span class="cm-operator">&lt;</span> <span class="cm-variable-2">T</span>; <span class="cm-variable-2">t</span><span class="cm-operator">++</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            10
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">let</span> <span class="cm-def">N</span> <span class="cm-operator">=</span> <span class="cm-variable">parseInt</span>(<span class="cm-variable-2">lines</span>[<span class="cm-variable-2">lineIndex</span>]); <span class="cm-comment">// Number of activities</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            11
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">let</span> <span class="cm-def">activities</span> <span class="cm-operator">=</span> [];</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            12
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> <span class="cm-operator">&lt;</span> <span class="cm-variable-2">N</span>; <span class="cm-variable-2">i</span><span class="cm-operator">++</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            13
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-keyword">let</span> [<span class="cm-def">S</span>, <span class="cm-def">E</span>] <span class="cm-operator">=</span> <span class="cm-variable-2">lines</span>[<span class="cm-variable-2">lineIndex</span> <span class="cm-operator">+</span> <span class="cm-number">1</span> <span class="cm-operator">+</span> <span class="cm-variable-2">i</span>].<span class="cm-property">split</span>(<span class="cm-string">" "</span>).<span class="cm-property">map</span>(<span class="cm-variable">Number</span>);</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            14
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-variable-2">activities</span>.<span class="cm-property">push</span>([<span class="cm-variable-2">S</span>, <span class="cm-variable-2">E</span>]);</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            15
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    }</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            16
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-variable-2">testCases</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">activities</span>);</span></pre>
      </div>
      <div style="position: relative" class="">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            17
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-variable-2">lineIndex</span> <span class="cm-operator">+=</span> <span class="cm-variable-2">N</span> <span class="cm-operator">+</span> <span class="cm-number">1</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            18
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  }</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            19
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            20
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">return</span> <span class="cm-variable-2">testCases</span>;</span></pre>
      </div>
      <div style="position: relative" class="">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            21
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">}</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            22
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            23
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// Helper function to assign activities to Loraine ('C') or Charles ('J')</span></span></pre>
      </div>
     
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            25
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">let</span> <span class="cm-def">results</span> <span class="cm-operator">=</span> [];</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            26
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            27
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-comment">// Loop through each test case</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            28
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-variable-2">testCases</span>.<span class="cm-property">forEach</span>((<span class="cm-def">activities</span>, <span class="cm-def">index</span>) <span class="cm-operator">=&gt;</span> {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            29
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">let</span> <span class="cm-def">n</span> <span class="cm-operator">=</span> <span class="cm-variable-2">activities</span>.<span class="cm-property">length</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            30
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            31
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-comment">// Add index to each activity so we can reconstruct the order later</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            32
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-variable-2">activities</span> <span class="cm-operator">=</span> <span class="cm-variable-2">activities</span>.<span class="cm-property">map</span>((<span class="cm-def">activity</span>, <span class="cm-def">i</span>) <span class="cm-operator">=&gt;</span> ({</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            33
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-property">index</span>: <span class="cm-variable-2">i</span>,</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            34
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-property">start</span>: <span class="cm-variable-2">activity</span>[<span class="cm-number">0</span>],</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            35
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-property">end</span>: <span class="cm-variable-2">activity</span>[<span class="cm-number">1</span>],</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            36
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    }));</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            37
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            38
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-comment">// Sort activities by start time</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            39
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-variable-2">activities</span>.<span class="cm-property">sort</span>((<span class="cm-def">a</span>, <span class="cm-def">b</span>) <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">a</span>.<span class="cm-property">start</span> <span class="cm-operator">-</span> <span class="cm-variable-2">b</span>.<span class="cm-property">start</span>);</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            40
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            41
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">let</span> <span class="cm-def">schedule</span> <span class="cm-operator">=</span> <span class="cm-variable">Array</span>(<span class="cm-variable-2">n</span>).<span class="cm-property">fill</span>(<span class="cm-atom">null</span>); <span class="cm-comment">// Array to store 'C' or 'J'</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            42
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">let</span> <span class="cm-def">endC</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>,</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            43
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-def">endJ</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-comment">// End times for Loraine ('C') and Charles ('J')</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            44
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            45
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">let</span> <span class="cm-def">possible</span> <span class="cm-operator">=</span> <span class="cm-atom">true</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            46
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            47
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-comment">// Try to assign activities to Loraine ('C') or Charles ('J')</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            48
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">for</span> (<span class="cm-keyword">let</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> <span class="cm-operator">&lt;</span> <span class="cm-variable-2">n</span>; <span class="cm-variable-2">i</span><span class="cm-operator">++</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            49
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-keyword">let</span> <span class="cm-def">activity</span> <span class="cm-operator">=</span> <span class="cm-variable-2">activities</span>[<span class="cm-variable-2">i</span>];</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            50
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            51
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-keyword">if</span> (<span class="cm-variable-2">activity</span>.<span class="cm-property">start</span> <span class="cm-operator">&gt;=</span> <span class="cm-variable-2">endC</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            52
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-comment">// Assign to Loraine ('C')</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            53
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">schedule</span>[<span class="cm-variable-2">activity</span>.<span class="cm-property">index</span>] <span class="cm-operator">=</span> <span class="cm-string">"C"</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            54
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">endC</span> <span class="cm-operator">=</span> <span class="cm-variable-2">activity</span>.<span class="cm-property">end</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            55
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      } <span class="cm-keyword">else</span> <span class="cm-keyword">if</span> (<span class="cm-variable-2">activity</span>.<span class="cm-property">start</span> <span class="cm-operator">&gt;=</span> <span class="cm-variable-2">endJ</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            56
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-comment">// Assign to Charles ('J')</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            57
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">schedule</span>[<span class="cm-variable-2">activity</span>.<span class="cm-property">index</span>] <span class="cm-operator">=</span> <span class="cm-string">"J"</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            58
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">endJ</span> <span class="cm-operator">=</span> <span class="cm-variable-2">activity</span>.<span class="cm-property">end</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            59
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      } <span class="cm-keyword">else</span> {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            60
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-comment">// Neither can take it, so it's impossible</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            61
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">possible</span> <span class="cm-operator">=</span> <span class="cm-atom">false</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            62
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-keyword">break</span>;</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            63
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      }</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            64
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    }</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            65
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            66
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-comment">// Construct the result for the current test case</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            67
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">if</span> (<span class="cm-variable-2">possible</span>) {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            68
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-variable-2">results</span>.<span class="cm-property">push</span>(<span class="cm-string-2">\`\\nCase #\${</span><span class="cm-variable-2">index</span> <span class="cm-operator">+</span> <span class="cm-number">1</span><span class="cm-string-2">}: \${</span><span class="cm-variable-2">schedule</span>.<span class="cm-property">join</span>(<span class="cm-string">""</span>)<span class="cm-string-2">}\`</span>);</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            69
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    } <span class="cm-keyword">else</span> {</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            70
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">      <span class="cm-variable-2">results</span>.<span class="cm-property">push</span>(<span class="cm-string-2">\`\\nCase #\${</span><span class="cm-variable-2">index</span> <span class="cm-operator">+</span> <span class="cm-number">1</span><span class="cm-string-2">}: IMPOSSIBLE\`</span>);</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            71
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">    }</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            72
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  });</span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            73
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&ZeroWidthSpace;</span></span></pre>
      </div>
      <div style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            74
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  <span class="cm-keyword">return</span> <span class="cm-variable-2">results</span>;</span></pre>
      </div>
      <div class="" style="position: relative">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            75
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">}</span></pre>
      </div>
      <div style="position: relative; display: none">
        <div
          class="CodeMirror-gutter-wrapper"
          aria-hidden="true"
          style="left: -29px"
        >
          <div
            class="CodeMirror-linenumber CodeMirror-gutter-elt"
            style="left: 0px; width: 21px"
          >
            50
          </div>
        </div>
        <pre
          class="CodeMirror-line"
          role="presentation"
        ><span role="presentation" style="padding-right: 0.1px;">  });</span></pre>
      </div>

`;
}

export default CodingChallengePage;
