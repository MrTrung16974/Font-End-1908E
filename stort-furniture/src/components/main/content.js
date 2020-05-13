import React, { Component } from 'react';
import Slide from './slide_footer.js';

import em_ads_1 from "../../image/bg-product/em_ads_01.jpg";
import em_ads_2 from "../../image/bg-product/em_ads_02.jpg";
import em_ads_3 from "../../image/bg-product/em_ads_03.jpg";
import em_ads_4 from "../../image/bg-product/em_ads_04.jpg";
import em_ads_5 from "../../image/bg-product/em_ads_05.jpg";
import em_ads_6 from "../../image/bg-product/em_ads_06.jpg";
import em_ads_10 from "../../image/bg-product/em_ads_10.jpg";
import product_change_1 from "../../image/bg-product/1.jpg";
import  product_default_1 from "../../image/bg-product/1-1.jpg";

const Hiden = {
    display: 'none'

}
const Show = {
    display: 'block'
}

const Border_radius = {
    borderRadius: '5px'
}

function ProductRoom(props) {
    return (
    <div className={props.Col}>
        <div className="img-banner">
            <a href="#">
                <img style={Border_radius} width="100%" height="100%" src={props.imgbanner} alt={props.imgbanner} />
            </a>
            <div class="effect-line">&nbsp;</div>
        </div>
    </div>
    )
}

function MenuProduct() {
    return (
    <div className="menu-product">
        <h3 className="left-menu">
            <span>NEW ARRIVALS</span>
        </h3>
        <ul className="right-menu"> 
            <li><a href="#">Sofas & Chair</a></li>
            <li><a href="#">Bed Kids </a></li>
            <li><a href="#">Lights & Lamp</a></li>
            <li><a href="#">Tables</a></li>
        </ul>
    </div>
    )
}

class Star extends Component{
    render(props) {
        const items = [];
        for (var i=1; i <= 5; i++) {
            if(i > this.props.numberStar) {
                items.push(<i className="far fa-star"></i>)
            }else {
                items.push(<i className="fas fa-star"></i>)
            }
        } 
    return (
        <div className="star">
            {items}
        </div>
    )
    }
}


function Product(props) {
    return(
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center">
            <div className="product">
                <div className="img-product">
                    <img width="100%" src={props.img_default}  alt="Ảnh sản phẩm mặc định"/>
                    <img width="100%" style={Hiden} src={props.img_change}  alt="Ảnh sản phẩm sau khi di chuột vào"/>
                    <div className="em-element-display-hover bottom">
                        <button title="Add to Cart" className="button btn-cart">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                        <ul className="add-to-links">
                            <li>
                                <a className="link-wishlist" title="Add to Wishlist">
                                    <i className="fas fa-star"></i>
                                </a>
                            </li>
                            <li>
                                <span className="separator"></span>
                                <a className="link-compare" title="Add to Compare">
                                    <i class="far fa-eye"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="quickshop-link-container hidden-xs">
                            <a className="quickshop-link" title="Product Quick View: Lack side table 10">
                                <i class="fas fa-sync-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="body-product">
                    <p className="name-product">Lack side table 1</p>
                    <Star numberStar='3' />
                    <p className="price-product">$3,500,00</p>
                </div>
            </div>
        </div>
    )
}

class content extends Component {
    render() {
        return (
            <div className="em-wrapper-banners container">
                <div className="row">
                    <ProductRoom imgbanner={em_ads_1} Col="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center"/>
                    <ProductRoom imgbanner={em_ads_2} Col="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center"/>
                    <ProductRoom imgbanner={em_ads_3} Col="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center"/>
                </div>
                {/* Start ./ menu product */}
                <MenuProduct />
                {/* End ./ menu product */}

                {/* Start ./ item product */}
                <div className="item-product">
                    <div className="row">
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                        <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                    </div>
                </div>
                {/* End ./ item product */}

                {/* Start ./ item product */}
                <div className="">
                    <ProductRoom imgbanner={em_ads_4} Col="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"/>
                </div>
                {/* End ./ item product */}

                {/* Start ./ top product */}
                <div className="top-product">
                    <h3 className="header-item">
                        <span>NEW ARRIVALS</span>
                    </h3>
                    <div className="top-item-product">
                         <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <div className="row">
                                    <ProductRoom imgbanner={em_ads_10} Col="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"/>
                                </div>
                            </div>
                            <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                <div className="row">
                                    <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                                    <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                                    <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                                    <Product img_change={product_change_1} img_default={product_default_1} numberStar='3' />
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                {/* End ./ top product */}

                {/* Start ./ em wrapper area03*/}
                <div className="em-wrapper-area03">
                    <div className="row">
                        <ProductRoom imgbanner={em_ads_5} Col="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center"/>
                        <ProductRoom imgbanner={em_ads_6} Col="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center"/>
                    </div>
                </div>
                {/* End ./ em wrapper area03 */}
                
                {/* Start ./ em wrapper area04 */}
                <div className="em-wrapper-area04">
                    <h3 className="header-item">
                        <span>NEW ARRIVALS</span>
                    </h3>
                    <div className="login-slide">
                        <Slide />
                        <h3>SIGN UP FOR NEWSLETTER</h3>
                    </div>
                </div>
                {/* End ./ top product */}

            </div>
        );
    }
}

export default content;