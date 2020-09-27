import {Card} from "../../interface/Deck/Card";

const airImg = require('./fourDirectionsImages/air-symbol.svg.png')
const fireImg = require('./fourDirectionsImages/fire-symbol.svg.png')
const earthImg = require('./fourDirectionsImages/earth-symbol.svg.png')
const waterImg = require('./fourDirectionsImages/water-symbol.svg.png')


const fourDirectionsCards : Card[] = [
    {
      title: "East",
      description: "https://whatismyspiritanimal.com/cardinal-directions/east-symbolism-meaning/",
      image: airImg,
      color: "orange"
    },
    {
      title: "South",
      description: "https://whatismyspiritanimal.com/cardinal-directions/south-symbolism-meaning/",
      image: fireImg,
      color: "tomato"
    },
    {
      title: "West",
      description: "https://whatismyspiritanimal.com/cardinal-directions/west-symbolism-meaning/",
      image: earthImg,
      color: "dodgerBlue"
    },
    {
      title: "North",
      description: "https://whatismyspiritanimal.com/cardinal-directions/north-symbolism-meaning/",
      image: waterImg,
      color: "mediumSeaGreen"
    },

]

export default fourDirectionsCards;