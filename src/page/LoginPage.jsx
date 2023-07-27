import React, { useState } from "react";
import BackIcon from "../img/back_icon.png";
import LoginFalse from "../img/login_false.png";

const styles={
    input: {
        border: "none",
        width: 320,
        height: 40,
        },
    input_box: {
        border: "1px solid #D9D9D9",
        height: 60,
        width: 328,
        textAlign: "center",
        padding: "5px",
        borderRadius: "10px",
        
    },
    p: {
        float: "left",
        marginLeft: "10px",
        height: 5,
        marginTop: "-2px",
        color: "#D9D9D9",
        fontSize: "7px",
        paddingBottom: "2px",
    },
    img: {
        
        marginTop: "10px",
        marginLeft: "-10px",
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px",
    },
    box: {
        marginLeft: "10px",
    },
    
    logbox: {
        textAlign: "center",
        position: "fixed",
        bottom: "10px",
        right: "20px",
    },
    list: {
        display: "flex",
        listStyle: "none",
        padding: 0,
        fontSize: "14px",
        
    },
    inList: {
        marginLeft: "10px",
    },
    inList1: {
        marginLeft: "10px",
        color: "#CDCDCC",
    },
    listbox: {
        position: "fixed",
        bottom: "65px",
        right: "55px",
    }
}

// const [name, setName] = useState('')
// const [nameMessage, setNameMessage] = useState('')
// const [isName, setIsName] = useState(false)

// const onSubmitName = (e) => {
//     setName(e.target.value);
//     if (e.target.value.length < 2 || e.target.value.length > 5) {
//       setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
//       setIsName(false);
//     } else {
//       setNameMessage('올바른 이름 형식입니다 :)');
//       setIsName(true);
//     }
//   }; 

  
function LoginPage() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const onSubmitId = (e) => {
        setId(e.target.value);
    }

    const onSubmitPw = (e) => {
        setPw(e.target.value);
    }



    return (
        <>
            <div style={styles.box}>
            <img  style={styles.img} src={BackIcon} />
            <p style={styles.title}>로그인</p>
            
            <div style={styles.input_box}>
                <p style={styles.p}>아이디</p>
                <input
                    type="text"
                    value={id}
                    style={styles.input}
                    onChange={onSubmitId}
                    placeholder="이메일 (example@gamil.com)"
                /> 
            </div>
            

            <br />
            <div style={styles.input_box}>
                <p style={styles.p}>비밀번호</p>
                <input
                    type="text"
                    value={pw}
                    style={styles.input}
                    onChange={onSubmitPw}
                    placeholder="비밀번호 입력"
                />
            </div>
            </div>
            <div style={styles.listbox}>
                <ul style={styles.list}>
                    <li style={styles.inList}>
                        아이디 찾기
                    </li>
                    <li style={styles.inList1}>
                        |
                    </li>
                    <li style={styles.inList}>
                        비밀번호 찾기
                    </li>
                    <li style={styles.inList1}>
                        |
                    </li>
                    <li style={styles.inList}>
                        회원가입
                    </li>
                </ul>
            </div>
            <div style={styles.logbox}>
                <img src={LoginFalse} />
            </div>
        </>
    );
}

export default LoginPage;