# Multi-stage Dockerfile for Casa Yolotl Next.js Monorepo
# Target: Google Cloud Run compatible images
# Package manager: npm workspaces

FROM node:20-slim AS deps
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
COPY apps/storefront/package.json apps/storefront/package.json
COPY apps/admin/package.json apps/admin/package.json
COPY packages/shared/package.json packages/shared/package.json

RUN npm ci

FROM node:20-slim AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXTAUTH_SECRET
ARG ALLOWED_ADMIN_EMAILS
ARG AUTHORIZED_ADMIN_EMAIL
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG DATA_SOURCE
ARG GCP_PROJECT_ID
ARG APP_ENV

ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV ALLOWED_ADMIN_EMAILS=$ALLOWED_ADMIN_EMAILS
ENV AUTHORIZED_ADMIN_EMAIL=$AUTHORIZED_ADMIN_EMAIL
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV DATA_SOURCE=$DATA_SOURCE
ENV GCP_PROJECT_ID=$GCP_PROJECT_ID
ENV APP_ENV=$APP_ENV

RUN npm run build --workspaces --if-present

FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

ARG APP_NAME

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/${APP_NAME}/.next/standalone ./
COPY --from=builder /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --from=builder /app/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
