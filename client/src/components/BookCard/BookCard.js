import React from 'react';

const BookCard= (props) => {
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="disc">
                <h2>{props.title}</h2>
                <h3>{props.author</h3>
                <p>{props.publised</p>
            </div>




    </div>
    
    )
    
}

export default BookCard;