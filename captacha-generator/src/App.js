import ArithmeticCaptcha from "./component/ArithmeticCaptcha";
import RandomStringCaptcha from "./component/RandomStringCaptcha";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
    <RandomStringCaptcha/>
    <hr/>
    <ArithmeticCaptcha/>
    </div>
  );
}
