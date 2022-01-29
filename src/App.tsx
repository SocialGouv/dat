import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { UnControlled as CodeMirror } from "react-codemirror2";
//@ts-ignore
import raw from "raw.macro";
import YAML from "yaml";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/yaml/yaml";

import { Dat } from "./Dat";

import "./App.css";

const SAMPLE_YAML = raw("./sample.yaml");

function Editor() {
  const [yaml, setYaml] = useState(SAMPLE_YAML);
  const [error, setError] = useState(null);
  let parsedYaml = null;
  try {
    parsedYaml = YAML.parse(yaml, { prettyErrors: true });
  } catch (e) {
    console.log(e);
    if (!error) {
      setError(e.message);
    }
  }

  /*useEffect(() => {
    console.log("yaml", yaml);
    parsedYaml = YAML.parse(yaml, { prettyErrors: true });
  }, [yaml]);*/
  console.log("yaml", yaml);
  console.log("parsedYaml", parsedYaml);
  return (
    <div className="App">
      <div style={{ display: "flex", height: "100vw" }}>
        <div style={{ flex: "1 1 auto", width: "50%" }}>
          <CodeMirror
            autoScroll={false}
            value={SAMPLE_YAML}
            options={{
              mode: "yaml",
              theme: "material",
              lineNumbers: true,
              height: "100%",
              value: SAMPLE_YAML,
            }}
            // onBeforeChange={(editor, data, value, next) => {
            //   //editor.setState({ value });
            //   console.log("onBeforeChange", data, value);
            //   setYaml(value);
            //   next();
            // }}
            onChange={(editor, data, value) => {
              console.log("onChange", data, value);
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
          {parsedYaml && <Dat DAT={parsedYaml} />}
          {error && (
            <div
              style={{ padding: 30, fontSize: "1.2em", whiteSpace: "pre-wrap" }}
            >
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const App = () => <Editor />;

export default App;
