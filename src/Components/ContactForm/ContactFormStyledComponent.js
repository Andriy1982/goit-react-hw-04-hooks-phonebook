import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  display: block;
  width: 200px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #ccc;
  background: #f6f6f6;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  width: 90px;
  height: 28px;
  border: 1px solid #ccc;
  background: #fff;
  color: #666;
  border-radius: 5px;
  box-shadow: inset 0 2px 2px #ccc;
  background-color: lightgreen;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px #ccc;
  }

  &:active {
    margin-top: 1px;
    margin-bottom: -1px;
    zoom: 1;
  }
`;
