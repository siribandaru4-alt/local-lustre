import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Handcrafted with
              <span className="text-primary"> Love & Care</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover unique, artisan-made products that bring beauty and quality to your everyday life.
            </p>
            <Link to="/products">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to Artisan Goods
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of handmade craftsmanship. Every product in our collection 
              is carefully selected from talented artisans who pour their heart and soul into 
              creating beautiful, functional pieces. From home décor to everyday essentials, 
              we offer products that tell a story and stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Handcrafted Quality</h3>
              <p className="text-muted-foreground">
                Each product is made with attention to detail and traditional craftsmanship
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Made with Love</h3>
              <p className="text-muted-foreground">
                Supporting local artisans and their passion for creating beautiful things
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                We stand behind every product with our satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to explore our collection?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our carefully curated selection of handmade products and find something special for yourself or a loved one.
          </p>
          <Link to="/products">
            <Button size="lg" variant="default" className="gap-2">
              View Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
