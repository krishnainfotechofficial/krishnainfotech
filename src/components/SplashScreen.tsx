import { useEffect, useState } from 'react';
import logoImage from '../assets/krishna-logo.png';
import './SplashScreen.css';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds (3000ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src={logoImage} alt="Krishna Infotech Logo" className="splash-logo" />
        <h1 className="splash-text">Krishna Infotech</h1>
      </div>
    </div>
  );
}
