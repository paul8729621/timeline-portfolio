import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  time: string;
  year: string;
  improvements?: string;
  pros?: string[];
  cons?: string[];
  reflection?: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  const isEven = index % 2 === 0;

  const ImageCard = (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <ImageWithFallback
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );

  return (
    <div className="relative flex items-center gap-8 group">
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10" />
      </div>

      {/* Content */}
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}>
        {/* Left side - Image */}
        <div className="md:order-1">
          <div className="aspect-[4/3]">{ImageCard}</div>
        </div>

        {/* Right side - Description */}
        <div className="md:order-2">
          <div className="space-y-4">
            <Header item={item} />
            <Body item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ item }: { item: PortfolioItem }) {
  return (
    <>
      <div>
        <span className="text-blue-600">{item.year}</span>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-sm text-gray-500">{item.time}</span>
      </div>
      <div className="mb-2">
        <span className="inline-block px-3 py-1 text-xs uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full">
          {item.category}
        </span>
      </div>
      <h3 className="mb-3">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </>
  );
}

function Body({ item }: { item: PortfolioItem }) {
  return (
    <div className="pt-4 border-t border-gray-100 space-y-4">
      {item.pros && item.pros.length > 0 && (
        <Section title="✓ 확인된 문제" color="green" items={item.pros} />
      )}
      {item.cons && item.cons.length > 0 && (
        <Section title="⚠ 생각한 해결 방안" color="orange" items={item.cons} />
      )}
      {item.reflection && (
        <div>
          <h4 className="text-sm text-blue-700 mb-2">💭 내가 한 행동</h4>
          <p className="text-sm text-gray-600 italic">{item.reflection}</p>
        </div>
      )}
    </div>
  );
}

function Section({ title, color, items }: { title: string; color: "green" | "orange"; items: string[] }) {
  const colorMap = {
    green: "text-green-700 before:text-green-600",
    orange: "text-orange-700 before:text-orange-600",
  };

  return (
    <div>
      <h4 className={`text-sm mb-2 ${colorMap[color]}`}>{title}</h4>
      <ul className="space-y-1">
        {items.map((text, idx) => (
          <li
            key={idx}
            className={`text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 ${colorMap[color]}`}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}