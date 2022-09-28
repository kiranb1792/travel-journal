import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas, faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
    //console.log(props)
    return (
        <div className="card-list">
            <div className="card-single">
                <div className="card-img"><img src={require(`../images/${props.img}`)} /></div>
                <div className="card-content">
                    <div className="card-location">
                        <small><FontAwesomeIcon icon={faLocationDot} /></small>
                        <span>{props.location}</span>
                        <a href="" className="card-link">View on Google Maps</a>
                    </div>
                    <h3 className="card-title">{props.title}</h3>
                    <div className="card-date">{props.date}</div>
                    <div className="card-desc">{props.description}</div>
                </div>
            </div>

        </div>
    )
}