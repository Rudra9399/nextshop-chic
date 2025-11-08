import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Star } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

export const FilterSidebar = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
  onReset,
}: FilterSidebarProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Sort By</h3>
        <RadioGroup value={sortBy} onValueChange={onSortChange}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="featured" id="featured" />
            <Label htmlFor="featured" className="cursor-pointer">Featured</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="price-asc" id="price-asc" />
            <Label htmlFor="price-asc" className="cursor-pointer">Price: Low to High</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="price-desc" id="price-desc" />
            <Label htmlFor="price-desc" className="cursor-pointer">Price: High to Low</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="rating" id="rating" />
            <Label htmlFor="rating" className="cursor-pointer">Top Rated</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="newest" id="newest" />
            <Label htmlFor="newest" className="cursor-pointer">Newest</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label htmlFor={category} className="cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={(value) => onPriceChange(value as [number, number])}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors w-full"
            >
              <div className="flex">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <span>& Up</span>
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <Button onClick={onReset} variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  );
};
