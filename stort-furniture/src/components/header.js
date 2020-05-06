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
function Header_top(){
    return (
        <div className="header-top">
            <div className="f-left">
                <div className="language">
                    <img src={Vietnamese} width="30" height="25" alt={"Vietnamese"}  />
                    <span>Vietnamese</span>
                    <ul>
                        <li>
                            <img src={Vietnamese} width="30" height="25" alt={"Vietnamese"}  />
                            <a href="#">Vietnamese</a>
                        </li>
                        <li>
                            <img src={English} width="30" height="25" alt={"English"}  />
                            <a href="#">English</a>
                        </li>
                    </ul>
                </div>
                <div className="Price">
                    <span>Đồng</span>
                    <ul>
                        <li><a href="#">Đồng</a></li>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                    </ul>
                </div>
            </div>
            <div className="f-right">
                <div className="login">
                    <i class="fas fa-unlock"></i>
                    <span>Login</span>
                    <ul>
                        <li><a href="#">Vietnamese</a></li>
                        <li><a href="#">English</a></li>
                    </ul>
                </div>
                <div className="Register">
                    <i class="fas fa-key"></i>
                    <span>Register</span>
                    <ul>
                        <li><a href="#">Đồng</a></li>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                    </ul>
                </div>
                <div className="Wishlist">
                    <i class="fas fa-heart"></i>
                    <span>Wishlist</span>
                    <ul>
                        <li><a href="#">Đồng</a></li>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Header_bottom(){
    return (
        <div className="header-bottom">
            <div className="f-left">
                <div className="phone">
                    <i class="fas fa-phone-square-alt"></i>
                    <span>0376213798</span>
                </div>
                <div className="logo">
                    <img src={Logo} alt="{Logo}" />
                </div>
                <div className="cast">
                    <p>0</p>
                    <i class="fas fa-shopping-cart"></i>
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