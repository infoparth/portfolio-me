class AudioManager {
  private audioContext: AudioContext | null = null;
  private isInitialized = false;
  private currentSirenNodes: (OscillatorNode | GainNode)[] = [];

  async initialize() {
    if (this.isInitialized) return;

    try {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();

      if (this.audioContext.state === "suspended") {
        await this.audioContext.resume();
      }

      this.isInitialized = true;
    } catch (error) {
      console.warn("Audio initialization failed:", error);
    }
  }

  // Stop any currently playing siren sound
  stopSirenSound() {
    this.currentSirenNodes.forEach((node) => {
      try {
        if (node instanceof OscillatorNode) {
          node.stop();
        } else if (node instanceof GainNode) {
          // Quickly fade out the gain
          node.gain.cancelScheduledValues(this.audioContext!.currentTime);
          node.gain.setValueAtTime(
            node.gain.value,
            this.audioContext!.currentTime
          );
          node.gain.linearRampToValueAtTime(
            0,
            this.audioContext!.currentTime + 0.1
          );
        }
      } catch (error) {
        // Node might already be stopped
      }
    });
    this.currentSirenNodes = [];
  }

  async createSirenSound(remainingTime?: number) {
    if (!this.audioContext) return;

    if (this.audioContext.state === "suspended") {
      try {
        await this.audioContext.resume();
      } catch (error) {
        console.warn("Could not resume audio context:", error);
        return;
      }
    }

    // Stop any existing siren sound
    this.stopSirenSound();

    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    // Keep track of nodes for potential stopping
    this.currentSirenNodes = [oscillator1, oscillator2, gainNode];

    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator1.type = "sine";
    oscillator2.type = "triangle";

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
    filter.Q.setValueAtTime(3, this.audioContext.currentTime);

    const now = this.audioContext.currentTime;
    // Use remaining time if provided, otherwise use full 4 seconds
    // But cap it at a minimum of 0.5 seconds for a quick effect
    const duration =
      remainingTime !== undefined
        ? Math.max(Math.min(remainingTime, 4), 0.5)
        : 4;

    oscillator1.frequency.setValueAtTime(300, now);
    oscillator1.frequency.linearRampToValueAtTime(800, now + duration / 2);
    oscillator1.frequency.linearRampToValueAtTime(300, now + duration);

    oscillator2.frequency.setValueAtTime(800, now);
    oscillator2.frequency.linearRampToValueAtTime(300, now + duration / 2);
    oscillator2.frequency.linearRampToValueAtTime(800, now + duration);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(
      0.2,
      now + Math.min(0.5, duration / 4)
    );
    gainNode.gain.setValueAtTime(
      0.2,
      now + duration - Math.min(0.5, duration / 4)
    );
    gainNode.gain.linearRampToValueAtTime(0, now + duration);

    oscillator1.start(now);
    oscillator1.stop(now + duration);

    oscillator2.start(now);
    oscillator2.stop(now + duration);

    // Clean up nodes when they finish
    setTimeout(() => {
      this.currentSirenNodes = [];
    }, duration * 1000 + 100);
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
}

export const audioManager = new AudioManager();
