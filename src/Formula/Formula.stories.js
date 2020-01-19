// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Formula from "./"

storiesOf("Formula", module).add("Basic", () => (
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
))
