import React from 'react'

const Login = ({setToggle}) => {
    return (
        <div className='min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
            <div className='w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-200/50 p-8 sm:p-10'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl text-slate-900 font-bold mb-2'>Welcome Back</h1>
                    <p className='text-sm text-slate-600'>Sign in to your account</p>
                </div>
                <div className='space-y-5'>
                    <form className=''>
                        <div className=''>
                            <label className='block text-sm font-medium text-slate-700 mb-2'>Email</label>
                            <input type="text" className='w-full px-3 py-4 border border-slate-400 rounded-xl text-sm mb-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transarent' placeholder='example@email.com' />
                        </div>
                        <div className=''>
                            <label className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
                            <input type="password" className='w-full px-3 py-4 border border-slate-400 rounded-xl text-sm mb-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transarent' placeholder='*****' />
                        </div>
                        <button className='w-full bg-slate-900 text-white py-3 px-4 outline-none border-none  rounded-xl text-md font-bold'>Sign in</button>
                        <p className='mt-6 text-center text-sm text-slate-600'>Don't have an account?&nbsp;
                            <button className='font-semibold text-slate-900 hover:text-slate-700 transition-colors duration-200' onClick={()=> setToggle(prev =>!prev)}>Sign Up</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login