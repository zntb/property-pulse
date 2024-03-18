import AuthProvider from '../components/AuthProvider.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property.',
  keywords: 'rental, find properties, find rentals, find the perfect rental',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
