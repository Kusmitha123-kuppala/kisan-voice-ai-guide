import { FeatureCard } from "./FeatureCard";
import { useToast } from "@/hooks/use-toast";
import cropDiseaseImage from "@/assets/crop-disease.jpg";
import marketSceneImage from "@/assets/market-scene.jpg";
import governmentSchemesImage from "@/assets/government-schemes.jpg";
import voiceInputImage from "@/assets/voice-input.jpg";

export const FeaturesSection = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `${feature} Feature`,
      description: `Opening ${feature.toLowerCase()} interface... (Demo mode)`,
    });
  };

  const features = [
    {
      title: "Crop Disease Diagnosis",
      description: "Upload or capture photos of your crops to get instant AI-powered disease identification and treatment recommendations in Kannada.",
      image: cropDiseaseImage,
      buttonText: "Diagnose Crop Issue",
      variant: "primary" as const,
      onClick: () => handleFeatureClick("Crop Diagnosis")
    },
    {
      title: "Real-Time Market Prices",
      description: "Get current mandi prices, price trends, and selling recommendations for your crops from major markets across Karnataka.",
      image: marketSceneImage,
      buttonText: "Check Market Prices",
      variant: "accent" as const,
      onClick: () => handleFeatureClick("Market Prices")
    },
    {
      title: "Government Schemes Navigator",
      description: "Discover eligible government subsidies, schemes, and benefits for farmers with step-by-step application guidance.",
      image: governmentSchemesImage,
      buttonText: "Explore Schemes",
      variant: "secondary" as const,
      onClick: () => handleFeatureClick("Government Schemes")
    },
    {
      title: "Voice Assistant",
      description: "Ask questions, get advice, and navigate all features using voice commands in Kannada - perfect for hands-free farming.",
      image: voiceInputImage,
      buttonText: "Try Voice Assistant",
      variant: "voice" as const,
      onClick: () => handleFeatureClick("Voice Assistant")
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Farming Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four powerful AI-driven features designed specifically for Indian farmers, 
            accessible through voice commands and intuitive interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              buttonText={feature.buttonText}
              variant={feature.variant}
              onButtonClick={feature.onClick}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Project Kisan?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gradient-farm rounded-full flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="font-semibold text-foreground">Accurate AI</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced AI models trained specifically for Indian agricultural conditions
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center">
                  <span className="text-xl">🗣️</span>
                </div>
                <h4 className="font-semibold text-foreground">Local Language</h4>
                <p className="text-sm text-muted-foreground">
                  Full Kannada support with voice recognition and text-to-speech
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gradient-voice rounded-full flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <h4 className="font-semibold text-foreground">Mobile-First</h4>
                <p className="text-sm text-muted-foreground">
                  Works offline, designed for rural connectivity and smartphone use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};