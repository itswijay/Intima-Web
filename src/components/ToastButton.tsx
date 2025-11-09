'use client'
import toast from 'react-hot-toast'
import { Button } from './ui/button'
const ToastButton = () => {
  return (
    <div>
      <Button
        className="bg-green-500"
        onClick={() => toast.success('Hello World')}
      >
        Toast
      </Button>
    </div>
  )
}

export default ToastButton
