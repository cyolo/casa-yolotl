# 🌿 CASA YOLOTL & CO - Enterprise Monorepo

## 📖 Vision & Strategic Mission

> **"Representando cultura con disciplina empresarial."**

Casa Yolotl & Co. is not just a marketplace; it is a high-fidelity enterprise ecosystem designed for the internationalization of authentic Mexican artisanal products. Our strategic objective is to bridge ancestral cultural value with modern business excellence, targeting a **20-25% ROI** through operational optimization and global market penetration.

---

## 🏗️ Ecosystem Architecture

This monorepo leverages a modern, scalable architecture to separate concerns while maintaining a unified business logic.

| Component | Path | Description | Access Policy |
| :--- | :--- | :--- | :--- |
| **Admin Portal** | `apps/admin` | Direction & Operations Center. Managed performance, inventory, and strategic storytelling. | **Restricted (CEO Humano Only)** |
| **Storefront** | `apps/storefront` | Global Cultural Showcase. Optimized for conversion and SEO in multiple languages (ES, EN, FR). | **Public** |
| **Shared Core** | `packages/shared` | Centralized Business Logic, Role-Based Access Control (RBAC), and Repository Patterns. | **Internal Shared** |

### 🛠️ Tech Stack
- **Framework**: Next.js 15+ (App Router & Turbopack)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 (Premium Accessible Design System)
- **Auth**: NextAuth.js (Identity Governance)
- **Language**: TypeScript (Type-Safe Enterprise Logic)

---

## 🔐 Security & Governance (Zero Trust)

We implement a **Zero Trust Security Model** to protect the integrity of the Casa Yolotl brand and its data.

- **Identity Governance**: Authentication is strictly managed via Google and GitHub SSO providers.
- **SSO Lockdown**: The Admin Portal (`apps/admin`) operates in a restricted mode. Access is granted exclusively to verified identities (authorized emails) defined in the security layer.
- **Operational Policy**: All development and operations follow the **FOPPS (Framework of Operational Policies & Procedures)**, ensuring high standards in every cultural and commercial transaction.

---

## 🚀 Development Workflow

### Prerequisites
- **Node.js**: 20+ (LTS)
- **NPM**: Workspaces enabled

### Core Commands
Execute these from the root directory:

```bash
# Launch the entire ecosystem (Local Development)
# Admin runs on :3001 | Storefront runs on :3000
npm run dev

# Industrial Build (Production Preparation)
npm run build

# Quality Enforcement
npm run lint
```

---

## 🌐 Deployment & Infrastructure

- **CI/CD**: Managed through automated pipelines (Refer to [DEPLOYMENT.md](DEPLOYMENT.md)).
- **Environment Management**: Critical credentials and API keys are strictly managed via Environment Variables to ensure zero leakage of sensitive data.
- **Scalability**: The architecture is designed for multi-region accessibility with high-availability targets.

---

## 🗺️ Organizational Mapping

Management and development follow a structured organizational chart to ensure accountability and strategic alignment:

> [!NOTE]
> **CEO Humano**: The final strategic and financial authority. Owns the brand vision and ROI targets.
> 
> **CEO IA**: Strategic Copilot and simulation engine. Analyzes market trends and optimizes operational efficiency.
> 
> **CIARO**: Governance and AI Resources. Ensures alignment with the FOPPS framework and technical stability.

---
*© 2026 Casa Yolotl & Co. - Proprietary Enterprise Infrastructure.*
