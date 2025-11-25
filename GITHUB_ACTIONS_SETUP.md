# GitHub Actions - Automatisches Deployment zu Hostinger

## Was passiert jetzt automatisch?

Bei jedem `git push` zum `main` Branch:
1. ✅ GitHub baut dein Projekt (`npm run build`)
2. ✅ Lädt die Dateien automatisch via FTP zu Hostinger hoch
3. ✅ Deine Website ist aktualisiert!

**Du musst nichts mehr manuell machen!** 🎉

---

## Einmalige Einrichtung (5 Minuten)

### Schritt 1: FTP-Zugangsdaten von Hostinger holen

1. **Melde dich bei Hostinger hPanel an**
2. Gehe zu deiner Website: **lightcyan-tarsier-722242.hostingersite.com**
3. Klicke auf **Dateien** → **FTP-Konten** (oder **FTP Accounts**)
4. Notiere dir:
   - 📝 **FTP-Server**: (z.B. `ftp.yourdomain.com` oder eine IP-Adresse)
   - 📝 **FTP-Benutzername**: (z.B. `u123456789`)
   - 📝 **FTP-Passwort**: (falls du es vergessen hast, erstelle ein neues)

**Alternative: SFTP (sicherer, empfohlen wenn verfügbar)**
- Port: 22 statt 21
- Gleiche Zugangsdaten wie FTP

---

### Schritt 2: GitHub Secrets einrichten

1. **Öffne dein GitHub Repository**:
   https://github.com/Digibemm/kinews24-academy

2. **Gehe zu Settings**:
   - Klicke oben auf **Settings** (⚙️)

3. **Secrets and Variables**:
   - Links im Menü: **Secrets and variables** → **Actions**

4. **Erstelle 3 neue Secrets** (Klicke auf **New repository secret**):

   **Secret 1: FTP_SERVER**
   - Name: `FTP_SERVER`
   - Value: Dein FTP-Server (z.B. `ftp.yourdomain.com`)
   - Klicke **Add secret**

   **Secret 2: FTP_USERNAME**
   - Name: `FTP_USERNAME`
   - Value: Dein FTP-Benutzername
   - Klicke **Add secret**

   **Secret 3: FTP_PASSWORD**
   - Name: `FTP_PASSWORD`
   - Value: Dein FTP-Passwort
   - Klicke **Add secret**

---

### Schritt 3: Workflow aktivieren & testen

Der Workflow wird automatisch beim nächsten `git push` ausgelöst!

**Um es jetzt zu testen:**

```bash
# Ich committe gleich die Workflow-Datei und pushe sie
# Dann startet der erste automatische Deployment-Prozess!
```

**Status verfolgen:**
1. Gehe zu: https://github.com/Digibemm/kinews24-academy/actions
2. Du siehst dort den laufenden Workflow
3. Grüner Haken ✅ = Deployment erfolgreich!
4. Rotes X ❌ = Fehler (meist FTP-Zugangsdaten falsch)

---

## Wie es funktioniert

### Bei jedem `git push`:

```
1. GitHub Actions startet
   ↓
2. Node.js 20 wird installiert
   ↓
3. npm install (Dependencies installieren)
   ↓
4. npm run build (Projekt bauen → dist/)
   ↓
5. FTP Upload nach Hostinger
   ↓
6. Website ist live aktualisiert! ✅
```

**Dauer:** Ca. 2-3 Minuten pro Deployment

---

## Wichtige Hinweise

### dangerous-clean-slate: true
- ⚠️ Löscht **alle** Dateien in `public_html/` vor dem Upload
- ✅ Stellt sicher, dass keine alten Dateien übrig bleiben
- ✅ Sauberes Deployment jedes Mal

### Was wird hochgeladen?
Nur der **Inhalt** von `dist/`:
- ✅ `index.html`
- ✅ `assets/` (JavaScript, CSS)
- ✅ `logos/`, `team-photos/`
- ✅ **Videos** (werden bei jedem Build mit hochgeladen!)
- ❌ `node_modules/` (nicht nötig auf dem Server)
- ❌ Source-Code (nur gebaute Dateien)

---

## Troubleshooting

### ❌ Deployment schlägt fehl

**1. FTP-Zugangsdaten prüfen**
- Gehe zu GitHub → Settings → Secrets
- Überprüfe `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`

**2. FTP-Server erreichbar?**
- Teste lokal mit FileZilla ob die Zugangsdaten funktionieren

**3. Port ändern (falls SFTP)**
Falls Hostinger SFTP statt FTP nutzt, ändern in `.github/workflows/deploy.yml`:
```yaml
port: 22  # SFTP statt FTP
```

### ⚠️ Website zeigt alte Version

**Cache leeren:**
- Browser: `Strg+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

**Deployment-Log prüfen:**
- GitHub → Actions → letzter Workflow → Details ansehen

---

## Vorteile dieser Lösung

✅ **Automatisch**: Kein manueller Upload mehr
✅ **Schnell**: Deployment in 2-3 Minuten
✅ **Sicher**: Passwörter in GitHub Secrets verschlüsselt
✅ **Zuverlässig**: Jeder Push wird deployed
✅ **Transparent**: Status in GitHub Actions sichtbar

---

## Nächste Schritte

1. ✅ FTP-Zugangsdaten von Hostinger holen
2. ✅ GitHub Secrets einrichten (siehe oben)
3. ✅ Ich pushe die Workflow-Datei
4. ✅ Erster automatischer Deployment-Test!

**Danach:** Jeder `git push` deployed automatisch zu Hostinger! 🚀
