interface CardImage {
    imageSrc: string;
}

const Card = (props:CardImage) => {
    return (
        <>
            <div>
                <h1>{props.imageSrc}</h1>
            </div>
        </>
    )
}

export default Card