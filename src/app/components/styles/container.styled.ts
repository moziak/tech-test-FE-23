import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 0 8px;
  margin: 0 auto;
`

export const Title = styled.div`
    font-size: 40px;
    letter-spacing: -0.8px;
    line-height: 48px;
    color: #272B30;
    font-weight: 600;
    margin: 42px 36px;
    @media (max-width: 768px) {
        margin: 4px 4px;
  }
`

export const SubTitle = styled.div`
    display: flex;
    font-size: 20px;
    letter-spacing: -0.4px;
    line-height: 32px;
    color: #1A1D1F;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 70px;
    & > div{
        margin-right: 16px;
        width: 16px;
        height: 32px;
        border-radius: 4px;
        background-color: #999DFF;
    }
`


export const Flex = styled.div<{flex_d?:string}>`
    display: flex;
    align-items: center;
    flex-direction: ${({flex_d}) => flex_d};
    & > div,
    & > ul {
        flex: 1
    }
`

export const MessageBox = styled.div<{p:string, m:string, textColor:string, bg:string}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: ${({p}) => p};
    margin: ${({m}) => m};
    color: ${({textColor}) => textColor};
    background-color: ${({bg}) => bg};
    
`

export const StatusPill = styled.div<{status:string}>`

    display: flex;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 14px;
    color: black;
    background-color: ${({status}) => status === 'Completed'? '#60CA57' : '#6F767E66'};
    
  `;

