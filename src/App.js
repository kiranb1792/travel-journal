import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={item.coverImg}
        location={item.location}
        title={item.title}
        date={item.date}
        description={item.description}
      />
    )
  })
  return (
    <div className="container">
      <Navbar />
      <div className="card-wrapper">
        {cards}
      </div>
    </div>
  )
}

