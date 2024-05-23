import React from 'react'
import styled from 'styled-components'

const CardServices = ( {iconUrl, title, textDescription} ) => {
  return (
    <CardService>
        <div className='container__icon'>
            <img src={iconUrl} alt="icono" />
        </div>
        <h3>{title}</h3>
        <p>{textDescription}</p>
        <a href="#">Details</a>
    </CardService>
  )
}

export default CardServices

const CardService = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 430px;
    max-width: 270px;
    gap: 30px 0;
    
    padding: 30px;

    border: 1px #d6d6d6 solid;
    border-radius: 10px;

    h3{
        font-size: 22px;
        text-align: center;
    }

    p{
        color: #9b9b9b;
        font-size: 18px ;
        text-align: center;
    }
    
    .container__icon{
        height: 90px;
        display: flex;
        justify-content: center;

        img{
            height: 100%;
            
        }
    }
`