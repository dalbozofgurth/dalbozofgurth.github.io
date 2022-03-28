// @flow
import * as React from "react"
import {useState, useEffect} from "react"
import {getAllTests, runTests, formatTestResultsAsText} from "@benchristel/taste"

export function TestResults(): React.Node {
    const [message, setMessage] = useState<string>("")
    useEffect(() => {
        runTests(getAllTests())
            .then(formatTestResultsAsText)
            .then(setMessage)
            .catch((e: Error) => setMessage(e.message))
    }, [])

    return /fail/i.test(message)
        ? <code><pre>{message}</pre></code>
        : null
}