import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './Dashboard.css';
import marketingimg from '../../images/marketing-img.jpg';

const Dashboard = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();
      let newGreeting;

      if (hours >= 0 && hours < 12) {
        newGreeting = 'Good Morning';
      } else if (hours >= 12 && hours < 15) {
        newGreeting = 'Good Afternoon';
      } else if (hours >= 15 && hours < 21) {
        newGreeting = 'Good Evening';
      } else {
        newGreeting = 'Good Night';
      }

      setGreeting(newGreeting);
    };

    const getNextUpdate = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      let nextUpdate;

      if (hours >= 0 && hours < 12) {
        nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0); // 12:00 PM
      } else if (hours >= 12 && hours < 15) {
        nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0, 0, 0); // 3:00 PM
      } else if (hours >= 15 && hours < 21) {
        nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0, 0); // 9:00 PM
      } else {
        nextUpdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0); // 12:00 AM next day
      }

      const timeUntilNextUpdate = nextUpdate - now;

      return timeUntilNextUpdate;
    };

    updateGreeting();

    const timeout = setTimeout(() => {
      updateGreeting();
      setInterval(updateGreeting, 1000 * 60 * 60);
    }, getNextUpdate());

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className="profile my-5">
            <div className="profile-infos">
              <p className='greetingmsg'>{greeting} </p>
              <h4>Hii John! <span className="hand-wave">👋</span></h4>
              <p>Welcome To Connex Marketing Management System</p>
            </div>
            <img src={marketingimg} alt="Profile" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
