import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin-top: 80px;
  width: 30%;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
`;

export const CardImgWrapper = styled.div`
  position: relative;
`;

export const CardImg = styled.img`
  height: 300px;
  object-fit: contain;
`;

export const CardFooter = styled.div``;
export const CardFooterTitle = styled.h5`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: #2b2d42;
  &:hover {
    color: #d10024;
  }
`;

export const CardFooterPrice = styled.h5`
  font-size: 16px;
  color: #d10024;
`;

export const AddButton = styled.button`
  position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 30px;
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

export const ViewButton = styled.button`
  cursor: pointer;
  position: relative;
  margin-right: 15px;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 30px;
  background-color: #fff;
  color: #d10024;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 40px;
  border-color: #d10024;
  :focus {
    outline: none;
  }
`;
