import {Link} from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>회원가입</h1>
        <SignUp />
        <p>
          이미 계정이 없습니다?<Link to={"/login"}>가입하기</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage