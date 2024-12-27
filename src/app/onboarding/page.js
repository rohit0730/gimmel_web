'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

function PageComponent() {

    const [deviceWidth, setDeviceWidth] = useState(0); // Default to 0 for SSR

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateWidth = () => {
            setDeviceWidth(window.innerWidth);
        };

        // Set the initial width and listen for resize events
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const [selectedButton, setSelectedButton] = useState("Teaching");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };


    return (
        <>
            {deviceWidth > 768 ? (
                <div className="main-screen">
                    <div className="row">
                        {/* Left Banner Section */}
                        <div className="col-md-7">
                            <div className="left-banner remove-shadow">
                                <div className="left-banner-content">
                                    <div className="banner-image">
                                        {/* <Image id="slider-image" src={require("../../assets/images/pixel.svg")} alt="banner" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Banner Section */}
                        <div className="col-md-5">
                            <div className="right-banner mt-150">
                                <div className="right-side-content">
                                    {/* Content Sections */}
                                    <div className="page-title">
                                        <h1>I&apos;m here to have an easier time ___</h1>
                                    </div>
                                    <div className="banner-btn-inner">
                                        <button
                                            className={`btn-border ${selectedButton === "Teaching" ? "selected" : ""}`}
                                            onClick={() => handleButtonClick("Teaching")}
                                        >
                                            Teaching
                                        </button>
                                        <button
                                            className={`btn-border ${selectedButton === "Learning" ? "selected" : ""}`}
                                            onClick={() => handleButtonClick("Learning")}
                                        >
                                            Learning
                                        </button>
                                    </div>  
                                </div>
                                <div className='bottom-btn-container'>
                                    <div className="step-button">
                                        {
                                            selectedButton === "Teaching" ? (
                                                <Link href="/onboarding/teaching" className="btn-color-blue ">Next</Link>
                                            ) : (
                                                <Link href="/onboarding/learning" className="btn-color-blue ">Next</Link>
                                            )
                                        }
                                    </div>
                                    <div className="skip-btn">
                                        <Link href="price.html" className="btn-text">Skip</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="page-container-mobile" style={{ height: "100%", background: "#fff", display: "flex", }}>
                    <div className="page-main-section top-space-request">
                        <div className="custom-container">
                            <div className="left-banner remove-shadow">
                                <div className="left-banner-content">
                                    <div className="banner-image">
                                        <Image id="slider-image" src={require("../../assets/images/pixel.svg")} alt="banner" />
                                    </div>
                                </div>
                            </div>
                            <div className="right-side-content">
                                {/* Content Sections */}
                                <div className="page-title">
                                    <h1>I&apos;m here to have an easier time ___</h1>
                                </div>
                                <div className="banner-btn-inner">
                                    <button
                                        className={`btn-border ${selectedButton === "Teaching" ? "selected" : ""}`}
                                        onClick={() => handleButtonClick("Teaching")}
                                    >
                                        Teaching
                                    </button>
                                    <button
                                        className={`btn-border ${selectedButton === "Learning" ? "selected" : ""}`}
                                        onClick={() => handleButtonClick("Learning")}
                                    >
                                        Learning
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="skip-btn">
                            <Link href="price.html" className="btn-text">Skip</Link>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default PageComponent;