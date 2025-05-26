
import dynamic from 'next/dynamic'

const TeacherMainPage = dynamic(() => import('./TeacherMainPage'), {
  ssr: false,
})

export default function Page() {
  return <TeacherMainPage />
}