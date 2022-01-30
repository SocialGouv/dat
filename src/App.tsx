import { useEffect, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import raw from "raw.macro";
import YAML from "yaml";
import { useDebounce } from "use-debounce";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/yaml/yaml";

import { Dat } from "./Dat";

import "./App.css";

const SAMPLE_YAML = raw("./sample.yaml");

function PreviewEditor() {
  const [yaml, setYaml] = useState(SAMPLE_YAML);
  const [error, setError] = useState(null);
  const [debouncedYaml] = useDebounce(yaml, 100);
  const [parsedYaml, setParsedYaml] = useState(null);

  useEffect(() => {
    let errored = false;
    try {
      setParsedYaml(YAML.parse(debouncedYaml, { prettyErrors: true }));
    } catch (e) {
      console.log("YAML parse error", e.toString());
      if (!error) {
        setError(e.message);
      }
      errored = true;
    } finally {
      if (error && !errored) {
        setError(null);
      }
    }
  }, [debouncedYaml]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "1 1 auto", width: "50%" }}>
        <CodeMirror
          autoScroll={false}
          value={SAMPLE_YAML}
          options={{
            mode: "yaml",
            theme: "material",
            lineNumbers: true,
            height: "100vh",
            value: SAMPLE_YAML,
          }}
          onChange={(editor, data, value) => {
            setYaml(value);
          }}
        />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          width: "50%",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        {error && (
          <div
            style={{
              position: "sticky",
              background: "#ff9191",
              top: 0,
              padding: 30,
              fontSize: "1.2em",
              whiteSpace: "pre-wrap",
            }}
          >
            Error parsing YAML : {error}
          </div>
        )}
        {parsedYaml && <Dat DAT={parsedYaml} />}
      </div>
    </div>
  );
}

const App = () => (
  <div className="App">
    <PreviewEditor />
  </div>
);

export default App;
