'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Content = dynamic(() => import('./TeacherMainPageInner'), { ssr: false })

export default function TeacherMainPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  )
}