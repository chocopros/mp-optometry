import React from 'react'
import styled from 'styled-components'
import TopPanelUp from './Details/TopPanel/TopPanelUp'


const Header = () => {

    
    return (
        <HeaderBoddy>

            {/* Modulo superior Header */}
            <TopPanelUp />

            {/*Modulo: Logo, nav */}
            <PanelNav>
                <div className='boddy__logo'>
                    <div className='box__logo'>
                        <img src="/images/logos/ico_web_250x250.png" alt="Logo" />
                    </div>
                    
                </div>
                {/* <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contacts</li>
                    </ul>
                </nav> */}
            </PanelNav>
        </HeaderBoddy>
    )
}

export default Header

const HeaderBoddy = styled.header`
    
`
const PanelNav = styled.div`
    display: flex;



`
