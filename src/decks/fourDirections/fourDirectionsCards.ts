import {Card} from "../../interface/Deck/Card";

const airImg = require('./fourDirectionsImages/air-symbol.svg.png')
const fireImg = require('./fourDirectionsImages/fire-symbol.svg.png')
const earthImg = require('./fourDirectionsImages/earth-symbol.svg.png')
const waterImg = require('./fourDirectionsImages/water-symbol.svg.png')


const fourDirectionsCards : Card[] = [
    {
      title: "East",
      description: "Air, Transparent, Mindful",
      details: "Honor the act of saying no, of not doing.",
      // affirmation: "I honor the act of saying no, of not doing.",
      image: airImg,
      color: "rgba(255, 201, 25, 1)"
    },
    {
      title: "South",
      description: "Fire, Passion, Inspired",
      details: "Our feelings are not to be avoided; they guide us to higher understanding.",
      image: fireImg,
      color: "rgba(255, 101, 59, 1)"
    },
    {
      title: "West",
      description: "Water, Flow, Intuitive",
      details: "Connect within, and allow the divine source to expand.",
      image: earthImg,
      color: "rgba(66, 135, 245, 1)"
    },
    {
      title: "North",
      description: "Earth, Material, Physical",
      details: "Care for your environment so that you may avoid exposure to toxicity.",
      image: waterImg,
      color: "rgba(108, 217, 106, 1)"
    },

]

export default fourDirectionsCards;