import React, { Component } from 'react'
import slide_1 from "../../image/slide/1435892373_0_furniture_slide01.jpg";
import slide_2 from "../../image/slide/1435892373_1_furniture_slide02.jpg";
import slide_3 from "../../image/slide/1435892373_2_furniture_slide03.jpg";

const P_top = {
    top: '20%',
    bottom: '0px'
}

export default class slide extends Component {
    render() {
        return (
            <div className="slide">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide_1} className="d-block w-100" alt="{slide_1}" />
                        <div style={P_top} className="carousel-caption d-none d-md-block">
                            <h3 className="">New Design House 2015</h3>
                            <h1>new indoor furniture</h1>
                            <h4>gift your self a beauty living</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_2} className="d-block w-100" alt="{slide_1}" />
                        <div  style={P_top} className="carousel-caption d-none d-md-block">
                            <h4 className="">The Glamour Workspace</h4>
                            <h2>sale up 70% off</h2>
                            <h4>only over oders on $99.99</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_3} className="d-block w-100" alt="{slide_1}" />
                        <div  style={P_top} className="carousel-caption d-none d-md-block">
                            <h3 className="">Collection Gallery Sofas</h3>
                            <h1>new indoor furniture</h1>
                            <h4>this week’s most popular</h4>
                            <a href="#" className="button-link first">
                                <span>purchase now</span>
                            </a>
                            <a href="#" className="button-link">
                                <span>shop now</span>
                            </a>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" >
                            <i class="fas fa-chevron-left"></i>
                        </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" >
                            <i class="fas fa-chevron-right"></i>
                        </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

