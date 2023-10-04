import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (email === '' || password === '') {
      setShowMessage(true);
      setMessage('Fields are empty. Please enter both email and password.');
      return;
    }

    // Send a POST request to your backend for authentication
    fetch('http://localhost:8800/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Successful login
          setMessage('Login successful!');
          setShowMessage(true);
          navigate(`/home/${data.home}`);
        } else {
          // Invalid login
          setMessage('Invalid email or password.');
          setShowMessage(true);
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setMessage('Error logging in. Please try again later.');
        setShowMessage(true);
      });
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLoginClick} className='reg'>
        Login
      </button>
      <br />
      <Link to='/'>Back to Registration</Link>

      {/* Display a message based on login result */}
      {showMessage && <p>{message}</p>}
    </div>
  );
}

// import React, { useState } from 'react';
// import { Link ,useNavigate} from 'react-router-dom';
// import Home from './Home';
// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showMessage, setShowMessage] = useState(false);
//   const [message, setMessage] = useState('');
//   const [home,sethome]=useState('')
//   const navigate = useNavigate();
//   const handleLoginClick = () => {
//     // Retrieve user data from localStorage
//     const userDataArray = JSON.parse(localStorage.getItem('userData'));

//     if (userDataArray) {
//       // Find a user with a matching email and password
    
//       const user = userDataArray.find((user) => user.email === email && user.password === password);
     
//       if(email ==''|| password =='')
//       {   
//           setShowMessage(true);
//           setMessage('Fields are empty you moron');
//       }
//       else if (user) {
//         // Successful login
//         const home=user.firstName +" " +user.lastName
//         sethome(home)
//         setMessage('Login successful!');
//         setShowMessage(true);
//         navigate(`/home/${home}`);

      
//       } else {
//         // Invalid login
//         setMessage('Invalid email or password.');
//         setShowMessage(true);
//       }
//     } else {
//       // No user data in localStorage
//       setMessage('No user data found.');
//       setShowMessage(true);
//     }
   
//   };

//   return (
//     <div className='container'>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder='email'
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type='password'
//         placeholder='password'
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLoginClick} className='reg'>
//         Login
//       </button>
//       <br />
//       <Link to="/">Back to Registration</Link>

//       {/* Display a message based on login result */}
//       {showMessage && <p>{message}</p>}
    
//     </div>
//   );
// }