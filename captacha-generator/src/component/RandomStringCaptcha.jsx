import React, { useState, useEffect } from "react";
import { generateRandomCaptcha, CAPTCHA_LENGTH } from "../util";
const RandomStringCaptcha = () => {

    const [captcha, setCaptcha] = useState("");
    const [input, setInput] = useState("");
    const [status, setStatus] = useState(null);

    const getCaptcha = () => {
      const newCaptcha = generateRandomCaptcha(CAPTCHA_LENGTH);
      setCaptcha(newCaptcha);
    };

    const handleCaptchaValidation = () => {
      if(captcha === input) {
        setStatus("success");
        setInput("");
        return;
      }
      setStatus("failed");
      setInput("");
      getCaptcha();
    }

    useEffect(() => {
      getCaptcha();
    }, []);

    return (
        <div>
            <h1>Random String Captcha</h1>
            <div>
                {
                    status && <p style={{color: status === "success" ? "green" : "red"}}>{status === "success" ? "Captcha validated successfully!" : "Captcha validation failed!"}</p>
                }

                {
                    (!status || status === "failed") && <>
                        <input type="text" value={input} onChange={(e) => {
                        setInput(e.target.value);
                        }} disabled={status === "success"} maxLength={CAPTCHA_LENGTH}/>
                        <button onClick={handleCaptchaValidation}
                        disabled={status === "success" || input.length !== CAPTCHA_LENGTH}>
                            Validate
                        </button>
                    </>
                }
            </div>
            {
            (!status || status === "failed") && captcha && <p>Captcha: {captcha}</p>
            }
        </div>
    );
}

export default RandomStringCaptcha