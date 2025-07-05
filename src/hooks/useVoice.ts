import { useState, useCallback, useRef } from 'react';

// Web Speech API type declarations
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

declare class SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  start(): void;
  stop(): void;
}

interface UseVoiceReturn {
  isListening: boolean;
  isSupported: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => void;
  isSpeaking: boolean;
}

export const useVoice = (): UseVoiceReturn => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

  const startListening = useCallback(() => {
    if (!isSupported) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'kn-IN'; // Kannada

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setTranscript(transcript);
      
      // Demo responses for farming queries
      if (event.results[current].isFinal) {
        handleVoiceQuery(transcript);
      }
    };

    recognitionRef.current.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, []);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'kn-IN';
      utterance.rate = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
    }
  }, []);

  const handleVoiceQuery = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Demo responses based on common farming queries
    if (lowerQuery.includes('price') || lowerQuery.includes('ಬೆಲೆ')) {
      speak('ಟೊಮೇಟೋ ಬೆಲೆ ಇಂದು ಹುಬ್ಳಿ ಮಂಡಿಯಲ್ಲಿ ₹2,800 ಪ್ರತಿ ಕ್ವಿಂಟಲ್. ಬೆಲೆ ಹೆಚ್ಚಾಗಿದೆ!');
    } else if (lowerQuery.includes('disease') || lowerQuery.includes('ರೋಗ')) {
      speak('ನಿಮ್ಮ ಸಸ್ಯದ ಫೋಟೋ ತೆಗೆದುಕೊಂಡು ಕಳುಹಿಸಿ. ನಾನು ರೋಗವನ್ನು ಪತ್ತೆಹಚ್ಚಿ ಚಿಕಿತ್ಸೆ ಸಲಹೆ ನೀಡುತ್ತೇನೆ.');
    } else if (lowerQuery.includes('scheme') || lowerQuery.includes('ಯೋಜನೆ')) {
      speak('PM-KISAN ಯೋಜನೆಯಲ್ಲಿ ವರ್ಷಕ್ಕೆ ₹6,000 ಸಿಗುತ್ತದೆ. ನಿಮ್ಮ ಆಧಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.');
    } else {
      speak('ನಮಸ್ಕಾರ! ಕೃಷಿ ಸಂಬಂಧಿತ ಯಾವುದೇ ಸಹಾಯಕ್ಕಾಗಿ ಕೇಳಿ. ಬೆಲೆ, ರೋಗ ಅಥವಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ಬಯಸುವಿರಾ?');
    }
  };

  return {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
    speak,
    isSpeaking
  };
};