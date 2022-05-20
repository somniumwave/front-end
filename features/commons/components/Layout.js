import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
      <Nav />
      <div className="flex h-full">
        <div className="flex h-full w-full">
          <main className="h-full w-full">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );

export default Layout;
