import React from 'react'
import styled from 'styled-components'
import TopPanelUp from './Details/TopPanel/TopPanelUp'
import PanelNavigate from './Details/Nav/PanelNavigate'


const Header = () => {


    return (
        <HeaderBoddy>

            {/* Modulo superior Header */}
            <TopPanelUp />

            {/*Modulo: Logo, nav */}
            <PanelNavigate />
            
        </HeaderBoddy>
    )
}

export default Header

const HeaderBoddy = styled.header`
    max-width: 1300px;
    margin: 0 auto;
`

