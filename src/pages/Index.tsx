import { Home, Film, Tv, Users, Book, MessageCircle } from "lucide-react";
import anneImage1 from "@/assets/anne-image-1.png";
import anneImage2 from "@/assets/anne-image-2.png";
import anneBook from "@/assets/anne-book.png";
import anneImage4 from "@/assets/anne-image-4.png";
import logoIcon from "@/assets/logo-icon.png";
import netflixTrailer from "@/assets/netflix-trailer.png";
import anneImage5 from "@/assets/anne-image-5.png";
import anneImage6 from "@/assets/anne-image-6.png";
import anneImage7 from "@/assets/anne-image-7.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <img src={logoIcon} alt="Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-primary-foreground text-2xl md:text-3xl font-serif tracking-wide">
            VISÕES DE ANNE SHIRLEY
          </h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary/90 py-3 px-6 border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
            <li>
              <a href="#" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm md:text-base">
                <Home className="w-5 h-5" />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm md:text-base">
                <Film className="w-5 h-5" />
                <span>Episódios</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm md:text-base">
                <div className="border border-primary-foreground rounded px-2 py-0.5 text-xs">10</div>
                <span>Temporadas</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm md:text-base">
                <Users className="w-5 h-5" />
                <span>Personagens</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm md:text-base">
                <Book className="w-5 h-5" />
                <span>Livros & Autora</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm md:text-base">
                <MessageCircle className="w-5 h-5" />
                <span>Comunidade</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Image Gallery Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <img src={anneImage1} alt="Anne Shirley" className="w-full h-64 object-cover rounded shadow-lg" />
          <img src={anneImage2} alt="Anne e Diana" className="w-full h-64 object-cover rounded shadow-lg" />
          <img src={anneBook} alt="Livro Anne de Green Gables" className="w-full h-64 object-cover rounded shadow-lg" />
          <img src={anneImage4} alt="Anne" className="w-full h-64 object-cover rounded shadow-lg" />
        </div>

        {/* Text Content */}
        <div className="mb-8">
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4 indent-8">
            Anne With An E é uma aclamada série de drama baseada na obra clássica Anne de Green Gables, de L.M. Montgomery, mas com uma abordagem mais moderna e profunda.
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4 indent-8">
            Ambientada no final do século XIX, na pitoresca e pacata ilha do Príncipe Eduardo, a história acompanha Anne Shirley Cuthbert, uma órfã de 13 anos que é enviada, por um erro de comunicação, Anne é enviada para viver em Green Gables com os irmãos idosos e solteiros, Marilla e Matthew Cuthbert, que esperavam um menino para ajudar na fazenda.
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4 indent-8">
            Com seus cabelos ruivos, imaginação febril e uma torrente incessante de "grandes palavras", Anne é imediatamente vista com desconfiança pela prática e austera Marilla. No entanto, o gentil e tímido Matthew rapidamente se encanta pelo espírito livre da menina.
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4 indent-8">
            A série é uma jornada emocionante de amadurecimento que vai além do romance rural. Ela explora como Anne, apesar de ser frequentemente ridicularizada por sua aparência e seu passado, usa sua imaginação e resiliência para encontrar seu lugar no mundo. Enquanto Anne luta para ser aceita na escola e na conservadora comunidade de Avonlea, ela transforma a vida de todos ao seu redor, incluindo a de sua melhor amiga, Diana Barry, e de seu rival intelectual, Gilbert Blythe.
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4 indent-8">
            Anne With An E aborda temas atemporais e urgentes, como a busca por identidade, o poder da amizade, o bullying, o feminismo, o preconceito e a importância de pertencer a uma "família de alma". A série é uma celebração da individualidade e prova que, com coragem e imaginação, é possível superar qualquer adversidade e colorir a vida com esperança.
          </p>
        </div>

        {/* Trailer Section */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground text-center mb-6">Trailler</h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <img src={netflixTrailer} alt="Netflix Trailer" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded">
              <span className="text-white font-bold text-2xl">NETFLIX</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded">
              <span className="text-white text-sm">1:49</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={anneImage5} alt="Cena da série" className="w-full h-64 object-cover rounded shadow-lg" />
          <img src={anneImage6} alt="Cena da série" className="w-full h-64 object-cover rounded shadow-lg" />
          <img src={anneImage7} alt="Cena da série" className="w-full h-64 object-cover rounded shadow-lg" />
        </div>
      </main>
    </div>
  );
};

export default Index;
