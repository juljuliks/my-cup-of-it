import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Checkbox, Select } from 'antd';
import { CloseCircleOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
// import { skipPartiallyEmittedExpressions } from 'typescript';
// import { title } from 'process';
import { IProfile } from '../../../../types/usersTypes';
import UserCard from '../../../Home/componenets/UserCard';
// import user from '../../../../redux/slices/user';
import styles from './Filters.module.css';
import { useAppSelector } from '../../../../hooks';
import FeedForModal from '../../../common/feedForModal';
// import user from '../../../../redux/slices/user';

const { Option } = Select;

interface UserProps {
  users: IProfile[];

}

const Filters: React.FC<UserProps> = ({ users }) => {
  // const [companies, setCompanies] = useState<string[]>([]);
  const [filteredUsers, setFilterUser] = useState(users);
  // const [filteredUsersPrev, setFilterUserPrev] = useState(users);
  const [filteredTypeUsers, setfilteredTypeUsers] = useState<string[]>([]);
  const [filteredCompany, setfilteredCompany] = useState<string[]>([]);
  const [filteredTeh, setfilteredTeh] = useState<string[]>([]);
  const [filteredIsActive, setFilteredIsActive] = useState(false);
  const typeUser = Array.from(new Set(users.map((el) => {
    if (el.isMentor === true) {
      return 'Менторы';
    }
    return 'Студенты';
  })));
  const company = Array.from(new Set(users.map((el) => {
    if (el.company === null || el.company === '') { return 'no company'; }
    return el.company;
  })));

  const technologies = Array.from(new Set(users.map((f) => f.technologies.map((t) => t.title)).flat()));

  function handleChangetypeUser(value: string[]) {
    setfilteredTypeUsers(value);
  }
  function handleChangeCompanies(value: string[]) {
    setfilteredCompany(value);
  }
  function handleChangetechnologies(value: string[]) {
    setfilteredTeh(value);
  }
  function onChengeCheckIsActive(e: any) {
    setFilteredIsActive(e.target.checked);
  }

  const byCompanies = useCallback((user: IProfile) => {
    if (filteredCompany.length === 0) return true;
    return filteredCompany.includes(user.company || 'no company');
  }, [filteredCompany]);
  const byType = useCallback((user: IProfile) => {
    if (filteredTypeUsers.length === 0) return true;
    if (filteredTypeUsers.includes('Менторы') && user.isMentor) return true;
    return filteredTypeUsers.includes('Студенты') && !user.isMentor;
  }, [filteredTypeUsers]);
  const byStack = useCallback((user: IProfile) => {
    if (filteredTeh.length === 0) return true;
    return user.technologies.some((t) => filteredTeh.includes(t.title));
  }, [filteredTeh]);
  const byIsActive = useCallback((user: IProfile) => {
    if (filteredIsActive === true) { return user.isActive === true; }
    return user;
  }, [filteredIsActive]);

  useEffect(() => {
    const filtered = users.filter(byType).filter(byCompanies).filter(byStack).filter(byIsActive);
    setFilterUser(filtered);
  }, [byType, byCompanies, users, byStack, byIsActive]);

  const filterClickUserType = () => {
    setfilteredTypeUsers([]);
  };
  const filterClickCompany = () => {
    setfilteredCompany([]);
  };
  const filterClickTeh = () => {
    setfilteredTeh([]);
  };
  const filterClear = () => {
    setfilteredTypeUsers([]);
    setfilteredCompany([]);
    setfilteredTeh([]);
    setFilteredIsActive(false);
  };

  return (
    <>
      {filteredUsers.length === 0 && (
        <Alert
          banner
          message="Нет ни одного пользователя"
          type="info"
          closable
        />
      )}
      <div className={styles.conteinerFilters}>

        <div className={styles.conteinerSiorch}>
          <div className={styles.searchBlock}>
            <div>
              {filteredTypeUsers.length !== 0 || filteredCompany.length !== 0 || filteredTeh.length !== 0 || filteredIsActive === true
                ? <CloseOutlined style={{ fontSize: '20px', color: '#0dcaf0' }} onClick={filterClear} />
                : <CloseOutlined style={{ fontSize: '0px', color: '#f0f2f5' }} onClick={filterClear} />}
            </div>
            <div className={styles.headerSearch}>
              ПОИСК
            </div>
          </div>
          <div className={styles.headerSearch}>
            <Checkbox onChange={onChengeCheckIsActive} checked={filteredIsActive}>только активные</Checkbox>
          </div>
          <div className={styles.filterBlock}>
            <div className={styles.filterBlockHeader}>Тип пользователя:</div>
            <div className={styles.filterBlockSearch}>
              {filteredTypeUsers.length === 0 ? <CloseOutlined style={{ color: '#f0f2f5' }} onClick={filterClickUserType} /> : <CloseOutlined style={{ fontSize: '15px', color: '#0dcaf0' }} onClick={filterClickUserType} />}
            </div>
          </div>
          <Select mode="tags" style={{ width: '100%' }} onChange={handleChangetypeUser} value={filteredTypeUsers} tokenSeparators={[',']}>
            {typeUser.map((el) => <Option key={el} value={el}>{el}</Option>)}
          </Select>
          <div className={styles.filterBlock}>
            <div className={styles.filterBlockHeader}>Компании:</div>
            <div className={styles.filterBlockSearch}>
              {filteredCompany.length === 0 ? <CloseOutlined style={{ color: '#f0f2f5' }} onClick={filterClickCompany} /> : <CloseOutlined style={{ fontSize: '15px', color: '#0dcaf0' }} onClick={filterClickCompany} />}
            </div>
          </div>
          <Select mode="tags" style={{ width: '100%' }} onChange={handleChangeCompanies} value={filteredCompany} tokenSeparators={[',']}>
            {company.map((el) => <Option key={el} value={el}>{el}</Option>)}
          </Select>
          <div className={styles.filterBlock}>
            <div className={styles.filterBlockHeader}>Технологии:</div>
            <div className={styles.filterBlockSearch}>
              {filteredTeh.length === 0 ? <CloseOutlined style={{ color: '#f0f2f5' }} onClick={filterClickTeh} /> : <CloseOutlined style={{ fontSize: '15px', color: '#0dcaf0' }} onClick={filterClickTeh} />}
              {/* <FilterOutlined onClick={filterClickTeh} /> */}
            </div>
          </div>
          <Select mode="tags" style={{ width: '100%' }} onChange={handleChangetechnologies} value={filteredTeh} tokenSeparators={[',']}>
            {technologies.map((el) => <Option key={el} value={el}>{el}</Option>)}
          </Select>
        </div>
        <div className={styles.conteinerUserCand}>
          <div className={styles.headerUserCard}>
            <p> ПОЛЬЗОВАТЕЛИ</p>
          </div>

          <div className={styles.conteinerUser}>
            <FeedForModal mentors={filteredUsers} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Filters;
