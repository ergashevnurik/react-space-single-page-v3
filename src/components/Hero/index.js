import React from 'react'
import { HeroButton, HeroColumnLeft, HeroColumnRight, HeroContainer, HeroH1, HeroImage, HeroP, HeroRow, HeroSection, HeroSpan } from './HeroElements'

const Hero = ({span, h1, p, buttonLink, buttonLabel, img, alt, reverse, bg, color}) => {
    return (
        <HeroSection bg={bg}>
            <HeroContainer>
                <HeroRow>
                    <HeroColumnLeft reverse={reverse}>
                        <HeroSpan color={color}>{span}</HeroSpan>
                        <HeroH1 color={color}>{h1}</HeroH1>
                        <HeroP color={color}>{p}</HeroP>
                        <HeroButton color={color} to={buttonLink}>{buttonLabel}</HeroButton>
                    </HeroColumnLeft>
                    <HeroColumnRight reverse={reverse}>
                        <HeroImage src={img} alt={alt}></HeroImage>
                    </HeroColumnRight>
                </HeroRow>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
