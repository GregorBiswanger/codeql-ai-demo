# CodeQL AI Demo
This project demonstrates how to combine CodeQL analyses with AI-powered assistance based on Node.js. The goal is to automatically detect patterns such as singletons in source code and present the results in a human-friendly way via an AI assistant.

## Prerequisites

- **Node.js** (recommended: current LTS)
- **npm** (installed with Node.js)
- **CodeQL CLI**  
    The CodeQL CLI must be installed globally.  
    Guide: [CodeQL CLI Installation Guide](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)  
    After installation the `codeql` command should be available in your terminal.

## Installation

1. Clone the repository:
     ```sh
     git clone <repo-url>
     cd codeql-ai-demo
     ```
2. Install dependencies:
     ```sh
     npm install
     ```

## Usage

1. **Start CodeQL analysis and AI server:**
     ```sh
     npm start
     ```
     - The following steps will be executed automatically:
         - Create a CodeQL database from the source code in the `src/` directory.
         - Run a custom CodeQL query (`singleton.ql`) to detect singleton patterns.
         - Export the analysis results to `singleton.json`.
         - Start a local Express server with an integrated AI assistant.

2. **Open the web UI:**  
     Visit `http://localhost:3000` in your browser.  
     There you can use the AI assistant to interpret the analysis results and get guidance.

## Project Structure

- `src/` – Example application (JavaScript) to be analyzed
- `codeql-custom-queries-javascript/` – Custom CodeQL queries (e.g., singleton detection)
- `singleton.json` – Automatically generated analysis results (JSON)
- `index.js` – Starts the AI server and integrates the analysis results

## Notes & Tips

- **CodeQL CLI installation:**  
    Download the appropriate bundle from the [official GitHub releases](https://github.com/github/codeql-action/releases) and extract it. Add the `codeql` directory to your `PATH` so the command is available globally.
- **Adjusting queries:**  
    Custom CodeQL queries can be created and modified in the `codeql-custom-queries-javascript/` directory.
- **AI assistant:**  
    The assistant uses the analysis results from `singleton.json` and provides technical, easy-to-understand explanations and recommendations in English.

## Further Links

- [CodeQL CLI Documentation](https://docs.github.com/en/code-security/codeql-cli/)
- [Introduction to CodeQL](https://appsec.guide/docs/static-analysis/codeql/installation/)
- [LangChain](https://js.langchain.com/docs/)
- [Ollama API Facade](https://www.npmjs.com/package/ollama-api-facade-js)

---

Have fun exploring CodeQL and AI-assisted analysis!
Dieses Projekt demonstriert, wie sich CodeQL-Analysen und KI-gestützte Beratung auf Basis von Node.js kombinieren lassen. Ziel ist es, automatisiert Muster wie Singletons im Quellcode zu erkennen und die Ergebnisse verständlich durch einen KI-Assistenten auswerten zu lassen.

## Voraussetzungen

- **Node.js** (empfohlen: aktuelle LTS-Version)
- **npm** (wird mit Node.js installiert)
- **CodeQL CLI**  
  Die CodeQL CLI muss global installiert sein.  
  Anleitung: [CodeQL CLI Installation Guide](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)  
  Nach der Installation sollte der Befehl `codeql` im Terminal verfügbar sein.

## Installation

1. Repository klonen:
   ```sh
   git clone <repo-url>
   cd codeql-ai-demo
   ```
2. Abhängigkeiten installieren:
   ```sh
   npm install
   ```

## Nutzung

1. **CodeQL-Analyse und KI-Server starten:**
   ```sh
   npm start
   ```
   - Es werden folgende Schritte automatisch ausgeführt:
     - Erstellen einer CodeQL-Datenbank aus dem Quellcode im `src/`-Verzeichnis.
     - Ausführen einer benutzerdefinierten CodeQL-Abfrage (`singleton.ql`), um Singleton-Muster zu erkennen.
     - Export der Analyseergebnisse als `singleton.json`.
     - Starten eines lokalen Express-Servers mit integriertem KI-Assistenten.

2. **Web-UI öffnen:**  
   Im Browser `http://localhost:3000` aufrufen.  
   Hier kannst du den KI-Assistenten nutzen, um die Analyseergebnisse zu interpretieren und dich beraten zu lassen.

## Projektstruktur

- `src/` – Beispielanwendung (JavaScript), die analysiert wird
- `codeql-custom-queries-javascript/` – Eigene CodeQL-Abfragen (z.B. Singleton-Erkennung)
- `singleton.json` – Automatisch generierte Analyseergebnisse (JSON)
- `index.js` – Startet den KI-Server und bindet die Analyseergebnisse ein

## Hinweise & Tipps

- **CodeQL CLI Installation:**  
  Lade das passende Bundle von der [offiziellen GitHub-Seite](https://github.com/github/codeql-action/releases) herunter und entpacke es. Füge das `codeql`-Verzeichnis zu deinem `PATH` hinzu, damit der Befehl global verfügbar ist.
- **Abfragen anpassen:**  
  Eigene CodeQL-Queries können im Verzeichnis `codeql-custom-queries-javascript/` erstellt und angepasst werden.
- **KI-Assistent:**  
  Der Assistent nutzt die Analyseergebnisse aus `singleton.json` und gibt technische, verständliche Erklärungen und Empfehlungen auf Deutsch.

## Weiterführende Links

- [CodeQL CLI Dokumentation](https://docs.github.com/en/code-security/codeql-cli/)
- [CodeQL Einführung](https://appsec.guide/docs/static-analysis/codeql/installation/)
- [LangChain](https://js.langchain.com/docs/)
- [Ollama API Fassade](https://www.npmjs.com/package/ollama-api-facade-js)

---

**Viel Spaß beim Analysieren und Experimentieren mit CodeQL und KI!**