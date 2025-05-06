import React from 'react'
import '../Style/Popular.css'
import * as Icons from 'react-bootstrap-icons'
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useEffect} from 'react';


const Popular = () => {

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

    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 4
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 4
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 1
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    return (
        <>

            <div className="popular-body">

                <div className="popular-title">
                    <h1><span className="fringish-title-span">Popular</span> Product</h1>
                </div>

                <div className="popular-product-pages">

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images(37).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">dori gunda with chippi </p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹30</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (30).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">Earing of palti gundas in three colours and layer</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹50</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (45).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">desingner earings with tassel</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹100</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (47).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">beautiful designer ladkan for keychain and bagschains</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹100</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (60).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">handloom skarf in differnt colours</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹499</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (33).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">rassi tassel</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹30</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (70).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">designer skarf for men and women</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹499</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (57).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">beautiful handloom skarf for man and women</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹999</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images(37).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">dori gunda with chippi </p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹30</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (30).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">Earing of palti gundas in three colours and layer</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹50</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (45).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">desingner earings with tassel</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹100</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (47).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">beautiful designer ladkan for keychain and bagschains</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹100</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>
                    
                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (60).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">handloom skarf in differnt colours</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹499</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (33).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">rassi tassel</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹30</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (70).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">designer skarf for men and women</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹499</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (57).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">beautiful handloom skarf for man and women</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹999</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images(37).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">dori gunda with chippi </p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹30</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (30).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">Earing of palti gundas in three colours and layer</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹50</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (45).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">desingner earings with tassel</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹100</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                    <div className="popular-p">
                        <Icons.HeartFill className="popular-like" size={25} />
                        <img src={images['images (47).jpeg']} alt='some error' className="popular-img" />
                        <hr />
                        <div className="allinfo">
                            <p className="popular-name">beautiful designer ladkan for keychain and bagschains</p>
                            <div className="popular-reating">
                                <span className="popular-span"> <Icons.StarFill /> 8/10</span>
                            </div>
                            <h3 className="popular-price">₹100</h3>
                            <Icons.Cart2 size={25} className="popular-cart" />
                            <button type="button" class="popular-buy-button">Buy</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}    
                // Loop={true}
                // showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1200}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            > */}




        </>
    )
}

export default Popular
