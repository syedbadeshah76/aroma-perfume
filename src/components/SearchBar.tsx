import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ className = '', placeholder = 'Search perfumes...' }: SearchBarProps) => {
  const { state, dispatch } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (value: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: value });
  };

  const clearSearch = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
    setIsExpanded(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Desktop Search */}
      <div className="hidden md:flex items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={placeholder}
            value={state.searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-10 py-2 w-64 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {state.searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden">
        {!isExpanded ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
        ) : (
          <div className="fixed inset-x-0 top-16 bg-background border-b border-border p-4 z-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={placeholder}
                value={state.searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-10 py-3 w-full rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;