import { Link } from "react-router-dom";



const Welcome = () => {
    return (
        <div className="bg-primary w-full min-h-screen text-white flex justify-center items-center">

            <div>
                <h1 className="font-bold text-4xl">Welcome to Task Management System</h1>
                <div className="flex justify-center mt-16">
                    <Link to='/home'><button className="p-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500">Navigate To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;