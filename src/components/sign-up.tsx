
export default function SignUp() {
  return (
    <form action={'/api/signup'} method = 'POST' className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <label className={formLabelCss}>Username <br/>
        <input
          className={formInputCss}
          minLength={3}
          name="username"
          id="username"
          type="text"
          placeholder="Username"
          required
          />
        <br/>
      </label>
      <label className={formLabelCss}>Password <br/>
        <input
          className={formInputCss}
          minLength={8}
          maxLength={32}
          name="password"
          id="password"
          type="password"
          placeholder="********"
          required
          />
        <br/>
      </label>
      <label className={formLabelCss}>Confirm Password <br/>
        <input
          className={formInputCss}
          minLength={8}
          maxLength={32}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="********"
          required
          />
        <br/>
      </label>
      <label className={formLabelCss}>Email<br/>
        <input
          className={formInputCss}
          minLength={3}
          name="email"
          id="email"
          type="text"
          placeholder="email@example.com"
          required
          />
        <br/>
      </label>
      <input
        type="submit"
        value="Signup"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
        />
    </form>
  )
}


const formInputCss = "text-gray-800 bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full";
const formLabelCss = "block text-gray-700 font-medium mb-2";