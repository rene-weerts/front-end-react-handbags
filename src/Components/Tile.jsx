import React from 'react';


function Tile ({imgSrc, srcTitle, sectionTitle}) {
    return (
        <>
            <section>
                <img src={imgSrc} alt={srcTitle}/>
                <h2>{sectionTitle}</h2>
                <p>sectionText</p>
            </section>



        </>
    );
};
export default Tile;