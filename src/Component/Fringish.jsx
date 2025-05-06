import React from 'react'
import '../Style/Fringish.css'
import * as Icons from 'react-bootstrap-icons'
import Prpductinfo from './Productinfo'
import {useEffect} from 'react';



const Fringish = () => {
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


                <div className="fringish-body">

                    <div className="fringish-title">
                        <h1><span className="fringish-title-span">Fringish</span> Product</h1>
                    </div>

                    <div className="fringish-product-pages">

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (61).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">purple designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="popular-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (63).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="popular-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (64).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (65).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">brown and green designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>
                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (61).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">purple designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (63).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (64).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (65).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">brown and green designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (66).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">grey designer beautiful skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (68).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">multi designer beautiful skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (69).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (71).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">black and red  designer beautiful skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (61).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">purple designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (63).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful handloom skarf for man and women  </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (64).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful handloom skarf for man and women  </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (65).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">brown and green designer beautiful handloom skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (66).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">grey designer beautiful skarf for man and women</p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (68).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">multi designer beautiful skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />            
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (69).jpeg']} alt='some error' className="Fringish-img" />
                                <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">red designer beautiful skarf for man and women </p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>

                        <div className="Fringish-p">
                                <Icons.HeartFill className="Fringish-like" size={25} />
                                <img src={images['images (71).jpeg']} alt='some error' className="Fringish-img" />
                                 <hr />
                                <div className="allinfo">
                                        <p className="Fringish-name">black and red  designer beautiful skarf for man and women</p>
                                        <div className="Fringish-reating">
                                         <span className="fringish-span"> <Icons.StarFill /> 8/10</span>
                                        </div>
                                            <h3 className="Fringish-price">₹499</h3>
                                        <Icons.Cart2 size={25} className="Fringish-cart" />
                                        <button type="button" class="fringish-buy-button">Buy</button>
                                </div>
                        </div>


                    </div>
                </div>


        </>
    )
}

export default Fringish
