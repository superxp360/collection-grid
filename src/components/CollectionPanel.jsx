export default function CollectionPanel ({data: {title, description, sun, soil, water, native, image, contentSource}}) {

    return (
        <div className="collection-panel">
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Sun: {sun}</p>
            <p>Soil: {soil}</p>
            <p>Water: {water}</p>
            <p>Native: {native}</p>
        </div>
        
    );
}