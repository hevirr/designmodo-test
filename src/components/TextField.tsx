import React from 'react';
import styled from 'styled-components';
import { DefaultTextOptions } from '../constants';

const StyledTextField = styled.div<TextFieldProps>`
  background: #ffffff;
  border-radius: 1px;
  width: 600px;
  height: 720px;
  /* height: 100%; */

  textarea {
    border: none;
    resize: none;
    padding: 30px;
    height: 100%;
    width: calc(100% - 60px);
    font-family: ${({ textOptions }) => textOptions.font};
    font-weight: ${({ textOptions }) => textOptions.fontType};
    font-size: ${({ textOptions }) => textOptions.fontSize + 'px'};
    color: ${({ textOptions }) => textOptions.fontColor};
    line-height: ${({ textOptions }) => textOptions.lineHeight + '%'};
    letter-spacing: ${({ textOptions }) => textOptions.letterSpacing + 'px'};
    text-align: ${({ textOptions }) => textOptions.aligning};
  }
`;

interface TextFieldProps {
  textOptions: DefaultTextOptions;
}

const TextField = ({ textOptions }: TextFieldProps) => {
  return (
    <StyledTextField textOptions={textOptions}>
      <textarea name="textarea" id="textarea" cols={30} rows={10} placeholder={'Type here...'} />
    </StyledTextField>
  );
};

export default TextField;
