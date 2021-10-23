import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const IntroInfo: React.FC = () => (
  <>
    <h1>Что собой представляет информационное собеседование? </h1>
    <p>
      Информационное собеседование — это неофициальная беседа соискателя с
      профессионалом,
      работающим в соответствующей сфере.Неформальное общение с кем - то,
      кто изнутри знает отрасль,
      нишу, сектор и компанию, которая вас интересует.Очень полезно
      увидеть кратчайший путь к успеху глазами
      опытного профессионала еще до начала поиска работы
    </p>
    <Collapse ghost>
      <Panel header={<p style={{ color: '#7095a8' }}>Подробнее</p>} key="1" showArrow={false}>
        <p>
          Информационные собеседования помогут собрать гораздо больше информации.
          Вы сможете получить советы
          относительно той или иной отрасли, лучше понять корпоративную культуру
          потенциального работодателя и
          заложить основу для сети бесценных знакомств, которые будут способствовать
          вашему профессиональному развитию в дальнейшем.
        </p>

        <p>
          Разумеется, нужно будет хорошо подготовиться и проявить профессионализм
          во всем.Ниже описаны шесть
          главных шагов, которые следует выполнить в процессе подготовки
          и проведения информационного собеседования.
        </p>
      </Panel>
    </Collapse>
  </>
);

export default IntroInfo;
