// @flow
import * as React from "react"
import {render} from "react-dom"
import {TestResults} from "./TestResults.jsx"
import {test, expect, is} from "@benchristel/taste"

render(<p>Hello from React!</p>, document.getElementById("app"))

test("a tautology", {
    "is true"() {
        expect(true, is, true)
    }
})

render(<TestResults />, document.getElementById("test-results"))