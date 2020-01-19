// @flow weak
import React from "react"
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
      ...variables[vmatch.toString()]
    })
    if (nextmatch) {
      elements.push(source.slice(vmatch.index + vmatch.length, nextmatch.index))
    } else {
      const addition = source.slice(vmatch.index + vmatch.length)
      if (addition.length > 0) {
        elements.push(addition)
      }
    }
  }
  return (
    <div>
      {elements.map((e, i) => (
        <span
          key={i}
          style={
            typeof e === "string"
              ? {}
              : {
                  border: "1px solid #000"
                }
          }
        >
          {typeof e === "string" ? e : e.name}
        </span>
      ))}
    </div>
  )
}
