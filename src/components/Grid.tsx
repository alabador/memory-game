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
    ]

    return (
        <section className="grid">
            {cardTitles.map((card, index) => (
                <Card key={index} title={card}/>
            )
            )}
        </section>
    )
}

export default Grid