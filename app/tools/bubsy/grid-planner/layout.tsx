import Header from "@/app/Header";

const PrivacyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header pageTitle="Bubsy - Grid Planner" />
      {children}
    </div>
  );
};

export default PrivacyLayout;
