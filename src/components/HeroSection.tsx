import heroImage from "@/assets/hero-farmer.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Empowering Farmers with{" "}
              <span className="bg-gradient-farm bg-clip-text text-transparent">
                AI Technology
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get instant crop disease diagnosis, real-time market prices, 
              government scheme information, and expert advice - all through 
              simple voice commands in your local language.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span>Voice-First Interface</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                <span>Kannada Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-voice-active rounded-full"></span>
                <span>Real-time Data</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Modern farmer using technology in crop field"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-farm rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};