import React from 'react'
import styled from 'styled-components'

const TopPanelUp = () => {
    return (
        <TopPanel>
            <div className='info_panel__contact'>
                <p>Open Hours: 8:00am - 5:00pm Mon-Sat </p>
                <a className='maito__email' href="mailto:marielbaperezacosta@gmail.com">marielbaperezacosta@gmail.com</a>
            </div>

            <div className='info_panel__social'>
                <a href="https://www.instagram.com/marielbaacosta/" target="_blank" rel="noopener noreferrer">
                    <img className='icon___social' src="/images/logos/redes_sociales/instagram-2016.svg" alt="Instagram" />
                </a>

                <a href="https://www.facebook.com/MarielbaPereZA" target="_blank" rel="noopener noreferrer" >
                    <img className='icon___social' src="/images/logos/redes_sociales/facebook.svg" alt="Facebook" />
                </a>

                <a href="https://twitter.com/maarielbaperez" target="_blank" rel="noopener noreferrer">
                    <img className='icon___social' src="/images/logos/redes_sociales/x.svg" alt="X" />
                </a>
            </div>
        </TopPanel>
    )
}

export default TopPanelUp

const TopPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 50px;

    border-bottom: 1px #e8e8e8 solid;

    color: #8a8a8a;

    .info_panel__contact {
        display: flex;
        flex-wrap: wrap;
        gap: 0 30px;

        .maito__email{
            text-decoration: none;
            color: #8a8a8a;
        }
    }
    
    .info_panel__social{
        display: flex;
        gap: 0 10px;

        .icon___social{
            height: 18px;
            opacity: 45%;
            transition: all .5s ease;

            &:hover { /* Hover styles */
                opacity: 100%; /* Hover background color */
                scale: 1.25;
            }
        }
    }

    @media (max-width: 668px) {
        /* Estilos para pantallas de hasta 640px */
        display: none;
    }
`