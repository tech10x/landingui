'use client';
import { useEffect } from 'react';
const ConsoleWarning = () => {
    
  useEffect(() => { 
    const warningMessage = `
    ⚠️ WARNING: Inspect Element browser feature is intended for developers. Please do not copy paste here something you found over the internet. It could be scam and might give them the access of your account.. ⚠️
    `;
    console.log("%c" + warningMessage, "color: red; font-size: 18px; text-align: center;" );

  }, []);

  return null;
};

export default ConsoleWarning;
