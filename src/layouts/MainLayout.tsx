import { Outlet } from 'react-router-dom'
import { AppHeader } from '@/components/AppHeader'
import { AppFooter } from '@/components/AppFooter'

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      <AppHeader />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}

