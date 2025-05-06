import React from 'react'
import '../Style/Trending.css'
import * as Icons from 'react-bootstrap-icons' 
import Prpductinfo from './Productinfo'
import {useEffect} from 'react';



const Trending = () => {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

        useEffect(() => {
                // 👇️ scroll to top on page load
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }, []);

  return (
   <>

    <Prpductinfo />


    <div className="trending-body">

<div className="trending-title">
    <h1><span className="trending-title-span">Trending</span> Product</h1>
</div>

<div className="trending-product-pages">

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (26).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom with thread pompom and tassel with chippi</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (53).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (46).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (47).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel keychain for bag handmade</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>
    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (51).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel </p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (56).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (34).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel </p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹499</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (29).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful  earing handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹499</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (26).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom with thread pompom and tassel with chippi</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (53).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (46).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (47).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel keychain for bag handmade</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    
    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (26).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom with thread pompom and tassel with chippi</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (53).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (46).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (47).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel keychain for bag handmade</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
            </div>
            
    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (51).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel </p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (56).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹99</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (34).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful handloom thread  tassel </p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹499</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>

    <div className="trending-p">
            <Icons.HeartFill className="trending-like" size={25} />
            <img src={images['images (29).jpeg']} alt='some error' className="trending-img" />
            <hr />
            <div className="allinfo">
                    <p className="trending-name">beautiful  earing handloom thread  tassel</p>
                    <div className="trending-reating">
                     <span className="trending-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="trending-price">₹499</h3>
                    <Icons.Cart2 size={25} className="trending-cart" />
                    <button type="button" class="trending-buy-button">Buy</button>
            </div>
    </div>



</div>
</div>

   </>
  )
}

export default Trending
