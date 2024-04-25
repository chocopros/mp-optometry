import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const PanelNavigate = () => {
    return (
        <PanelNav>
            <div className='boddy__logo'>
                <div className='box__logo'>
                    <img src="/images/logos/ico_web_250x250.png" alt="Logo" />
                </div>
                <div className='title__logo'>
                    <h1>Marielba Perez</h1>
                    <span>optometry</span>
                </div>

            </div>
            <nav className='nav__boddy'>
                <ul className='list__nav'>
                    
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    
                </ul>
            </nav>
        </PanelNav>
    )
}

export default PanelNavigate

const PanelNav = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100px;

    
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

    /* Todo lo referente al menu de navegacion principal panel */
    .nav__boddy{
        display: flex;
        align-items: center;
        
        ul{
            display: flex;
            gap: 0 10px;
            list-style: none;

            a{
                text-decoration: none;
                text-transform: capitalize;
                font-weight: 700 ;
                color: #8a8a8a;
            }
        }
    }

`