import React from 'react'
import { ReactTyped } from "react-typed";
import { usePersonalData } from '../data/global';

function Home() {
    const { email, phone, address, workExperience } = usePersonalData();

    return (
        <>
            <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                            <img className="img-fluid w-100 rounded-circle shadow-sm" src="/profile-pic-round.png" alt="" />
                        </div>
                        <div className="col-lg-7 text-center text-lg-left">
                            <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                            <h1 className="display-3 text-uppercase text-primary mb-2" style={{WebkitTextStroke: '2px #ffffff'}}>Hassan Raza</h1>
                            <ReactTyped className='h1 typed-text-output d-inline font-weight-lighter text-white' strings={[
                                'Full-Stack Web Developer', 
                                'Front-End Developer', 
                                'Back-End Developer',
                                'React Native Developer',
                                'Flutter Developer',
                            ]} typeSpeed={40} loop />
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                                <a href="" className="btn btn-outline-light mr-5">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-5" id="about">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>About</h1>
                        <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 pb-4 pb-lg-0">
                            <img class="img-fluid rounded w-100" src="/profile-pic-rect.png" alt="" />
                        </div>
                        <div class="col-lg-7">
                            <h3 class="mb-4">Full-Stack Web Developer</h3>
                            <p>Experienced Software Engineer with a proven track record in strategic development, 
                                creative problem-solving, and effective team collaboration. 
                                Known for agility in handling software challenges, from minor bugs to critical failures.</p>
                            <div class="row mb-3">
                                <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Hassan Raza Hasrat</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">10 Years</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary"><a href={`mailto:${phone}`}>{phone}</a></span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary"><a href={`mailto:${email}`}>{email}</a></span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">{address}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                            </div>
                            <a href="https://www.upwork.com/workwith/hassanrazahasrat" class="btn btn-outline-primary mr-4">Hire Me</a>
                            <a href="https://www.linkedin.com/in/hassanrazahasrat" class="btn btn-outline-primary" target='_blank'>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-5" id="qualification">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Quality</h1>
                        <h1 class="position-absolute text-uppercase text-primary">Work Experience</h1>
                    </div>
                    <div class="row align-items-center">
                        {workExperience.map(work => (
                            <div class="col-lg-6 mx-auto">
                                <div class="border-left border-primary pt-2 pl-4 ml-2">
                                    <div class="position-relative mb-4">
                                        <i class="far fa-dot-circle text-primary position-absolute" style={{top: '2px', left: '-32px'}}></i>
                                        <h5 class="font-weight-bold mb-1">{work.position}</h5>
                                        <p class="mb-2"><strong>{work.companyName}</strong> | <small>{work.startMonth} - {work.endMonth}</small></p>
                                        <p dangerouslySetInnerHTML={{ __html: work.description }}></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home