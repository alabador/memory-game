import './Card.css'

type CardProps = {
    title: string
}

const Card = (props:CardProps) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card