import { styled } from "styled-components"

export const CalculatorLayoyt = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #868B8A;
`
export const DotsAndTheme = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const CalculatorButtons = styled.div<{ background: string }>`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* grid-template-columns: 70% 30%; */
    background-color: ${({ background }) => background};
`
export const Line = styled.div``
export const Button = styled.button<{ color: string, background: string }>`
    border: none;
    display: flex;
    cursor: pointer;
    font-size: 1.4em;
    font-weight: 600;
    padding: 15px 0px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    color: ${({ color }) => color};
    background-color: ${({ background }) => background};
`
export const ButtonSectionLayout = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Line} {
        gap: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`
export const Dots = styled.div``
export const Dot = styled.div``
export const CalculatorFlutter = styled.div<{ background: string }>`
    gap: 0px;
    width: 80%;
    padding: 10px;
    display: flex;
    overflow: hidden;
    max-width: 320px;
    align-items: center;
    border-radius: 15px;
    flex-direction: column;
    padding: 15px 0px 0px 0px;
    justify-content: space-between;
    background-color: ${({ background }) => background};
    /* box-shadow: 0px 0px 10px -1px rgba(255,255,255,0.9); */
    ${Dots} {
        gap: 5px;
        display: flex;
    }
    ${Dot} {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &:nth-child(1) {
            background-color: #FD544D;
        }
        &:nth-child(2) {
            background-color: #FFC02F;
        }
        &:nth-child(3) {
            background-color: #28CA40;
        }
    }
`
export const MathAreaLayout = styled.div<{ background: string }>`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${({ background }) => background};
`
export const Number = styled.span``