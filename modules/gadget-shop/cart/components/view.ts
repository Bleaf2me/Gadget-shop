import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const TD = styled.td`
  text-align: center;
`;

export const TR = styled.tr`
  height: 30px;
`;

export const TB = styled.tbody`
  text-align: center;
`;

export const TableH = styled.th`
  font-size: 1.5 rem;
`;

export const AddButton = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  height: 20px;
  font-size: 10px;
  width: 28%;
  margin-right: 5px;
  padding: 5px 5px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 2px;
  background-color: green;
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
export const RemoveButton = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  height: 20px;
  font-size: 10px;
  width: 28%;
  margin-right: 5px;
  padding: 5px 5px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 2px;
  background-color: yellow;
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
export const DeleteButton = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  height: 20px;
  font-size: 10px;
  width: 28%;
  margin-right: 5px;
  padding: 5px 5px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 2px;
  background-color: #ef233c;
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
