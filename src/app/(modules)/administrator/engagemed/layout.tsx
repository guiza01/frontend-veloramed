import Sidebar from "@/components/common/Sidebar"
 
export default function LoggedPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    
      
      <main className="overflow-x-hidden">
        
            <Sidebar/>
        <div className="w-full h-full md:pl-64 bg-[#faf9f9] ">{children}</div>
        
      </main>
    
  )
}