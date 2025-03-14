import SidebarEngagemed from "@/components/common/SidebarEngagemed"

export default function LoggedPagesLayout({ children }: { children: React.ReactNode }) {
  return (

    <main className="overflow-x-hidden">

      <SidebarEngagemed />
      <div className="w-full h-full bg-[#faf9f9] ">{children}</div>

    </main>

  )
}