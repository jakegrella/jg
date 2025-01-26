import Header from "../Header";

const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header pageTitle="Contact" />
      {children}
    </div>
  );
};

export default ContactLayout;
