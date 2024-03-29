import React, { useState } from "react";
import { generateArithmaticCaptcha } from '../util';
const ArithmeticCaptcha = () => {
    const [captcha, setCaptcha] = useState(generateArithmaticCaptcha());
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleValidation = () => {
        if (parseInt(input) === captcha.answer) {
            setMessage("Captcha validated successfully!");
            setValidated(true);
        } else {
            setMessage("Captcha validation failed!");
            setCaptcha(generateArithmaticCaptcha());
        }
        setInput("");
    };

  return (
    <div>
        <h1>Arithmetic Captcha</h1>
        {
            !validated && (
                <>
                    {captcha.captcha} {' = '}
                    <input
                        type="number"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleValidation} disabled={!input}>
                        Validate
                    </button>
                </>
            )
        }
        {message && <p style={{
            color:`${validated ? 'green' : 'red'}`
        }}>{message}</p>}
    </div>
  )
}

export default ArithmeticCaptcha