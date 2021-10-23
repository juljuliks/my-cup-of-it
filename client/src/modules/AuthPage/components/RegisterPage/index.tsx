import React, { useState } from 'react';
import RegisterStepOne from '../RegisterStep1';
import RegisterStepTwo from '../RegisterStep2';
import { IRegisterData } from '../../../../types/usersTypes';
import { Container, ShowFormContainer } from '../style';

export { useAppSelector } from '../../../../hooks';

export const initialRegisterFormValues: IRegisterData = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  description: '',
  isMentor: false,
  careerStart: '',
  company: '',
  position: '',
  isActive: true,
  userPhoto: '',
  technologies: [],
  socials: [],
};

const RegisterPage: React.FC = () => {
  const [registerData, setRegisterData] = useState(initialRegisterFormValues);
  const [formStep, setFormStep] = useState(1);
  return (
    <Container>

      <ShowFormContainer isOpen={formStep === 1}>
        <RegisterStepOne registerData={registerData} setRegisterData={setRegisterData} setFormStep={setFormStep} />
      </ShowFormContainer>
      <ShowFormContainer isOpen={formStep === 2}>
        <RegisterStepTwo registerData={registerData} setRegisterData={setRegisterData} setFormStep={setFormStep} />
      </ShowFormContainer>
    </Container>
  );
};
export default RegisterPage;
