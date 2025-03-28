import { FooterForm, HeadingForm, RegisterForm } from "@/components"

const RegisterPage = () => {
  return (
    <section className="py-4">
      <div className="container">
        <HeadingForm title="Create an account" subTitle="Create an account to gain best experience" />
        <RegisterForm />
        <FooterForm title="Already have an account?" link="/login" linkTitle="Login" />
      </div>
    </section >
  )
}

export default RegisterPage