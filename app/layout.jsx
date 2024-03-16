import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property.',
  keywords: 'rental, find properties, find rentals, find the perfect rental',
  viewport: 'width=device-width, initial-scale=1.0',
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
