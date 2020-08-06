import React, { useState, useEffect } from 'react';
import styles from './Repositories.module.scss';

import { Repository } from '../../Components/Repositories/Repository';

export function Repositories({ repos, typeFilter, languageFilter, languageColor }) {
  const items = [];
  const [filteredRepos, setFilteredRepos] = useState(repos);
  const [selectedType, setFilterType] = useState(typeFilter[0]);
  const [searchStr, setSearchStr] = useState('');
  const [selectedLanguage, setLanguage] = useState(languageFilter[0]);

  useEffect(() => {
    filterRepos();
  }, [repos, selectedType, searchStr, selectedLanguage]);

  const filterRepos = (e) => {
    let filteredReposArr = JSON.parse(JSON.stringify(repos));
    // Type Check
    if (selectedType !== 'All') {
      filteredReposArr = filteredReposArr.filter((ele) => {
        if (selectedType === 'Forks') return ele.fork;
        if (selectedType === 'Sources') return !ele.fork;
      });
    }

    if (selectedLanguage !== 'All') {
      filteredReposArr = filteredReposArr.filter((ele) => {
        return ele.language === selectedLanguage;
      });
    }

    filteredReposArr = filteredReposArr.filter((ele) => {
      return ele.name.toLowerCase().includes(searchStr.toLowerCase());
    });

    setFilteredRepos(filteredReposArr);
  };

  const changeFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const setSearchString = (e) => {
    setSearchStr(e.target.value);
  };

  const changeFilterLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.input}>
          <input type="text" placeholder="Find a repository..." onChange={setSearchString} />
        </div>
        <div className={styles.select_type}>
          <select name="typefilter" id="typefilter" onChange={changeFilterType}>
            {typeFilter.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.select_language}>
          <select name="languageFilter" id="languageFilter" onChange={changeFilterLanguage}>
            {languageFilter.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        {/* <select id="bender" value={this.props.bender} onChange={this.changeOption.bind(this, 'bender')}>
          {this.props.benderOptions.map(function (option) {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select> */}
      </div>
      <div>
        {filteredRepos.map((item, index) => (
          <Repository key={index} {...item} languageColor={languageColor}/>
        ))}
      </div>
    </>
  );
}
