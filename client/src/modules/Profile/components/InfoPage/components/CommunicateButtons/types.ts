import React from 'react';

export interface ICommunicateButtons {
  isDisabled: boolean
  isActive: boolean,
  onKnock: React.Dispatch<React.SetStateAction<boolean>>
}
