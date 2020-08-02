import {Card} from "../../Card";

const airImg = require('./fourDirectionsImages/air-symbol.svg.png')
const fireImg = require('./fourDirectionsImages/fire-symbol.svg.png')
const earthImg = require('./fourDirectionsImages/earth-symbol.svg.png')
const waterImg = require('./fourDirectionsImages/water-symbol.svg.png')


const fourDirectionsCards : Card[] = [
    {
      title: "East",
      description: "",
      image: airImg,
      color: "white"
    },
    {
      title: "South",
      description: "",
      image: fireImg,
      color: "red"
    },
    {
      title: "West",
      description: "",
      image: earthImg,
      color: "blue"
    },
    {
      title: "North",
      description: "",
      image: waterImg,
      color: "black"
    },

]

export default fourDirectionsCards;