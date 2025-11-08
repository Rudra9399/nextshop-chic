import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '@/types/product';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${category.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-shadow"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {category.productCount} products
            </p>
            <div className="flex items-center text-primary font-medium">
              <span className="text-sm">Shop Now</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
