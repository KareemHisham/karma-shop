import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { registerSchemaValidation } from "@/lib/validation"
import { useSignupMutation } from "@/lib/react-query/AuthQuery"
import { Loader } from "@/components"
import { toast } from "sonner"
import { useCreateUserMutation } from "@/lib/react-query/UserQuery";
const RegisterForm = () => {
  const navigate = useNavigate();

  const { mutate: signup, error, isPending } = useSignupMutation();
  const { mutate: createUser} = useCreateUserMutation();
  // 1. Define your form.
  const form = useForm<z.infer<typeof registerSchemaValidation>>({
    resolver: zodResolver(registerSchemaValidation),
    defaultValues: {
      fullname: "",
      email: "",
      password: { password: "", confirm: "" },
      phone: Number(),
      address: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerSchemaValidation>) {
    if (error) {
      toast.error(error.message)
      return false;
    }

    signup(
      { email: values.email, password: values.password.password },
      {
        onSuccess: async (data) => {
          if (data?.user?.id) {
            createUser({
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              address: values.address,
              accountID: data.user.id
            });
          }
          toast.success("Account created successfully");
          form.reset();
          navigate("/login");
        },
        onError: (error: Error) => {
          const errorMessage = error.message || "An unknown error occurred";
          if (errorMessage.includes("User already registered")) {
            toast.error("This email is already registered. Please login instead.");
          } else {
            toast.error(errorMessage);
          }
        }
      }
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label_control">Full Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your full name" {...field} className="form_control" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label_control">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your Email" {...field} className="form_control" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label_control">Address</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your Address" {...field} className="form_control" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label_control">Phone Number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your Phone number" {...field} className="form_control" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password.password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label_control">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your Password" {...field} className="form_control" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password.confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label_control">Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirm your Password" {...field} className="form_control" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>

        <Button type="submit" className={`w-full bg-transparent text-white border border-primary hover:bg-primary hover:text-dark transition-all duration-300 flex justify-center items-center ${isPending ? "cursor-not-allowed" : ""}`} disabled={isPending}>
          {isPending && <Loader />} Sign up
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm