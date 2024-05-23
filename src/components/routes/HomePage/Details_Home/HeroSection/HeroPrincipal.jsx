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

    .title__hero{
        
    }
  
    
`