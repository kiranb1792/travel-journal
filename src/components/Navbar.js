import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas, faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function() {
    return (
        <nav>
            <FontAwesomeIcon icon={faEarthAmericas} />
            <span>my travel journal.</span>
        </nav>
    )
}