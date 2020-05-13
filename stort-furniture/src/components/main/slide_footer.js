import React, { Component } from 'react';
import slide_1 from "../../image/slide/1435892373_0_furniture_slide01.jpg";
import slide_2 from "../../image/slide/1435892373_1_furniture_slide02.jpg";
import slide_3 from "../../image/slide/1435892373_2_furniture_slide03.jpg";

class slide_footer extends Component {
    render() {
        return (
            <div className="slide-footer">
                <div id="slideProductControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slide_1} class="d-block w-100" alt="ảnh slide" />
                        </div>
                        <div class="carousel-item">
                            <img src={slide_2} class="d-block w-100" alt="ảnh slide" />
                        </div>
                        <div class="carousel-item">
                            <img src={slide_3} class="d-block w-100" alt="ảnh slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#slideProductControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#slideProductControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default slide_footer;
