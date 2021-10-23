import styled from 'styled-components';

export const IntroWrapper = styled.div`
  position: relative;
`;

export const IntroInfoWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 60px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 70%;
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 55px;
  color: #fff;
`;

export const InfoTextWrapper = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  border-radius: 8px;
`;

export const ButtonsWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoDivWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const AdvicesWrapper = styled.div`
  padding: 50px 0;
`;
