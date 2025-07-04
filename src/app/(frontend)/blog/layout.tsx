import Footer from '../Footer';
import Header from '../Header';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 flex flex-col justify-between min-h-svh">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
