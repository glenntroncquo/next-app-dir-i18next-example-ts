import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DienstenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="editorial-diensten min-h-screen bg-atelier-cream">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
