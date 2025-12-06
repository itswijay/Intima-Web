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
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

type FormFields = z.infer<typeof schema>

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const email = watch('email')
  const password = watch('password')

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // API Check
      const emailExists = false
      if (emailExists) throw new Error('Email already exists')

      console.log(data)
      toast.success('Account creation successful!')
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Registration failed'

      setError('root', {
        message: errorMessage,
      })
      toast.error(errorMessage)
    }
  }

  // Show validation errors as toasts
  const onError = () => {
    if (errors.root?.message) toast.error(errors.root.message)
    else if (errors.email?.message) toast.error(errors.email.message)
    else if (errors.password?.message)
      toast.error(errors.password.message)
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input {...register('email')} type="text" placeholder="email" />
              <Input
                {...register('password')}
                type="password"
                placeholder="password"
              />
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              className="w-full py-5"
              type="submit"
              onClick={handleSubmit(onSubmit, onError)}
              disabled={isSubmitting || !email || !password}
            >
              {isSubmitting ? 'Loading...' : 'Sign Up'}
            </Button>
            <Button className="w-full py-5" variant="outline">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Register
