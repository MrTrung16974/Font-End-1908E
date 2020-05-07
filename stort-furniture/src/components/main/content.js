import React, { Component } from 'react';
import em_ads_1 from "../../image/bg-product/em_ads_01.jpg";
import em_ads_2 from "../../image/bg-product/em_ads_02.jpg";
import em_ads_3 from "../../image/bg-product/em_ads_03.jpg";


const Hiden = {
    opacity: '0',
    visibility: 'hidden'
}
const Show = {
    opacity: '1',
    visibility: 'visible'
}

function ProductRoom(props) {
    return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
        <div className="img-banner">
            <a href="#">
                <img width="100%" height="100%" src={props.imgbanner} alt={props.imgbanner} />
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

function Product(props) {
    return(
        <div className="product">
            <div className="img-product">
                <img src={props.img_default}  alt="Ảnh sản phẩm mặc định"/>
                <img style={Hiden} src={props.img_change}  alt="Ảnh sản phẩm sau khi di chuột vào"/>
            </div>
        </div>
    )
}

class content extends Component {
    render() {
        return (
            <div className="em-wrapper-banners container">
                <div className="row">
                    <ProductRoom imgbanner={em_ads_1}/>
                    <ProductRoom imgbanner={em_ads_2}/>
                    <ProductRoom imgbanner={em_ads_3}/>
                </div>
                <MenuProduct />
            </div>
        );
    }
}

export default content;