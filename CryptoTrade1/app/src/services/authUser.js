import axios from 'axios';
import React, { useEffect } from 'react';


export const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log('Authorization token:', `Bearer ${token}`);

    const response = await axios.get('http://192.168.31.31:8060/api/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Response from server:', response.data);
    const userProfileData = response.data;
    console.log('User profile data:', userProfileData);

    return userProfileData;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const useFetchProfileEffect = (setUserProfile) => {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await fetchUserProfile();
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, [setUserProfile]);
};
