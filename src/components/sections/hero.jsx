'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* LEFT IMAGE + BASIC INFO */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src="/images/about/aakash-sharma-main-image.png" alt="Aakash Sharma" />
                                <h2>Aakash Sharma</h2>
                                <p>Web Developer • UI/UX Enthusiast <br /> React & Laravel Developer</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href=""><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link href=""><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href=""><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There! 👋</p>
                                <h2>
                                    I’m <strong className="hero-name">Aakash Sharma</strong> — crafting intuitive, high-performance web experiences with clean code and thoughtful design.
                                </h2>

                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Download CV <RiDownloadLine size={16} /></Link>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
