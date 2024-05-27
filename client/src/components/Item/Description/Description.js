import './Description.css';

const Description = (props) => {
    return ( 
        <div className="product__description__product">
        <h3>{props.item.type}</h3>
            <div className="description__header__container">
                <div className="description__header__line"></div>
                <div className="description__header">Details</div>
            </div>
            <div className="description__detail__container">
                <div className="description__detail">
                <p>{props.item.details}</p>
                </div>
            </div>
            <div className="description__specifics__container">
                <div className="description__specifics">
                <div className="description__header__line"></div>
                <div className="description__highlights__header">Highlights</div>
                    <ul>
                    {console.log(props.item)}
                        {props.item.highlights.map((highlight) => <li>{highlight}</li>)}
                    </ul>
                   
                </div>
            </div>
        </div>
     );
}
 
export default Description;