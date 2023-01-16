import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DefaultTextOptions } from '../constants';
import AligningBox from './UI/AligningBox';
import CustomInput from './UI/CustomInput';
import CustomSelect from './UI/CustomSelect';
import {
  AlignCenterIcon,
  AlignEndIcon,
  AlignJustifyIcon,
  AlignStartIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  TtIcon,
} from './UI/icons';
import OuterCustomSelect from './UI/OuterCustomSelect';

const StyledSideBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 240px;
  height: 100%;
  background: #ffffff;
  margin-left: auto;
  padding: 17px 15px 0 15px;

  .sidebar__title {
    text-align: left;
    margin-bottom: 11px;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #788994;
  }

  .options-container {
    display: flex;
    align-items: center;
    border: 1px solid #e8ecf0;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .sidebar__font-options {
    div:first-child {
      width: 60%;
    }
    div:nth-child(2) {
      border-left: 1px solid #e8ecf0;
      width: 40%;
    }
  }
  .sidebar__text-options {
    div:nth-child(2) {
      border-left: 1px solid #e8ecf0;
    }
  }
  .sidebar__text-aligning {
    div {
      padding: 13px 17px;
      cursor: pointer;
      &:first-child {
        border-right: 1px solid #e8ecf0;
      }
      &:nth-child(3) {
        border-left: 1px solid #e8ecf0;
        border-right: 1px solid #e8ecf0;
      }
    }
  }

  .sidebar__apply-button {
    background: #27ae60;
    border-radius: 4px;
    color: white;
    border: none;
    font-weight: 600;

    font-size: 13px;
    line-height: 16px;
    padding: 12px 0;
    cursor: pointer;
  }
`;

interface SideBarProps {
  textOptions: DefaultTextOptions;
  setTextOptions: any;
}

const SideBar = ({ setTextOptions, textOptions }: SideBarProps) => {
  const [temporaryTextOptions, setTemporaryTextOptions] = useState(textOptions);

  useEffect(() => {
    setTemporaryTextOptions(textOptions);
  }, [textOptions]);

  const applyChanges = () => {
    setTextOptions(temporaryTextOptions);
    localStorage.setItem('textOptions', JSON.stringify(temporaryTextOptions));
  };

  const changeCertainProperty = (propertyName: string) => {
    const property = propertyName;
    return function setValue(value: any) {
      setTemporaryTextOptions((prev) => ({
        ...prev,
        [property]: value,
      }));
    };
  };

  const aligningIconColor = (currentlySelected: any) => {
    return temporaryTextOptions.aligning === currentlySelected ? '#2198ED' : '#D5D9DD';
  };

  return (
    <StyledSideBar>
      <div className="sidebar__title">TEXT</div>
      <OuterCustomSelect
        value={temporaryTextOptions.font}
        setValue={changeCertainProperty('font')}
        selectOptions={['Fira Sans', 'Roboto', 'Rubik']}
      />

      <div className="sidebar__font-options options-container">
        <CustomSelect
          value={temporaryTextOptions.fontType}
          setValue={changeCertainProperty('fontType')}
          selectOptions={['Bold', 'Light', 'Medium']}
        />
        <CustomInput
          value={temporaryTextOptions.fontSize.toString()}
          setValue={changeCertainProperty('fontSize')}
          icon={<TtIcon />}
        />
      </div>

      <OuterCustomSelect
        value={temporaryTextOptions.fontColor}
        setValue={changeCertainProperty('fontColor')}
        selectOptions={['#292929', '#0315de']}
      />

      <div className="sidebar__text-options options-container">
        <CustomInput
          value={temporaryTextOptions.lineHeight.toString()}
          setValue={changeCertainProperty('lineHeight')}
          icon={<LineHeightIcon />}
          measure={'%'}
        />
        <CustomInput
          value={temporaryTextOptions.letterSpacing.toString()}
          setValue={changeCertainProperty('letterSpacing')}
          icon={<LetterSpacingIcon />}
          measure={'px'}
        />
      </div>

      <div className="options-container sidebar__text-aligning">
        <AligningBox
          icon={<AlignStartIcon fill={aligningIconColor('start')} />}
          type={'start'}
          setAligning={changeCertainProperty('aligning')}
        />
        <AligningBox
          icon={<AlignCenterIcon fill={aligningIconColor('center')} />}
          type={'center'}
          setAligning={changeCertainProperty('aligning')}
        />
        <AligningBox
          icon={<AlignEndIcon fill={aligningIconColor('end')} />}
          type={'end'}
          setAligning={changeCertainProperty('aligning')}
        />
        <AligningBox
          icon={<AlignJustifyIcon fill={aligningIconColor('justify')} />}
          type={'justify'}
          setAligning={changeCertainProperty('aligning')}
        />
      </div>

      <button onClick={applyChanges} className={'sidebar__apply-button'}>
        Apply changes
      </button>
    </StyledSideBar>
  );
};

export default SideBar;
