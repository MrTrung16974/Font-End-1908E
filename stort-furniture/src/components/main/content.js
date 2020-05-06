import React, { Component } from 'react';
import em_ads_1 from "../../image/bg-product/em_ads_01.jpg";
import em_ads_2 from "../../image/bg-product/em_ads_02.jpg";
import em_ads_3 from "../../image/bg-product/em_ads_03.jpg";


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

class content extends Component {
    render() {
        return (
            <div className="em-wrapper-banners container">
                <div className="row">
                    <ProductRoom imgbanner={em_ads_1}/>
                    <ProductRoom imgbanner={em_ads_2}/>
                    <ProductRoom imgbanner={em_ads_3}/>
                </div>
            </div>
        );
    }
}

export default content;