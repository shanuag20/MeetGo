
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./landing.css";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="meetgo">

            {/* Navbar */}
            <nav className="meetgo-navbar">
                <div className="meetgo-logo">
                    <span className="logo-symbol">◉</span>
                    <h2>Meet<span>Go</span></h2>
                </div>

                <div className="meetgo-nav-links">
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                </div>

                <div className="meetgo-nav-actions">
                    <button
                        className="nav-guest"
                        onClick={() => navigate("/aljk23")}
                    >
                        Join as Guest
                    </button>

                    <button
                        className="nav-login"
                        onClick={() => navigate("/auth")}
                    >
                        Login
                    </button>

                    <button
                        className="nav-signup"
                        onClick={() => navigate("/auth")}
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="meetgo-hero" id="about">

                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="status-dot"></span>
                        CONNECT WITHOUT LIMITS
                    </div>

                    <h1>
                        Meet people.
                        <br />
                        <span>Share moments.</span>
                    </h1>

                    <p>
                        Great conversations bring people closer.
                        Connect with friends, family and colleagues
                        through simple and seamless video meetings.
                    </p>

                    <div className="hero-actions">
                        <button
                            className="hero-primary"
                            onClick={() => navigate("/auth")}
                        >
                            Start a Meeting <span>↗</span>
                        </button>

                        <button
                            className="hero-secondary"
                            onClick={() => navigate("/aljk23")}
                        >
                            Join as Guest
                        </button>
                    </div>

                    <div className="hero-note">
                        <span>✓</span>
                        Simple setup. Real-time connection.
                    </div>
                </div>

                {/* Visual */}
                <div className="hero-visual">
                    <div className="hero-glow"></div>

                    <div className="preview-label">
                        <span className="status-dot"></span>
                        YOUR SPACE TO CONNECT
                    </div>

                    <div className="phone-frame">
                        <img
                        src="/meetgo-hero.png"
                        alt="MeetGo video conferencing preview"
                        />
                    </div>

                    <div className="floating-info info-one">
                        <div className="info-icon purple-info">✦</div>
                        <div>
                            <strong>Stay Connected</strong>
                            <small>From anywhere</small>
                        </div>
                    </div>

                    <div className="floating-info info-two">
                        <div className="info-icon blue-info">▤</div>
                        <div>
                            <strong>Live Messaging</strong>
                            <small>Chat in real time</small>
                        </div>
                    </div>

                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>
                </div>
            </section>

            {/* Features */}
            <section className="meetgo-features" id="features">
                <div className="features-heading">
                    <span>MADE FOR CONNECTION</span>
                    <h2>Everything you need to meet</h2>
                    <p>
                        Enjoy easy communication with useful features
                        designed for better online meetings.
                    </p>
                </div>

                <div className="features-grid">

                    <div className="feature-card">
                        <div className="feature-icon icon-purple">◉</div>
                        <h3>Video Meetings</h3>
                        <p>
                            Connect face-to-face through real-time
                            audio and video communication.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-orange">▣</div>
                        <h3>Screen Sharing</h3>
                        <p>
                            Share your screen and make online
                            collaboration easier.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-blue">▤</div>
                        <h3>Live Chat</h3>
                        <p>
                            Send messages and stay connected
                            with meeting participants.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-green">♬</div>
                        <h3>Audio Controls</h3>
                        <p>
                            Manage your microphone and enjoy
                            convenient meeting controls.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-pink">▣</div>
                        <h3>Camera Controls</h3>
                        <p>
                            Turn your camera on or off whenever
                            you need during a meeting.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon icon-yellow">◷</div>
                        <h3>Meeting History</h3>
                        <p>
                            Keep track of your previous meeting
                            activity in one place.
                        </p>
                    </div>

                </div>
            </section>

            {/* Call to action */}
            <section className="meetgo-cta">
                <div>
                    <span>LET'S GET CONNECTED</span>
                    <h2>Your next conversation starts here.</h2>
                    <p>Make every distance feel a little smaller.</p>
                </div>

                <button onClick={() => navigate("/auth")}>
                    Join MeetGo <span>↗</span>
                </button>
            </section>

            {/* Footer */}
            <footer className="meetgo-footer">
                <div className="meetgo-logo">
                    <span className="logo-symbol">◉</span>
                    <h2>Meet<span>Go</span></h2>
                </div>

                <p>Meet people. Share moments.</p>

                <small>
                    © {new Date().getFullYear()} MeetGo. All rights reserved.
                </small>
            </footer>

        </div>
    );
}
