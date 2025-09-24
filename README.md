# Site Web Portfolio

Portfolio de la développeuse Hiromi Waguet.
Construit principalement avec **HTML**, **CSS** **et JavaScript**, ce site présente des projets réalisés avec des CMS ainsi que des applications développées avec des langages web.
Il est disponible en français et en japonais.

---

## Fonctionnalités

- Présentation du profil et du parcours
- Présentation des compétences (Front-end, Back-end, CMS, Environnements, UI/UX, Graphisme)
- Applications réalisées (ex. : ToDo List en PHP, mini-jeux en JavaScript)
- Sites réalisés avec des CMS
- Formulaire de contact (Formspree)
- Basculement entre français et japonais
- Défilement fluide vers le haut de la page (bouton Haut de page)

---

## Technologies utilisées

- **Front-end :** HTML, CSS, JavaScript
- **UI/UX & Prototypage :** Figma (utilisé pour la création de wireframes)
- **Graphisme :** Illustrator, Photoshop (création de certains logos, optimisation d’images)
- **Environnements :** GitHub (gestion du dépôt et mise en ligne)

---
  
## Caractéristiques de mise en œuvre

- **Responsive design**
  - Plusieurs points de rupture (500px, 768px, 960px, 1200px) assurent l’adaptation aux écrans PC, tablette et mobile.
  
- **Accessibilité**
  - Tous les visuels possèdent un attribut `alt`.
  - Les champs de formulaire sont obligatoires (`required`).
  - Les styles `:focus-visible` améliorent la lisibilité au clavier.
  
- **Optimisation SEO**
  - Balises `meta description`, `meta keywords`, et balises Open Graph (`og:*`) pour optimiser le référencement et le partage sur les réseaux sociaux.
  
- **Éco-conception**
  - Préchargement optimisé des polices Google (`preconnect`), images compressées, code allégé.

- **Expérience utilisateur (UX)**
  - Cartes interactives avec animation flip
  - Défilement fluide et bouton “Retour en haut”
  - Liens pour changer de langue (FR / JP)
  
- **Validation qualité**
  - Vérifié avec le **validateur CSS W3C** et le **Nu Html Checker (aucune erreur)**. Logos de validation affichés en bas de page.

---

## Installation locale

Ce portfolio est un **site web statique**.

Pour tester en local :

1. Cloner le dépôt :

   ```bash
    git clone https://github.com/Hiromi-k57/Portfolio.git
    cd Portfolio
      ```

2. Ouvrir `index.html` dans un navigateur.
   - Aucune configuration serveur n’est nécessaire (HTML/CSS/JS uniquement).
  
---

## Améliorations prévues

- Ajout de nouvelles applications et de nouveaux sites web
- Mise en place d’un mode clair/sombre
- Optimisation des performances avec Lighthouse

---

## Licence

### Images et illustrations

- Les logos et images du dossier `portfolio-logo` sont utilisés conformément aux licences respectives.

### Polices

- Google Fonts – Lexend Deca
  