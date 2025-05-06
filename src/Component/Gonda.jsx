import React from 'react'
import '../Style/Gonda.css'
import * as Icons from 'react-bootstrap-icons' 
import Prpductinfo from './Productinfo'
import {useEffect} from 'react';



const Gonda = () => {
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


       <div className="gonda-body">

<div className="gonda-title">
    <h1><span className="gonda-title-span">Gonda</span> Product</h1>
</div>

<div className="gonda-product-pages">

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (23).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">dori gunda (tassel)</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (27).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel </p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (28).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel earing in three layer with resham in multi colour</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (32).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki resham in multi colours</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>
    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (36).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki </p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (43).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki of jari</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (52).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with beautiful beads and naki</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (54).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel with rings</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>
    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (23).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">dori gunda (tassel)</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (27).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel </p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (28).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel earing in three layer with resham in multi colour</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (32).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki resham in multi colours</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>
    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (36).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki </p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (43).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki of jari</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (52).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with beautiful beads and naki</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (54).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel with rings</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>
    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (23).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">dori gunda (tassel)</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (27).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel </p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (28).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel earing in three layer with resham in multi colour</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

    <div className="gonda-p">
            <Icons.HeartFill className="gonda-like" size={25} />
            <img src={images['images (32).jpeg']} alt='some error' className="gonda-img" />
            <hr />
            <div className="allinfo">
                    <p className="gonda-name">Tassel  with naki resham in multi colours</p>
                    <div className="gonda-reating">
                     <span className="gonda-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="gonda-price">₹99</h3>
                    <Icons.Cart2 size={25} className="gonda-cart" />
                    <button type="button" class="gonda-buy-button">Buy</button>
            </div>
    </div>

</div>
</div>
   </>
  )
}

export default Gonda
