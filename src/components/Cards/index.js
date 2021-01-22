import React from 'react'
import { CardsData } from '../../Data/CardsData'
import { 
    CardsCardBody, 
    CardsCardH1, 
    CardsCardHead, 
    CardsCardImage, 
    CardsColumn, 
    CardsContainer, 
    CardsRow, 
    CardsSection,
    CardHeading
} from './CardsElements'

const Cards = ({heading}) => {
    return (
        <CardsSection>
            <CardsContainer>
                <CardHeading>{heading}</CardHeading>
                <CardsRow>
                    {CardsData.map((card, index) => (
                        <CardsColumn key={index}>
                            <CardsCardHead>
                                <CardsCardImage src={card.img} alt={card.alt}></CardsCardImage>
                            </CardsCardHead>
                            <CardsCardBody>
                                <CardsCardH1>{card.h1}</CardsCardH1>
                            </CardsCardBody>
                    </CardsColumn>
                    ))}
                </CardsRow>
            </CardsContainer>
        </CardsSection>
    )
}

export default Cards
