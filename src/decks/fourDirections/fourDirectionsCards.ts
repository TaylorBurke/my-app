import {Card} from "../../interface/Card";

const airImg = require('./fourDirectionsImages/air-symbol.svg.png')
const fireImg = require('./fourDirectionsImages/fire-symbol.svg.png')
const earthImg = require('./fourDirectionsImages/earth-symbol.svg.png')
const waterImg = require('./fourDirectionsImages/water-symbol.svg.png')


const fourDirectionsCards : Card[] = [
    {
      title: "East",
      description: "",
      image: airImg,
      color: "orange"
    },
    {
      title: "South",
      description: "",
      image: fireImg,
      color: "tomato"
    },
    {
      title: "West",
      description: "",
      image: earthImg,
      color: "dodgerBlue"
    },
    {
      title: "North",
      description: "",
      image: waterImg,
      color: "mediumSeaGreen"
    },

]

export default fourDirectionsCards;