import React from 'react';

const Login = ({children}) => {
    return ( 
        <div className="layout">
            {children} {/*Encapsulamiento*/} 
        </div>
     );
};
 
export default Login;