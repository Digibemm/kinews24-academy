# Video Upload Anleitung für Hostinger

## Videos die hochgeladen werden müssen

Lokaler Pfad auf dem Mac: `/Users/mm/projekte/kinews24-academy/public/videos/`

**4 Videos (insgesamt ~73 MB):**
1. ✅ `ow-ref-creation-marco-limm.mp4` (21 MB)
2. ✅ `ow-ref-deutsche-gemmophon-stefan-steigleder.mp4` (22 MB)
3. ✅ `ow-ref-schmolling-pop-feinkost.mp4` (16 MB)
4. ✅ `ow-ref-teilnehmer.mp4` (14 MB)

## Option 1: Hostinger File Manager (Einfachste Methode)

### Schritt 1: File Manager öffnen
1. Melde dich bei Hostinger an
2. Gehe zu deiner Website
3. Klicke auf **File Manager** (oder **Dateien**)

### Schritt 2: Zum richtigen Ordner navigieren
1. Navigiere zu: `public_html/` oder `htdocs/` (je nach Setup)
2. Finde den `public/` Ordner
3. Falls der `videos/` Ordner nicht existiert:
   - Klicke auf **Neuer Ordner**
   - Name: `videos`

### Schritt 3: Videos hochladen
1. Öffne den `videos/` Ordner
2. Klicke auf **Upload** oder **Hochladen**
3. Wähle alle 4 Video-Dateien von deinem Mac aus:
   - Von: `/Users/mm/projekte/kinews24-academy/public/videos/`
4. Warte, bis alle Videos hochgeladen sind (kann 5-10 Minuten dauern)

### Schritt 4: Überprüfen
Die Struktur sollte so aussehen:
```
public/
  └── videos/
      ├── ow-ref-creation-marco-limm.mp4
      ├── ow-ref-deutsche-gemmophon-stefan-steigleder.mp4
      ├── ow-ref-schmolling-pop-feinkost.mp4
      └── ow-ref-teilnehmer.mp4
```

## Option 2: FTP/SFTP Upload (Für größere Dateien zuverlässiger)

### Schritt 1: FTP-Zugangsdaten holen
1. Hostinger Dashboard → **FTP Accounts** oder **Dateien** → **FTP**
2. Notiere:
   - Hostname (z.B. `ftp.yourdomain.com`)
   - Username
   - Password
   - Port (meist 21 für FTP oder 22 für SFTP)

### Schritt 2: FTP-Client installieren (falls noch nicht vorhanden)
- **FileZilla**: https://filezilla-project.org/download.php?type=client
- Oder **Cyberduck**: https://cyberduck.io/

### Schritt 3: Verbindung herstellen
1. Öffne FileZilla
2. Eingeben:
   - Host: `ftp.yourdomain.com` (oder IP)
   - Username: (dein FTP-User)
   - Password: (dein FTP-Passwort)
   - Port: 21 (FTP) oder 22 (SFTP)
3. Klicke **Verbinden**

### Schritt 4: Videos hochladen
1. **Links** (Lokaler Computer):
   - Navigiere zu: `/Users/mm/projekte/kinews24-academy/public/videos/`
2. **Rechts** (Server):
   - Navigiere zu: `public/videos/`
   - Falls `videos/` nicht existiert, rechtsklick → **Verzeichnis erstellen**
3. Wähle alle 4 Videos links aus
4. Rechtsklick → **Hochladen**
5. Warte bis alle Videos hochgeladen sind

## Nach dem Upload: Testen

Besuche deine Website und prüfe, ob die Videos abspielen:
- Die Videos werden in der **CaseStudies** Komponente verwendet
- Sie sollten automatisch funktionieren, sobald die Dateien am richtigen Ort sind

## Troubleshooting

### Videos laden nicht
1. **Pfad überprüfen**: Muss genau sein: `public/videos/dateiname.mp4`
2. **Groß-/Kleinschreibung**: Dateinamen müssen exakt übereinstimmen
3. **Browser Cache leeren**: Strg+Shift+R (Mac: Cmd+Shift+R)

### Upload schlägt fehl
- **Verbindung Timeout**: Versuche SFTP statt FTP (Port 22)
- **Datei zu groß**: FTP ist zuverlässiger für große Dateien als File Manager
- **Quota überschritten**: Prüfe deinen Hostinger Speicherplatz

## Alternative: Videos komprimieren (falls Upload-Probleme)

Falls der Upload zu lange dauert, kann ich die Videos für dich komprimieren:
- Von ~73 MB auf ~30-40 MB reduzieren
- Kaum sichtbarer Qualitätsverlust
- Schnellere Ladezeiten für Besucher

Sag Bescheid, wenn du das möchtest!
