import React from 'react';

const Iching = (props) => {
    const hexagramsArray = ["Force","Field","Sprouting","Enveloping", "Attending","Arguing","Leading","Grouping","Small Accumulating",
        "Treading","Pervading","Obstruction","Concording People","Great Possessing", "Humbling","Providing-For","Following",
        "Correcting","Nearing","Viewing","Gnawing Bite","Adorning","Stripping","Returning","Without Embroiling","Great Accumulating",
        "Swallowing","Great Exceeding","Gorge","Radiance","Conjoining","Persevering","Retiring","Great Invigorating","Prospering",
        "Darkening of the Light","Dwelling People","Polarising","Limping","Taking-Apart","Diminishing","Augmenting","Displacement",
        "Coupling","Clustering","Ascending","Confining","Welling","Skinning","Holding","Shake","Bound","Infiltrating",
        "Converting the Maiden","Abounding","Sojourning","Ground","Open","Dispersing","Articulating","Center Returning",
        "Small Exceeding","Already Fording","Not Yet Fording"
    ]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }


    // get the index first and store it as a variable to reference for the image and description
    const chosenHex = hexagramsArray[getRandomInt(0, 64)];

    const getHexInfo = (hex) => {
        return ""
    }



    return (
        <div>
            {/*get image*/}
            {getHexInfo(chosenHex)}
            {/*get description*/}
        </div>
    )
}

export default Iching;