import React from 'react';
import CustomSelect from './CustomSelect';

import { CustomSelectProps } from './CustomSelect';

const OuterCustomSelect = (props: CustomSelectProps) => (
  <CustomSelect
    value={props.value}
    setValue={props.setValue}
    selectOptions={props.selectOptions}
    style={{ border: '1px solid #e8ecf0', borderRadius: '4px', marginBottom: '10px' }}
  />
);

export default OuterCustomSelect;
