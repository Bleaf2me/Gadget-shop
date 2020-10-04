import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #fff;
`;

export const YC = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const CloseButton = styled.div`
  display: inline-block;
  border: 2px solid transparent;
  height: 25px;
  padding: 0 5px;
  background-color: #ef233c;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #d10024;
    border-color: #d10024;
  }
  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.div`
  display: inline-block;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 5px;
  background-color: #ef233c;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #d10024;
    border-color: #d10024;
  }
  &:focus {
    outline: none;
  }
`;
