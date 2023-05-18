import { useState } from "react";
import "./App.css";

function App() {
  const [checkSmallLetters, setCheckSmallLetters] = useState(true);
  const [checkCapitalLetters, setCheckCapitalLetters] = useState(true);
  const [checkSpecChar, setCheckSpecChar] = useState(true);
  const [checkNumbers, setCheckNumbers] = useState(true);

  const [generatedPassword, setGeneratedPassword] = useState("");

  function generatePassword() {
    let genPass = "";
    let passChar = "";

    const passLength = Math.floor(Math.random() * (12 - 8) + 8);

    if (checkSmallLetters) {
      passChar += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkCapitalLetters) {
      passChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checkSpecChar) {
      passChar += "!@#$%^&*()";
    }
    if (checkNumbers) {
      passChar += "0123456789";
    }

    for (let i = 0; i < passLength; i++) {
      const randomChar = Math.floor(Math.random() * passChar.length);
      genPass += passChar[randomChar];
    }
    // console.log(genPass);
    setGeneratedPassword(genPass);
  }

  function copyPass(text) {
    navigator.clipboard.writeText(text);
  }

  const [savedPass, setSavePass] = useState([]);

  function savePass() {
    // savedPass.push(generatedPassword);
    if (!savedPass.includes(generatedPassword)) {
      setSavePass([...savedPass, generatedPassword]);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-10 col-lg-8 mt-5">
          <div className="card text-bg-dark">
            <div className="card-body d-flex justify-content-evenly">
              <div className="form-check">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  onChange={() => setCheckSmallLetters(!checkSmallLetters)}
                  checked={checkSmallLetters}
                  id="smallLetters"
                />
                <label className="form-check-label" htmlFor="smallLetters">
                  Small Letters
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  onChange={() => setCheckCapitalLetters(!checkCapitalLetters)}
                  checked={checkCapitalLetters}
                  id="capitalLetters"
                />
                <label className="form-check-label" htmlFor="capitalLetters">
                  Capital Letters
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  onChange={() => setCheckSpecChar(!checkSpecChar)}
                  checked={checkSpecChar}
                  id="specialCharacters"
                />
                <label className="form-check-label" htmlFor="specialCharacters">
                  Special Characters
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  onChange={() => setCheckNumbers(!checkNumbers)}
                  checked={checkNumbers}
                  id="numbers"
                />
                <label className="form-check-label" htmlFor="numbers">
                  Numbers
                </label>
              </div>
            </div>
            <div className="card-footer text-muted d-flex gap-2 p-3">
              <button
                className="btn btn-primary w-100"
                onClick={generatePassword}
              >
                Generate
              </button>
              <button className="btn btn-primary w-100" onClick={savePass}>
                Save
              </button>
            </div>
          </div>
          <div className="card text-bg-dark mt-4">
            <div className="card-body">
              <p className="m-0 d-flex">
                <b>Password:</b>&nbsp;<span>{generatedPassword}</span>
                <span
                  className="btn py-0 ms-auto border-0 text-muted"
                  onClick={() => copyPass(generatedPassword)}
                >
                  Copy
                </span>
              </p>
            </div>
          </div>
          {savedPass.length > 0 && (
            <div className="table-responsive mt-5">
              <table className="table table-dark table-striped table-hover table- align-middle">
                <thead>
                  <tr>
                    <th className="ps-3">Saved Passwords</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {savedPass.map((pass, index) => (
                    <tr key={index}>
                      <td className="w-75 ps-3">{pass}</td>
                      <td className="w-25 text-end py-0">
                        <span
                          className="btn py-0 ms-auto border-0 text-muted"
                          onClick={() => copyPass(pass)}
                        >
                          Copy
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* {savedPass.length > 0 && (
            <div className="card text-bg-dark mt-5">
              <div className="card-body">
                <h4 className="card-title">Saved Passwords</h4>
                <div className="list-group list-group-flush">
                  {savedPass.map((pass, index) => (
                    <button
                      key={index}
                      className="list-group-item list-group-item-action list-group-item-dark"
                    >
                      {pass}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
