# Contexte Projet — J'KAM

## Qui est le client

Le client s'appelle Léonce Thaddée SANAMA, il se fait appeler Alpha. C'est un expert en maintenance informatique basé à Yaoundé, quartier Bastos, au Cameroun. Il travaille seul en tant que technicien indépendant et cherche à professionnaliser et structurer son activité de dépannage informatique à domicile grâce à une application web.

Son numéro de contact est le +237 679 664 067 (WhatsApp). Son site web cible est jkam.cm.

---

## Le projet : J'KAM

J'KAM est une Progressive Web App (PWA) mobile-first destinée à permettre à Alpha de recevoir des demandes d'intervention de manière structurée, professionnelle et automatisée, sans dépendre uniquement du bouche-à-oreille et des messages WhatsApp non structurés.

Le nom J'KAM vient du Camfranglais et signifie "Je viens". Le slogan officiel est "On KAM, on règle". L'apostrophe dans J'KAM est une signature visuelle distincte de la marque.

Le domaine cible est jkam.cm. Toute la tarification est en FCFA exclusivement. L'application est en français.

---

## Identité de marque

La palette de couleurs est composée de deux teintes : bleu marine (#1A366B) et jaune chartreuse (#CCFF00). Le jaune chartreuse a été retenu après évaluation, et l'orange a été écarté. Le concept du logo est une épingle de localisation fusionnée avec un éclair. L'apostrophe dans J'KAM fonctionne comme élément visuel fort dans toutes les déclinaisons de la marque.

---

## Ce qui a déjà été produit

Un cahier des charges fonctionnel complet a été rédigé (version 1.0, juin 2025). Il couvre le résumé du projet, les objectifs, les profils utilisateurs, les pages et fonctionnalités, les parcours utilisateurs, les données à stocker, les règles métier, la roadmap, les risques, et les recommandations de lancement.

Des lignes directrices de marque (brand guidelines) ont été produites sous forme de document Word, ainsi que des spécifications fonctionnelles et techniques.

Un prompt de développement structuré en 10 étapes a été préparé, prêt à être utilisé dans VS Code avec Claude Code pour lancer la construction de la PWA.

Un guide de configuration WhatsApp Business a été rédigé avec les messages d'accueil, d'absence, et les réponses rapides.

Un prompt Claude Design a été préparé pour produire les supports de communication : cartes de visite, en-têtes, factures, formulaires d'intervention, gabarits réseaux sociaux, maquettes de t-shirt.

---

## Stack technique choisi

React 18 avec Vite, Tailwind CSS, Vite PWA Plugin, Firebase Firestore et Firebase Auth, React Router v6, Firebase Hosting. L'application est pensée pour être installable sur Android sans passer par le Play Store via le mécanisme PWA natif. Une voie TWA (Trusted Web Activity) est envisagée pour une éventuelle soumission au Play Store dans une phase ultérieure.

Les coordonnées de référence pour le calcul de distance sont celles de Bastos, Yaoundé : latitude 3.8721, longitude 11.5167.

---

## Phase actuelle du projet

On est en phase de préparation au développement. Le cahier des charges est validé. Les documents de marque et les spécifications sont produits. Le prochain jalon est le lancement du développement de la PWA avec Claude Code dans VS Code.

Le MVP est prévu en 8 à 12 semaines de développement. La roadmap est structurée en trois phases : Phase 1 MVP solo technicien (semaines 1 à 8), Phase 2 améliorations post-lancement (mois 3 à 6), Phase 3 évolution multi-techniciens (mois 6 et au-delà).

---

## Fonctionnalités du MVP (Phase 1)

La page d'accueil présente le hero en bleu marine avec logo et slogan en jaune chartreuse, un bouton principal "Demander une intervention", une présentation des services avec tarifs de base, une section "Pourquoi J'KAM", des témoignages clients, un footer avec contacts, et un bouton WhatsApp flottant permanent.

La page services et tarifs affiche la grille tarifaire complète en FCFA : diagnostic à domicile 5 000 FCFA, dépannage PC/laptop 10 000 à 20 000 FCFA, installation logiciel 5 000 à 10 000 FCFA, suppression de virus 10 000 à 15 000 FCFA, configuration Wi-Fi 8 000 à 12 000 FCFA, maintenance préventive 15 000 FCFA, récupération de données 20 000 à 50 000 FCFA, télémaintenance 5 000 à 10 000 FCFA, forfait PME mensuel à partir de 50 000 FCFA par mois.

Le formulaire de demande d'intervention collecte le nom complet, le numéro WhatsApp, le type de service, la description du problème, la date et heure souhaitées, la localisation via geolocation ou saisie manuelle du quartier, et le niveau d'urgence. Le tarif estimé est calculé et affiché dynamiquement selon la distance depuis Bastos : moins de 5 km = 0 FCFA de supplément, entre 5 et 15 km = 2 000 à 5 000 FCFA, plus de 15 km = 5 000 à 10 000 FCFA. Le supplément urgence est de 5 000 FCFA.

La page de confirmation affiche le récapitulatif de la demande, un message de prise en charge, un bouton "Confirmer sur WhatsApp" avec message pré-rempli, et un bouton d'appel direct.

Le tableau de bord technicien est protégé par mot de passe. Il liste toutes les demandes avec leurs statuts (En attente, Confirmé, En cours, Terminé, Annulé), affiche le détail de chaque demande, permet le changement de statut rapide, donne accès à l'historique complet, et affiche les indicateurs du mois (nombre d'interventions, revenus estimés).

---

## Règles métier importantes

Le paiement est uniquement en Mobile Money ou en espèces à l'arrivée du technicien. Aucun paiement en ligne n'est prévu dans le MVP. Le tarif affiché dans l'application est une estimation, pas un engagement contractuel. La confirmation de rendez-vous passe obligatoirement par WhatsApp. Le délai de réponse affiché est de 30 minutes maximum. Les données de localisation GPS ne servent qu'au calcul de distance et ne sont jamais partagées. Aucune donnée bancaire n'est stockée.

---

## Ce que le MVP ne fait PAS

Pas de marketplace multi-techniciens. Pas de paiement en ligne. Pas de création de compte obligatoire pour le client. Pas de chat en temps réel dans l'application. Tout le contact passe par WhatsApp.

---

## Contexte marché

La cible principale est Yaoundé, quartier Bastos et environs, avec des particuliers et des PME. Les clients utilisent des smartphones Android entrée ou milieu de gamme avec une connexion 3G instable. Ils sont habitués à WhatsApp et au Mobile Money. Leurs principales craintes sont les prix cachés et les techniciens peu sérieux.

---

## Outils de développement

VS Code avec Claude Code est l'environnement de développement. Figma est utilisé pour le design (Alpha a une expérience préalable avec le workflow de traçage d'image). Pour la génération du logo, des prompts ont été préparés pour Ideogram et Midjourney. L'hébergement final se fait sur Firebase Hosting.

---

## Prochaines étapes

Lancement du développement de la PWA avec le prompt Claude Code en 10 étapes. Finalisation du logo via Figma ou génération IA. Déploiement sur Firebase Hosting. Production des supports de communication via Claude Design. Envisager la voie TWA pour le Play Store dans une phase ultérieure.

---

## Indicateurs de succès MVP (objectif mois 1)

10 demandes minimum reçues via le site. Taux de conversion demande vers intervention de 60% minimum. Temps de réponse WhatsApp inférieur à 30 minutes. 80% de clients avec feedback positif. 50 000 FCFA minimum de revenus générés via le site.

---

## Statut

**En veille** — Projet gelé, à reprendre après livraison complète d'Aquafarm Cameroun et stabilisation des revenus INNOVA ALPHA.
