'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type FormFields = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
    toast.success('Login successful!')
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input
                {...register('email', {
                  required: 'Email is required',
                })}
                type="text"
                placeholder="email"
                required
              />
              <Input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: "Passord must have at least 8 characters",
                  }
                })}
                type="password"
                placeholder="password"
                required
              />
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              className="w-full py-5"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </Button>
            <Button className="w-full py-5" variant="outline">
              Signup
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Login
