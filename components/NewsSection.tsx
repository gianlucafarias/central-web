import { Calendar, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: Date;
  author: string;
  imageUrl: string;
  category: string;
}

// Sample news data con Date
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Victoria decisiva en el derbi regional",
    excerpt: "El equipo consiguió una importante victoria de 3-1 contra nuestro rival histórico, situándose en lo alto de la tabla.",
    date: new Date(2025, 3, 20),
    author: "Carlos Suárez",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fútbol"
  },
  {
    id: 2,
    title: "Nueva incorporación al equipo de baloncesto",
    excerpt: "El talento argentino Martín López se une a nuestro equipo de baloncesto tras destacar en la liga nacional.",
    date: new Date(2025, 3, 15),
    author: "María Fernández",
    imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Baloncesto"
  },
  {
    id: 3,
    title: "Renovaciones de instalaciones deportivas",
    excerpt: "El club anuncia importantes mejoras en las instalaciones que beneficiarán a todos los deportistas y socios.",
    date: new Date(2025, 3, 10),
    author: "Roberto Gómez",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Infraestructura"
  }
];

const NewsSection = () => {
  return (
    <section id="noticias" className="section-padding bg-club-light">
      <div className="container mx-auto px-10">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-club-dark mb-3 font-mono">Últimas Noticias</h2>
            <p className="text-gray-600 mx-auto md:mx-0">
              Mantente al día con las novedades y acontecimientos más recientes de nuestro club.
            </p>
          </div>
          {/* Ad banner container */}
          <div className="w-full md:w-auto md:max-w-lg flex justify-center md:justify-end">
            <Image 
              src="/prodas.gif" 
              alt="Publicidad" 
              width={600} 
              height={100} 
              unoptimized
              className="w-full h-auto object-contain max-h-[100px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden card-hover bg-white flex flex-col">
              <div className="h-44 overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <CardHeader className="pb-1 pt-3">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-club-primary text-club-secondary rounded-full uppercase tracking-wider font-mono hover:bg-yellow-500 hover-transition">
                      {news.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-sans font-bold text-club-dark leading-snug">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-2 pt-1">
                  <CardDescription className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {news.excerpt}
                  </CardDescription>
                  <div className="flex text-gray-500 text-xs gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{format(news.date, 'd LLL, yyyy', { locale: es })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{news.author}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-3">
                  <Button variant="link" className="text-club-dark font-semibold p-0 h-auto hover:text-club-primary">
                    Leer más
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button 
            variant="default" 
            className="bg-club-primary text-club-secondary font-bold py-3 px-6 rounded-full hover:bg-yellow-500 font-mono"
          >
            Ver Todas las Noticias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;