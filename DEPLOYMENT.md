# CI/CD & Deployment Strategy - Casa Yolotl & Co.

## 1. Environment Separation
- **Production (Public):** `casayolotl.com` (Targeting Vercel).
- **Admin Portal (Internal):** `admin.casayolotl.com` (Targeting Vercel with Subdomain).
- **Shared Infrastructure:** Common packages built during the CI pipeline.

## 2. Pipeline Stages (GitHub Actions / Vercel CI)
1. **Linting & Formatting:** Ensure code consistency across all workspaces.
2. **Security Scan:**
   - Integrate **Snyk** or **SonarQube** to scan for vulnerabilities in dependencies.
   - Fail build if high-severity vulnerabilities are found.
3. **Automated Testing:**
   - Run unit tests for `@casa-yolotl/shared`.
   - Run integration tests for `storefront` and `admin` portals.
4. **Staging Deployments:**
   - Automatic preview deployments for every Pull Request.
   - URLs provided to CIARO for architectural review.
5. **Production Release:**
   - Triggered on merge to `main`.
   - Concurrent deployment of both `storefront` and `admin` apps.

## 3. Access Control (Vercel/Cloudflare)
- **IP Whitelisting:** Implement at the CDN level (Cloudflare) for the `admin` subdomain to restrict access to trusted company IPs.
- **Environment Variables:** Managed separately in the Vercel dashboard for each app.
