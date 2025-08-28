import { useMemo } from 'react';
import ProductCard from './ProductCard';
import { useApp } from '@/contexts/AppContext';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';

// Mock data - will be replaced with Supabase data
const mockProducts = [
  {
    id: '1',
    name: 'Royal Essence',
    description: 'A luxurious blend of rose, jasmine, and vanilla with hints of sandalwood. Perfect for special occasions.',
    price: 89.99,
    image: perfume1,
    category: 'Women',
  },
  {
    id: '2',
    name: 'Crimson Romance',
    description: 'Passionate and intense fragrance with notes of cherry blossom, musk, and amber.',
    price: 124.99,
    image: perfume2,
    category: 'Women',
  },
  {
    id: '3',
    name: 'Midnight Shadow',
    description: 'Bold and sophisticated scent featuring bergamot, cedar, and black pepper.',
    price: 98.99,
    image: perfume3,
    category: 'Men',
  },
  {
    id: '4',
    name: 'Golden Dreams',
    description: 'Elegant and timeless fragrance with notes of white flowers, citrus, and golden amber.',
    price: 159.99,
    image: perfume4,
    category: 'Unisex',
  },
  {
    id: '5',
    name: 'Ocean Breeze',
    description: 'Fresh and invigorating scent with marine notes, bergamot, and white musk.',
    price: 79.99,
    image: perfume1,
    category: 'Unisex',
  },
  {
    id: '6',
    name: 'Velvet Rose',
    description: 'Romantic fragrance featuring Bulgarian rose, peony, and soft woods.',
    price: 134.99,
    image: perfume2,
    category: 'Women',
  },
  {
    id: '7',
    name: 'Dark Knight',
    description: 'Mysterious and powerful with notes of leather, tobacco, and dark chocolate.',
    price: 149.99,
    image: perfume3,
    category: 'Men',
  },
  {
    id: '8',
    name: 'Sunset Paradise',
    description: 'Tropical and warm fragrance with coconut, vanilla, and exotic fruits.',
    price: 94.99,
    image: perfume4,
    category: 'Women',
  },
];

const ProductsSection = () => {
  const { state } = useApp();

  const filteredProducts = useMemo(() => {
    if (!state.searchQuery) return mockProducts;
    
    return mockProducts.filter(product =>
      product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }, [state.searchQuery]);
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Fragrances
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium perfumes, each crafted with the finest ingredients 
            to create unforgettable scent experiences.
          </p>
        </div>
        
        {/* Search Results Info */}
        {state.searchQuery && (
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {filteredProducts.length > 0 
                ? `Found ${filteredProducts.length} result${filteredProducts.length === 1 ? '' : 's'} for "${state.searchQuery}"`
                : `No results found for "${state.searchQuery}"`
              }
            </p>
          </div>
        )}
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-scale-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : state.searchQuery ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No perfumes found</p>
            <p className="text-muted-foreground">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockProducts.map((product) => (
              <div key={product.id} className="animate-scale-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-hero text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;