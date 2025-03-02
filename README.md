# Next.js + Jest

## Introduction

Ce projet démontre comment configurer Jest pour fonctionner avec Next.js. Il inclut la prise en charge intégrée de Next.js pour le CSS global, les modules CSS et TypeScript, ainsi que la compatibilité avec l'App Router et les React Server Components.

> **Note :** Les tests étant souvent placés à côté des fichiers de l'App Router, ceux-ci sont situés dans le dossier `app/` pour illustrer cette approche (différente de `pages/`). Cependant, vous pouvez toujours organiser vos tests dans `__tests__/` selon vos préférences.

---

## Déploiement

Déployez facilement votre propre version de ce projet avec Vercel :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

---

## Installation et utilisation

### Cloner et initialiser le projet

Exécutez `create-next-app` avec npm, Yarn ou pnpm pour démarrer le projet :

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

### Exécution des tests

Lancez les tests avec la commande :

```bash
npm test
```

---

## Support Docker

Le projet prend en charge Docker pour simplifier l'exécution en environnement isolé.

### Utilisation de Docker Compose

- **Mode développement (hot reload activé) :**
  ```bash
  docker compose up app
  ```

- **Exécuter les tests :**
  ```bash
  docker compose run test
  ```

- **Mode production :**
  ```bash
  docker compose up prod
  ```

- **Arrêter tous les conteneurs :**
  ```bash
  docker compose down
  ```

---

## Intégration et déploiement continu (CI/CD)

### **CircleCI et GitFlow**

Le projet suit une approche **GitFlow** avec différentes branches pour organiser le développement et les déploiements.

#### **Branches principales :**

- `main` : Branche de production
- `integration` : Branche dédiée aux tests d'intégration
- `develop` : Branche principale de développement
- `feature/*` : Branches pour le développement de nouvelles fonctionnalités
- `hotfix/*` : Branches pour les corrections de bugs critiques

#### **Workflows CI/CD :**

Les workflows CircleCI exécutent automatiquement des tests et déploiements en fonction de la branche ciblée.

- **Branche `main` (Production) :**
  - Build et exécution des tests
  - Déploiement automatique sur l'environnement de production

  ![Config_production](docs/img/config_production.png)

- **Branche `integration` (Tests) :**
  - Build et tests
  - Déploiement automatique sur l'environnement de test

  ![Workflow_int](docs/img/integration_pipeline.png)

- **Branche `develop` (Développement) :**
  - Build et tests
  - Déploiement automatique en environnement de développement

  ![Workflow_dev](docs/img/develop_pipeline.png)

- **Branches `feature/*` (Fonctionnalités) :**
  - Build et tests sur les nouvelles fonctionnalités

  ![Workflow_feat](docs/img/feature_pipeline.png)

- **Branches `hotfix/*` (Corrections urgentes) :**
  - Build et tests pour assurer la stabilité des correctifs, car ces branches demanderont de merge sur main et develop une fois terminées.

  ![Workflow_hotfix](docs/img/hotfix_pipeline.png)

- **Branches non reconnues (Par défault):**
  - Un workflow par défaut est exécuté pour assurer un contrôle minimal lorsqu'une branche n'est pas reconnue ou mal nommée

  ![Workflow_undefined](docs/img/undefined_pipeline.png)

---

## **Analyses de performance des pipelines CI/CD**

Deux configurations CircleCI ont été testées pour optimiser le pipeline CI/CD.

#### **1ère configuration** ([config.yml](.circleci/config.yml))
- Optimisée avec **3 jobs par workflow**, chaque job contenant plusieurs étapes
- **Durée moyenne de CI/CD :** 45 secondes
- Meilleure vitesse grâce à la réduction du nombre de jobs

  ![Config_production](docs/img/config_production.png)

#### **2nde configuration** ([config.old.yml](.circleci/config.old.yml))
- Plus lisible mais avec **plus de jobs et de dépendances**
- **Durée moyenne de CI/CD :** 2 minutes 45 secondes (**300% plus long que la première version**)

  ![Config_production_old](docs/img/config_production_old.png)
  ![Temps_config2](docs/img/temps_config2.png)

---

## Déploiement avec Vercel

L’application est déployée automatiquement sur **Vercel**, synchronisée avec le repository GitHub.

- **Branches déclenchant un déploiement :** `main`, `develop`, `integration`
- Déploiement automatique à chaque push sur ces branches

🔗 **Serveur de production :** <https://epsi-indu-tests.vercel.app/>

---

## Conclusion

Ce projet combine **Next.js, Jest et Docker**, avec une **intégration CircleCI optimisée** pour un pipeline rapide et efficace. Il assure un déploiement automatique grâce à **Vercel** et suit une gestion des branches structurée via **GitFlow**.

Des optimisations futures peuvent être envisagées pour **réduire le temps de CI/CD** et améliorer **l'évolutivité du pipeline**.
