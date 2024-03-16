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
    <html lang="en" suppressHydrationWarning>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
