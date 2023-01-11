import styled from "styled-components";

export const TextInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.theme.colorGrayBackground};
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export default TextInput;
