import styled from "styled-components";

export const StyledTable = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 59px;
    margin-right: 48px;
    padding: 8px;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        padding: 0;
  }
    
`

export const StyledTableHeader = styled.div`
    display: flex;
    justify-content: start;
    flex: 1;
    color: #6F767E;
    font-size: 14px;
    font-weight: 600;
    
`

export const StyledTableRow = styled.div<{bg?:string}>`
    display: flex;
    justify-items: start;
    justify-content: space-between;
    padding: 24px;
    flex: 1;
    background-color: ${({bg})=> bg};
    
`