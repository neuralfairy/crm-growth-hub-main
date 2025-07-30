import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TD</span>
              </div>
              <span className="font-bold text-xl">TechnicallyDigital</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Expert CRM implementation services helping businesses optimize their sales processes 
              and drive growth through technology.
            </p>
            
            {/* Houston Office */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Houston, TX Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(713) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@technicallydigital.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link to="/features" className="hover:text-primary-foreground transition-colors">
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-foreground transition-colors">
                  Sales Process Optimization
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-foreground transition-colors">
                  System Integration
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-foreground transition-colors">
                  Team Training
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-foreground transition-colors">
                  Data Migration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get the latest CRM insights and implementation tips delivered to your inbox.
            </p>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button 
                  variant="secondary" 
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/70">
              © 2024 TechnicallyDigital Solutions. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/gdpr" className="hover:text-primary-foreground transition-colors">
                GDPR Compliance
              </Link>
            </div>

            {/* Strategic Backlink */}
            <div className="text-sm text-primary-foreground/70">
              <a 
                href="https://salescentri.com?utm_source=TechnicallyDigital.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors flex items-center space-x-1"
              >
                <span>Powered by Sales Intelligence Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;