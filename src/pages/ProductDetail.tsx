import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, Star, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { useApp } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';

// Mock product data - will be replaced with Supabase data
const mockProduct = {
  id: '1',
  name: 'Royal Essence',
  price: 89.99,
  description: 'A luxurious blend of rose, jasmine, and vanilla with hints of sandalwood. This exquisite fragrance captures the essence of royalty with its sophisticated composition. Perfect for special occasions, it opens with fresh floral notes that gradually reveal deeper, more complex undertones.',
  category: 'Women',
  image: perfume1, // Required by Product interface
  images: [perfume1, perfume2, perfume3, perfume4],
  sizes: ['30ml', '50ml', '100ml'],
  inStock: true,
  rating: 4.8,
  reviewCount: 156,
};

const mockReviews = [
  {
    id: '1',
    username: 'Sarah M.',
    rating: 5,
    comment: 'Absolutely love this fragrance! It lasts all day and gets so many compliments.',
    date: '2024-03-15',
  },
  {
    id: '2',
    username: 'Emma L.',
    rating: 4,
    comment: 'Beautiful scent, very elegant. The packaging is gorgeous too.',
    date: '2024-03-10',
  },
  {
    id: '3',
    username: 'Jessica R.',
    rating: 5,
    comment: 'This has become my signature scent. Worth every penny!',
    date: '2024-03-05',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const { state, dispatch } = useApp();
  const { toast } = useToast();

  const isFavorite = state.favorites.includes(mockProduct.id);

  const handleToggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: mockProduct.id });
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: isFavorite 
        ? `${mockProduct.name} removed from your favorites` 
        : `${mockProduct.name} added to your favorites`,
    });
  };

  const handleAddToCart = () => {
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { product: mockProduct, size: selectedSize } 
    });
    toast({
      title: 'Added to cart',
      description: `${mockProduct.name} (${selectedSize}) added to your cart`,
    });
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: mockProduct.name,
        text: mockProduct.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gradient-card">
              <img 
                src={mockProduct.images[selectedImage]} 
                alt={mockProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${mockProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {mockProduct.category}
              </Badge>
              <h1 className="text-4xl font-bold text-primary mb-4">
                {mockProduct.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(mockProduct.rating) 
                          ? 'fill-accent text-accent' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {mockProduct.rating} ({mockProduct.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary mb-6">
                ${mockProduct.price}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {mockProduct.description}
              </p>
            </div>
            
            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex space-x-3">
                {mockProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button variant="hero" size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant={isFavorite ? "default" : "outline"} 
                  size="lg"
                  onClick={handleToggleFavorite}
                  className={isFavorite ? "text-red-500" : ""}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline" size="lg" onClick={shareProduct}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              <Button variant="luxury" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8">Customer Reviews</h2>
          
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{review.username}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < review.rating 
                                ? 'fill-accent text-accent' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;