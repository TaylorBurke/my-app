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
      color: "orange"
    },
    {
      title: "South",
      description: "Fire, Passion, Inspired",
      details: "Our feelings are not to be avoided; they guide us to higher understanding.",
      image: fireImg,
      color: "tomato"
    },
    {
      title: "West",
      description: "Water, Flow, Intuitive",
      details: "Connect within, and allow the divine source to expand.",
      image: earthImg,
      color: "dodgerBlue"
    },
    {
      title: "North",
      description: "Earth, Material, Physical",
      details: "Care for your environment so that you may avoid exposure to toxicity.",
      image: waterImg,
      color: "mediumSeaGreen"
    },

]

export default fourDirectionsCards;