import { Settings, Zap, Shield, BarChart3, Users, Cog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: "Custom CRM Setup",
      description: "Tailored CRM configuration that matches your unique business processes and sales workflow."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get your CRM up and running in 30 days or less with our proven implementation methodology."
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Advanced reporting and analytics to track performance and identify growth opportunities."
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training programs to ensure your team maximizes CRM adoption and usage."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your customer data and business information."
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Seamlessly integrate with your existing tools and platforms for a unified workflow."
    }
  ];

  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive CRM Implementation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial setup to ongoing optimization, we provide end-to-end CRM implementation services 
            that drive measurable results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-enterprise">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Successful Implementations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30</div>
              <div className="text-muted-foreground">Days Average Setup</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Average Sales Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;