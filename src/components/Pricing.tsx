import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses getting started with CRM",
      features: [
        "CRM Setup & Configuration",
        "Basic Training (4 hours)",
        "Email Support",
        "Standard Integrations (3)",
        "Data Migration (up to 1,000 records)",
        "30-day Support"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Advanced CRM Configuration",
        "Custom Workflow Setup",
        "Team Training (12 hours)",
        "Priority Support",
        "Advanced Integrations (10)",
        "Data Migration (unlimited)",
        "Custom Dashboards",
        "90-day Support"
      ],
      popular: true,
      buttonText: "Most Popular",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for large organizations",
      features: [
        "Enterprise CRM Architecture",
        "Multi-department Setup",
        "Comprehensive Training Program",
        "24/7 Dedicated Support",
        "Unlimited Integrations",
        "Complete Data Migration",
        "Custom Development",
        "1-year Support & Maintenance"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the CRM implementation package that fits your business needs. 
            No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:shadow-enterprise ${
                plan.popular 
                  ? 'border-primary shadow-enterprise scale-105' 
                  : 'border-border hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-gradient-primary shadow-button hover:shadow-enterprise' 
                      : ''
                  }`}
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    {plan.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">Compare Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;