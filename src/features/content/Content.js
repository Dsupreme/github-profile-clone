import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContent, fetchRepositories } from './ContentSlice';
import styles from './Content.module.scss';

import { Profile } from '../../features/profile/Profile';
import { Repositories } from '../../Components/Repositories/Repositories';

export function Content() {
  const [isSticky, setSticky] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const content = useSelector(selectContent);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (content.status === '') dispatch(fetchRepositories());
  }, [content, dispatch]);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const changeTab = (e) => {
    setActiveTab(+e.target.value);
  };

  return (
    <>
      <div className={styles.content}>
        <div className={`${styles.tabset} ${styles.sticky_wrapper} ${isSticky ? styles.sticky : ''}`} ref={ref}>
          <input type="radio" name="tabset" id="tab1" checked={activeTab === 0} onChange={changeTab} value="0" />
          <label htmlFor="tab1">{content.tabs[0]}</label>
          <input type="radio" name="tabset" id="tab2" checked={activeTab === 1} onChange={changeTab} value="1" />
          <label htmlFor="tab2">
            {content.tabs[1]}
            <span className={styles.repo_count}> {content.repositories.length}</span>
          </label>
          <input type="radio" name="tabset" id="tab3" checked={activeTab === 2} onChange={changeTab} value="2" />
          <label htmlFor="tab3">{content.tabs[2]}</label>
        </div>

        <div className={styles.profile_panel}>
          <Profile />
        </div>

        <div className={styles.tab_panels}>
          <section
            id="overview"
            className={`${styles.tab_panel} ${activeTab === 0 ? styles.active : styles.hidden}`}
          ></section>
          <section
            id="repositories"
            className={`${styles.tab_panel} ${activeTab === 1 ? styles.active : styles.hidden}`}
          >
            <Repositories
              repos={content.repositories}
              typeFilter={content.filters.type}
              languageFilter={content.filters.languages}
              languageColor={content.filters.languageColor}
            />
          </section>
          <section
            id="projects"
            className={`${styles.tab_panel} ${activeTab === 2 ? styles.active : styles.hidden}`}
          ></section>
        </div>
      </div>
    </>
  );
}
