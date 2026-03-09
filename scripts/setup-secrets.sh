#!/bin/bash
# Casa Yolotl - GCP Secret Manager Provisioning Script
# This script creates the necessary secrets in GCP Secret Manager.

PROJECT_ID=$(gcloud config get-value project)

echo "🚀 Provisioning secrets for project: $PROJECT_ID"

create_secret() {
    SECRET_NAME=$1
    echo "Creating secret: $SECRET_NAME"
    gcloud secrets create "$SECRET_NAME" --replication-policy="automatic" 2>/dev/null
    echo "Please enter the value for $SECRET_NAME:"
    read -r SECRET_VALUE
    echo -n "$SECRET_VALUE" | gcloud secrets versions add "$SECRET_NAME" --data-file=-
}

# Required Secrets for Casa Yolotl
create_secret "NEXTAUTH_SECRET"
create_secret "GOOGLE_CLIENT_SECRET"
create_secret "SUPABASE_SERVICE_ROLE_KEY"
create_secret "STRIPE_SECRET_KEY"

echo "✅ Secret provisioning complete. Cloud Run and Cloud Build are now ready to consume these values."
