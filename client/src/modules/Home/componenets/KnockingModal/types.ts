import React from 'react';

export type modalProps = {
  mentorId: string;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export type datePickerFunc = (date: Date | null, dateString: string) => void
