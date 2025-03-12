import SidebarMedassist from "@/components/common/SidebarMedassist"

export default function LoggedPagesLayout({ children }: { children: React.ReactNode }) {
  return (

    <main className="overflow-x-hidden">

      <SidebarMedassist />
      <div className="w-full h-full bg-[#faf9f9] ">{children}</div>

    </main>

  )
}