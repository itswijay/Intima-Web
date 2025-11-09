import ToastButton from '@/components/ToastButton'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-amber-500 text-xl font-bold">Hello World!</h1>
      <ToastButton />
    </div>
  )
}
