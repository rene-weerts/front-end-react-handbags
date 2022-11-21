import React from 'react';


function Product({label, imgSrc, imageAlt, text, price}) {
    return (
        <>
            <article>
                <span>{label}</span>
                <img src={imgSrc} alt={text}/>
                <p>{text}</p>
                <h4>€{price}</h4>
            </article>



        </>);
}

export default Product;
