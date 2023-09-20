import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Ellipsis = styled.span`
  margin: 0 5px;
`;
export const PageButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#999DFF' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#007BFF')};
  border: 1px solid #999DFF;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #999DFF;
    color: white;
  }
`;