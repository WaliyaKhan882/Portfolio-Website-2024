import React from "react";
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContainer";
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personalDetails = [
    { label: "Name", value: "Waliya" },
    { label: "Age", value: "22" },
    { label: "Address", value: "Lahore" },
    { label: "Email", value: "waliyashahkhan@gmail.com" },
    { label: "Contact No", value: "123-456-789" },
];

const jobSummary = "Are you looking for a skilled frontend developer who can turn your web visions into stunning realities? Look no further! As a frontend developer, I excel in HTML, CSS, JavaScript & React js, and I thrive on transforming design concepts into seamless, responsive websites. Ready to take your digital journey to the next level? Let's connect!";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translatex(0px)' }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translatex(0px)' }}
                    >
                        <h3 className="personalInfoTextHeader">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__serviceWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: 'translateX(600px)' }}
                        end={{ transform: 'translatex(0px)' }}
                    >
                        <div className="about__content__serviceWrapper__innerContent">
                            <div><FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><FaDev size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiApple size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div><DiAndroid size={60} color="var(--yellow-theme-main-color)" /></div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;
