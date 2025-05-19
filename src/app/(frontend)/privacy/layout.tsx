import Header from '../Header';

const PrivacyLayout = ({
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

export default PrivacyLayout;
