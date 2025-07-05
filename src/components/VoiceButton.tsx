import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useVoice } from "@/hooks/useVoice";
import { useEffect } from "react";

interface VoiceButtonProps {
  onVoiceToggle?: (isListening: boolean) => void;
  className?: string;
}

export const VoiceButton = ({ onVoiceToggle, className }: VoiceButtonProps) => {
  const { isListening, isSupported, transcript, startListening, stopListening, isSpeaking } = useVoice();

  const handleToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  useEffect(() => {
    onVoiceToggle?.(isListening);
  }, [isListening, onVoiceToggle]);

  if (!isSupported) {
    return (
      <Button disabled className={cn("opacity-50", className)}>
        <Mic className="mr-2 h-5 w-5" />
        Voice Not Supported
      </Button>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <Button
        onClick={handleToggle}
        variant={isListening ? "default" : "outline"}
        size="lg"
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          (isListening || isSpeaking) && [
            "bg-gradient-voice animate-glow",
            "shadow-voice text-voice-active-foreground"
          ],
          !isListening && !isSpeaking && [
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
        ) : isSpeaking ? (
          <>
            <Mic className="mr-2 h-5 w-5 animate-pulse" />
            Speaking...
          </>
        ) : (
          <>
            <Mic className="mr-2 h-5 w-5" />
            Start Voice Input
          </>
        )}
      </Button>
      {transcript && (
        <div className="text-sm text-muted-foreground max-w-xs text-center">
          "{transcript}"
        </div>
      )}
    </div>
  );
};