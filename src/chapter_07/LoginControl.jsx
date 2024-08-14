import React, { useState } from 'react';

const LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>로그인</button>
    );
}

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    );
}

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) return <UserGreeting />;
    else return <GuestGreeting />;
}

const UserGreeting = (props) => {
    return <h1>다시 오셨군요!</h1>;
}

const GuestGreeting = (props) => {
    return <h1>회원가입을 해주세요!</h1>;
}

const LoginControl = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/>
                        :<LoginButton onClick={handleLoginClick}/> }
        </div>
    );
}

export default LoginControl;