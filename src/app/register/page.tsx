'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type FormFields = {
  email: string
  password: string
}

const Register = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
      console.log(data)
      toast.success('Account creation successful!')
    }

    // Show validation errors as toasts
    const onError = () => {
      if (errors.email?.message) toast.error(errors.email.message)
      if (errors.password?.message) toast.error(errors.password.message)
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
                    message: 'Passord must have at least 8 characters',
                  },
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
              onClick={handleSubmit(onSubmit, onError)}
            >
              Sign Up
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
