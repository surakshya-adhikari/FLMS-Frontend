const Login = () => {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Login to Your Account</h1>
  
        <form className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 mb-4 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded-md" />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  