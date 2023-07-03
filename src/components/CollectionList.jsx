import content from '../data/plants.json';
import CollectionPanel from './CollectionPanel';
import "../styles/Collection.css";

export default function CollectionList() {

    return(
        <>
            <h2>Collection List</h2>
            <div className='collection-container'>
            {
                content.map((element, index) => {
                    return (
                            <CollectionPanel 
                            div key={index}
                            data={element} />
                        
                    );
                })
            }
            </div>

        </>
    )
}