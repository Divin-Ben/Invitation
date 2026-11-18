# Invitation de mariage — page web responsive

## Contenu
- `index.html` : structure de la page.
- `style.css` : design noir et or, adapté au téléphone et à l'ordinateur.
- `script.js` : personnalisation et envoi du formulaire.
- `google-apps-script.gs` : réception des réponses dans Google Sheets.
- `assets/` : photos à remplacer.

## 1. Personnaliser
Ouvre `script.js` et modifie les noms, la date, les lieux et la date limite dans `CONFIG`.

Remplace les images dans `assets/` en gardant exactement ces noms :
- `cover.jpg` : grande photo de couverture.
- `couple-1.jpg`, `couple-2.jpg`, `couple-3.jpg` : photos de la galerie.

Utilise de préférence des photos personnelles dont tu as l'autorisation. Les images ne sont pas incluses dans le modèle.

## 2. Activer l'enregistrement des confirmations
1. Crée une feuille Google Sheets.
2. Dans cette feuille, ouvre **Extensions > Apps Script**.
3. Remplace le contenu de l'éditeur par le code de `google-apps-script.gs`, puis enregistre.
4. Clique **Déployer > Nouveau déploiement**.
5. Choisis le type **Application Web**.
6. Exécuter en tant que : **Moi**. Accès : **Tout le monde** (les invités doivent pouvoir envoyer leur réponse).
7. Déploie, autorise les accès demandés et copie l'URL de l'application Web.
8. Colle cette URL dans `scriptUrl` de `script.js`, à la place de `COLLE_ICI_URL_WEB_APP`.

Les réponses arriveront dans l'onglet « Réponses » de la feuille Google Sheets. Fais un essai avant de partager le lien aux invités.

## 3. Publier la page
Tu peux déposer les fichiers du dossier sur un hébergeur de pages statiques (par exemple GitHub Pages ou Netlify). Garde `index.html`, `style.css`, `script.js` et le dossier `assets` ensemble. Ensuite, partage le lien public sur WhatsApp.

## Important
Le modèle utilise une esthétique inspirée de la vidéo : fond sombre, détails dorés, prénoms élégants, galerie photos, date, programme, dress code et formulaire RSVP. Les textes, noms, horaires, lieux et photos sont des exemples à remplacer par les vraies informations.
