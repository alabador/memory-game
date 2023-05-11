import Card from "./Card";
import './Grid.css'

const Grid = () => {

    const cardTitles: string[] = [
        'Star', 
        'Circle', 
        'Square',
        'Circle',
        'Blue',
        'Red',
        'White',
        'Octagon',
        'Hexagon',
        'Hexagon',
        'Hexagon',
        'Hexagon',
        'Hexagon',
        'Hexagon',
        'Hexagon',
        'Hexagon',
    ]

    return (
        <div className="grid">
            {cardTitles.map((card, index) => (
                <Card key={index} title={card}/>
            )
            )}
        </div>
    )
}

export default Grid