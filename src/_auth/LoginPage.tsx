import { LoginForm, HeadingForm, FooterForm } from "@/components"

const LoginPage = () => {
  return (
    <section className="py-4">
      <div className="container">
        <HeadingForm title="Welcome Back!" subTitle="Login to your account" />
        <LoginForm />
        <FooterForm title="Don't have an account?" link="/signup" linkTitle="Register" />
      </div>
    </section>
  )
}

export default LoginPage