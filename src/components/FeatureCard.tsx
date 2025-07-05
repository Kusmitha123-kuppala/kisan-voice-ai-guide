import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "voice";
}

export const FeatureCard = ({ 
  title, 
  description, 
  image, 
  buttonText, 
  onButtonClick,
  className,
  variant = "primary"
}: FeatureCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-primary/30 hover:border-primary hover:shadow-glow";
      case "secondary":
        return "border-muted-foreground/30 hover:border-accent";
      case "accent":
        return "border-accent/30 hover:border-accent hover:bg-gradient-earth";
      case "voice":
        return "border-voice-active/30 hover:border-voice-active hover:shadow-voice";
      default:
        return "border-primary/30 hover:border-primary";
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case "voice":
        return "bg-gradient-voice hover:bg-gradient-voice/90 text-voice-active-foreground";
      case "accent":
        return "bg-gradient-earth hover:bg-gradient-earth/90";
      default:
        return "bg-gradient-farm hover:bg-gradient-farm/90 text-primary-foreground";
    }
  };

  return (
    <Card className={cn(
      "group transition-all duration-300 hover:scale-105",
      "shadow-soft hover:shadow-lg",
      getVariantStyles(),
      className
    )}>
      <CardHeader className="pb-4">
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={onButtonClick}
          className={cn(
            "w-full transition-all duration-300",
            getButtonVariant()
          )}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};