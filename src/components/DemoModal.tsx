import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
}

export const DemoModal = ({ isOpen, onClose, feature }: DemoModalProps) => {
  const getDemoContent = () => {
    switch (feature) {
      case "Crop Diagnosis":
        return {
          title: "Crop Disease Diagnosis Demo",
          description: "AI-powered plant health analysis",
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sample Diagnosis</CardTitle>
                  <CardDescription>Tomato Leaf Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Disease:</span>
                      <span className="text-destructive">Late Blight</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Confidence:</span>
                      <span className="text-primary">94%</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Kannada:</strong> ಎಲೆಗಳ ಮೇಲೆ ಕಂದು ಬಣ್ಣದ ಕಲೆಗಳು - ಲೇಟ್ ಬ್ಲೈಟ್ ರೋಗ
                    </div>
                    <div className="text-sm">
                      <strong>Treatment:</strong> Apply copper-based fungicide immediately. 
                      Remove affected leaves and improve air circulation.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      case "Market Prices":
        return {
          title: "Real-Time Market Prices",
          description: "Current mandi rates and trends",
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hubli Mandi - Today</CardTitle>
                  <CardDescription>Current crop prices (₹/Quintal)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Tomato</span>
                      <div className="text-right">
                        <div className="font-bold text-accent">₹2,800</div>
                        <div className="text-xs text-green-600">↑ +12%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Onion</span>
                      <div className="text-right">
                        <div className="font-bold text-accent">₹1,500</div>
                        <div className="text-xs text-red-600">↓ -5%</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-4">
                      <strong>Recommendation:</strong> Good time to sell tomatoes. 
                      Hold onions for better prices next week.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      case "Government Schemes":
        return {
          title: "Government Schemes Navigator",
          description: "Eligible schemes and benefits",
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">PM-KISAN Scheme</CardTitle>
                  <CardDescription>Direct income support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Benefit:</span>
                      <span className="text-accent font-bold">₹6,000/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Next Payment:</span>
                      <span className="text-primary">15 Days</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Status:</strong> Eligible - Apply now with Aadhaar and bank details
                    </div>
                    <Button className="w-full mt-4">
                      Apply Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      case "Voice Assistant":
        return {
          title: "Voice Assistant Demo",
          description: "Kannada voice interaction",
          content: (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Voice Conversation</CardTitle>
                  <CardDescription>Sample interaction in Kannada</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Farmer (Kannada):</div>
                      <div className="text-sm">"ಟೊಮೇಟೋ ದಿನದ ಬೆಲೆ ಏನು?"</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        (What is today's tomato price?)
                      </div>
                    </div>
                    <div className="bg-gradient-farm/10 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Kisan AI:</div>
                      <div className="text-sm">"ಹುಬ್ಳಿ ಮಂಡಿಯಲ್ಲಿ ಟೊಮೇಟೋ ಬೆಲೆ ಇಂದು ₹2,800 ಪ್ರತಿ ಕ್ವಿಂಟಲ್. ಬೆಲೆ ಹೆಚ್ಚಾಗಿದೆ, ಮಾರಾಟ ಮಾಡಲು ಒಳ್ಳೆಯ ಸಮಯ!"</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        (Tomato price in Hubli mandi is ₹2,800 per quintal today. Prices are high, good time to sell!)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      default:
        return {
          title: "Feature Demo",
          description: "Coming soon",
          content: <div>Demo content will be available soon.</div>
        };
    }
  };

  const { title, description, content } = getDemoContent();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {content}
        </div>
        <div className="flex justify-end mt-6">
          <Button onClick={onClose} variant="outline">
            Close Demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};