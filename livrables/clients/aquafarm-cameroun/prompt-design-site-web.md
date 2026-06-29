# Prompt Claude Design — Site Web Aquafarm Cameroun

> À utiliser dans Claude Design ou tout outil de design IA pour générer les maquettes du site web d'Aquafarm Cameroun.

---

## PROMPT PRINCIPAL

---

Tu vas concevoir le site web d'**Aquafarm Cameroun**, une ferme piscicole basée à Mfou (Cameroun), spécialisée dans la production et la vente d'alevins de silure et de silures adultes. C'est le leader émergent de son secteur au Cameroun, avec une croissance de 15 000 à 270 000 alevins par cycle en 6 ans.

---

### IDENTITÉ ET POSITIONNEMENT

**Nom :** Aquafarm Cameroun SCOOPS
**Slogan :** "La Maison des Alevins"
**Positionnement :** Ferme piscicole de référence nationale. Rigoureuse, fiable, proche.
**Cibles :** Pisciculteurs professionnels, grossistes, restaurateurs, entrepreneurs agricoles.
**Marché :** Cameroun. Langue : français exclusivement.

---

### PALETTE DE COULEURS — À RESPECTER STRICTEMENT

- Bleu roi `#1A4FA0` — couleur d'autorité, aplats principaux
- Bleu encre `#0D2747` — titres, texte fort, fond sombre
- Bleu ciel `#4DB8FF` — accents, CTA, filets, effets lumineux (toujours en touches, jamais dominant)
- Blanc `#FFFFFF` — respirations, fonds de sections claires
- Nuances complémentaires : `#123A78`, `#081832`, `#2F9FE8`, `#7ACCFF`, `#E8F1FB`

L'univers visuel est aquatique, profond, vivant. L'eau est partout : dans les textures, les dégradés, les formes organiques.

---

### TYPOGRAPHIE

- **Titres :** Playfair Display (Bold, Black, Italic) — noblesse, autorité
- **Corps et labels :** Montserrat (Regular, SemiBold, Bold) — lisibilité, modernité
- Titres héros très grands (78–86px), chiffres clés massifs (40–48px), corps confortable (13px, interligne 1.7)

---

### STYLE VISUEL — DESIGN 2026

Ce site ne doit pas ressembler à un site générique généré par IA. Il doit être mémorable, sensoriel, vivant.

**Principes directeurs :**

- **Bento grid asymétrique** pour les sections de présentation : blocs de tailles différentes, tensions visuelles intentionnelles, pas de colonnes symétriques banales
- **Typographie oversized** : les chiffres clés (270 000 alevins, 95% taux de survie, 6 ans de croissance) sont traités comme des éléments graphiques massifs en arrière-plan ou en superposition
- **Immersion aquatique** : effets de reflet d'eau, texture de surface liquide subtile, dégradés profonds du bleu encre vers le bleu roi. Pas de clichés : pas d'ondulations CSS basiques, mais des formes organiques vectorielles qui évoquent le mouvement de l'eau
- **Scroll-triggered animations** : chaque section s'éveille à l'entrée. Les chiffres se comptent, les éléments glissent, les courbes de croissance se tracent sous les yeux du visiteur
- **Parallax subtil** sur les photos : les arrière-plans bougent légèrement au scroll pour créer de la profondeur
- **Glassmorphism maîtrisé** : cartes avec fond semi-transparent sur les sections sombres, pas de blanc laiteux généralisé
- **Grain texture ultraléger** en superposition sur les sections sombres pour éviter le rendu plastique
- **Photos captivantes en pleine largeur** : bassins piscicoles, alevins en masse, équipe en action, paysage de Mfou. Toujours avec une légère teinte bleue intégrée pour cohérence

---

### ARCHITECTURE DU SITE — 4 PAGES

#### PAGE 1 — ACCUEIL

**Hero (plein écran) :**
Photo immersive d'un bassin rempli de silures. Texte centré :
- Eyebrow : filet bleu ciel + "FERME PISCICOLE DE MFOU — DEPUIS 2020"
- Titre héros : "La Maison des Alevins" en Playfair Display Black, blanc sur fond sombre
- Sous-titre : "270 000 alevins par cycle. Taux de survie 95%. Livraison partout au Cameroun."
- Deux CTA côte à côte : **[Commander maintenant]** (bouton plein bleu ciel) + **[Voir nos produits]** (bouton contour blanc)
- Indicateur de scroll animé en bas

**Section chiffres clés :**
Fond bleu encre `#0D2747`. Quatre métriques massives en Playfair Display, comptées en animation au scroll :
- 270 000 alevins / cycle
- 95% taux de survie garanti
- 6 ans de croissance continue
- Livraison dans tout le Cameroun

**Section courbe de croissance :**
Graphique animé de la trajectoire 2020–2026 (15 000 → 270 000). Ligne fine bleu ciel qui se trace progressivement au scroll. Titre : "Une croissance qui parle d'elle-même."

**Bento grid produits :**
Deux grands blocs asymétriques côte à côte :
- Bloc Alevins de Silure : photo macro d'alevins, prix 60–80 FCFA/unité, CTA "Commander des alevins"
- Bloc Silures Adultes : photo de silures calibrés, prix 2 000 FCFA/kg, CTA "Commander des silures"
Le troisième bloc plus petit en bas : Aliments pour poissons.

**Section pourquoi Aquafarm :**
Trois piliers en icônes épurées + texte court :
- Disponibilité 24h / 7j
- Sans minimum de commande
- Équipe de 3 ingénieurs spécialisés

**Section témoignages :**
Fond bleu roi. Citations de pisciculteurs partenaires. Carrousel discret avec navigation.

**Footer :**
Fond bleu encre très sombre `#081832`. Logo, contacts WhatsApp et appel, email, localisation Mfou. Bouton WhatsApp flottant permanent en bas à droite sur toutes les pages.

---

#### PAGE 2 — ALEVINS DE SILURE

**Hero compact :**
Photo pleine largeur de bassins d'alevins. Titre : "Alevins de Silure — La base de votre production."

**Détail produit :**
- Tailles disponibles : 5g et 10g (sélecteur visuel interactif)
- Prix : 60 à 80 FCFA/unité selon calibre
- Capacité : 270 000 par cycle
- Garantie 95% de survie mise en avant en badge visuel

**Simulateur de commande personnalisé :**
Interface interactive en bento card. Le visiteur entre :
1. La quantité souhaitée (slider ou saisie)
2. Le calibre (5g ou 10g)
3. La zone de livraison (Yaoundé, autre ville)

→ Le montant estimé s'affiche dynamiquement en temps réel.
→ CTA : **[Confirmer ma commande sur WhatsApp]** → pré-remplit un message WhatsApp avec le récapitulatif.

**Section process de livraison :**
Étapes visuelles numérotées : Commande → Confirmation WhatsApp → Préparation → Livraison.

**FAQ pisciculteurs :**
Questions types : délai de préparation, conditions de transport, paiement Mobile Money.

---

#### PAGE 3 — SILURES ADULTES

**Hero compact :**
Photo de silures calibrés 500g prêts à la vente.

**Détail produit :**
- Calibre unique : 500g
- Prix : 2 000 FCFA/kg
- Cibles : grossistes, restaurateurs, hôtels

**Simulateur de commande personnalisé :**
Même logique que page Alevins :
1. Quantité en kg souhaitée
2. Zone de livraison
→ Estimation dynamique du montant.
→ Frais de livraison : mention claire "aux frais du client selon quantité et distance".
→ CTA WhatsApp pré-rempli.

**Section débouchés :**
Icônes + texte : Restaurants, Marchés, Hôtels, Revendeurs.

---

#### PAGE 4 — CONTACT ET COMMANDE

**Formulaire de prise de contact structuré :**
Champs : Nom complet, Type de client (Pisciculteur / Grossiste / Restaurateur / Autre), Produit souhaité, Quantité estimée, Zone de livraison, Message libre, Numéro WhatsApp.

À la soumission : message de confirmation + lien WhatsApp pré-rempli pour finaliser.

**Carte interactive :**
Localisation GPS de la ferme à Mfou (3.741719, 11.646729). Intégration Google Maps avec vue satellite pour montrer les bassins.

**Contacts directs :**
- WhatsApp commandes : +237 675 283 612 (bouton direct)
- Appels : +237 656 879 773
- Email : aquafarmcameroun@gmail.com
- Horaires : lun–sam 07h30–16h30

---

### ÉLÉMENTS TRANSVERSAUX

- **Bouton WhatsApp flottant** sur toutes les pages, toujours visible, fond vert WhatsApp avec animation de pulsation subtile
- **Navigation** : menu fixe semi-transparent (glassmorphism léger) qui se solidifie au scroll. Logo à gauche, liens au centre, bouton CTA "Commander" à droite
- **Mobile-first** : tout le site est pensé pour les smartphones Android. Simulateurs de commande utilisables au pouce. Textes lisibles sans zoom.
- **Chargement rapide** : images optimisées WebP, animations conditionnelles selon les performances de l'appareil
- **SEO intégré** : balises titre et méta orientées sur "alevins Cameroun", "achat silure Cameroun", "pisciculture Mfou", "ferme piscicole Cameroun"

---

### AMBIANCE GÉNÉRALE À OBTENIR

Quand le visiteur arrive sur ce site, il doit ressentir : profondeur, sérieux, confiance, vie. L'eau est présente sans être littérale. Les chiffres sont imposants, la croissance est tangible, la commande est à portée de clic. Ce n'est pas un site vitrine. C'est une machine à convertir des visiteurs en clients, habillée comme une marque premium camerounaise qui a de l'ambition.

---

*Prompt rédigé par INNOVA ALPHA pour le compte d'Aquafarm Cameroun — Juin 2026*
