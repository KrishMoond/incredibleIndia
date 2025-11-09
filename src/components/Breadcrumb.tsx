import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-[#F7F3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-[#666666] hover:text-[#D4A017] flex items-center"
              aria-label="Home"
            >
              <Home size={16} />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="text-[#999999] mx-2" />
              {item.path ? (
                <Link 
                  to={item.path} 
                  className="text-[#666666] hover:text-[#D4A017]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#333333] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;