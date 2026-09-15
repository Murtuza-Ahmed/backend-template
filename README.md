# Backend Template

A production-oriented Node.js + Express backend foundation for building secure and scalable REST APIs.

## Phase 1 — Foundation

This phase establishes the project bootstrap, centralized environment handling, Express app startup, health checks, and graceful shutdown behavior.

### Included

- Express application bootstrap
- Centralized configuration with fail-fast validation
- Health check endpoint
- Graceful shutdown hooks
- Security headers and CORS support
- Basic structured logging setup
- Clean project scripts for local startup

### Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

Then visit:

- http://localhost:5000/
- http://localhost:5000/health

### Notes

- The configuration layer is the only place that reads environment variables.
- Missing required values stop the application at startup with a clear error.
- This repository intentionally keeps authentication, RBAC, and business modules out of the foundation phases.

## Database Setup

This project uses PostgreSQL through Prisma 7. Install PostgreSQL locally and create the development database before starting the API.

1. Install PostgreSQL.
2. Create a database, for example `backend_template_dev`.
3. Copy `.env.example` to `.env` and set `DATABASE_URL` to the PostgreSQL connection string.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Generate the Prisma client:

   ```bash
   npm run prisma:generate
   ```

6. Create and apply the development migration:

   ```bash
   npm run prisma:migrate -- --name init
   ```

7. Run the idempotent seed:

   ```bash
   npm run prisma:seed
   ```

8. Start the development server:

   ```bash
   npm run dev
   ```

9. Verify application health at `http://localhost:5000/health`.
10. Verify PostgreSQL readiness at `http://localhost:5000/health/ready`.

The API does not start when PostgreSQL is unavailable. Prisma Studio is available with:

```bash
npm run prisma:studio
```
