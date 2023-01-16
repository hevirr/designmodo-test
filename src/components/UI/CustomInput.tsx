import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCustomInput = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 14px 10px;
  height: 40px;

  input {
    border: none;
    margin-left: 10px;
    width: 55%;
    &:focus {
      border: none;
    }
  }
`;

interface CustomInputProps {
  icon: ReactNode;
  value: string;
  setValue: (value: string) => void;
  measure?: string;
  style?: React.CSSProperties | undefined;
}

const CustomInput = (props: CustomInputProps) => {
  const { icon, measure, style, value, setValue } = props;
  return (
    <StyledCustomInput style={style}>
      {icon}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      {measure}
    </StyledCustomInput>
  );
};

export default CustomInput;
