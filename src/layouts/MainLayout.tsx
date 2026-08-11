import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader, AppFooter } from '@/components'

export const MainLayout = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#f5a623] selection:text-white">
      <AppHeader />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}



