import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a passion for authentic craftsmanship and a love for timeless design
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Handcrafted Excellence Since 2020
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Artisan Goods was founded with a simple belief: that handmade products carry 
                  a special kind of magic. In a world of mass production, we wanted to create 
                  a space where craftsmanship, quality, and authentic connections could thrive.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We partner with talented artisans from around the world who share our commitment 
                  to excellence. Each product in our collection is carefully selected, ensuring that 
                  it meets our high standards for quality, design, and sustainability. When you choose 
                  Artisan Goods, you're not just buying a product—you're supporting real people and 
                  their craft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To connect people with beautiful, handcrafted products that enhance their 
                    daily lives while supporting artisans and sustainable practices around the world.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where craftsmanship is valued, artisans are celebrated, and every 
                    purchase makes a positive impact on communities and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Passion for Craft</h3>
                <p className="text-muted-foreground">
                  We believe in the beauty and value of handmade goods created with skill and dedication
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Community First</h3>
                <p className="text-muted-foreground">
                  Supporting local artisans and building meaningful relationships with our makers
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Quality Promise</h3>
                <p className="text-muted-foreground">
                  Every product is carefully curated to ensure it meets our high standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We're a small but passionate team dedicated to bringing you the finest handcrafted 
                products. Our combined experience in retail, design, and artisan collaboration helps 
                us curate a collection that truly stands out.
              </p>
              <p className="text-muted-foreground italic">
                "Every product tells a story, and we're honored to be part of sharing those stories with you."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
