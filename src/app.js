class Logger {
  // statische Instanz
  static instance = null;

  constructor() {
    this.messages = [];
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message) {
    const entry = new Date().toISOString() + ' ' + message;
    this.messages.push(entry);
    return entry;
  }

  getAll() {
    return this.messages.join('\n');
  }
}

// simple Nutzung im Web UI
const button = document.getElementById('logButton');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const logger = Logger.getInstance();
  const entry = logger.log('Button geklickt');
  output.textContent = logger.getAll();
});
