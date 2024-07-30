import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  return (
    <div>
      <p>Google Auth Integration</p>
      <span>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const token = credentialResponse.credential;
            const decoded = jwtDecode(token);
            console.log(decoded);
            console.log(decoded.email);
            console.log(decoded.name);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </span>
    </div>
  );
};
export default LoginPage;
