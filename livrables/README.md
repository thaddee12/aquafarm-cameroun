# Livrables

Ce dossier contient tous les outputs produits par Claude pour les projets de Léonce Thaddée (INNOVA ALPHA, INTEGC, projets personnels).

---

## Règle d'or

| Direction | Emplacement |
|-----------|-------------|
| **Inputs** (documents que tu fournis : briefs, exports, captures, notes) | `context/import/` |
| **Outputs** (ce que Claude produit : code, contenu, designs, scripts) | `livrables/` |

Ne jamais mélanger les deux. Un fichier va dans `context/import/` si c'est une source. Il va dans `livrables/` si c'est un résultat.

---

## Organisation des sous-dossiers

| Dossier | Contenu |
|---------|---------|
| `sites-web/` | Sites internet (code, assets, exports) |
| `applications/` | Outils, scripts, automatisations |
| `youtube/` | Briefs vidéos, scripts, hooks, calendriers éditoriaux |
| `clients/` | Livrables par client (Aquafarm, General Engineering, etc.) |
| `innova-alpha/` | Livrables internes de l'agence (charte, site, templates) |

---

## Convention de nommage

Format recommandé : `[client-ou-projet]_[type-livrable]_[version]_[AAAA-MM]`

Exemples :
- `aquafarm_site-web_v1_2026-06/`
- `innova-alpha_presentation_v2_2026-07.pdf`
- `integc_formation-prompts_v1_2026-06.pptx`

Règles : minuscules, pas d'espaces, tirets entre les mots, underscores entre les blocs.
