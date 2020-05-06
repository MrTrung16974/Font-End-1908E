import React, { Component } from 'react'
import slide_1 from "../../image/slide/1435892373_0_furniture_slide01.jpg";
import slide_2 from "../../image/slide/1435892373_1_furniture_slide02.jpg";
import slide_3 from "../../image/slide/1435892373_2_furniture_slide03.jpg";



export default class slide extends Component {
    render() {
        return (
            <div className="slide">
                <div>
                &lt;<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide_1} className="d-block w-100" alt="{slide_1}" />
                        <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_2} className="d-block w-100" alt="{slide_1}" />
                        <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_3} className="d-block w-100" alt="{slide_1}" />
                        <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
        )
    }
}
