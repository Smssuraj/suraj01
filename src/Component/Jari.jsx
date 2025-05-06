import React from 'react'
import '../Style/Jari.css'
import * as Icons from 'react-bootstrap-icons' 
import Prpductinfo from './Productinfo'
import {useEffect} from 'react';



const Jari = () => {
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


        <div className="jari-body">

<div className="jari-title">
    <h1><span className="jari-title-span">Jari</span> Product</h1>
</div>

<div className="jari-product-pages">

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['golden jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">golden jari FS:4</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['polyester-zari-thread-250x250.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">FS 4 GOLDEN JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['polyester-zari-thread-500x500.jpg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">COPPER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['selver jaris.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">SILVER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['selver jari.jpg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">SILVER</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['7 jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">MULTI COLORS JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹655</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['4 jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">COPPER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹349</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['4 jaris.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">DIFFERENT COLOURS</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹359</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['golden jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">golden jari FS:4</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['polyester-zari-thread-250x250.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">FS 4 GOLDEN JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['polyester-zari-thread-500x500.jpg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">COPPER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['selver jaris.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">SILVER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>
    
    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['selver jari.jpg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">SILVER</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['7 jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">MULTI COLORS JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹655</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['4 jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">COPPER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹349</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['4 jaris.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">DIFFERENT COLOURS</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹359</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['golden jari.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">golden jari FS:4</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['polyester-zari-thread-250x250.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">FS 4 GOLDEN JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="popular-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['polyester-zari-thread-500x500.jpg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">COPPER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>

    <div className="jari-p">
            <Icons.HeartFill className="jari-like" size={25} />
            <img src={images['selver jaris.jpeg']} alt='some error' className="jari-img" />
            <hr />
            <div className="allinfo">
                    <p className="jari-name">SILVER JARI</p>
                    <div className="jari-reating">
                     <span className="jari-span"> <Icons.StarFill /> 8/10</span>
                    </div>
                        <h3 className="jari-price">₹100</h3>
                    <Icons.Cart2 size={25} className="jari-cart" />
                    <button type="button" class="jari-buy-button">Buy</button>
            </div>
    </div>
    
    </div>
    </div>

    </>
  )
}

export default Jari
