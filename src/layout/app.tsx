import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getAppConfig, getSocialLinks } from '../data/global';

function Layout() {
    const [showNav, setShowNav] = useState(false);
    const socialLinks = getSocialLinks();
    const appConfig = getAppConfig();

    useEffect(() => {
        function onScroll() {
            setShowNav(window.scrollY > 150)
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <>
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5" style={{display: showNav ? 'flex' : 'none'}}>
                <a href="/" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 display-5"><span className="text-primary">Hassan</span>Raza.</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav m-auto py-0">
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#qualification" className="nav-item nav-link">Work Experience</a>
                        <a href="#service" className="nav-item nav-link">Services</a>
                        <Link to={'/portfolio'} className='nav-item nav-link'>Portfolio</Link>
                        <Link to={'/contact'} className='nav-item nav-link'>Contact</Link>
                    </div>
                    <a href="" className="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
                </div>
            </nav>

            <Outlet />

            {/* Footer Start */}
            <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="container text-center py-5">
                    <div className="d-flex justify-content-center mb-4">
                        {socialLinks.map(link => (
                            <a className="btn btn-light btn-social mr-2" href={link.url} target='_blank'>
                                {link.icon && (
                                    <i className={link.icon}></i>
                                )}
                                {link.svg && (
                                    <span dangerouslySetInnerHTML={{__html: link.svg}}></span>
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <Link to={'/'} className='text-white'>Home</Link>
                        <span className="px-3">|</span>
                        <Link to={'/portfolio'} className='text-white'>Portfolio</Link>
                        <span className="px-3">|</span>
                        <Link to={'/contact'} className='text-white'>Help</Link>
                    </div>
                    <p className="m-0">
                        &copy; <a className="text-white font-weight-bold" href={appConfig.siteURL}>{appConfig.siteName}</a>. All Rights Reserved.
                    </p>
                </div>
            </div>
            {/* Footer End */}

            {!showNav ? (
                <>
                    {/* Scroll to Bottom/Top */}
                    <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>
                </>
            ) : (
                <a href="#" className="btn btn-outline-dark px-0 back-to-top"><i className="fa fa-angle-double-up"></i></a>
            )}
        </>
    )
}

export default Layout;