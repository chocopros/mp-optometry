import React from 'react'
import styled from 'styled-components'

const Mymision = () => {
  return (
    <MyMisionContainer>
        <div className='Main-mymision-container'>
            <div>
                <div className='Mymision-Container'>
                    <h2>My Mission -</h2>
                    <p>
                    Opticians specialize in the fitting and fabrication of ophthalmic lenses, spectacles, contact lenses, low vision aids and ocular prosthetics. They may also be referred to as an “optical dispenser”, “dispensing optician”, “ophthalmic dispenser”. The prescription for the corrective lenses must be supplied by an ophthalmologist, optometrist or in some countries an orthoptist. This is a regulated profession in most jurisdictions.
                    </p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </MyMisionContainer>
  )
}

export default Mymision

const MyMisionContainer = styled.section`
    display: flex;
    justify-content: center;
    background-image: url('/images/Mymision/objetive.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .Main-mymision-container{


        .Mymision-Container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 30px 0;
            height: 525px;
            width: 750px;

            h2{
                color: #ffff;
                font-weight: 700 ;
            }

            p {
                max-width: 350px;
                color: #ffff;
            }
        } 
    }

    
`