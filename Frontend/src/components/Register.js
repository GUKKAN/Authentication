import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegisterClick = () => {
    if (!fname || !lname || !mail || !pass) {
      setMessage("Please enter all the details");
      setShowModal(true);
      return;
    }

    const userData = {
      firstName: fname,
      lastName: lname,
      email: mail,
      password: pass,
    };

    fetch("http://localhost:8800/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.status === 201) {
          setMessage("Registration Successful");
        } else if (res.status === 400) {
          setMessage("User already exists");
        } else {
          setMessage("Error registering user");
        }
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setMessage("Error registering user");
        setShowModal(true);
      });
  };

  const closeModal = () => {
    setShowModal(false);
    setFname("");
    setLname("");
    setMail("");
    setPass("");
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <input
        type="text"
        placeholder="firstname"
        required
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="text"
        placeholder="lastname"
        required
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        required
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleRegisterClick} className="reg">
        Register
      </button>
      <br />
      <Link to="/login" className="reg">
        Login
      </Link>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p className="success-message">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

// import React, { useEffect, useState } from 'react';
// import { useNavigate,Link } from 'react-router-dom';

// export default function Register() {
//   const[n , setN]  = useState("");
//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');
//   const [mail, setMail] = useState('');
//   const [pass, setPass] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [message,setmessage]=useState('Registration Successfull')
//   // const navigate = useNavigate();
//   // Function to save user data in an array and store it in localStorage
// const saveUserData = (userData) => {
//   // Retrieve existing user data from localStorage or initialize an empty array
//   const existingData = JSON.parse(localStorage.getItem('userData')) || [];

//   // Push the new user data into the array
//   existingData.push(userData);

//   // Store the updated array in localStorage
//   localStorage.setItem('userData', JSON.stringify(existingData));
// };
// useEffect(() => {
//   fetch("http://localhost:8800/name")
//     .then(res => res.json())
//     .then(data => {
//       setN(data);
//       console.log(data);
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//       // Handle the error, e.g., by setting an error state or displaying an error message.
//     });
// }, []);

//   // const handleRegisterClick = () => {
//   //   // Check if all fields are filled out
//   //   if (fname && lname && mail && pass) {
//   //     // Store the values in local storage
//   //     localStorage.setItem('firstName', fname);
//   //     localStorage.setItem('lastName', lname);
//   //     localStorage.setItem('email', mail);
//   //     localStorage.setItem('password', pass);

//   //     // Show the modal
//   //     setShowModal(true);
//   //     // navigate('/login');
      
//   //   }
//   // };
//   const handleRegisterClick = () => {
//     // Check if all fields are filled out
//     if (!fname || !lname || !mail || !pass) {
//       setmessage('Please enter all the details');
//       setShowModal(true); // Show the modal with the error message
//       return; }
//       // Create an object with user data
//       const userData = {
//         firstName: fname,
//         lastName: lname,
//         email: mail,
//         password: pass,
//       };
//       const userDataArray = JSON.parse(localStorage.getItem('userData'));
    

//     if (userDataArray) {
//       // Find a user with a matching email and password
//       const user = userDataArray.find((user) => user.email === mail);
//       if (user){
//         setmessage('User already exists')
//       }
//       else{
//         saveUserData(userData);
//         setmessage('Registration Successfull')
//       }
//     }
//     else{
//       saveUserData(userData);
//       setmessage('Registration Successfull')
//     }
//       // Call the function to save the user data
      
  
//       // Show the modal or perform any other actions as needed
//       setShowModal(true);
    
//   };
  

//   const closeModal = () => {
//     // Close the modal and reset the form
//     setShowModal(false);
//     setFname('');
//     setLname('');
//     setMail('');
//     setPass('');
//   };

//   return (
//     <div className='container'>
//       <h2>Registration Form</h2>
//       <input
//         type="text"
//         placeholder='firstname'
//         required
//         value={fname}
//         onChange={(e) => setFname(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder='lastname'
//         required
//         value={lname}
//         onChange={(e) => setLname(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder='email'
//         required
//         value={mail}
//         onChange={(e) => setMail(e.target.value)}
//       />
//       <input
//         type='password'
//         placeholder='password'
//         required
//         value={pass}
//         onChange={(e) => setPass(e.target.value)}
//       />
//       <br />
//       <button onClick={handleRegisterClick} className='reg'>
//         Register
//       </button>
//       <br />
//       <Link to="/login" className='reg'>
//         Login
//       </Link>

//       {/* Modal */}
//       {showModal && (
//         <div className='modal'>
//           <div className='modal-content'>
//             <span className='close' onClick={closeModal}>&times;</span>
//             <p className='success-message'>{message}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
