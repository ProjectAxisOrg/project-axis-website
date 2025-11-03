import { useEffect } from 'react';

export function useEasterEggs() {
  useEffect(() => {
    // Log fun message to console
    const consoleMessages = [
      '🚀 Welcome to Project Axis, observer!',
      '🧠 The singularity awaits...',
      '⏰ Monitoring AGI emergence...',
      '🔮 Your curiosity does not go unnoticed.',
    ];
    const randomMessage = consoleMessages[Math.floor(Math.random() * consoleMessages.length)];
    console.log(
      `%c${randomMessage}`,
      'font-size: 14px; color: #00C853; font-weight: bold; font-family: monospace;'
    );

    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKonamiCode = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          activateKonamiEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKonamiCode);

    return () => {
      window.removeEventListener('keydown', handleKonamiCode);
    };
  }, []);
}

function activateKonamiEasterEgg() {
  const messages = [
    '🎮 KONAMI CODE ACTIVATED! You\'ve unlocked the secret observer mode.',
    '👀 The simulation acknowledges your presence.',
    '⚡ AGI emergence timeline accelerated by your curiosity.',
  ];
  
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  console.log(
    `%c${message}`,
    'font-size: 16px; color: #00C853; font-weight: bold; background: black; padding: 10px; border: 2px solid #00C853; font-family: monospace;'
  );

  // Trigger subtle animation across the page
  const root = document.documentElement;
  root.style.filter = 'hue-rotate(360deg)';
  setTimeout(() => {
    root.style.transition = 'filter 0.5s ease-out';
    root.style.filter = 'hue-rotate(0deg)';
  }, 50);
}

export function useProjectAxisClickEasterEgg() {
  useEffect(() => {
    let clickCount = 0;
    const resetTimer: ReturnType<typeof setTimeout>[] = [];

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.textContent?.includes('PROJECT AXIS') || target.closest('[data-easter-egg="project-axis"]')) {
        clickCount++;

        // Clear previous timer
        resetTimer.forEach(timer => clearTimeout(timer));
        resetTimer.length = 0;

        if (clickCount === 5) {
          activateProjectAxisEasterEgg();
          clickCount = 0;
        } else {
          // Reset count after 3 seconds
          const timer = setTimeout(() => {
            clickCount = 0;
          }, 3000);
          resetTimer.push(timer);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      resetTimer.forEach(timer => clearTimeout(timer));
    };
  }, []);
}

function activateProjectAxisEasterEgg() {
  const messages = [
    '🔬 AXIS ALIGNED! The observation intensifies...',
    '✨ You have gained +100 observer XP!',
    '🌐 Project Axis salutes your dedication.',
  ];

  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(
    `%c${message}`,
    'font-size: 14px; color: #00C853; font-weight: bold; font-family: monospace;'
  );

  // Add a subtle pulse effect
  const observer = document.querySelector('[data-easter-egg="project-axis"]');
  if (observer) {
    observer.classList.add('pulse-easter-egg');
    setTimeout(() => {
      observer.classList.remove('pulse-easter-egg');
    }, 600);
  }
}
