import React, { useContext, useState } from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import Facebook from  '../../Images/Group 2.png'
import Google from  '../../Images/Group 573.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

    const Login = () => {
        const [logedInUser, setLogedInUser] = useContext(UserContext)
        const [error, setError] = useState('')
        const history = useHistory();
        const location = useLocation()
        let { from } = location.state || { from: { pathname: "/" } };
        var provider = new firebase.auth.GoogleAuthProvider();
        const [userInfo, setUserInfo] = useState({
            name: '',
            email: '',
            imgURL: ''
        })
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                let newUserInfo = {...userInfo}
                newUserInfo = {
                    name: user.displayName,
                    email: user.email,
                    imgURL: user.photoURL
                }
                setUserInfo(newUserInfo)
                setLogedInUser(newUserInfo)
                history.replace(from);
                console.log(user)
                setUserToken()
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                console.log(err.code)
                console.log(err)
            })
            
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
              console.log(error)
          });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
               <div className="row">
                   <div className="col-12 mt-5">
                       <div className="loginForm border w-50 m-auto p-4 mb-3">
                           <h4 className="pb-2">Sign In Form</h4>
                           <form>
                               <input className="form-control mb-3" type="text" placeholder="Name"/>
                               <input className="form-control mb-3" type="email" placeholder="Username or Email"/>
                               <input className="form-control mb-3" type="password" placeholder="Password"/>
                               <input className="form-control mb-3" type="password" placeholder="Confirm Password"/>
                               <input className="btn btn-success" disabled type="submit" value="Sign In"/>
                           </form>
                           
                       </div>
                       <div className="alternativeSignIn w-50 m-auto text-center">
                        <span>  ____________________or____________________ </span><br/>
                            {logedInUser.name} <span className="text-danger">{error}</span>
                           <button onClick={handleSignIn} className="w-100 mt-3" > <img src={Google} className="google float-left" alt="google"/> Sign In With Google</button>

                          <button className="w-100 mt-2"> <img src={Facebook} className="google float-left"  alt="facebook"/> Sign In With Facebook</button>
                          
                       </div>
                   </div>
               </div>
               
           </div>
        </div>
    );
};

export default Login;