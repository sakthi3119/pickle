import React, { useState } from 'react';
import Button from '../components/atomic/Button';
import Card from '../components/atomic/Card';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pickleUsed: string;
  ingredients: string[];
  instructions: string[];
}

const Recipes: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const fallback = '/images/products/classicdillpickle.jpg';
  const recipes: Recipe[] = [
    {
      id: 1,
      title: 'Pickle-Brined Fried Chicken',
      description: 'Crispy fried chicken with a tangy pickle brine that keeps it juicy and flavorful.',
      image: '/images/products/garlicdill.jpg',
      cookTime: '45 minutes',
      difficulty: 'Medium',
      pickleUsed: 'Classic Dill Pickles',
      ingredients: [
        '4 chicken breasts',
        '2 cups pickle brine',
        '2 cups all-purpose flour',
        '1 tsp paprika',
        '1 tsp garlic powder',
        'Salt and pepper to taste',
        'Oil for frying',
      ],
      instructions: [
        'Place chicken breasts in pickle brine and refrigerate for 4-6 hours.',
        'Remove chicken from brine and pat dry with paper towels.',
        'Mix flour, paprika, garlic powder, salt, and pepper in a shallow dish.',
        'Dredge chicken in flour mixture, shaking off excess.',
        'Heat oil to 350°F and fry chicken until golden brown and cooked through.',
        'Let rest for 5 minutes before serving.',
      ],
    },
    {
      id: 2,
      title: 'Pickle Potato Salad',
      description: 'A refreshing potato salad with chopped pickles for extra crunch and flavor.',
      image: '/images/products/breadandbutter.jpg',
      cookTime: '30 minutes',
      difficulty: 'Easy',
      pickleUsed: 'Sweet Bread & Butter Pickles',
      ingredients: [
        '2 lbs potatoes, cubed',
        '1/2 cup mayonnaise',
        '2 tbsp mustard',
        '1/4 cup chopped pickles',
        '2 tbsp pickle juice',
        '2 hard-boiled eggs, chopped',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Boil potatoes until tender, about 15 minutes. Drain and let cool.',
        'In a large bowl, mix mayonnaise, mustard, and pickle juice.',
        'Add cooled potatoes, chopped pickles, and eggs to the bowl.',
        'Gently toss to combine, being careful not to break up the potatoes.',
        'Season with salt and pepper to taste.',
        'Refrigerate for at least 1 hour before serving.',
      ],
    },
    {
      id: 3,
      title: 'Pickle Bloody Mary',
      description: 'A classic Bloody Mary with pickle juice for an extra tangy kick.',
      image: '/images/products/lemon-pickle-OyHya49s.jpg',
      cookTime: '5 minutes',
      difficulty: 'Easy',
      pickleUsed: 'Spicy Jalapeño Pickles',
      ingredients: [
        '2 oz vodka',
        '4 oz tomato juice',
        '1 oz pickle juice',
        '1/2 tsp Worcestershire sauce',
        '1/2 tsp hot sauce',
        '1/4 tsp celery salt',
        'Pickle spear for garnish',
        'Lemon wedge for garnish',
      ],
      instructions: [
        'Fill a tall glass with ice.',
        'Add vodka, tomato juice, and pickle juice to the glass.',
        'Stir in Worcestershire sauce, hot sauce, and celery salt.',
        'Garnish with a pickle spear and lemon wedge.',
        'Serve immediately and enjoy!',
      ],
    },
    {
      id: 4,
      title: 'Pickle Pizza',
      description: 'A unique pizza topped with pickles, creating a perfect balance of flavors.',
      image: '/images/products/chili-pickle-DCeVNVBi.jpg',
      cookTime: '25 minutes',
      difficulty: 'Medium',
      pickleUsed: 'Garlic Dill Spears',
      ingredients: [
        '1 pizza dough',
        '1/2 cup pizza sauce',
        '1 cup shredded mozzarella',
        '1/2 cup sliced pickles',
        '1/4 cup red onion, sliced',
        '2 tbsp olive oil',
        'Fresh dill for garnish',
      ],
      instructions: [
        'Preheat oven to 450°F with a pizza stone if available.',
        'Roll out pizza dough and place on a baking sheet.',
        'Spread pizza sauce evenly over the dough.',
        'Sprinkle with shredded mozzarella.',
        'Arrange pickle slices and red onion on top.',
        'Drizzle with olive oil and bake for 15-20 minutes.',
        'Garnish with fresh dill before serving.',
      ],
    },
    {
      id: 5,
      title: 'Pickle Dip',
      description: 'A creamy dip perfect for parties, featuring chopped pickles and herbs.',
      image: '/images/products/Quick-Pickled-Onions-scaled.jpg',
      cookTime: '10 minutes',
      difficulty: 'Easy',
      pickleUsed: 'Classic Dill Pickles',
      ingredients: [
        '8 oz cream cheese, softened',
        '1/2 cup sour cream',
        '1/2 cup chopped pickles',
        '2 tbsp pickle juice',
        '1 tbsp fresh dill, chopped',
        '1 tsp garlic powder',
        'Salt and pepper to taste',
      ],
      instructions: [
        'In a medium bowl, beat cream cheese until smooth.',
        'Stir in sour cream, chopped pickles, and pickle juice.',
        'Add fresh dill, garlic powder, salt, and pepper.',
        'Mix well and refrigerate for at least 30 minutes.',
        'Serve with crackers, chips, or vegetables.',
      ],
    },
    {
      id: 6,
      title: 'Pickle Soup',
      description: 'A hearty soup with pickles that adds a unique tangy flavor.',
      image: '/images/products/mango-pickle-CifRucgB.jpg',
      cookTime: '40 minutes',
      difficulty: 'Medium',
      pickleUsed: 'Mixed Pickle Jar',
      ingredients: [
        '2 tbsp butter',
        '1 onion, diced',
        '2 carrots, diced',
        '2 celery stalks, diced',
        '4 cups chicken broth',
        '1 cup chopped pickles',
        '1/2 cup pickle juice',
        '1 cup heavy cream',
        'Fresh dill for garnish',
      ],
      instructions: [
        'Melt butter in a large pot over medium heat.',
        'Add onion, carrots, and celery. Cook until softened.',
        'Pour in chicken broth and bring to a boil.',
        'Add chopped pickles and pickle juice.',
        'Simmer for 20 minutes until vegetables are tender.',
        'Stir in heavy cream and heat through.',
        'Garnish with fresh dill before serving.',
      ],
    },
  ];

  const difficultyColors = {
    Easy: 'text-green-600 bg-green-100',
    Medium: 'text-yellow-600 bg-yellow-100',
    Hard: 'text-red-600 bg-red-100',
  };

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-neutral-900 mb-4">
            Pickle Recipes
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover delicious recipes that showcase our pickles in creative and flavorful ways
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback; }}
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[recipe.difficulty]}`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{recipe.title}</h3>
                <p className="text-neutral-600 mb-4">{recipe.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-500">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {recipe.cookTime}
                  </span>
                  <span className="text-sm text-neutral-500">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {recipe.pickleUsed}
                  </span>
                </div>
                <Button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full"
                  variant="outline"
                >
                  View Recipe
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Recipe Modal */}
        {selectedRecipe && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-neutral-900">{selectedRecipe.title}</h2>
                  <button
                    onClick={() => setSelectedRecipe(null)}
                    className="text-neutral-400 hover:text-neutral-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback; }}
                    />
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[selectedRecipe.difficulty]}`}>
                        {selectedRecipe.difficulty}
                      </span>
                      <span className="text-neutral-500">
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedRecipe.cookTime}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-6">{selectedRecipe.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg text-neutral-900 mb-2">Pickle Used</h4>
                      <p className="text-neutral-600">{selectedRecipe.pickleUsed}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg text-neutral-900 mb-3">Ingredients</h4>
                      <ul className="space-y-2">
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-pickle-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-neutral-700">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg text-neutral-900 mb-3">Instructions</h4>
                      <ol className="space-y-3">
                        {selectedRecipe.instructions.map((instruction, index) => (
                          <li key={index} className="flex">
                            <span className="bg-pickle-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-neutral-700">{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <Button
                    onClick={() => setSelectedRecipe(null)}
                    className="w-full"
                    variant="outline"
                  >
                    Close Recipe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
