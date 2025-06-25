export class AudioManager {
  private audioContext: AudioContext | null = null;
  private isInitialized = false;

  async initialize() {
    if (this.isInitialized) return;

    try {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      this.isInitialized = true;
    } catch (error) {
      console.warn("Audio initialization failed:", error);
    }
  }

  createMechanicalKeySound() {
    if (!this.audioContext) return;

    // Create typewriter sound instead of mechanical keyboard
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    // Connect the audio graph
    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Set up typewriter characteristics
    oscillator1.type = "square";
    oscillator2.type = "triangle";

    // Typewriter strike frequency - lower and more percussive
    oscillator1.frequency.setValueAtTime(800, this.audioContext.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(
      200,
      this.audioContext.currentTime + 0.08
    );

    // Secondary harmonic for metallic ring
    oscillator2.frequency.setValueAtTime(1600, this.audioContext.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(
      400,
      this.audioContext.currentTime + 0.06
    );

    // Band-pass filter for typewriter character
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(600, this.audioContext.currentTime);
    filter.Q.setValueAtTime(1.5, this.audioContext.currentTime);

    // Sharp attack with longer decay for typewriter feel
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.15,
      this.audioContext.currentTime + 0.01
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      this.audioContext.currentTime + 0.12
    );

    const now = this.audioContext.currentTime;
    oscillator1.start(now);
    oscillator1.stop(now + 0.12);

    oscillator2.start(now);
    oscillator2.stop(now + 0.12);
  }

  createSirenSound() {
    if (!this.audioContext) return;

    // Create a single, continuous siren sound
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Siren frequencies with realistic wave forms
    oscillator1.type = "sine";
    oscillator2.type = "triangle";

    // Bandpass filter for authentic siren sound
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
    filter.Q.setValueAtTime(3, this.audioContext.currentTime);

    // Create continuous rising and falling siren pattern
    const now = this.audioContext.currentTime;
    const duration = 4; // Single continuous siren

    // First oscillator - rising then falling frequency
    oscillator1.frequency.setValueAtTime(300, now);
    oscillator1.frequency.linearRampToValueAtTime(800, now + duration / 2);
    oscillator1.frequency.linearRampToValueAtTime(300, now + duration);

    // Second oscillator - creates the characteristic warbling effect
    oscillator2.frequency.setValueAtTime(800, now);
    oscillator2.frequency.linearRampToValueAtTime(300, now + duration / 2);
    oscillator2.frequency.linearRampToValueAtTime(800, now + duration);

    // Smooth volume control with fade in/out
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.2, now + 0.5);
    gainNode.gain.setValueAtTime(0.2, now + duration - 0.5);
    gainNode.gain.linearRampToValueAtTime(0, now + duration);

    oscillator1.start(now);
    oscillator1.stop(now + duration);

    oscillator2.start(now);
    oscillator2.stop(now + duration);
  }
}

export const audioManager = new AudioManager();
