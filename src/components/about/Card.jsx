function Card({title, name, image, alt}) {
    return (
        <div className="aboutUsCard">
            <img className="cardImage" src={image} alt={alt}/>
            <div className="cardText">
                <div>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
