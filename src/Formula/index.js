// @flow weak

import React from "react"
import Variable from "../Variable"

const lightColors = ["#ccffcc", "#ccffff", "#ccccff", "#ffcccc", "#ffffcc"]
const darkColors = [
  "hsl(120, 100%, 40%)",
  "hsl(180, 100%, 40%)",
  "hsl(240, 100%, 40%)",
  "hsl(0, 100%, 40%)",
  "hsl(60, 100%, 40%)"
]

export default ({ source, variables }) => {
  const vmatches = Array.from(source.matchAll(/[a-zA-Z_]+/g))
  const elements = []
  if (vmatches[0].index !== 0) {
    elements.push(source.slice(0, vmatches[0].index))
  }
  for (let i = 0; i < vmatches.length; i++) {
    const vmatch = vmatches[i]
    const nextmatch = i !== vmatches.length - 1 ? vmatches[i + 1] : null
    elements.push({
      name: vmatch.toString(),
      matchIndex: i,
      lightColor: lightColors[i % lightColors.length],
      darkColor: darkColors[i % darkColors.length],
      ...variables[vmatch.toString()]
    })
    if (nextmatch) {
      elements.push(
        source.slice(vmatch.index + vmatch.toString().length, nextmatch.index)
      )
    } else {
      const addition = source.slice(vmatch.index + vmatch.toString().length)
      if (addition.length > 0) {
        elements.push(addition)
      }
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      {elements.map((e, i) =>
        typeof e === "string" ? (
          <span key={i}>{e}</span>
        ) : (
          <Variable key={i} {...e} />
        )
      )}
    </div>
  )
}
