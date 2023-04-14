type pokemonProps = {
    id: number;
    name: string;
    image: string;
    type: any;
}
const PokemonThumnail = (props: pokemonProps) => {
    return (
        <div className="thumb-container">
            <div className='number'>
                <small>#0{props.id}</small>
            </div>
            <img src={props.image} alt={props.name} />
            <div className='detail-wrapper'>
                <h3>{props.name}</h3>
                <small>Type : {props.type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail;
