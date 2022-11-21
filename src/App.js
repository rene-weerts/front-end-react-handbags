import React from 'react';
import './App.css';
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";
import Button from "./Components/Button";
import Product from "./Components/Product";
import Tile from "./Components/Tile";


function App() {


    return (<>
        <h1>Handbags & Purses</h1>

        <nav>


            <Button
                buttonText="to the collection"
                disabled="false"
            />
            <Button
                buttonText="shop all bags"
                disabled="false"
            />
            <Button
                buttonText="pre-order"
                disabled="true"
            />

        </nav>
        <main>


            {/*            <article>*/}
            {/*                <span>*/}
            {/*                Best Seller*/}
            {/*                </span>*/}
            {/*<img src={bag1} alt="handyBag"/>*/}
            {/*                <p>The handy bag</p>*/}
            {/*                <h4>€400,-</h4>*/}
            {/*            </article>*/}

            <Product label="Best Seller"
                     imgSrc={bag1}
                     text="The handyBag"
                     price={400}
            />
            <Product label="Best Seller"
                     imgSrc={bag2}
                     text="The stylish Bag"
                     price={250}
            />

            <Product label="Best Seller"
                     imgSrc={bag3}
                     text="The simple Bag"
                     price={300}
            />

            <Product label="Best Seller"
                     imgSrc={bag4}
                     text="The trendy Bag"
                     price={150}
            />
        </main>
        <footer>
            <Tile
                sectionTitle="The Brand"
                sectionText=""
            />
            <Tile
               imgSrc={brand}
            />
            <Tile
                imgSrc={story}
            />
            <Tile
                sectionTitle="Our story"
                sectionText=""
            />


        </footer>


    </>);
}

export default App;



