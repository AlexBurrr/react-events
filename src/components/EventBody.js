import React from 'react'

const EventBody = () => {


    fetch('/sellers/search/events/v3')
        .then(response => response.json())
        .then(data => console.log(data))


    return (
        <div>
            <div className="container">
                d
            </div>
        </div>
    )
}

export default EventBody
