import type { Metadata } from "next";
import Navbar from "../../components/Navbar";


export const metadata: Metadata = {
	title: 'El Club',
  };

export default function ElClubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Navbar />
        <main> 
            {children}
        </main>
    </div>
  );
}
