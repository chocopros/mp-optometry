import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa"



const PanelNavigate = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <NavBar>

            <div className='boddy__logo'>
                <div className='box__logo'>
                    <img src="/images/logos/ico_web_250x250.png" alt="Logo" />
                </div>
                <div className='title__logo'>
                    <h1>Marielba Perez</h1>
                    <span>optometry</span>
                </div>

            </div>


            <nav ref={navRef}>

                <Link to='/' onClick={showNavbar}>Home</Link>
                <Link to='/About' onClick={showNavbar}>About</Link>
                <Link to='/services' onClick={showNavbar}>Services</Link>
                <Link to='/shop' onClick={showNavbar}>Shop</Link>
                <Link to='/blog' onClick={showNavbar}>Blog</Link>
                <Link to='/contacts' onClick={showNavbar}>Contacts</Link>

                <button
                    onClick={showNavbar}
                    className='nav-btn nav-close-btn'
                >
                    <FaTimes />
                </button>

            </nav>
            <button
                onClick={showNavbar}
                className='nav-btn nav-close-btn'
            >
                <FaBars />
            </button>
        </NavBar>
    )
}

export default PanelNavigate

const NavBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    background-color: var(--mainColor);
    color: var(--textColor);

    /* LOGO CODE */
    /* Todo lo referente al LOGO */
    .boddy__logo{
        display: flex;
        
        align-items: center;
        gap: 0 5px;

        .box__logo{
            height: 41px;

            img{
                height: 100%;
                width: 100%;
            }
        }

        .title__logo{
            h1{
                font-size: 20px;
            }
            span{
                color: #8a8a8a
            }
        }
    }


    /* NAVBAR CODE */
    nav a{
        margin: 0 2rem;
        color: var(--textColor);
        text-decoration: none;
    }

    nav a:hover{
        color: var(--secondaryColor)
    }

    .nav-btn{
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        color: var(--textColor);
        visibility: hidden;
        opacity: 0;
        font-size: 1.8rem;
    }

    @media only screen and (max-width: 1024px){
        .nav-btn {
            visibility: visible;
            opacity: 1;
        }

        nav{
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background-color: var(--mainColor);
            transition: 1s;
            transform: translateY(-100vh);
        }

        .responsive_nav{
            transform: none;

        }

        nav .nav-close-btn{
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        nav a {
            font-size: 3.5rem;
        }

    
    }

`