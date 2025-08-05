#!/bin/bash

# VoiceVision Vercel Deployment Script
# This script automates the deployment process

echo "🚀 Starting VoiceVision Vercel Deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if API key is set
if [ -z "$GOOGLE_AI_API_KEY" ]; then
    echo "⚠️ GOOGLE_AI_API_KEY environment variable not set"
    echo "Please set it before deploying:"
    echo "export GOOGLE_AI_API_KEY=your_api_key_here"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

# Set environment variables
echo "🔧 Setting environment variables..."
echo $GOOGLE_AI_API_KEY | vercel env add GOOGLE_AI_API_KEY production

echo "✅ Deployment complete!"
echo "Your VoiceVision app should be live on Vercel!"
