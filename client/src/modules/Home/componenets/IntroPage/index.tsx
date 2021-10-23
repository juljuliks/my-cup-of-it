import React, { useRef } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import style from './info.module.css';
import {
  IntroWrapper, IntroInfoWrapper, Title, InfoTextWrapper, ButtonsWrapper, InfoDivWrapper,
} from './styles';
import IntroInfo from './components/IntroInfo';
import Accordion from './components/Accordion';

const Info: React.FC = () => {
  const infoDivRef = useRef<HTMLDivElement>(null);

  const executeScroll = (el: React.RefObject<HTMLDivElement>) => {
    if (el.current !== null) {
      el.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <IntroWrapper>
      <div className={style.gradient}>
        <img style={{ height: 'calc(100vh - 67px)', width: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1611679782010-5ac7ff596d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80" alt="" />
      </div>
      <IntroInfoWrapper>
        <Title>MY CUP OF IT</Title>
        <InfoTextWrapper>
          <p>
            Искать и проходить информационные сoбеседования теперь легко,
            достаточно выбрать собеседника и постучаться!
          </p>
          <ButtonsWrapper>
            <Button><Link to="/users">Выбрать собеседника</Link></Button>
            <Button onClick={() => executeScroll(infoDivRef)}>Узнать больше</Button>
          </ButtonsWrapper>
        </InfoTextWrapper>
      </IntroInfoWrapper>
      <InfoDivWrapper ref={infoDivRef}>
        <IntroInfo />
        <Accordion />
      </InfoDivWrapper>

    </IntroWrapper>

  );
};

export default Info;
