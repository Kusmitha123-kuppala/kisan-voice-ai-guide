import { VoiceButton } from "./VoiceButton";

export const Header = () => {
  return (
    <header className="bg-gradient-farm shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">🌾</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Project Kisan
            </h1>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-2xl">
            AI Expert in a Farmer's Pocket - Your voice-first farming assistant
          </p>
          <VoiceButton 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onVoiceToggle={(isListening) => {
              console.log("Voice input:", isListening ? "Started" : "Stopped");
            }}
          />
        </div>
      </div>
    </header>
  );
};