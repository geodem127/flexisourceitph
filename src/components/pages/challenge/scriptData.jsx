export const SCRIPT_CODE = `<div class="" style="position: relative">
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
