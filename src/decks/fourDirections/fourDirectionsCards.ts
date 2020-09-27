import {Card} from "../../interface/Deck/Card";

const airImg = require('./fourDirectionsImages/air-symbol.svg.png')
const fireImg = require('./fourDirectionsImages/fire-symbol.svg.png')
const earthImg = require('./fourDirectionsImages/earth-symbol.svg.png')
const waterImg = require('./fourDirectionsImages/water-symbol.svg.png')


const fourDirectionsCards : Card[] = [
    {
      title: "East",
      description: "Spring, Air, Mind",
      image: airImg,
      color: "orange"
    },
    {
      title: "South",
      description: "Summer, Fire, Heart",
      image: fireImg,
      color: "tomato"
    },
    {
      title: "West",
      description: "Fall, Water, Intuition",
      image: earthImg,
      color: "dodgerBlue"
    },
    {
      title: "North",
      description: "Winter, Earth, Body",
      image: waterImg,
      color: "mediumSeaGreen"
    },

]

export default fourDirectionsCards;