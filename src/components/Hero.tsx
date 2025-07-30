import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground font-medium">
                Trusted by 500+ Businesses
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Transform Your Sales Process with 
              <span className="block text-white/90">Expert CRM Implementation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              We help businesses implement and optimize CRMs for improved sales processes. 
              Get 3x faster implementation with our proven methodology.
            </p>

            {/* Benefits List */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-primary-foreground/90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>30-Day Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-white" />
                <span>40% Sales Increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-white" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-enterprise hover:shadow-button transition-all duration-300"
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-primary-foreground hover:bg-white/10"
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <p className="text-sm text-primary-foreground/70">
              Join companies like Microsoft, Salesforce, and HubSpot who trust our CRM expertise
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-enterprise">
              {/* Mock Dashboard */}
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Sales Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-feature rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">$247K</div>
                    <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                    <div className="text-green-600 text-xs">+23% ↗</div>
                  </div>
                  <div className="bg-gradient-feature rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">156</div>
                    <div className="text-sm text-muted-foreground">Active Deals</div>
                    <div className="text-green-600 text-xs">+12% ↗</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lead Conversion</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sales Target</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-primary-foreground/80 text-sm">
                ↑ Real results from our CRM implementations
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-card-hover">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Demo Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;