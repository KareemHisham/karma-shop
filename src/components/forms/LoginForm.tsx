import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loginSchemaValidation } from "@/lib/validation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const LoginForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchemaValidation>>({
    resolver: zodResolver(loginSchemaValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchemaValidation>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[60%] mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label_control">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} className="form_control" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label_control">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} className="form_control" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-transparent text-white border border-primary hover:bg-primary hover:text-dark transition-all duration-300 flex justify-center items-center">Login</Button>
      </form>
    </Form>
  )
}

export default LoginForm