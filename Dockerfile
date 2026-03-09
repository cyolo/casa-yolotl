# Multi-stage Dockerfile for Next.js Monorepo (Casa Yolotl)
# Optimized for GCP Cloud Run

# 1. Base image with pnpm
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# 2. Dependency Installer
FROM base AS deps
RUN pnpm install --frozen-lockfile

# 3. Builder
FROM base AS builder
COPY --from=deps /app/node_modules /app/node_modules
# ENV variables for build time (if needed, otherwise pass via Cloud Build)
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build

# 4. Runner
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone builds (assuming monorepo layout)
# Note: Cloud Build will handle injecting the correct app via args or multiple images
COPY --from=builder /app/apps/${APP_NAME}/.next/standalone ./
COPY --from=builder /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --from=builder /app/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

USER nextjs

EXPOSE 3000
ENV PORT 3000
# Server command for standalone mode
CMD ["node", "apps/server.js"]
