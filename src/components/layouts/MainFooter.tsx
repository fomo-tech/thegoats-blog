import React from 'react'

const MainFooter = () => {
    return (
        <footer>
            <div className="container-xl">
                <div className="footer-inner">
                    <div className="row d-flex align-items-center gy-4">
                        {/* copyright text */}
                        <div className="col-md-4">
                            <span className="copyright">© 2021 Katen. Template by ThemeGer.</span>
                        </div>
                        {/* social icons */}
                        <div className="col-md-4 text-center">
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
                        </div>
                        {/* go to top button */}
                        <div className="col-md-4">
                            <a href="index.html#" id="return-to-top" className="float-md-end">
                                <i className="icon-arrow-up" />
                                Back to Top
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default MainFooter