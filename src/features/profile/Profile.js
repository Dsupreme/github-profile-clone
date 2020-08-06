import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectProfile, updateProfile } from './ProfileSlice';
import styles from './Profile.module.scss';

export function Profile() {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile.status === '') dispatch(updateProfile());
  }, [profile, dispatch]);

  return (
    <div className={styles.col_1}>
      <img className={styles.avatar} src={profile.avatarUrl} alt="avatar" />
      <div className={styles.profile_name}>{profile.name}</div>
      <div className={styles.profile_alias}>{profile.alias}</div>
      <div className={styles.profile_bio}>{profile.bio}</div>
      <button className={styles.edit_profile}>Edit Profile</button>
      <div className={styles.profile_follow}>
        <span>
          <i className="fa fa-users"> </i>
          {profile.followersCount} followers
        </span>
        ·<span>{profile.followingCount} following</span>·
      </div>
      <div>
        <i className="fa fa-building-o" aria-hidden="true"></i>
        {profile.organization}
      </div>
      <div>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        {profile.location}
      </div>
      <div>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
        {profile.email}
      </div>
    </div>
  );
}
