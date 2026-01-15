// // import { Button } from "@/components/ui/button"
// // import React from 'react'

// // const Page = () => {
// //   return (
// //     <div className="p-10">
// //       <Button>shadcn</Button>
// //     </div>
// //   )
// // }

// // export default Page;




// import { Button } from "@/components/ui/button"

// export default function Page() {
//   return (
//     <div className="p-10 flex flex-col gap-6">
//       <h1 className="text-3xl font-bold">Ecommerce App Setup Done!</h1>
      
//       {/* Ye Shadcn ka asli Button hai */}
// <Button>
//   Shadcn Button Fix Ho Gaya!
// </Button>

//       {/* Ye check karne ke liye ke Tailwind classes kaam kar rahi hain */}
//       <div className="p-4 bg-green-100 text-green-800 rounded-md border border-green-200">
//         Tailwind v4 is active and scanning your components.
//       </div>
//     </div>
//   )
// }



import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-6 items-start">
      <h1 className="text-3xl font-bold">Automatic Styling Test</h1>
      
      {/* 1. Default Variant (Ye automatic Purple hona chahiye) */}
      <Button>Primary Button (Automatic Purple)</Button>

      {/* 2. Outline Variant (Ye automatic Border dikhayega) */}
      <Button variant="outline">Outline Variant</Button>

      {/* 3. Destructive Variant (Ye automatic Red hona chahiye) */}
      <Button variant="destructive">Destructive Variant</Button>

      <p className="text-muted-foreground italic">
        Agar ye sab sahi dikh rahe hain, toh aapki styling "Auto" ho chuki hai!
      </p>
    </div>
  )
}