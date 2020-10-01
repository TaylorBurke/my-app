import React, {useEffect} from 'react';

type DetailProps = {
    details: string
}


const DetailGenerator = ({details}: DetailProps) => {

    return (
            <div className="details">{details}</div>
    )
}

export default DetailGenerator;