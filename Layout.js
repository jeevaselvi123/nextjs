import Navbar from './Navbar';
import Header from './Header';
import layoutStyle from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <div className={layoutStyle.container}>
        <main className={layoutStyle.main} > 
        <Header />
        {children}
        </main>
    </div>
    </>
  );
}

export default Layout;