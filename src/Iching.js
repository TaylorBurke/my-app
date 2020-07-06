import React from 'react';
import hexData from "./hexagramData";

const Iching = (props) => {
    const hexagramsArray = ["Force", "Field", "Sprouting", "Enveloping", "Attending", "Arguing", "Leading", "Grouping", "Small Accumulating",
        "Treading", "Pervading", "Obstruction", "Concording People", "Great Possessing", "Humbling", "Providing-For", "Following",
        "Correcting", "Nearing", "Viewing", "Gnawing Bite", "Adorning", "Stripping", "Returning", "Without Embroiling", "Great Accumulating",
        "Swallowing", "Great Exceeding", "Gorge", "Radiance", "Conjoining", "Persevering", "Retiring", "Great Invigorating", "Prospering",
        "Darkening of the Light", "Dwelling People", "Polarising", "Limping", "Taking-Apart", "Diminishing", "Augmenting", "Displacement",
        "Coupling", "Clustering", "Ascending", "Confining", "Welling", "Skinning", "Holding", "Shake", "Bound", "Infiltrating",
        "Converting the Maiden", "Abounding", "Sojourning", "Ground", "Open", "Dispersing", "Articulating", "Center Returning",
        "Small Exceeding", "Already Fording", "Not Yet Fording"
    ]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    const chosenHex = hexagramsArray[getRandomInt(0, 64)];

    const hexDescription = hex => {
        return (
            hexData[hex].description
        )
    }

    const hexImage = hex => {
        return <img src={hexData[hex].image} className="hexagram" alt="hexagram"/>
    }

    return (
        <div>
            <h2>{chosenHex}</h2>
            {hexImage(chosenHex)}
            <br />
            <a href={hexDescription(chosenHex)}>Read Details</a>
        </div>
    )
}

export default Iching;