import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceButtonProps {
  onVoiceToggle?: (isListening: boolean) => void;
  className?: string;
}

export const VoiceButton = ({ onVoiceToggle, className }: VoiceButtonProps) => {
  const [isListening, setIsListening] = useState(false);

  const handleToggle = () => {
    const newState = !isListening;
    setIsListening(newState);
    onVoiceToggle?.(newState);
  };

  return (
    <Button
      onClick={handleToggle}
      variant={isListening ? "default" : "outline"}
      size="lg"
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        isListening && [
          "bg-gradient-voice animate-glow",
          "shadow-voice text-voice-active-foreground"
        ],
        !isListening && [
          "hover:bg-gradient-farm hover:text-primary-foreground",
          "border-primary/30 hover:border-primary"
        ],
        className
      )}
    >
      {isListening ? (
        <>
          <MicOff className="mr-2 h-5 w-5" />
          Stop Listening
          <div className="absolute inset-0 bg-gradient-voice opacity-20 animate-pulse-slow" />
        </>
      ) : (
        <>
          <Mic className="mr-2 h-5 w-5" />
          Start Voice Input
        </>
      )}
    </Button>
  );
};