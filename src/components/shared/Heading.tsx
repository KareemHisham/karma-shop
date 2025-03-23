const Heading = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-[url(/public/assets/collection/banner-bg.jpg)] h-[50vh] bg-cover bg-center overflow-y-hidden flex items-center justify-center">
            {children}
        </section>
    )
}

export default Heading