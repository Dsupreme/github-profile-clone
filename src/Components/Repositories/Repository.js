import React from 'react';
import styles from './Repositories.module.scss';
import Moment from 'react-moment';

export function Repository({ name, html_url, description, language, updated_at, stargazers_count, languageColor }) {
  return (
    <div className={styles.repo}>
      <a href={html_url} className={styles.repo_name}>
        {name}
      </a>
      <div className={styles.description}>{description}</div>
      <div className={styles.details}>
        <div>
          <span className={styles.language_color} style={{ backgroundColor: languageColor[language] }}></span>
          <span>{language}</span>
        </div>
        <div>
          <i className="fa fa-star"> </i> {stargazers_count}
        </div>
        <div>
          Updated on <Moment format="MMM Do YYYY">{updated_at}</Moment>
        </div>
        <div></div>
      </div>
    </div>
  );
}
