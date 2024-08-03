import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const LoginPage = () => {
  const handleLoginSucces = async (credentialResponse) =>{
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);
    try {
      const responce =await axios.post('http://localhost:4000/api/users',{token});
      console.log({token});
      console.log(responce.data);
    } catch (error) {
      console.error('Error during authentication',error);
    }
  }
  
  return (
    
    <div>
      <p>Google Auth Integration</p>
      <span>
        <GoogleLogin
          onSuccess={handleLoginSucces}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </span>
    </div>
  );
};
export default LoginPage;
