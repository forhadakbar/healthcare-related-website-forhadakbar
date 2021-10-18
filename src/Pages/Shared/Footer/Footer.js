import React from 'react';

import "./Footer.css"

const Footer = () => {
    return (
        <div>

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-column">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <span class="footer-title">Product</span>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="/home">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="/prices">Prices</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="/home">Plans & Prices</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="/home">Frequently asked questions</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer-column">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <span class="footer-title">Company</span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home">About us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home">Job postings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home">News and articles</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer-column">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <span class="footer-title">Contact & Support</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link"><i class="fas fa-phone"></i> +47 45 80 80 80</span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home"><i class="fas fa-comments"></i> Live chat</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home"><i class="fas fa-envelope"></i> Contact us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/home"><i class="fas fa-star"></i> Give feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>

                    <div class="row text-center">
                        <div class="col-md-4 box">
                            <span class="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                            </span>
                        </div>
                        <div class="col-md-4 box">
                            <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="/home">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="/home">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="/home">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;