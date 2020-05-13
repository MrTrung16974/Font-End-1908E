import React, { Component } from 'react';
import English from "../image/icon/english.png";
import Vietnamese from "../image/icon/vietnamese.jpg";
import Logo from "../image/favicon.jpg";

const vertical_align = {
    verticalAlign: 'inherit'
};

const border_top = {
    borderTop: '1px solid rgba(43, 34, 34, 0.45)'
}

function Item_menu(props) {
    return(
        <li>
            <a href="#">
                props.title-item
                <img src="" alt="" /> 
            </a>
        </li>
    )
}

function Header_top(){
    return (
        <div className="header-top">
            <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="language">
                        <a href="#">
                            <img src={Vietnamese} width="30" height="25" alt={"Vietnamese"}  />
                            <span>Vietnamese</span>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={Vietnamese} width="30" height="25" alt={"Vietnamese"}  />
                                    <span>Vietnamese</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={English} width="30" height="25" alt={"English"}  />
                                    <span>English</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="Price">
                        <a href="#">
                            <span>Đồng</span>
                        </a>
                        <ul>
                            <li><a href="#">Đồng</a></li>
                            <li><a href="#">USD</a></li>
                            <li><a href="#">EUR</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                    
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="login">
                        <a href="#">
                            <i class="fas fa-unlock"></i>
                            <span>Login</span>
                        </a>
                        <div className="model-login">
                            <label for="email-address">Email Address</label>
                            <input type="email" name="email-address" id="email-address" />
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" />   
                            <p>* Required Fields</p>
                            <div className="footer-login">
                                <a href="#">Forgot Your Password?</a>
                                <p>Don't have an account?<a href="#">Sign Up</a></p>
                            </div>
                            <button type="submit">Login</button> 
                        </div>
                    </div>
                    <div className="Register">
                        <a href="#">
                            <i class="fas fa-key"></i>
                            <span>Register</span>
                        </a>
                    </div>
                    <div className="Wishlist">
                        <a href="#">
                            <i class="fas fa-heart"></i>
                            <span>Wishlist</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Header_bottom(){
    return (
        <div className="header-bottom">
            <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="phone">
                        <i class="fas fa-phone-square-alt"></i>
                        <span>0376213798</span>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="logo">
                        <img width="100" height="100" src={Logo} alt="{Logo}" />
                    </div>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="cast">
                        <p>0</p>
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Menu_top(){
    return (
        <div className="menu-top">
            <ul>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Trang chủ</font>
                        </span>
                    </a>
                    <div className="sup-menu">
                        <ul>
                            <li>
                                <a></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Trang</font>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Sản phẩm</font>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Thể loại</font>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Thời trang</font>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Giày dép</font>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="em-menu-link" href="#">
                        <span>
                            <font style={vertical_align}>Cá nhân</font>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
}


class header extends Component {
    render() {
        return (
            <header className="banner">
                <div className="container">
                    <Header_top />
                    <Header_bottom />
                    <hr style={border_top}/>
                    <Menu_top />
                </div>
            </header>
        );
    }
}

export default header;