# /commit

> Commande pour sauvegarder l'état actuel du workspace via un commit git.

---

## Mission

Quand je lance `/commit`, exécute la séquence suivante :

### Étape 1 : Vérifier l'état du dépôt

1. Si le dossier n'est pas encore un dépôt git, initialise-le avec `git init`
2. Lance `git status` pour voir ce qui a changé
3. Lance `git diff --stat` pour avoir un aperçu des modifications

### Étape 2 : Préparer le commit

1. Ajoute tous les fichiers modifiés avec `git add -A`
2. Analyse les changements pour rédiger un message de commit clair et descriptif en français
3. Le message doit résumer ce qui a été modifié (ex : "Mise à jour contexte INNOVA ALPHA", "Ajout commande commit", etc.)

### Étape 3 : Effectuer le commit

Lance la commande suivante avec le message rédigé :

```
git commit -m "<message descriptif>"
```

### Étape 4 : Confirmer

Affiche un résumé :
- Nombre de fichiers sauvegardés
- Message du commit utilisé
- Hash court du commit

---

## Règles importantes

- Ne pas pousser sur un remote sauf si je le demande explicitement
- Ne jamais inclure dans le commit des fichiers sensibles (.env, mots de passe, clés API)
- Si aucun changement n'est détecté, signale-le clairement : "Rien à sauvegarder, le workspace est déjà à jour."
- Le message de commit doit être en français, concis et informatif
- Toujours confirmer le succès du commit avec le hash et le nombre de fichiers
