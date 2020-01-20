// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Formula from "./"

storiesOf("Formula", module)
  .add("Short", () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "sans-serif",
        justifyContent: "center",
        width: "100%",
        height: 400,
        fontSize: 24
      }}
    >
      <Formula
        source="(a*b)+c"
        variables={{
          a: {
            description:
              "The first actuator width indexing value. Never more than 5 but always less than 30.",
            name: "A",
            value: 5.26
          },
          b: {
            description: "First cylinder radius."
          }
        }}
      />
    </div>
  ))
  .add("Long", () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "sans-serif",
        justifyContent: "center",
        width: "100%",
        height: 400,
        boxSizing: "border-box",
        padding: 100,
        fontSize: 14
      }}
    >
      <Formula
        source="(0.06 + 0.02 * number_of_fields + 0.1 * text_field_count + 0.005 * total_labels + 0.07 * total_bounding_boxes) * sample_count"
        variables={{
          sample_count: {
            name: "# of Samples",
            description: "Total number of samples",
            value: 2000
          },
          number_of_fields: {
            name: "# of Fields",
            description: "Number of fields per sample",
            value: 8
          },
          text_field_count: {
            name: "# of Text Fields",
            description: "The total number of text entry fields per sample",
            value: 2
          },
          total_labels: {
            name: "# of Labels",
            description: "The total number of labels or categories per sample",
            value: 5
          },
          total_bounding_boxes: {
            name: "Total Bounding Boxes",
            description:
              "The total number of possible bounding boxes per sample",
            value: 3
          }
        }}
      />
    </div>
  ))
