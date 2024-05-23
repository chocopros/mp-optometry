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
    justify-content: center;
    align-items: center;
    height: 75vh;
    position: relative;

    background-image: url(/images/Hero/optometry.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    

    .title__hero{
        position: absolute;
        left: 55%;
        color: #ffffff;
        font-weight: 700;
        font-size: clamp(18px, 5vw, 50px);;
    }
  
    
`