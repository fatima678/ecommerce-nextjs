// "use client"
// import React from 'react'
// import Logo from '@/public/assets/images/logo-black.png'
// import Image from 'next/image'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { zSchema } from "@/lib/zodSchema"
// import { useForm } from "react-hook-form"


// import {
//   Form,
//   FormControl,

//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"

// const LoginPage = () => {
//   // Zod schema se email aur password ko pick karna
//   const formSchema = zSchema.pick({
//     email: true,
//     password: true
//   })

//   // React Hook Form ka setup
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: ""
//     },
//   })
  

//   return (
//     <Card className="w-[450px]">
//         <CardContent>
//             <div className='flex justify-center py-6'>
//                 <Image 
//                   src={Logo.src} 
//                   width={Logo.width} 
//                   height={Logo.height} 
//                   alt='logo' 
//                   className='max-w-[150px]' 
//                 />
//             </div>
            
//             <div className='text-center space-y-2'>
//                 <h1 className='text-3xl font-bold tracking-tight'>
//                   Login Into Account
//                 </h1>
//                 <p className='text-sm text-muted-foreground'>
//                   Please enter your details to continue
//                 </p>
//             </div>

//             <div>
//                 <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <div>
//             <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input  type="email" placeholder="example@gmail.com" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         </div>
        

//         <div>
//             <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input  type="password" placeholder="*******" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         </div>
       
//       </form>
//     </Form>
//             </div>

//             {/* Form fields yahan ayenge */}
//         </CardContent>
//     </Card>
//   )
// }

// export default LoginPage




"use client"
import React from 'react'
import Logo from '@/public/assets/images/logo-black.png'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { zSchema } from "@/lib/zodSchema"
import { useForm } from "react-hook-form"

// In do lines ko add kiya gaya hai error solve karne ke liye
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

import ButtonLoading from "@/components/ui/Application/ButtonLoading"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from 'zod'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const [isTypePassword, setIsTypePassword] = useState(true)
  const formSchema = zSchema.pick({
    email: true,
   
  }).extend({
    password: z.string().min(3,  "Password is required" )
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // Yeh function add kiya gaya hai taake form submit ho sakay
  const onSubmit = (values) => {
    console.log("Form Values:", values)
  }

  return (
    <Card className="w-[400px]">
      <CardContent>
        <div className='flex justify-center py-6'>
          <Image 
            src={Logo.src} 
            width={Logo.width} 
            height={Logo.height} 
            alt='logo' 
            className='max-w-[150px]' 
          />
        </div>
        
        <div className='text-center space-y-2 mb-6'>
          <h1 className='text-3xl font-bold tracking-tight'>
            Login Into Account
          </h1>
          <p className='text-sm text-muted-foreground'>
            Please enter your details to continue
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    /* 1. Parent ko relative rakhein */
    <FormItem className="relative mb-4">
      <FormLabel>Password</FormLabel>
      <div className="relative"> {/* Input aur Button ko wrap karne ke liye */}
        <FormControl>
          <Input 
            type={isTypePassword ? "password" : "text"} 
            placeholder="*******" 
            className="pr-12" /* Right side padding taake text icons ke niche na aaye */
            {...field} 
          />
        </FormControl>

        {/* 2. Toggle Button ki perfect alignment */}
        <button 
          className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-purple-600 transition-colors' 
          type='button'
          onClick={() => setIsTypePassword(!isTypePassword)}
        >
          {/* 3. Logical Check: Sirf aik waqt mein aik icon dikhayein */}
          {isTypePassword ? (
            <FaRegEyeSlash size={20} />
          ) : (
            <FaRegEye size={20} />
          )}
        </button>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>
            <div>
                <ButtonLoading loading={loading} type="submit" text="Login" className="w-full cursor-pointer"  />
            </div>

        
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginPage