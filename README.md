# 🌿 CASA YOLOTL & CO - Enterprise Monorepo

## 📖 Vision & Strategic Mission

> **"Representando cultura con disciplina empresarial."**

Casa Yolotl & Co. is a high-fidelity enterprise ecosystem designed for the global internationalization of authentic Mexican ancestral products. Our mission is to bridge cultural heritage with modern business excellence, targeting a **20-25% ROI** through zero-trust security, operational optimization, and multi-market penetration.

---

## 🏗️ Ecosystem Architecture (12-Factor)

This monorepo implements a **12-Factor App** architecture, ensuring strict isolation between environments and high delivery speed.

| Component | Path | Description | Access Policy |
| :--- | :--- | :--- | :--- |
| **Admin Portal** | `apps/admin` | Operations & Inventory Command Center. Managed via SSO. | **Restricted (CEO Only)** |
| **Storefront** | `apps/storefront` | Global Cultural Showcase. SEO-optimized for 26 languages. | **Public** |
| **Shared Core** | `packages/shared` | Centralized Business Logic, i18n Constants, and Repository Factory. | **Internal Shared** |

### 🛠️ Tech Stack
- **Framework**: Next.js 15+ (App Router & Turbopack)
- **Runtime**: Node.js 20+ (LTS)
- **Data Layer**: Supabase (PostgreSQL) + Multi-Repository Patterns
- **Auth**: NextAuth.js (Identity Governance)
- **Styling**: Tailwind CSS v4 (Premium Heritage Design)
- **Internationalization**: 26 Romance-focused Locales (ES, EN, FR, IT, PT, RO, etc.)

---

## 🔐 Parametric Lockdown & Security

We implement a **Zero Trust Security Model** with strict environmental boundaries:

- **Embedded Local Mode**: Development always runs in "Embedded Mode" (`DATA_SOURCE=static`). This guarantees a 100% offline-ready, isolated, and fast development experience.
- **Fail-Fast Validation**: The system refuses to start if critical environment-specific variables (like `GCP_PROJECT_ID` or `NEXTAUTH_SECRET`) are missing.
- **Identity Lockdown**: Admin access is strictly limited to verified CEO identities (`cesar.vargas.alanis@gmail.com`).
- **Secret Sovereignty**: Credentials NEVER reside in source code. We use **GCP Secret Manager** to inject sensitive keys at runtime.

---

## 🌐 Globalization (Massive i18n)

Casa Yolotl supports an advanced multi-locale routing system with **26 distinct Romance languages and dialects**, including regional varieties like Sicilian, Galician, and Neapolitan.

- **Default Locale**: English (`en`) for global consistency.
- **Safe Routing**: Intelligent middleware prevents "Path Stacking" and handles 2-letter, 3-letter, and composite locale codes (e.g., `roa-ter`).

---

## 🚀 DevOps & Infrastructure

### Deployment Lifecycle
1. **Local**: Zero-dependency embedded development.
2. **CI (Cloud Build)**: Multi-stage Docker builds triggered by branch commits.
3. **Registry**: Versioned images stored in GCP Artifact Registry.
4. **CD (Cloud Run)**: Automated deployment with Secret Manager injection.

### Standalone Optimization
Both apps are configured for `output: 'standalone'`, creating ultra-lightweight containers optimized for Cloud Run.

---

## 🗺️ Organizational & Governance Mapping

Management follows the **Mapa de Gobierno v1.0**:

> [!IMPORTANT]
> **CEO Humano**: Final strategic authority. Owns the brand and ROI targets.
> **CIARO**: Ensures technical governance, FOPPS compliance, and AI resource stability.
> **Infrastructure Documentation**: Refer to [INFRASTRUCTURE.md](INFRASTRUCTURE.md) for technical deep-dives into our deployment flow.

---
*© 2026 Casa Yolotl & Co. - Proprietary Enterprise Infrastructure.*
