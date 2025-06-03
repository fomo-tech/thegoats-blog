import React from 'react'

const MainHeader = () => {
    return (
        <header className="header-default">
            <nav className="navbar navbar-expand-lg">
                <div className="container-xl">
                    {/* site logo */}
                    <a className="navbar-brand" href="index.html">
                        logo
                    </a>
                    <div className="bs-collapse navbar-collapse">
                        {/* menus */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="index.html">
                                    Home
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="index.html">
                                            Magazine
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="personal.html">
                                            Personal
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="personal-alt.html">
                                            Personal Alt
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="minimal.html">
                                            Minimal
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="classic.html">
                                            Classic
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="category.html">
                                    Lifestyle
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="category.html">
                                    Inspiration
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="index.html#">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="category.html">
                                            Category
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-single.html">
                                            Blog Single
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-single-alt.html">
                                            Blog Single Alt
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="about.html">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="contact.html">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* header right section */}
                    <div className="header-right">
                        {/* social icons */}
                        <ul className="social-icons list-unstyled list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="index.html#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="index.html#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="index.html#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="index.html#">
                                    <i className="fab fa-pinterest" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="index.html#">
                                    <i className="fab fa-medium" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="index.html#">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                        {/* header buttons */}
                        <div className="header-buttons">
                            <button className="search icon-button">
                                <i className="icon-magnifier" />
                            </button>
                            <button className="burger-menu icon-button">
                                <span className="burger-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default MainHeader