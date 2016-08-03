import mixer from './mixer'

class Osc {
  constructor(waveform, frequency) {
    this.osc       = mixer.createOscillator();
    this.gain      = mixer.createGain();
    this.dest      = mixer.destination;
    this.volume    = this.gain.gain;
    this.waveform  = waveform;
    this.frequency = frequency;

    this.setup();
    this.connect();
  }

  setup() {
    this.osc.type = this.waveform;
    this.osc.frequency.value = this.frequency;
  }

  connect() {
    this.osc.connect(this.gain);
    this.gain.connect(this.dest);
    this.osc.start(0);
  }

  tune(freq) {
    this.osc.frequency.value = freq
  }

  start() { this.volume.value = 1 }
  stop()  { this.volume.value = 0 }
}

//let osc_one = new Osc("triangle", 300);
//osc_one.start();

