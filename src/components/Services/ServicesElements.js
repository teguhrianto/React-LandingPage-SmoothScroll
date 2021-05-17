import styled from 'styled-components'

export const ServicesContainer = styled.div`
    display: flex;
    padding: 100px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606 ;
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        padding: 0 20px;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.1);
    }
`

export const ServicesIcon = styled.img`
    width: 160px;
    height: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 16px;
    text-align: center;
`