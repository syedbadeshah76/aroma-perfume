import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp, type Product } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { state, dispatch } = useApp();
  const { toast } = useToast();

  const isFavorite = state.favorites.includes(product.id);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product.id });
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: isFavorite 
        ? `${product.name} removed from your favorites` 
        : `${product.name} added to your favorites`,
    });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { product, size: '50ml' } 
    });
    toast({
      title: 'Added to cart',
      description: `${product.name} (50ml) added to your cart`,
    });
  };
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-4 right-4 space-y-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`bg-background/80 hover:bg-background transition-colors ${
                  isFavorite ? 'text-red-500' : ''
                }`}
                onClick={handleToggleFavorite}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <Button variant="luxury" className="w-full" onClick={handleAddToCart}>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-semibold text-primary mb-2 hover:text-primary-glow transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            
            <Link to={`/product/${product.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;