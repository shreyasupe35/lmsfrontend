import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosinstance";

const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn")|| false,
    role:localStorage.getItem("role")||"",
    data:localStorage.getItem("data")|| {}
}

export const createAccount=createAsyncThunk("/auth/signup",async ()=>{
    try {
        const response=axiosInstance.post("user/register",data);
       toast.promise(response,{
        loading:'Wait creating your account',
        success:(data)=>{
            return data?.data?.message;
        },
        error:'failed to create your account'
       })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})
export const login=createAsyncThunk("/auth/siginin",async ()=>{
    try {
        const response=axiosInstance.post("user/login",data);
       toast.promise(response,{
        loading:'Wait! authenticating your account',
        success:(data)=>{
            return data?.data?.message;
        },
        error:'failed to authenticating  your account'
       })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message);
        localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("role",action?.payload?.data?.user?.role);
        state.isLoggedIn=true;
        state.role=action?.payload?.data?.user?.role
        state.data=action?.payload?.data?.user
    }  
    
})

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log(action)
            localStorage.setItem("data",JSON.stringify(action?.payload?.data))
        })
    }
});

export default authSlice.reducer;