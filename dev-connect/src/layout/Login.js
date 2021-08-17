import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section class="container">
     
     {/*  <div class="alert alert-danger">
        Invalid Credentials
      </div> */}

      <h1 class="large text-primary">
        Sign In
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Sign into your account</p>
      <form action="dashboard.html" class="form">
        <div class="form-group">
          <input type="email" placeholder="Email Address" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" minlength="6" />
        </div>
        <input type="submit" value="Login" class="btn btn-primary" />
      </form>
      <p class="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
    </div>
  )
}

export default Login
