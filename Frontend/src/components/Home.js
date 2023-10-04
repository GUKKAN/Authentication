import React, { useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import './Home.css'; // Import a CSS file for styling
import Linkk from './Linkk';

export default function Home() {
  const { name } = useParams();
  const [isLightTheme, setIsLightTheme] = useState(true);
 

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);

    // Set CSS variables based on the selected theme
    const root = document.documentElement;
    if (isLightTheme) {
      root.style.setProperty('--bg-color', '#333'); // Dark theme background color
      root.style.setProperty('--text-color', '#f0f0f0'); // Dark theme text color
    } else {
      root.style.setProperty('--bg-color', '#f0f0f0'); // Light theme background color
      root.style.setProperty('--text-color', '#333'); // Light theme text color
    }
  };

  return (
    <div className={`homepage ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
      <h2 className='page-title'>Home Page</h2>
      <div className='welcome-container'>
        <p className='welcome-message'>Welcome, {name}!</p>
      </div>
      <button className='theme-toggle' onClick={toggleTheme}>
        {isLightTheme ? '🌞 Light' : '🌙 Dark'} Theme
      </button>
      <Link to="/login" className="out">
        Logout
      </Link>
      <Linkk/>
    </div>
  );
}