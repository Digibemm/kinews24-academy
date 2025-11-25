# Hostinger Deployment Anleitung

## Vorbereitung

1. **GitHub Repository**: ✅ Bereits vorhanden
   - URL: https://github.com/Digibemm/kinews24-academy

2. **Build-Test**: ✅ Erfolgreich
   - Befehl: `npm run build`
   - Output: `dist/` Ordner

## Hostinger Setup

### 1. GitHub mit Hostinger verbinden

1. Melde dich bei **Hostinger** an
2. Gehe zu **Website** → **GitHub**
3. Klicke auf **Connect GitHub Account**
4. Autorisiere Hostinger für dein GitHub-Konto

### 2. Repository auswählen

1. Wähle das Repository: **Digibemm/kinews24-academy**
2. Branch: **main**

### 3. Build-Einstellungen konfigurieren

```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18 oder höher
```

### 4. Umgebungsvariablen (falls nötig)

Aktuell keine erforderlich.

### 5. Deploy

Klicke auf **Deploy** - Hostinger wird:
- Code von GitHub pullen
- Dependencies installieren (`npm install`)
- Projekt bauen (`npm run build`)
- `dist/` Ordner als Website bereitstellen

## Automatische Deployments

Nach dem Setup: Jeder `git push` zum `main` Branch triggert automatisch ein neues Deployment!

## ⚠️ WICHTIG: Videos fehlen!

Die Videos in `public/videos/` sind nicht im Git-Repository (zu groß).

**Optionen:**
1. **Hostinger Storage**: Videos direkt auf Hostinger hochladen
2. **Bunny CDN**: Videos auf CDN hosten (empfohlen für Performance)
3. **YouTube**: Videos als unlisted hochladen und embedden

**Aktuell betroffene Dateien:**
- `public/videos/ow-ref-creation-marco-limm.mp4`
- `public/videos/ow-ref-deutsche-gemmophon-stefan-steigleder.mp4`
- `public/videos/ow-ref-schmolling-pop-feinkost.mp4`
- `public/videos/ow-ref-teilnehmer.mp4`

## Troubleshooting

### Build schlägt fehl
```bash
# Lokal testen:
npm install
npm run build
```

### 404 Fehler bei Navigation
Stelle sicher, dass Hostinger Single Page Application (SPA) Rewrites aktiviert hat:
- Alle Routen sollten auf `index.html` umgeleitet werden

## Custom Domain

Nach erfolgreichem Deployment kannst du deine eigene Domain verbinden:
1. Gehe zu Hostinger **Domains**
2. Füge deine Domain hinzu (z.B. `kinews24-academy.de`)
3. Konfiguriere DNS-Einstellungen
