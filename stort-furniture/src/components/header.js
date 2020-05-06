import React, { Component } from 'react';
import English from "../image/icon/english.png";
import Vietnamese from "../image/icon/vietnamese.jpg";

class Header_top extends Component {
    render() {
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
}

class Header_bottom extends Component {
    render() {
        return (
            <div className="header-bottom">
                <div className="f-left">

                </div>
            </div>
        );
    }
}


class Menu_top extends Component {
    render() {
        return (
            <div className="menu-top">
                
            </div>
        );
    }
}


class header extends Component {
    render() {
        return (
            <header className="banner">
                <div className="container">
                    <Header_top />
                    <Header_bottom />
                    <hr />
                    <Menu_top />
                </div>
            </header>
        );
    }
}

export default header;