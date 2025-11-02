import LoginForm from "./form";

const Login = () => {
    return (
        <div className="w-[95%]  m-auto flex  justify-center items-center h-screen ">
        <div className="  p-6 border border-gray-300 rounded-lg shadow-md md:flex gap-[3%]">
            <div className="font-sans container text-black text-center text-[1rem] md:text-[0.8rem] w-[99%] m-auto mb-4 md:mb-auto">
  Login as an admin
</div>

            <LoginForm/>
            </div>
        </div>

)
}
export default Login;