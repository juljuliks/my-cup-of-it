import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper } from '../../style';
import { ICommunicateButtons } from './types';
import { useAppSelector } from '../../../../../../hooks';

const CommunicateButtons: React.FC<ICommunicateButtons> = (props) => {
  const { isActive, onKnock, isDisabled } = props;

  const handleKnockButton = () => {
    onKnock(true);
  };

  return (
    <BtnsWrapper>
      <Button
        type="primary"
        disabled={!isActive || isDisabled}
        onClick={handleKnockButton}
      >
        Постучаться
      </Button>
    </BtnsWrapper>
  );
};

export default CommunicateButtons;
