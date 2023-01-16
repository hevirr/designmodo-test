import React, { ReactNode } from 'react';
import { alignUnion } from '../../constants';

interface AligningBoxProps {
  type: alignUnion;
  icon: ReactNode;
  setAligning: (type: alignUnion) => void;
}

const AligningBox = (props: AligningBoxProps) => {
  const { icon, type, setAligning } = props;

  return (
    <div onClick={() => setAligning(type)} className={type}>
      {icon}
    </div>
  );
};

export default AligningBox;
