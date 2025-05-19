import Header from '../Header';

const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ContactLayout;
