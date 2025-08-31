import Link from 'next/link'
import { ReactNode } from 'react'
import { fallbackLng } from '../../../i18n/settings'

export const LinkBase = ({ lng = fallbackLng, href = '', children, className }: { lng?: string; href?: string; children: ReactNode; className?: string }) => {
  return <Link href={`/${lng}/${href}`} className={className}>{children}</Link>
}
