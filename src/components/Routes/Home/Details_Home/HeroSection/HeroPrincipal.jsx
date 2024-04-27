import React from 'react'
import styled from 'styled-components'


const HeroPrincipal = () => {
    return (
        <HeroSection>

            <div className='title__hero'>
                <h2>Marielba Perez</h2>
                <h2>Complete Optical</h2>
                <h2>Services</h2>
            </div>

        </HeroSection>

    )
}

export default HeroPrincipal

const HeroSection = styled.section`
    display: flex;
    position: relative;

    height: 75vh;
  
    background-image: url('/images/Hero/optometry.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: calc(100vw) calc(100vh);


    .title__hero {
        
        font-size: 35px;
        color: white;
        position: absolute;
        bottom: 50%;
        left: 15%;
    }
    
`