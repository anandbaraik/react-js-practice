import Chat from "./Chat";
import { Feature } from "./Feature";

export const Example = () => {
  return (
    <>
      <Feature feature="isGooglePayEnabled" value={true}>
        <button className="google_pay">Google Pay</button>
      </Feature>
      <Feature feature="isApplePayEnabled" value={false}>
        <button className="apple_pay">Apple Pay</button>
      </Feature>
      <div>
        <Feature feature="darkMode" value={true}>
          in Dark Mode
        </Feature>
      </div>
      <div>
        <Feature feature="chatEnabled" value={true}>
          <Chat/>
        </Feature>
      </div>
    </>
  );
};
