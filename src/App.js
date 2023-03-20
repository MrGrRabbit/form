import './App.css'
//import Button from './components/button.jsx'

function App() {
  return (
    <body>
      <div className='container'>
        <form>
          <div className='formValue'>
            <h1>Login</h1>
            <div className='inputBox'>
              <ion-icon name='mail-outline'></ion-icon>
              <label>Email:</label>
              <input type='email' className='inputEmail' />
            </div>
            <div className='inputBox'>
              <ion-icon name='lock-closed-outline'></ion-icon>
              <label>Password:</label>
              <input type='password' className='inputPass' />
            </div>
            <div className='forget'>
              <input type='checkbox' />
              <label>
                Remember Me <a href='/'>Forget Password</a>{' '}
              </label>
            </div>
            <div className='buttonClick'>
              <button>Log in</button>
            </div>
            <div className='register'>
              <p>
                Don't have a account <a href='/'>Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </body>
  )
}
export default App
