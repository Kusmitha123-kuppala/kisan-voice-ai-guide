export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌾</span>
              <h3 className="text-xl font-bold">Project Kisan</h3>
            </div>
            <p className="text-primary-foreground/80">
              Empowering farmers with AI technology for better crop management, 
              market insights, and government scheme access.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Crop Disease Diagnosis</li>
              <li>• Market Price Updates</li>
              <li>• Government Schemes</li>
              <li>• Voice Assistant</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Kannada Language</li>
              <li>• Voice Commands</li>
              <li>• Offline Access</li>
              <li>• 24/7 AI Assistant</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Project Kisan - AI Expert in a Farmer's Pocket
          </p>
        </div>
      </div>
    </footer>
  );
};