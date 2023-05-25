
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  let nav = useNavigate(); 
  const routeChange = () =>{ 
    nav('game');
  }
    return (<div>
        <h1>Login Now!!</h1>
        <button onClick={routeChange}>Game</button>
    </div>)
  };
  
export default LoginPage;

