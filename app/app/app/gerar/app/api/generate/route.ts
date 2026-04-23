cat > .env.local << 'EOF'
# Public application name displayed in the app
NEXT_PUBLIC_APP_NAME=Content Kit IA

# API base URL - use http://localhost:3000 for local development or your Vercel deployment URL in production
NEXT_PUBLIC_API_URL=http://localhost:3000

# Your OpenAI API key - replace with your actual key
OPENAI_API_KEY=seu_key_aqui

# Secret key used for JWT token signing - generate a long, secure random string
JWT_SECRET=sua_chave_secreta_long_aqui
EOF

# Optional: Set permissions for security (optional, as .env.local is typically gitignored)
chmod 600 .env.local
