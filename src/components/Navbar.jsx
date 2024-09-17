import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="md:flex justify-between items-center container mx-auto p-5">
            <h2 className='text-4xl text-red-400 font-bold'>Medi Vision</h2>
            <ul className="flex gap-3 font-semibold text-red-400 sm:mt-2">
                <li className="hover:bg-black"><Link>Home</Link></li>
                <li className="hover:bg-black"><Link>About</Link></li>
                <li className="hover:bg-black"><button>Login</button></li>
            </ul>
        </div>
    );
};

export default Navbar;