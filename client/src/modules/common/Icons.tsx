import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ITechnology } from '../../types/technologiesTypes';
import { iconsObject, iconsObject2 } from './tools';
import { IconName } from '../../../node_modules/@fortawesome/fontawesome-common-types/index.d';

interface IIconsProps {
  technologies: ITechnology[]
}

const Icon = styled.span`
  margin: 5px;
`;

const Icons: React.FC<IIconsProps> = ({ technologies }) => (
  <>
    {technologies.map((technology, index) => {
      if (iconsObject[technology.title]) {
        const str: IconName = iconsObject[technology.title];
        return (
          <Icon key={`${technology.title}_${index ** 2}`}>
            <FontAwesomeIcon icon={['fab', str]} size="3x" />
            {' '}
          </Icon>
        );
      } if (iconsObject2[technology.title]) {
        return (
          <Icon key={technology.title}>
            <img src={iconsObject2[technology.title]} alt={technology.title} style={{ width: '30px' }} />
            {' '}
          </Icon>
        );
      } return (
        <Icon style={{ fontWeight: 'bolder' }} key={technology.title}>
          {technology.title}
          {' '}
        </Icon>
      );
    })}
  </>
);

export default Icons;
