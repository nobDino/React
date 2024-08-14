import React from "react";

function Login() {
    return (
        <table>
            <tbody>
                <tr>
                    <td>아이디:</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>비밀번호:</td>
                    <td><input type="password" /></td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ textAlign: 'center' }}>
                        <button style={{ marginRight: '10px' }}>로그인</button>
                        <button>비우기</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Login;
