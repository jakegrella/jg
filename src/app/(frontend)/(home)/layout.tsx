import Footer from '../Footer';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 flex flex-col justify-between min-h-svh">
      {children}
      <Footer />
    </div>
  );
}
