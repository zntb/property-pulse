import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse",
  description: "Find The Perfect Rental Property",
  keywords: "rental, property, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
