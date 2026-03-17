# Casa Yolotl - Enterprise Infrastructure Architecture (Phase 5)

This document outlines the 12-Factor App architecture and the parametric lockdown implemented to ensure data sovereignty and delivery excellence.

## 1. Environmental Lifecycle

The system supports three strictly isolated environments:

| Environment | Purpose | Data Source | Auth Protocol | Deployment |
|-------------|---------|-------------|---------------|------------|
| **Local** | "Embedded" Dev | **Static** (Forced) | HTTP (Local) | Local Node/Turbopack |
| **Development** | Integration Testing | Supabase (Dev) | HTTPS (Custom) | Cloud Run (DEV) |
| **Production** | Live Operations | Supabase (Prod) | HTTPS (Strict) | Cloud Run (PRD) |

## 2. Security Sovereignty (Secret Manager)

Sensitive data NEVER resides in the source code or build logs. The delivery pipeline uses **GCP Secret Manager** to inject credentials at runtime:

- **Build Time:** No secrets injected. Container images are agnostic.
- **Run Time:** Cloud Run retrieves secrets via the `--set-secrets` flag in `cloudbuild.yaml`.

### Secret Map
- `NEXTAUTH_SECRET`: Core encryption key for session JWTs.
- `GOOGLE_CLIENT_SECRET`: OAuth 2.0 credential.
- `SUPABASE_SERVICE_ROLE_KEY`: Private key for administrative database bypass.

## 3. DevOps Lifecycle (12-Factor)

### Deployment Flow
1. **Source:** Commit to `dev` or `main` branches.
2. **CI (Cloud Build):** triggers a container build using `Dockerfile`.
3. **Artifact Registry:** Stores the immutable versioned image.
4. **CD (Cloud Run):** Deploys the container and attaches Secret Manager versions.

### Fail-Fast Gates
- **GCP_PROJECT_ID**: The app refuses to start if not targeted at a specific GCP project.
- **Admin Lockdown**: In Production, only `cesar.vargas.alanis@gmail.com` is granted administrative access.
- **Embedded Guard**: Local runs automatically ignore cloud overrides to prevent accidental data contamination.

---
*Casa Yolotl & Co. - Curaduría de Arte Ancestral y Excelencia Artesanal*
