// @flow weak
import React, { useState } from "react"

export default ({ name, description, value, lightColor, darkColor }) => {
  const [mouseOver, changeMouseOver] = useState(false)
  return (
    <span
      onMouseOver={() => {
        changeMouseOver(true)
      }}
      onMouseOut={() => {
        changeMouseOver(false)
      }}
      style={{
        position: "relative",
        cursor: "pointer",
        border: `0.1em solid ${darkColor}`,
        borderRadius: "0.2em",
        padding: "0.05em",
        paddingLeft: "0.2em",
        paddingRight: "0.2em",
        margin: "0.05em",
        marginLeft: "0.2em",
        marginRight: "0.2em",
        backgroundColor: lightColor
      }}
    >
      {name}
      {value !== undefined ? (
        <span style={{ color: darkColor }}> ({value})</span>
      ) : null}
      {mouseOver && (description || value !== undefined) && (
        <span
          style={{
            position: "absolute",
            bottom: "1.6em",
            left: 0,
            zIndex: 10,
            maxWidth: "30em",
            width: "10em",
            backgroundColor: lightColor,
            padding: "0.5em",
            borderRadius: "0.15em",
            border: `0.1em solid ${darkColor}`
          }}
        >
          <div style={{ fontSize: "0.7em", lineHeight: "1.1em" }}>
            {description}
          </div>
          {value !== undefined && (
            <div
              style={{
                marginTop: "0.25em",
                fontSize: "0.7em",
                fontWeight: "bold"
              }}
            >
              = {value}
            </div>
          )}
        </span>
      )}
    </span>
  )
}
