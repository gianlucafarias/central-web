import { Calendar, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from "next/image";
import NewsCard from "./NewsCard";
import { getAllNews, NewsItem } from '@/lib/news';
import Link from 'next/link';

async function NewsSectionContent() {
  const newsItems = await getAllNews();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.slice(0, 3).map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
      <div className="text-center mt-12 md:mt-16">
        <Link href='/noticias' legacyBehavior={false} passHref>
          <Button 
            variant="default" 
            className="bg-club-primary text-club-secondary font-bold py-3 px-6 rounded-full hover:bg-yellow-500 font-mono"
          >
            Ver Todas las Noticias
          </Button>
        </Link>
      </div>
    </>
  );
}

const NewsSection = () => {
  return (
    <section id="noticias" className="section-padding bg-club-light -mt-15 pt-30">
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
        <NewsSectionContent />
      </div>
    </section>
  );
};

export default NewsSection;