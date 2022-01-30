import React, { CSSProperties, useEffect, useState } from "react";

import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
});

export const Mermaid = React.memo((props: any) => {
  const chart = props.chart;
  let node;
  useEffect(() => {
    // tricky mermaid updates
    if (node.dataset.processed === "true") {
      mermaid.contentLoaded();
      node.setAttribute("data-processed", undefined);
    } else {
      node.removeAttribute("data-processed");
      mermaid.contentLoaded();
      node.setAttribute("data-processed", undefined);
    }
  }, [chart]);

  if (!chart) return null;
  return (
    <div ref={(e) => (node = e)} className="mermaid">
      {chart}
    </div>
  );
});

export const BlocTexte = ({ title, children }) => (
  <div
    style={{
      padding: 10,
      margin: 5,
      background: "#e6e0eb",
      width: "100%",
      textAlign: "left",
    }}
  >
    <div className="bloc__title">{title}</div>
    <div className="bloc__content">{children}</div>
  </div>
);

export const Block = ({ title, style = {}, children }) => {
  const styles = {
    backgroundColor: "#CCC",
    color: "#333",
    ...style,
  };

  return (
    <div style={{ border: `1px solid ${styles.backgroundColor}`, margin: 5 }}>
      <div
        style={{
          border: `1px solid ${styles.backgroundColor}`,
          fontSize: "1.2em",
          padding: 10,
          ...styles,
        }}
      >
        {title}
      </div>
      <div style={{ padding: 10, background: "#f2eff5" }}>{children}</div>
    </div>
  );
};

const formatCell = (value) => {
  if (value === true) {
    return "✔";
  } else if (value === false) {
    return "🚫";
  } else {
    return value;
  }
};

const getTdStyle = (key, value): CSSProperties => {
  if (value === true || value === false) {
    // align for boolean values
    return {
      textAlign: "center",
    };
  }
};

export const Table = ({ title, data }) => {
  const keys =
    data && data.length && typeof data[0] === "object"
      ? Object.keys(data[0])
      : [];
  return (
    <table
      style={{
        padding: 10,
        margin: 5,
        background: "#e6e0eb",
        width: "100%",
        textAlign: "left",
      }}
    >
      {keys.length && (
        <thead>
          <tr>
            {keys.map((k, i) => (
              <th
                key={k + "" + i}
                style={{
                  ...getTdStyle(k, data.length && data[0][k]),
                  textAlign: i > 0 ? "center" : "left",
                }}
              >
                {k}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data &&
          data.map &&
          data.map((row, i) => (
            <tr key={i}>
              {keys.map((k, j) => (
                <td key={row[k] + "" + j} style={getTdStyle(k, row[k])}>
                  {formatCell(row[k])}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
