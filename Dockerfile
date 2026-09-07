# ==========================================
# Multi-stage Dockerfile for Production Build
# ==========================================

# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (utilizing Docker layer caching)
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit

# Copy source files
COPY . .

# Build production bundle with optimized assets
RUN npm run build

# Stage 2: Production Nginx Server
FROM nginx:1.27-alpine-slim AS runner

# Remove default nginx static assets and configs
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built production assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Health check to ensure service readiness
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/healthz || exit 1

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
