import { Fragment } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.div`
  width: 100%;
  position: relative;
  .color-marker {
    position: absolute;
    z-index: 1;
    top: 21%;
    left: 12px;
    height: 18px;
    width: 18px;
    border-radius: 3px;
  }
  .select-wrapper__select {
    position: relative;
    background: #ffffff;
    border: none;
    width: 100%;

    padding: 10px;
    cursor: pointer;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url('icons/Vector.svg');
    background-position: calc(100% - 10px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-repeat: no-repeat;
  }
`;

export interface CustomSelectProps {
  selectOptions: string[];
  style?: React.CSSProperties | undefined;
  value: string;
  setValue: (value: string) => void;
}

const CustomSelect = (props: CustomSelectProps) => {
  const { selectOptions, style, value, setValue } = props;

  const regexRuleHexSix = /^#[0-9A-F]{6}$/i;
  const regexRuleHexThree = /^#([0-9A-F]{3}){1,2}$/i;

  const isValueAColor = regexRuleHexSix.test(value) || regexRuleHexThree.test(value);

  return (
    <StyledSelect>
      {isValueAColor && <div className="color-marker" style={{ background: value }}></div>}
      <select
        className="select-wrapper__select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          paddingLeft: isValueAColor ? '40px' : '10px',
          ...style,
        }}>
        {selectOptions.map((option, i) => (
          <>
            <option style={{ background: 'black' }} key={`${option}_${i}`} value={option}>
              {option}
            </option>
          </>
        ))}
      </select>
    </StyledSelect>
  );
};

export default CustomSelect;
