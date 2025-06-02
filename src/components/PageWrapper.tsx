'use client'

import { AuthProvider } from '@/states/useAuthContext'
import { NotificationProvider } from '@/states/useNotificationContext'
import { ShopProvider } from '@/states/useShoppingContext'
import i18n from '@/utils/i18n'
import dynamic from 'next/dynamic'
import { I18nextProvider } from 'react-i18next'

const LayoutProvider = dynamic(() => import('@/states/useLayoutContext').then((mod) => mod.LayoutProvider), {
  ssr: false,
})

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationProvider>
      <I18nextProvider i18n={i18n}>
        <LayoutProvider>
          <AuthProvider>
            <ShopProvider>{children}</ShopProvider>
          </AuthProvider>
        </LayoutProvider>
      </I18nextProvider>
    </NotificationProvider>
  )
}

export default PageWrapper
