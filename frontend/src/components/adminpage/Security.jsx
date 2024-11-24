import React from 'react';

const LoginSecurity = () => {
  return (
    <div className="login-security-container">
  <h1 className="title">Login & Security</h1>

  <div className="login-item">
    <div className="login-item-left">
      <span>Name</span>
      <p className="login-item-description">Vivian Weaver</p>
    </div>
    <button className="edit-button">Edit</button>
  </div>

  <div className="login-item">
    <div className="login-item-left">
      <span>Email</span>
      <p className="login-item-description">cookie98@gmail.com</p>
    </div>
    <button className="edit-button">Edit</button>
  </div>

  <div className="login-item">
    <div className="login-item-left">
      <span>Primary mobile number</span>
      <p className="login-item-description">
        For stronger account security, add your mobile number.
      </p>
    </div>
    <button className="edit-button">Edit</button>
  </div>

  <div className="login-item">
    <div className="login-item-left">
      <span>Passkey</span>
      <p className="login-item-description">
        Sign in using face, fingerprint, or PIN.
      </p>
    </div>
    <button className="edit-button">Edit</button>
  </div>

  <div className="login-item">
    <div className="login-item-left">
      <span>Password</span>
      <p className="login-item-description">********</p>
    </div>
    <button className="edit-button">Edit</button>
  </div>

  <div className="login-item">
    <div className="login-item-left">
      <span>2-step verification</span>
      <p className="login-item-description">
        Add a layer of security. Require a code in addition to your password.
      </p>
    </div>
    <button className="edit-button">Edit</button>
  </div>

  <div className="login-item">
    <div className="login-item-left">
      <span>Compromised account?</span>
      <p className="login-item-description">
        Take steps like changing your password.
      </p>
    </div>
    <button className="edit-button">Edit</button>
  </div>
</div>
  );
};

export default LoginSecurity;