import { useState } from "react";
import HomeLayout from "../layout/HomeLayout";
import toast from "react-hot-toast";
import axiosInstance from "../config/axiosinstance";
import { isEmail } from "../helpers/regexmatcher";

function Contact(){
    const [userinput,setuserinput]=useState(
        {
            name:"",
            email:"",
            message:""
        }
    );
    function handleInputChange(e){
        const {name,value}=e.target;
        setuserinput({
            ...userinput,
            [name]:value
        })

    }

    async function onFormSubmit(e)  {
        e.preventDefault();
        if(!userinput.email || !userinput.name || !userinput.message) {
            toast.error("All fields are mandatory");
            return;
        }
        if(!isEmail(userinput.email)) {
            toast.error("Invalid email provided");
            return;
        }
        try{
            const response=axiosInstance.post("/contact",userinput);
            toast.promise(response,{
                loading:"Submitting your query",
                success:"Form submitted successfully",
                error:"Failed to submit the form"
            });
            const responseData=await response
            if(responseData?.data){
                setuserinput({
                    email:"",
                    name:"",
                    message:""
                })
            }
        }
        catch(error){
            toast.error("Operation Failed...")
        }
    }
    return (
       
       <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white w-[22rem] ">
                    <h1 className="text-3xl font-semibold ">Contact Form</h1>
                    <div className="flex flex-col  gap-1 w-full">
                        <label htmlFor="name" className="text-xl font-semibold ">
                            Name
                        </label>
                        <input 
                        type="text"
                         id="name"
                          className="bg-transparent border  px-2 py-1 rounded-sm bg-white text-black "
                          placeholder="Enter your name"
                          name="name"
                          onChange={handleInputChange}
                          value={userinput.name} />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold ">
                            Email
                        </label>
                        <input 
                        type="email"
                         id="email"
                          className="bg-transparent border  px-2 py-1 rounded-sm bg-white text-black"
                          placeholder="Enter your email"
                          name="email"
                          onChange={handleInputChange} 
                          value={userinput.email}/>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold ">
                            Message
                        </label>
                        <textarea 
                        type="text"
                         id="message"
                          className="bg-transparent border  px-2 py-1 rounded-sm bg-white resize-none h-60  text-black"
                          placeholder="Enter your message"
                          name="message"
                          onChange={handleInputChange}
                          value={userinput.message} />
                    </div>
                    <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">Submit</button>
                </form>
            </div>
        </HomeLayout>
    )
}
export default Contact;