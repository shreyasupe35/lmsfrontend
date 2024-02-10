import { useNavigate } from "react-router-dom";

function Denied(){
    const navigate=useNavigate();
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-semibold text-white tracking-widest">403</h1>
            <div className="bg-black text-white  px-2 text-sm rounded rotate-12 absolute">Aceess Denied</div>

            <button className="mt-5 ">
                <a onClick={() => navigate(-1)} className="relative inline-block text-sm font font-medium text-[#FF683D] active:text-yellow-500 focus:outline-none">
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">Go back</span>
                </a>
            </button>
        </main>
    )
}
export default Denied;