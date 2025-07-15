## supabase-community
# Supabase MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--supabase-community--supabase-mcp--mcp-server-supabase
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--supabase-community--supabase-mcp--mcp-server-supabase  "node ./dist/transports/stdio.js --access-token access-token"
```

<sub>Source: catalog/supabase-community/supabase-mcp/mcp-server-supabase/README.md</sub>

---

## apimatic
# APIMatic Validator MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--apimatic--apimatic-validator-mcp--apimatic-validator-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e APIMATIC_API_KEY=apimatic-api-key \
ghcr.io/metorial/mcp-container--apimatic--apimatic-validator-mcp--apimatic-validator-mcp  "npm run start"
```

<sub>Source: catalog/apimatic/apimatic-validator-mcp/apimatic-validator-mcp/README.md</sub>

---

## apify
# Apify MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--apify--actors-mcp-server--actors-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e APIFY_TOKEN=apify-token \
ghcr.io/metorial/mcp-container--apify--actors-mcp-server--actors-mcp-server  "npm run start"
```

<sub>Source: catalog/apify/actors-mcp-server/actors-mcp-server/README.md</sub>

---

## Spathodea-Network
# OpenCTI MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--spathodea-network--opencti-mcp--opencti-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OPENCTI_URL=opencti-url \
ghcr.io/metorial/mcp-container--spathodea-network--opencti-mcp--opencti-mcp  "node ./build/index.js"
```

<sub>Source: catalog/Spathodea-Network/opencti-mcp/opencti-mcp/README.md</sub>

---

## awkoy
# Replicate Flux MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--awkoy--replicate-flux-mcp--replicate-flux-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e REPLICATE_API_TOKEN=replicate-api-token \
ghcr.io/metorial/mcp-container--awkoy--replicate-flux-mcp--replicate-flux-mcp  "node build/index.js"
```

<sub>Source: catalog/awkoy/replicate-flux-mcp/replicate-flux-mcp/README.md</sub>

---

## ihor-sokoliuk
# SearXNG MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ihor-sokoliuk--mcp-searxng--mcp-searxng
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SEARXNG_URL=searxng-url \
ghcr.io/metorial/mcp-container--ihor-sokoliuk--mcp-searxng--mcp-searxng  "node dist/index.js"
```

<sub>Source: catalog/ihor-sokoliuk/mcp-searxng/mcp-searxng/README.md</sub>

---

## the0807
# GeekNews MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--the0807--geeknews-mcp-server--geek-news-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--the0807--geeknews-mcp-server--geek-news-mcp-server  "python main.py"
```

<sub>Source: catalog/the0807/GeekNews-MCP-Server/geek-news-mcp-server/README.md</sub>

---

## chroma-core
# Chroma MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--chroma-core--chroma-mcp--chroma-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CHROMA_CLIENT_TYPE=chroma-client-type -e CHROMA_DATA_DIR=chroma-data-dir -e CHROMA_TENANT=chroma-tenant -e CHROMA_DATABASE=chroma-database -e CHROMA_API_KEY=chroma-api-key -e CHROMA_HOST=chroma-host -e CHROMA_PORT=chroma-port -e CHROMA_CUSTOM_AUTH_CREDENTIALS=chroma-custom-auth-credentials -e CHROMA_SSL=chroma-ssl -e CHROMA_DOTENV_PATH=chroma-dotenv-path -e CHROMA_COHERE_API_KEY=chroma-cohere-api-key \
ghcr.io/metorial/mcp-container--chroma-core--chroma-mcp--chroma-mcp  "chroma-mcp --client-type chroma-client-type --data-dir chroma-data-dir --tenant chroma-tenant --database chroma-database --api-key chroma-api-key --host chroma-host --port chroma-port --custom-auth-credentials chroma-custom-auth-credentials --ssl chroma-ssl --dotenv-path chroma-dotenv-path"
```

<sub>Source: catalog/chroma-core/chroma-mcp/chroma-mcp/README.md</sub>

---

## kaliaboi
# MCP Zotero

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kaliaboi--mcp-zotero--mcp-zotero
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ZOTERO_API_KEY=zotero-api-key -e ZOTERO_USER_ID=zotero-user-id \
ghcr.io/metorial/mcp-container--kaliaboi--mcp-zotero--mcp-zotero  "npm run start"
```

<sub>Source: catalog/kaliaboi/mcp-zotero/mcp-zotero/README.md</sub>

---

## yuna0x0
# HackMD MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yuna0x0--hackmd-mcp--hackmd-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HACKMD_API_TOKEN=hackmd-api-token \
ghcr.io/metorial/mcp-container--yuna0x0--hackmd-mcp--hackmd-mcp  "pnpm run start"
```

<sub>Source: catalog/yuna0x0/hackmd-mcp/hackmd-mcp/README.md</sub>

---

## delano
# Postman MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--delano--postman-mcp-server--postman-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e POSTMAN_API_KEY=postman-api-key \
ghcr.io/metorial/mcp-container--delano--postman-mcp-server--postman-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/delano/postman-mcp-server/postman-mcp-server/README.md</sub>

---

## Bigsy
# Clojars MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bigsy--clojars-mcp-server--clojars-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--bigsy--clojars-mcp-server--clojars-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/Bigsy/Clojars-MCP-Server/clojars-mcp-server/README.md</sub>

---

## mrjoshuak
# godoc-mcp

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mrjoshuak--godoc-mcp--godoc-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--mrjoshuak--godoc-mcp--godoc-mcp  "./out"
```

<sub>Source: catalog/mrjoshuak/godoc-mcp/godoc-mcp/README.md</sub>

---

## devhub
# DevHub CMS MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--devhub--devhub-cms-mcp--devhub-cms-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DEVHUB_API_KEY=devhub-api-key -e DEVHUB_API_SECRET=devhub-api-secret -e DEVHUB_BASE_URL=devhub-base-url \
ghcr.io/metorial/mcp-container--devhub--devhub-cms-mcp--devhub-cms-mcp  "devhub-cms-mcp"
```

<sub>Source: catalog/devhub/devhub-cms-mcp/devhub-cms-mcp/README.md</sub>

---

## wanaku-ai
# Wanaku - A MCP Router that connects everything

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--wanaku-ai--wanaku--wanaku
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--wanaku-ai--wanaku--wanaku  "java  $JAVA_OPTS -jar target/*jar"
```

<sub>Source: catalog/wanaku-ai/wanaku/wanaku/README.md</sub>

---

## baidubce
# Baidu AI Search

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--baidubce--app-builder--ai-search
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--baidubce--app-builder--ai-search  
```

<sub>Source: catalog/baidubce/app-builder/ai-search/README.md</sub>

---

## gotoolkits
# # mcp-difyworkflow-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--gotoolkits--mcp-difyworkflow-server--mcp-difyworkflow-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DIFY_WORKFLOW_NAME=dify-workflow-name -e DIFY_API_KEYS=dify-api-keys \
ghcr.io/metorial/mcp-container--gotoolkits--mcp-difyworkflow-server--mcp-difyworkflow-server  "./out"
```

<sub>Source: catalog/gotoolkits/mcp-difyworkflow-server/mcp-difyworkflow-server/README.md</sub>

---

## 0xDAEF0F
# Job Searchoor MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--0xdaef0f--job-searchoor--job-searchoor
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--0xdaef0f--job-searchoor--job-searchoor  "bun run start"
```

<sub>Source: catalog/0xDAEF0F/job-searchoor/job-searchoor/README.md</sub>

---

## kenjihikmatullah
# Productboard MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kenjihikmatullah--productboard-mcp--productboard-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PRODUCTBOARD_ACCESS_TOKEN=productboard-access-token \
ghcr.io/metorial/mcp-container--kenjihikmatullah--productboard-mcp--productboard-mcp  "node ./build/index.js"
```

<sub>Source: catalog/kenjihikmatullah/productboard-mcp/productboard-mcp/README.md</sub>

---

## andybrandt
# MCP Simple PubMed

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--andybrandt--mcp-simple-pubmed--mcp-simple-pubmed
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PUBMED_EMAIL=pubmed-email -e PUBMED_API_KEY=pubmed-api-key \
ghcr.io/metorial/mcp-container--andybrandt--mcp-simple-pubmed--mcp-simple-pubmed  "mcp-simple-pubmed"
```

<sub>Source: catalog/andybrandt/mcp-simple-pubmed/mcp-simple-pubmed/README.md</sub>

---

## leonardsellem
# n8n MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--leonardsellem--n8n-mcp-server--n-8-n-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e N8N_API_URL=n-8-n-api-url -e N8N_API_KEY=n-8-n-api-key -e N8N_WEBHOOK_USERNAME=n-8-n-webhook-username -e N8N_WEBHOOK_PASSWORD=n-8-n-webhook-password \
ghcr.io/metorial/mcp-container--leonardsellem--n8n-mcp-server--n-8-n-mcp-server  "npm run start"
```

<sub>Source: catalog/leonardsellem/n8n-mcp-server/n-8-n-mcp-server/README.md</sub>

---

# Verodat MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--verodat--verodat-mcp-server--verodat-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e VERODAT_AI_API_KEY=verodat-ai-api-key -e VERODAT_API_BASE_URL=verodat-api-base-url \
ghcr.io/metorial/mcp-container--verodat--verodat-mcp-server--verodat-mcp-server  "node ./build/src/consume.js"
```

<sub>Source: catalog/Verodat/verodat-mcp-server/verodat-mcp-server/README.md</sub>

---


# MCP MongoDB Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kiliczsh--mcp-mongo-server--mcp-mongo-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--kiliczsh--mcp-mongo-server--mcp-mongo-server MONGODB_URI "node ./build/index.js MONGODB_URI"
```

<sub>Source: catalog/kiliczsh/mcp-mongo-server/mcp-mongo-server/README.md</sub>

---


# Bitable MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--lloydzhou--bitable-mcp--bitable-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PERSONAL_BASE_TOKEN=personal-base-token -e APP_TOKEN=app-token \
ghcr.io/metorial/mcp-container--lloydzhou--bitable-mcp--bitable-mcp  "bitable-mcp"
```

<sub>Source: catalog/lloydzhou/bitable-mcp/bitable-mcp/README.md</sub>

---


# Desktop Commander MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--wonderwhy-er--desktopcommandermcp--desktop-commander-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--wonderwhy-er--desktopcommandermcp--desktop-commander-mcp  "npm run start"
```

<sub>Source: catalog/wonderwhy-er/DesktopCommanderMCP/desktop-commander-mcp/README.md</sub>

---


# Postmancer

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hijaz--postmancer--postmancer
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LOG_LEVEL=log-level \
ghcr.io/metorial/mcp-container--hijaz--postmancer--postmancer  "npm run start"
```

<sub>Source: catalog/hijaz/postmancer/postmancer/README.md</sub>

---

## Badhansen
# notion-mcp

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--badhansen--notion-mcp--notion-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NOTION_TOKEN=notion-token -e PAGE_ID=page-id -e NOTION_VERSION=notion-version -e NOTION_BASE_URL=notion-base-url \
ghcr.io/metorial/mcp-container--badhansen--notion-mcp--notion-mcp  "uv run main_adfin_mcp.py"
```

<sub>Source: catalog/Badhansen/notion-mcp/notion-mcp/README.md</sub>

---

## integromat
# Make MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--integromat--make-mcp-server--make-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MAKE_API_KEY=make-api-key -e MAKE_ZONE=make-zone -e MAKE_TEAM=make-team \
ghcr.io/metorial/mcp-container--integromat--make-mcp-server--make-mcp-server  "node build/index.js"
```

<sub>Source: catalog/integromat/make-mcp-server/make-mcp-server/README.md</sub>

---

## magarcia
# MCP Server Giphy

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--magarcia--mcp-server-giphy--mcp-server-giphy
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GIPHY_API_KEY=giphy-api-key \
ghcr.io/metorial/mcp-container--magarcia--mcp-server-giphy--mcp-server-giphy  "npm run start"
```

<sub>Source: catalog/magarcia/mcp-server-giphy/mcp-server-giphy/README.md</sub>

---

## yepcode
# # What is YepCode MCP Server?

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yepcode--mcp-server-js--mcp-server-js
```
2. Run the container:

```bash
docker run -i --rm \ 
-e YEPCODE_API_TOKEN=yepcode-api-token \
ghcr.io/metorial/mcp-container--yepcode--mcp-server-js--mcp-server-js  "npm run start"
```

<sub>Source: catalog/yepcode/mcp-server-js/mcp-server-js/README.md</sub>

---

## pydantic
# Logfire MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--pydantic--logfire-mcp--logfire-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--pydantic--logfire-mcp--logfire-mcp  "logfire-mcp"
```

<sub>Source: catalog/pydantic/logfire-mcp/logfire-mcp/README.md</sub>

---

## ambar
# simctl-mcp

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ambar--simctl-mcp--simctl-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ambar--simctl-mcp--simctl-mcp  "pnpm run start"
```

<sub>Source: catalog/ambar/simctl-mcp/simctl-mcp/README.md</sub>

---

## 34892002
# Bilibili MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--34892002--bilibili-mcp-js--bilibili-mcp-js
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--34892002--bilibili-mcp-js--bilibili-mcp-js  "bun run start"
```

<sub>Source: catalog/34892002/bilibili-mcp-js/bilibili-mcp-js/README.md</sub>

---

## keturiosakys
# Bluesky Context Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--keturiosakys--bluesky-context-server--bluesky-context-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BLUESKY_APP_KEY=bluesky-app-key -e BLUESKY_IDENTIFIER=bluesky-identifier \
ghcr.io/metorial/mcp-container--keturiosakys--bluesky-context-server--bluesky-context-server  "bun run start"
```

<sub>Source: catalog/keturiosakys/bluesky-context-server/bluesky-context-server/README.md</sub>

---

## tgeselle
# Bugsnag MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tgeselle--bugsnag-mcp--bugsnag-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BUGSNAG_API_KEY=bugsnag-api-key \
ghcr.io/metorial/mcp-container--tgeselle--bugsnag-mcp--bugsnag-mcp  "node ./build/index.js"
```

<sub>Source: catalog/tgeselle/bugsnag-mcp/bugsnag-mcp/README.md</sub>

---

## Laksh-star
# TMDB MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--laksh-star--mcp-server-tmdb--mcp-server-tmdb
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TMDB_API_KEY=tmdb-api-key \
ghcr.io/metorial/mcp-container--laksh-star--mcp-server-tmdb--mcp-server-tmdb  "node dist/index.js"
```

<sub>Source: catalog/Laksh-star/mcp-server-tmdb/mcp-server-tmdb/README.md</sub>

---

## translated
# Lara Translate MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--translated--lara-mcp--lara-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LARA_ACCESS_KEY_ID=lara-access-key-id -e LARA_ACCESS_KEY_SECRET=lara-access-key-secret \
ghcr.io/metorial/mcp-container--translated--lara-mcp--lara-mcp  "pnpm run start"
```

<sub>Source: catalog/translated/lara-mcp/lara-mcp/README.md</sub>

---

## ramp-public
# Ramp MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ramp-public--ramp-mcp--ramp-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e RAMP_CLIENT_ID=ramp-client-id -e RAMP_CLIENT_SECRET=ramp-client-secret -e RAMP_ENV=ramp-env \
ghcr.io/metorial/mcp-container--ramp-public--ramp-mcp--ramp-mcp  "ramp-mcp"
```

<sub>Source: catalog/ramp-public/ramp-mcp/ramp-mcp/README.md</sub>

---

## confluentinc
# mcp-confluent

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--confluentinc--mcp-confluent--mcp-confluent
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--confluentinc--mcp-confluent--mcp-confluent  "npm run start"
```

<sub>Source: catalog/confluentinc/mcp-confluent/mcp-confluent/README.md</sub>

---

## SaintDoresh
# Crypto Trader MCP Tool

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--saintdoresh--crypto-trader-mcp-claudedesktop--crypto-trader-mcp-claude-desktop
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--saintdoresh--crypto-trader-mcp-claudedesktop--crypto-trader-mcp-claude-desktop  "python main.py"
```

<sub>Source: catalog/SaintDoresh/Crypto-Trader-MCP-ClaudeDesktop/crypto-trader-mcp-claude-desktop/README.md</sub>

---

## hichana
# Goal Story MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hichana--goalstory-mcp--goalstory-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--hichana--goalstory-mcp--goalstory-mcp  "node dist/index.js"
```

<sub>Source: catalog/hichana/goalstory-mcp/goalstory-mcp/README.md</sub>

---

## mcpso
# mcp-server-chatsum

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mcpso--mcp-server-chatsum--mcp-server-chatsum
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CHAT_DB_PATH=chat-db-path \
ghcr.io/metorial/mcp-container--mcpso--mcp-server-chatsum--mcp-server-chatsum  "node ./build/index.js"
```

<sub>Source: catalog/mcpso/mcp-server-chatsum/mcp-server-chatsum/README.md</sub>

---

## QAInsights
# locust-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--qainsights--locust-mcp-server--locust-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--qainsights--locust-mcp-server--locust-mcp-server  "python main.py"
```

<sub>Source: catalog/QAInsights/locust-mcp-server/locust-mcp-server/README.md</sub>

---

## InhiblabCore
# Image Compression

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--inhiblabcore--mcp-image-compression--mcp-image-compression
```
2. Run the container:

```bash
docker run -i --rm \ 
-e IMAGE_COMPRESSION_DOWNLOAD_DIR=image-compression-download-dir \
ghcr.io/metorial/mcp-container--inhiblabcore--mcp-image-compression--mcp-image-compression  "pnpm run start"
```

<sub>Source: catalog/InhiblabCore/mcp-image-compression/mcp-image-compression/README.md</sub>

---

## getrupt
# Ashra MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--getrupt--ashra-mcp--ashra-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--getrupt--ashra-mcp--ashra-mcp  "node ./build/index.js"
```

<sub>Source: catalog/getrupt/ashra-mcp/ashra-mcp/README.md</sub>

---

## Vortiago
# MCP Azure DevOps Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--vortiago--mcp-azure-devops--mcp-azure-devops
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AZURE_DEVOPS_PAT=azure-devops-pat -e AZURE_DEVOPS_ORGANIZATION_URL=azure-devops-organization-url \
ghcr.io/metorial/mcp-container--vortiago--mcp-azure-devops--mcp-azure-devops  "mcp-azure-devops"
```

<sub>Source: catalog/Vortiago/mcp-azure-devops/mcp-azure-devops/README.md</sub>

---

## exa-labs
# Exa MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--exa-labs--exa-mcp-server--exa-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e EXA_API_KEY=exa-api-key \
ghcr.io/metorial/mcp-container--exa-labs--exa-mcp-server--exa-mcp-server  "node ./.smithery/index.cjs"
```

<sub>Source: catalog/exa-labs/exa-mcp-server/exa-mcp-server/README.md</sub>

---

## TermiX-official
# # 📦 BNBChain MCP – Binance Smart Chain Tool Server (MCP + CLI Ready)

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--termix-official--bsc-mcp--bsc-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--termix-official--bsc-mcp--bsc-mcp  "npm run start"
```

<sub>Source: catalog/TermiX-official/bsc-mcp/bsc-mcp/README.md</sub>

---

## awwaiid
# TaskWarrior MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--awwaiid--mcp-server-taskwarrior--mcp-server-taskwarrior
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--awwaiid--mcp-server-taskwarrior--mcp-server-taskwarrior  "node dist/index.js"
```

<sub>Source: catalog/awwaiid/mcp-server-taskwarrior/mcp-server-taskwarrior/README.md</sub>

---

## AI-QL
# MCP Chat Desktop App

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ai-ql--chat-mcp--chat-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ai-ql--chat-mcp--chat-mcp  "npm run start"
```

<sub>Source: catalog/AI-QL/chat-mcp/chat-mcp/README.md</sub>

---

## devflowinc
# trieve-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--devflowinc--trieve--mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TRIEVE_API_KEY=trieve-api-key -e TRIEVE_ORGANIZATION_ID=trieve-organization-id -e TRIEVE_DATASET_ID=trieve-dataset-id \
ghcr.io/metorial/mcp-container--devflowinc--trieve--mcp-server  "node build/index.js"
```

<sub>Source: catalog/devflowinc/trieve/mcp-server/README.md</sub>

---

## microsoft
# Playwright MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--microsoft--playwright-mcp--playwright-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--microsoft--playwright-mcp--playwright-mcp  "node cli.js"
```

<sub>Source: catalog/microsoft/playwright-mcp/playwright-mcp/README.md</sub>

---

## mektigboy
# Hyperliquid MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mektigboy--server-hyperliquid--server-hyperliquid
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--mektigboy--server-hyperliquid--server-hyperliquid  "node dist/index.js"
```

<sub>Source: catalog/mektigboy/server-hyperliquid/server-hyperliquid/README.md</sub>

---

## da-okazaki
# MCP Neo4j Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--da-okazaki--mcp-neo4j-server--mcp-neo-4-j-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NEO4J_URI=neo-4-j-uri -e NEO4J_USERNAME=neo-4-j-username -e NEO4J_PASSWORD=neo-4-j-password \
ghcr.io/metorial/mcp-container--da-okazaki--mcp-neo4j-server--mcp-neo-4-j-server  "node ./build/index.js"
```

<sub>Source: catalog/da-okazaki/mcp-neo4j-server/mcp-neo-4-j-server/README.md</sub>

---

## kukapay
# Token Revoke MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kukapay--token-revoke-mcp--token-revoke-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MORALIS_API_KEY=moralis-api-key -e PRIVATE_KEY=private-key \
ghcr.io/metorial/mcp-container--kukapay--token-revoke-mcp--token-revoke-mcp  "node index.js"
```

<sub>Source: catalog/kukapay/token-revoke-mcp/token-revoke-mcp/README.md</sub>

---

## axiomhq
# Axiom MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--axiomhq--mcp-server-axiom--mcp-server-axiom
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AXIOM_TOKEN=axiom-token -e AXIOM_URL=axiom-url -e AXIOM_ORG_ID=axiom-org-id -e AXIOM_QUERY_RATE=axiom-query-rate -e AXIOM_QUERY_BURST=axiom-query-burst -e AXIOM_DATASETS_RATE=axiom-datasets-rate -e AXIOM_DATASETS_BURST=axiom-datasets-burst \
ghcr.io/metorial/mcp-container--axiomhq--mcp-server-axiom--mcp-server-axiom  "./out"
```

<sub>Source: catalog/axiomhq/mcp-server-axiom/mcp-server-axiom/README.md</sub>

---

## yangkyeongmo
# mcp-server-apache-airflow

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yangkyeongmo--mcp-server-apache-airflow--mcp-server-apache-airflow
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AIRFLOW_HOST=airflow-host -e AIRFLOW_USERNAME=airflow-username -e AIRFLOW_PASSWORD=airflow-password \
ghcr.io/metorial/mcp-container--yangkyeongmo--mcp-server-apache-airflow--mcp-server-apache-airflow  "mcp-server-apache-airflow"
```

<sub>Source: catalog/yangkyeongmo/mcp-server-apache-airflow/mcp-server-apache-airflow/README.md</sub>

---

## edwinbernadus
# Nocodb MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--edwinbernadus--nocodb-mcp-server--nocodb-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NOCODB_URL=nocodb-url -e NOCODB_BASE_ID=nocodb-base-id -e NOCODB_API_TOKEN=nocodb-api-token \
ghcr.io/metorial/mcp-container--edwinbernadus--nocodb-mcp-server--nocodb-mcp-server  "node dist/start.js"
```

<sub>Source: catalog/edwinbernadus/nocodb-mcp-server/nocodb-mcp-server/README.md</sub>

---

## iaptic
# MCP Server for Iaptic

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--iaptic--mcp-server-iaptic--mcp-server-iaptic
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--iaptic--mcp-server-iaptic--mcp-server-iaptic  "npm run start --api-key api-key --app-name app-name"
```

<sub>Source: catalog/iaptic/mcp-server-iaptic/mcp-server-iaptic/README.md</sub>

---

## privetin
# Chroma MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--privetin--chroma--chroma
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--privetin--chroma--chroma  "chroma"
```

<sub>Source: catalog/privetin/chroma/chroma/README.md</sub>

---

## mendableai
# Firecrawl MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mendableai--firecrawl-mcp-server--firecrawl-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FIRECRAWL_API_KEY=firecrawl-api-key \
ghcr.io/metorial/mcp-container--mendableai--firecrawl-mcp-server--firecrawl-mcp-server  "npm run start"
```

<sub>Source: catalog/mendableai/firecrawl-mcp-server/firecrawl-mcp-server/README.md</sub>

---

## jwaxman19
# Qlik MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jwaxman19--qlik-mcp--qlik-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e QLIK_API_KEY=qlik-api-key -e QLIK_BASE_URL=qlik-base-url -e QLIK_APP_ID=qlik-app-id \
ghcr.io/metorial/mcp-container--jwaxman19--qlik-mcp--qlik-mcp  "deno run --allow-all src/index.ts"
```

<sub>Source: catalog/jwaxman19/qlik-mcp/qlik-mcp/README.md</sub>

---

## f4ww4z
# @f4ww4z/mcp-mysql-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--f4ww4z--mcp-mysql-server--mcp-mysql-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MYSQL_HOST=mysql-host -e MYSQL_USER=mysql-user -e MYSQL_PASSWORD=mysql-password -e MYSQL_DATABASE=mysql-database \
ghcr.io/metorial/mcp-container--f4ww4z--mcp-mysql-server--mcp-mysql-server  "node ./build/index.js"
```

<sub>Source: catalog/f4ww4z/mcp-mysql-server/mcp-mysql-server/README.md</sub>

---

## mrexodia
# IDA Pro MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mrexodia--ida-pro-mcp--ida-pro-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--mrexodia--ida-pro-mcp--ida-pro-mcp  "ida-pro-mcp"
```

<sub>Source: catalog/mrexodia/ida-pro-mcp/ida-pro-mcp/README.md</sub>

---

## AudienseCo
# 🏆 Audiense Insights MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--audienseco--mcp-audiense-insights--mcp-audiense-insights
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AUDIENSE_CLIENT_ID=audiense-client-id -e AUDIENSE_CLIENT_SECRET=audiense-client-secret -e TWITTER_BEARER_TOKEN=twitter-bearer-token \
ghcr.io/metorial/mcp-container--audienseco--mcp-audiense-insights--mcp-audiense-insights  "node ./build/index.js"
```

<sub>Source: catalog/AudienseCo/mcp-audiense-insights/mcp-audiense-insights/README.md</sub>

---

## hiromitsusasaki
# Raindrop.io MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hiromitsusasaki--raindrop-io-mcp-server--raindrop-io-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e RAINDROP_TOKEN=raindrop-token \
ghcr.io/metorial/mcp-container--hiromitsusasaki--raindrop-io-mcp-server--raindrop-io-mcp-server  "npm run start"
```

<sub>Source: catalog/hiromitsusasaki/raindrop-io-mcp-server/raindrop-io-mcp-server/README.md</sub>

---

## jdubois
# Azure CLI MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jdubois--azure-cli-mcp--azure-cli-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AZURE_CREDENTIALS=azure-credentials \
ghcr.io/metorial/mcp-container--jdubois--azure-cli-mcp--azure-cli-mcp  "java -Dserver.port=$PORT $JAVA_OPTS -jar target/*jar --name name --role role --scopes scopes --json-auth json-auth --repo repo --pattern pattern"
```

<sub>Source: catalog/jdubois/azure-cli-mcp/azure-cli-mcp/README.md</sub>

---

## pyroprompts
# any-chat-completions-mcp MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--pyroprompts--any-chat-completions-mcp--any-chat-completions-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AI_CHAT_KEY=ai-chat-key -e AI_CHAT_NAME=ai-chat-name -e AI_CHAT_MODEL=ai-chat-model -e AI_CHAT_BASE_URL=ai-chat-base-url \
ghcr.io/metorial/mcp-container--pyroprompts--any-chat-completions-mcp--any-chat-completions-mcp  "npm run start"
```

<sub>Source: catalog/pyroprompts/any-chat-completions-mcp/any-chat-completions-mcp/README.md</sub>

---

## kimtaeyoon83
# YouTube Transcript Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kimtaeyoon83--mcp-server-youtube-transcript--mcp-server-youtube-transcript
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--kimtaeyoon83--mcp-server-youtube-transcript--mcp-server-youtube-transcript  "node dist/index.js"
```

<sub>Source: catalog/kimtaeyoon83/mcp-server-youtube-transcript/mcp-server-youtube-transcript/README.md</sub>

---

## bankless
# Bankless Onchain MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bankless--onchain-mcp--onchain-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BANKLESS_API_TOKEN=bankless-api-token \
ghcr.io/metorial/mcp-container--bankless--onchain-mcp--onchain-mcp  "node dist/index.js"
```

<sub>Source: catalog/bankless/onchain-mcp/onchain-mcp/README.md</sub>

---

## ProgramComputer
# NASA MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--programcomputer--nasa-mcp-server--nasa-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NASA_API_KEY=nasa-api-key \
ghcr.io/metorial/mcp-container--programcomputer--nasa-mcp-server--nasa-mcp-server  "npm run start"
```

<sub>Source: catalog/ProgramComputer/NASA-MCP-server/nasa-mcp-server/README.md</sub>

---

## jerhadf
# Linear MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jerhadf--linear-mcp-server--linear-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LINEAR_API_KEY=linear-api-key \
ghcr.io/metorial/mcp-container--jerhadf--linear-mcp-server--linear-mcp-server  "node build/index.js"
```

<sub>Source: catalog/jerhadf/linear-mcp-server/linear-mcp-server/README.md</sub>

---

## yWorks
# MCP-Typescribe - an MCP Server providing LLMs API information

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yworks--mcp-typescribe--mcp-typescribe
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--yworks--mcp-typescribe--mcp-typescribe INFO_PATH "npm run start INFO_PATH"
```

<sub>Source: catalog/yWorks/mcp-typescribe/mcp-typescribe/README.md</sub>

---

## flipt-io
# Flipt MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--flipt-io--mcp-server-flipt--mcp-server-flipt
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FLIPT_API_URL=flipt-api-url -e FLIPT_API_KEY=flipt-api-key \
ghcr.io/metorial/mcp-container--flipt-io--mcp-server-flipt--mcp-server-flipt  "npm run start"
```

<sub>Source: catalog/flipt-io/mcp-server-flipt/mcp-server-flipt/README.md</sub>

---

## amidabuddha
# Unichat MCP Server in Python

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--amidabuddha--unichat-mcp-server--unichat-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e UNICHAT_MODEL=unichat-model -e UNICHAT_API_KEY=unichat-api-key \
ghcr.io/metorial/mcp-container--amidabuddha--unichat-mcp-server--unichat-mcp-server  "unichat-mcp-server"
```

<sub>Source: catalog/amidabuddha/unichat-mcp-server/unichat-mcp-server/README.md</sub>

---

## djalal
# MCP Server for Quran.com API

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--djalal--quran-mcp-server--quran-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e API_KEY=api-key -e VERBOSE_MODE=verbose-mode \
ghcr.io/metorial/mcp-container--djalal--quran-mcp-server--quran-mcp-server  "npm run start"
```

<sub>Source: catalog/djalal/quran-mcp-server/quran-mcp-server/README.md</sub>

---

## makenotion
# Notion MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--makenotion--notion-mcp-server--notion-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OPENAPI_MCP_HEADERS=openapi-mcp-headers \
ghcr.io/metorial/mcp-container--makenotion--notion-mcp-server--notion-mcp-server  "node bin/cli.mjs"
```

<sub>Source: catalog/makenotion/notion-mcp-server/notion-mcp-server/README.md</sub>

---

## kshern
# MCP Tavily

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kshern--mcp-tavily--mcp-tavily
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TAVILY_API_KEY=tavily-api-key \
ghcr.io/metorial/mcp-container--kshern--mcp-tavily--mcp-tavily  "node ./dist/index.js"
```

<sub>Source: catalog/kshern/mcp-tavily/mcp-tavily/README.md</sub>

---

## leescot
# PubMed Enhanced Search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--leescot--pubmed-mcp-smithery--pubmed-mcp-smithery
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--leescot--pubmed-mcp-smithery--pubmed-mcp-smithery  "python pubmed_enhanced_mcp_server.py"
```

<sub>Source: catalog/leescot/pubmed-mcp-smithery/pubmed-mcp-smithery/README.md</sub>

---

## stripe
# Stripe MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--stripe--agent-toolkit--modelcontextprotocol
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--stripe--agent-toolkit--modelcontextprotocol  "node dist/index.js --tools tools --api-key api-key"
```

<sub>Source: catalog/stripe/agent-toolkit/modelcontextprotocol/README.md</sub>

---

## ChristophEnglisch
# Keycloak MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--christophenglisch--keycloak-model-context-protocol--keycloak-model-context-protocol
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KEYCLOAK_URL=keycloak-url -e KEYCLOAK_ADMIN=keycloak-admin \
ghcr.io/metorial/mcp-container--christophenglisch--keycloak-model-context-protocol--keycloak-model-context-protocol  "node ./dist/index.js"
```

<sub>Source: catalog/ChristophEnglisch/keycloak-model-context-protocol/keycloak-model-context-protocol/README.md</sub>

---

## mobile-next
# # Mobile Next - MCP server for Mobile Automation

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mobile-next--mobile-mcp--mobile-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--mobile-next--mobile-mcp--mobile-mcp  "node lib/index.js"
```

<sub>Source: catalog/mobile-next/mobile-mcp/mobile-mcp/README.md</sub>

---

## SaseQ
# Discord MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--saseq--discord-mcp--discord-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DISCORD_TOKEN=discord-token \
ghcr.io/metorial/mcp-container--saseq--discord-mcp--discord-mcp  "java -Dserver.port=$PORT $JAVA_OPTS -jar target/*jar"
```

<sub>Source: catalog/SaseQ/discord-mcp/discord-mcp/README.md</sub>

---

## agentmail-to
# ## AgentMail MCP Integration

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--agentmail-to--agentmail-toolkit--mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AGENT_MAIL_API_KEY=agentmail-api-key \
ghcr.io/metorial/mcp-container--agentmail-to--agentmail-toolkit--mcp  "agentmail-mcp --api-key agentmail-api-key"
```

<sub>Source: catalog/agentmail-to/agentmail-toolkit/mcp/README.md</sub>

---

## arpitbatra123
# Google Tasks MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--arpitbatra123--mcp-googletasks--mcp-googletasks
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GOOGLE_CLIENT_ID=google-client-id -e GOOGLE_CLIENT_SECRET=google-client-secret -e GOOGLE_REDIRECT_URI=google-redirect-uri \
ghcr.io/metorial/mcp-container--arpitbatra123--mcp-googletasks--mcp-googletasks  "node build/index.js"
```

<sub>Source: catalog/arpitbatra123/mcp-googletasks/mcp-googletasks/README.md</sub>

---

## mem0ai
# MCP Server with Mem0 for Managing Coding Preferences

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mem0ai--mem0-mcp--mem-0-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MEM0_API_KEY=mem-0-api-key \
ghcr.io/metorial/mcp-container--mem0ai--mem0-mcp--mem-0-mcp  "python main.py"
```

<sub>Source: catalog/mem0ai/mem0-mcp/mem-0-mcp/README.md</sub>

---

## janswist
# Dexscreener MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--janswist--mcp-dexscreener--mcp-dexscreener
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--janswist--mcp-dexscreener--mcp-dexscreener  "npm run start"
```

<sub>Source: catalog/janswist/mcp-dexscreener/mcp-dexscreener/README.md</sub>

---

## briandconnelly
# IP Geolocation MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--briandconnelly--mcp-server-ipinfo--mcp-server-ipinfo
```
2. Run the container:

```bash
docker run -i --rm \ 
-e IPINFO_API_TOKEN=ipinfo-api-token \
ghcr.io/metorial/mcp-container--briandconnelly--mcp-server-ipinfo--mcp-server-ipinfo  "mcp-server-ipinfo"
```

<sub>Source: catalog/briandconnelly/mcp-server-ipinfo/mcp-server-ipinfo/README.md</sub>

---

## run-llama
# LlamaCloud MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--run-llama--mcp-server-llamacloud--mcp-server-llamacloud
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LLAMA_CLOUD_PROJECT_NAME=llama-cloud-project-name -e LLAMA_CLOUD_API_KEY=llama-cloud-api-key \
ghcr.io/metorial/mcp-container--run-llama--mcp-server-llamacloud--mcp-server-llamacloud  "node ./build/index.js"
```

<sub>Source: catalog/run-llama/mcp-server-llamacloud/mcp-server-llamacloud/README.md</sub>

---

## v-3
# Notion MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--v-3--notion-server--notion-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NOTION_API_KEY=notion-api-key \
ghcr.io/metorial/mcp-container--v-3--notion-server--notion-server  "node ./build/index.js"
```

<sub>Source: catalog/v-3/notion-server/notion-server/README.md</sub>

---

## langfuse
# Langfuse Prompt Management MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--langfuse--mcp-server-langfuse--mcp-server-langfuse
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LANGFUSE_PUBLIC_KEY=langfuse-public-key -e LANGFUSE_SECRET_KEY=langfuse-secret-key -e LANGFUSE_BASEURL=langfuse-baseurl \
ghcr.io/metorial/mcp-container--langfuse--mcp-server-langfuse--mcp-server-langfuse  "node ./build/index.js"
```

<sub>Source: catalog/langfuse/mcp-server-langfuse/mcp-server-langfuse/README.md</sub>

---

## joshuayoes
# iOS Simulator MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--joshuayoes--ios-simulator-mcp--ios-simulator-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--joshuayoes--ios-simulator-mcp--ios-simulator-mcp  "npm run start"
```

<sub>Source: catalog/joshuayoes/ios-simulator-mcp/ios-simulator-mcp/README.md</sub>

---

## delorenj
# MCP Server for Ticketmaster

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--delorenj--mcp-server-ticketmaster--mcp-server-ticketmaster
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TICKETMASTER_API_KEY=ticketmaster-api-key \
ghcr.io/metorial/mcp-container--delorenj--mcp-server-ticketmaster--mcp-server-ticketmaster  "node ./build/index.js"
```

<sub>Source: catalog/delorenj/mcp-server-ticketmaster/mcp-server-ticketmaster/README.md</sub>

---

## Boston343
# Starwind UI MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--boston343--starwind-ui-mcp--starwind-ui-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--boston343--starwind-ui-mcp--starwind-ui-mcp  "pnpm run start"
```

<sub>Source: catalog/Boston343/starwind-ui-mcp/starwind-ui-mcp/README.md</sub>

---

## kapilduraphe
# Okta MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kapilduraphe--okta-mcp-server--okta-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OKTA_ORG_URL=okta-org-url -e OKTA_API_TOKEN=okta-api-token \
ghcr.io/metorial/mcp-container--kapilduraphe--okta-mcp-server--okta-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/kapilduraphe/okta-mcp-server/okta-mcp-server/README.md</sub>

---

## ac3xx
# kagi-server MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ac3xx--mcp-servers-kagi--mcp-servers-kagi
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KAGI_API_KEY=kagi-api-key \
ghcr.io/metorial/mcp-container--ac3xx--mcp-servers-kagi--mcp-servers-kagi  "node ./build/index.js"
```

<sub>Source: catalog/ac3xx/mcp-servers-kagi/mcp-servers-kagi/README.md</sub>

---

## magnetai
# Free USDC Transfer MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--magnetai--mcp-free-usdc-transfer--mcp-free-usdc-transfer
```
2. Run the container:

```bash
docker run -i --rm \ 
-e COINBASE_CDP_API_KEY_NAME=coinbase-cdp-api-key-name -e COINBASE_CDP_PRIVATE_KEY=coinbase-cdp-private-key \
ghcr.io/metorial/mcp-container--magnetai--mcp-free-usdc-transfer--mcp-free-usdc-transfer  "node dist/index.js"
```

<sub>Source: catalog/magnetai/mcp-free-usdc-transfer/mcp-free-usdc-transfer/README.md</sub>

---

## browserbase
# Browserbase MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--browserbase--mcp-server-browserbase--browserbase
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BROWSERBASE_API_KEY=browserbase-api-key -e BROWSERBASE_PROJECT_ID=browserbase-project-id \
ghcr.io/metorial/mcp-container--browserbase--mcp-server-browserbase--browserbase  "node cli.js"
```

<sub>Source: catalog/browserbase/mcp-server-browserbase/browserbase/README.md</sub>

---

## xing5
# mcp-google-sheets: A Google Sheets MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--xing5--mcp-google-sheets--mcp-google-sheets
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SERVICE_ACCOUNT_PATH=service-account-path -e DRIVE_FOLDER_ID=drive-folder-id \
ghcr.io/metorial/mcp-container--xing5--mcp-google-sheets--mcp-google-sheets  "mcp-google-sheets"
```

<sub>Source: catalog/xing5/mcp-google-sheets/mcp-google-sheets/README.md</sub>

---

## its-dart
# Dart MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--its-dart--dart-mcp-server--dart-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DART_TOKEN=dart-token \
ghcr.io/metorial/mcp-container--its-dart--dart-mcp-server--dart-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/its-dart/dart-mcp-server/dart-mcp-server/README.md</sub>

---

## openags
# Paper Search MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--openags--paper-search-mcp--paper-search-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--openags--paper-search-mcp--paper-search-mcp  "python -m paper_search_mcp.server"
```

<sub>Source: catalog/openags/paper-search-mcp/paper-search-mcp/README.md</sub>

---

## sapientpants
# SonarQube MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sapientpants--sonarqube-mcp-server--sonarqube-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SONARQUBE_URL=sonarqube-url -e SONARQUBE_TOKEN=sonarqube-token -e SONARQUBE_ORGANIZATION=sonarqube-organization \
ghcr.io/metorial/mcp-container--sapientpants--sonarqube-mcp-server--sonarqube-mcp-server  "pnpm run start"
```

<sub>Source: catalog/sapientpants/sonarqube-mcp-server/sonarqube-mcp-server/README.md</sub>

---

## adityak74
# mcp-scholarly MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--adityak74--mcp-scholarly--mcp-scholarly
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--adityak74--mcp-scholarly--mcp-scholarly  "mcp-scholarly"
```

<sub>Source: catalog/adityak74/mcp-scholarly/mcp-scholarly/README.md</sub>

---

## Hypersequent
# QA Sphere MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hypersequent--qasphere-mcp--qasphere-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e QASPHERE_TENANT_URL=qasphere-tenant-url -e QASPHERE_API_KEY=qasphere-api-key \
ghcr.io/metorial/mcp-container--hypersequent--qasphere-mcp--qasphere-mcp  "node ./dist/index.js"
```

<sub>Source: catalog/Hypersequent/qasphere-mcp/qasphere-mcp/README.md</sub>

---

## joshuarileydev
# Supabase MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--joshuarileydev--supabase--supabase
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SUPABASE_API_KEY=supabase-api-key \
ghcr.io/metorial/mcp-container--joshuarileydev--supabase--supabase  "node dist/index.js"
```

<sub>Source: catalog/joshuarileydev/supabase/supabase/README.md</sub>

---

## ahnlabio
# BICScan MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ahnlabio--bicscan-mcp--bicscan-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BICSCAN_API_KEY=bicscan-api-key \
ghcr.io/metorial/mcp-container--ahnlabio--bicscan-mcp--bicscan-mcp  "bicscan-mcp"
```

<sub>Source: catalog/ahnlabio/bicscan-mcp/bicscan-mcp/README.md</sub>

---

## sakce
# Monday.com MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sakce--mcp-server-monday--mcp-server-monday
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MONDAY_API_KEY=monday-api-key -e MONDAY_WORKSPACE_NAME=monday-workspace-name \
ghcr.io/metorial/mcp-container--sakce--mcp-server-monday--mcp-server-monday  "mcp-server-monday"
```

<sub>Source: catalog/sakce/mcp-server-monday/mcp-server-monday/README.md</sub>

---

## semgrep
# Semgrep MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--semgrep--mcp--mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SEMGREP_APP_TOKEN=semgrep-app-token \
ghcr.io/metorial/mcp-container--semgrep--mcp--mcp  "semgrep-mcp"
```

<sub>Source: catalog/semgrep/mcp/mcp/README.md</sub>

---

## roychri
# MCP Server for Asana

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--roychri--mcp-server-asana--mcp-server-asana
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ASANA_ACCESS_TOKEN=asana-access-token \
ghcr.io/metorial/mcp-container--roychri--mcp-server-asana--mcp-server-asana  "npm run start"
```

<sub>Source: catalog/roychri/mcp-server-asana/mcp-server-asana/README.md</sub>

---

## neondatabase
# Neon MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--neondatabase--mcp-server-neon--mcp-server-neon
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--neondatabase--mcp-server-neon--mcp-server-neon {{NEON_API_KEY}} "bun run start {{NEON_API_KEY}}"
```

<sub>Source: catalog/neondatabase/mcp-server-neon/mcp-server-neon/README.md</sub>

---

## osomai
# ServiceNow MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--osomai--servicenow-mcp--servicenow-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SERVICENOW_INSTANCE_URL=servicenow-instance-url -e SERVICENOW_USERNAME=servicenow-username -e SERVICENOW_PASSWORD=servicenow-password -e SERVICENOW_AUTH_TYPE=servicenow-auth-type \
ghcr.io/metorial/mcp-container--osomai--servicenow-mcp--servicenow-mcp  "servicenow-mcp"
```

<sub>Source: catalog/osomai/servicenow-mcp/servicenow-mcp/README.md</sub>

---

## tesla0225
# MCP Create Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tesla0225--mcp-create--mcp-create
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--tesla0225--mcp-create--mcp-create  "npm run start"
```

<sub>Source: catalog/tesla0225/mcp-create/mcp-create/README.md</sub>

---

## softeria
# ms-365-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--softeria--ms-365-mcp-server--ms-365-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--softeria--ms-365-mcp-server--ms-365-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/softeria/ms-365-mcp-server/ms-365-mcp-server/README.md</sub>

---

## kenliao94
# RabbitMQ MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kenliao94--mcp-server-rabbitmq--mcp-server-rabbitmq
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--kenliao94--mcp-server-rabbitmq--mcp-server-rabbitmq  "mcp-server-rabbitmq --rabbitmq-host rabbitmq-host --port port --username username --password password --use-tls use-tls"
```

<sub>Source: catalog/kenliao94/mcp-server-rabbitmq/mcp-server-rabbitmq/README.md</sub>

---

## XeroAPI
# Xero MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--xeroapi--xero-mcp-server--xero-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e XERO_CLIENT_ID=xero-client-id -e XERO_CLIENT_SECRET=xero-client-secret \
ghcr.io/metorial/mcp-container--xeroapi--xero-mcp-server--xero-mcp-server  "node ./dist/index.js"
```

<sub>Source: catalog/XeroAPI/xero-mcp-server/xero-mcp-server/README.md</sub>

---

## reading-plus-ai
# MCP Server for Deep Research

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--reading-plus-ai--mcp-server-deep-research--mcp-server-deep-research
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--reading-plus-ai--mcp-server-deep-research--mcp-server-deep-research  "mcp-server-deep-research"
```

<sub>Source: catalog/reading-plus-ai/mcp-server-deep-research/mcp-server-deep-research/README.md</sub>

---

## zcaceres
# Google Tasks MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--zcaceres--gtasks-mcp--gtasks-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GCP_OAUTH_KEYS=gcp-oauth-keys \
ghcr.io/metorial/mcp-container--zcaceres--gtasks-mcp--gtasks-mcp  "npm run start"
```

<sub>Source: catalog/zcaceres/gtasks-mcp/gtasks-mcp/README.md</sub>

---

## GongRzhe
# quickchart-server MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--gongrzhe--quickchart-mcp-server--quickchart-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--gongrzhe--quickchart-mcp-server--quickchart-mcp-server  "npm run start"
```

<sub>Source: catalog/GongRzhe/Quickchart-MCP-Server/quickchart-mcp-server/README.md</sub>

---

## StarRocks
# Starrocks Official MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--starrocks--mcp-server-starrocks--mcp-server-starrocks
```
2. Run the container:

```bash
docker run -i --rm \ 
-e STARROCKS_HOST=starrocks-host -e STARROCKS_PORT=starrocks-port -e STARROCKS_USER=starrocks-user -e STARROCKS_PASSWORD=starrocks-password \
ghcr.io/metorial/mcp-container--starrocks--mcp-server-starrocks--mcp-server-starrocks mcp-server-starrocks "mcp-server-starrocks mcp-server-starrocks"
```

<sub>Source: catalog/StarRocks/mcp-server-starrocks/mcp-server-starrocks/README.md</sub>

---

## domdomegg
# airtable-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--domdomegg--airtable-mcp-server--airtable-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AIRTABLE_API_KEY=airtable-api-key \
ghcr.io/metorial/mcp-container--domdomegg--airtable-mcp-server--airtable-mcp-server  "npm run start"
```

<sub>Source: catalog/domdomegg/airtable-mcp-server/airtable-mcp-server/README.md</sub>

---

## chigwell
# Telegram MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--chigwell--telegram-mcp--telegram-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TELEGRAM_API_ID=telegram-api-id -e TELEGRAM_API_HASH=telegram-api-hash -e TELEGRAM_SESSION_NAME=telegram-session-name \
ghcr.io/metorial/mcp-container--chigwell--telegram-mcp--telegram-mcp  "python main.py"
```

<sub>Source: catalog/chigwell/telegram-mcp/telegram-mcp/README.md</sub>

---

## vivekVells
# mcp-pandoc: A Document Conversion MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--vivekvells--mcp-pandoc--mcp-pandoc
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--vivekvells--mcp-pandoc--mcp-pandoc  "mcp-pandoc"
```

<sub>Source: catalog/vivekVells/mcp-pandoc/mcp-pandoc/README.md</sub>

---

## sammcj
# Package Version MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sammcj--mcp-package-version--mcp-package-version
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--sammcj--mcp-package-version--mcp-package-version  "./out --transport transport --base-url base-url"
```

<sub>Source: catalog/sammcj/mcp-package-version/mcp-package-version/README.md</sub>

---

## co-browser
# ➡️ attestable-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--co-browser--attestable-mcp-server--attestable-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--co-browser--attestable-mcp-server--attestable-mcp-server  "attestable-mcp-server"
```

<sub>Source: catalog/co-browser/attestable-mcp-server/attestable-mcp-server/README.md</sub>

---

## shanejonas
# OpenRPC MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--shanejonas--openrpc-mpc-server--openrpc-mpc-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--shanejonas--openrpc-mpc-server--openrpc-mpc-server  "npm run start"
```

<sub>Source: catalog/shanejonas/openrpc-mpc-server/openrpc-mpc-server/README.md</sub>

---

## 66julienmartin
# Deepseek R1 MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--66julienmartin--mcp-server-deepseek_r1--mcp-server-deepseek-r-1
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DEEPSEEK_API_KEY=deepseek-api-key \
ghcr.io/metorial/mcp-container--66julienmartin--mcp-server-deepseek_r1--mcp-server-deepseek-r-1  "npm run start"
```

<sub>Source: catalog/66julienmartin/MCP-server-Deepseek_R1/mcp-server-deepseek-r-1/README.md</sub>

---

## cyberchitta
# Scrapling Fetch MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--cyberchitta--scrapling-fetch-mcp--scrapling-fetch-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--cyberchitta--scrapling-fetch-mcp--scrapling-fetch-mcp  "scrapling-fetch-mcp"
```

<sub>Source: catalog/cyberchitta/scrapling-fetch-mcp/scrapling-fetch-mcp/README.md</sub>

---

## kw510
# Model Context Protocol (MCP) Server + Strava OAuth

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kw510--strava-mcp--strava-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--kw510--strava-mcp--strava-mcp https://mcp-strava-oauth.<your-subdomain>.workers.dev/sse "yarn run start https://mcp-strava-oauth.<your-subdomain>.workers.dev/sse"
```

<sub>Source: catalog/kw510/strava-mcp/strava-mcp/README.md</sub>

---

## automation-ai-labs
# MCP Link - Convert Any OpenAPI V3 API to MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--automation-ai-labs--mcp-link--mcp-link
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--automation-ai-labs--mcp-link--mcp-link  "./out"
```

<sub>Source: catalog/automation-ai-labs/mcp-link/mcp-link/README.md</sub>

---

## whataboutyou-ai
# Eunomia MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--whataboutyou-ai--eunomia-mcp-server--eunomia-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--whataboutyou-ai--eunomia-mcp-server--eunomia-mcp-server  "orchestra_server"
```

<sub>Source: catalog/whataboutyou-ai/eunomia-MCP-server/eunomia-mcp-server/README.md</sub>

---

## felores
# Cloudinary MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--felores--cloudinary-mcp-server--cloudinary-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CLOUDINARY_CLOUD_NAME=cloudinary-cloud-name -e CLOUDINARY_API_KEY=cloudinary-api-key -e CLOUDINARY_API_SECRET=cloudinary-api-secret \
ghcr.io/metorial/mcp-container--felores--cloudinary-mcp-server--cloudinary-mcp-server  "npm run start"
```

<sub>Source: catalog/felores/cloudinary-mcp-server/cloudinary-mcp-server/README.md</sub>

---

## ashiknesin
# Pushover MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ashiknesin--pushover-mcp--pushover-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ashiknesin--pushover-mcp--pushover-mcp  "pnpm run start --token token --user user"
```

<sub>Source: catalog/ashiknesin/pushover-mcp/pushover-mcp/README.md</sub>

---

## Kong
# Kong Konnect MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kong--mcp-konnect--mcp-konnect
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KONNECT_ACCESS_TOKEN=konnect-access-token -e KONNECT_REGION=konnect-region \
ghcr.io/metorial/mcp-container--kong--mcp-konnect--mcp-konnect  "npm run start"
```

<sub>Source: catalog/Kong/mcp-konnect/mcp-konnect/README.md</sub>

---

## alexbakers
# 🪐 MCP IPFS Server (storacha.network) 🛰️

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--alexbakers--mcp-ipfs--mcp-ipfs
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--alexbakers--mcp-ipfs--mcp-ipfs  "npm run start"
```

<sub>Source: catalog/alexbakers/mcp-ipfs/mcp-ipfs/README.md</sub>

---

## bharathvaj-ganesan
# Whois MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bharathvaj-ganesan--whois-mcp--whois-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--bharathvaj-ganesan--whois-mcp--whois-mcp  "node dist/index.js"
```

<sub>Source: catalog/bharathvaj-ganesan/whois-mcp/whois-mcp/README.md</sub>

---

## jjsantos01
# JupyterMCP - Jupyter Notebook Model Context Protocol Integration

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jjsantos01--jupyter-notebook-mcp--jupyter-notebook-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--jjsantos01--jupyter-notebook-mcp--jupyter-notebook-mcp  "python main.py"
```

<sub>Source: catalog/jjsantos01/jupyter-notebook-mcp/jupyter-notebook-mcp/README.md</sub>

---

## OpenDataMCP
# Open Data Model Context Protocol

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--opendatamcp--opendatamcp--open-data-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--opendatamcp--opendatamcp--open-data-mcp  "odmcp"
```

<sub>Source: catalog/OpenDataMCP/OpenDataMCP/open-data-mcp/README.md</sub>

---

## adenot
# Google Search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--adenot--mcp-google-search--mcp-google-search
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GOOGLE_API_KEY=google-api-key -e GOOGLE_SEARCH_ENGINE_ID=google-search-engine-id \
ghcr.io/metorial/mcp-container--adenot--mcp-google-search--mcp-google-search  "node ./build/index.js"
```

<sub>Source: catalog/adenot/mcp-google-search/mcp-google-search/README.md</sub>

---

## gannonh
# Firebase MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--gannonh--firebase-mcp--firebase-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SERVICE_ACCOUNT_KEY_PATH=service-account-key-path -e FIREBASE_STORAGE_BUCKET=firebase-storage-bucket \
ghcr.io/metorial/mcp-container--gannonh--firebase-mcp--firebase-mcp  "npm run start"
```

<sub>Source: catalog/gannonh/firebase-mcp/firebase-mcp/README.md</sub>

---

## Zhwt
# go-mcp-mysql

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--zhwt--go-mcp-mysql--go-mcp-mysql
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--zhwt--go-mcp-mysql--go-mcp-mysql  "./out --host host --user user --pass pass --port port --db db --dsn dsn --read-only read-only"
```

<sub>Source: catalog/Zhwt/go-mcp-mysql/go-mcp-mysql/README.md</sub>

---

## executeautomation
# Playwright MCP Server 🎭

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--executeautomation--mcp-playwright--mcp-playwright
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--executeautomation--mcp-playwright--mcp-playwright  "node dist/index.js"
```

<sub>Source: catalog/executeautomation/mcp-playwright/mcp-playwright/README.md</sub>

---

## basicmachines-co
# Basic Memory

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--basicmachines-co--basic-memory--basic-memory
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--basicmachines-co--basic-memory--basic-memory  "basic-memory"
```

<sub>Source: catalog/basicmachines-co/basic-memory/basic-memory/README.md</sub>

---

## githejie
# Calculator MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--githejie--mcp-server-calculator--mcp-server-calculator
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--githejie--mcp-server-calculator--mcp-server-calculator  "mcp-server-calculator"
```

<sub>Source: catalog/githejie/mcp-server-calculator/mcp-server-calculator/README.md</sub>

---

## gitmotion
# 📤 ntfy-me-mcp

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--gitmotion--ntfy-me-mcp--ntfy-me-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NTFY_TOPIC=ntfy-topic -e NTFY_URL=ntfy-url -e NTFY_TOKEN=ntfy-token \
ghcr.io/metorial/mcp-container--gitmotion--ntfy-me-mcp--ntfy-me-mcp  "npm run start"
```

<sub>Source: catalog/gitmotion/ntfy-me-mcp/ntfy-me-mcp/README.md</sub>

---

## erithwik
# Hacker News MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--erithwik--mcp-hn--mcp-hn
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--erithwik--mcp-hn--mcp-hn  "mcp-hn"
```

<sub>Source: catalog/erithwik/mcp-hn/mcp-hn/README.md</sub>

---

## narumiruna
# Yahoo Finance MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--narumiruna--yfinance-mcp--yfinance-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--narumiruna--yfinance-mcp--yfinance-mcp  "yfmcp"
```

<sub>Source: catalog/narumiruna/yfinance-mcp/yfinance-mcp/README.md</sub>

---

## dogukanakkaya
# Pulumi MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--dogukanakkaya--pulumi-mcp-server--pulumi-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PULUMI_ACCESS_TOKEN=plumi-access-token \
ghcr.io/metorial/mcp-container--dogukanakkaya--pulumi-mcp-server--pulumi-mcp-server  "npm run start"
```

<sub>Source: catalog/dogukanakkaya/pulumi-mcp-server/pulumi-mcp-server/README.md</sub>

---

## calvernaz
# Alphavantage MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--calvernaz--alphavantage--alphavantage
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ALPHAVANTAGE_API_KEY=alphavantage-api-key \
ghcr.io/metorial/mcp-container--calvernaz--alphavantage--alphavantage  "alphavantage"
```

<sub>Source: catalog/calvernaz/alphavantage/alphavantage/README.md</sub>

---

## ktanaka101
# mcp-server-duckdb

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ktanaka101--mcp-server-duckdb--mcp-server-duckdb
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ktanaka101--mcp-server-duckdb--mcp-server-duckdb  "mcp-server-duckdb"
```

<sub>Source: catalog/ktanaka101/mcp-server-duckdb/mcp-server-duckdb/README.md</sub>

---

## chargebee
# Chargebee MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--chargebee--agentkit--modelcontextprotocol
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--chargebee--agentkit--modelcontextprotocol  "node dist/index.js"
```

<sub>Source: catalog/chargebee/agentkit/modelcontextprotocol/README.md</sub>

---

## tanigami
# Perplexity MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tanigami--mcp-server-perplexity--mcp-server-perplexity
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PERPLEXITY_API_KEY=perplexity-api-key \
ghcr.io/metorial/mcp-container--tanigami--mcp-server-perplexity--mcp-server-perplexity  "mcp-server-perplexity"
```

<sub>Source: catalog/tanigami/mcp-server-perplexity/mcp-server-perplexity/README.md</sub>

---

## bigcodegen
# Neovim MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bigcodegen--mcp-neovim-server--mcp-neovim-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ALLOW_SHELL_COMMANDS=allow-shell-commands -e NVIM_SOCKET_PATH=nvim-socket-path \
ghcr.io/metorial/mcp-container--bigcodegen--mcp-neovim-server--mcp-neovim-server  "node build/index.js"
```

<sub>Source: catalog/bigcodegen/mcp-neovim-server/mcp-neovim-server/README.md</sub>

---

## EduBase
# EduBase MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--edubase--mcp--mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e EDUBASE_API_URL=edubase-api-url -e EDUBASE_API_APP=edubase-api-app -e EDUBASE_API_KEY=edubase-api-key \
ghcr.io/metorial/mcp-container--edubase--mcp--mcp  "node dist/index.js"
```

<sub>Source: catalog/EduBase/MCP/mcp/README.md</sub>

---

## ravenwits
# MCP Server for ArangoDB

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ravenwits--mcp-server-arangodb--mcp-server-arangodb
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ARANGO_URL=arango-url -e ARANGO_DB=arango-db -e ARANGO_USERNAME=arango-username -e ARANGO_PASSWORD=arango-password \
ghcr.io/metorial/mcp-container--ravenwits--mcp-server-arangodb--mcp-server-arangodb  "npm run start"
```

<sub>Source: catalog/ravenwits/mcp-server-arangodb/mcp-server-arangodb/README.md</sub>

---

## minhyeoky
# mcp-server-ledger: A Ledger CLI MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--minhyeoky--mcp-server-ledger--mcp-server-ledger
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--minhyeoky--mcp-server-ledger--mcp-server-ledger  "python main.py"
```

<sub>Source: catalog/minhyeoky/mcp-server-ledger/mcp-server-ledger/README.md</sub>

---

## carterlasalle
# Mac Messages MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--carterlasalle--mac_messages_mcp--mac-messages-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--carterlasalle--mac_messages_mcp--mac-messages-mcp  "mac-messages-mcp"
```

<sub>Source: catalog/carterlasalle/mac_messages_mcp/mac-messages-mcp/README.md</sub>

---

## raoulbia-ai
# MCP Server for Intercom

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--raoulbia-ai--mcp-server-for-intercom--mcp-server-for-intercom
```
2. Run the container:

```bash
docker run -i --rm \ 
-e INTERCOM_ACCESS_TOKEN=intercom-access-token \
ghcr.io/metorial/mcp-container--raoulbia-ai--mcp-server-for-intercom--mcp-server-for-intercom  "npm run start"
```

<sub>Source: catalog/raoulbia-ai/mcp-server-for-intercom/mcp-server-for-intercom/README.md</sub>

---

## DMontgomery40
# DeepSeek MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--dmontgomery40--deepseek-mcp-server--deepseek-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DEEPSEEK_API_KEY=deepseek-api-key \
ghcr.io/metorial/mcp-container--dmontgomery40--deepseek-mcp-server--deepseek-mcp-server  "npm run start"
```

<sub>Source: catalog/DMontgomery40/deepseek-mcp-server/deepseek-mcp-server/README.md</sub>

---

## 21st-dev
# 21st.dev Magic AI Agent MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--21st-dev--magic-mcp--magic-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--21st-dev--magic-mcp--magic-mcp  "npm run start --api-key api-key"
```

<sub>Source: catalog/21st-dev/magic-mcp/magic-mcp/README.md</sub>

---

## yuanoOo
# OceanBase MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yuanooo--oceanbase_mcp_server--oceanbase-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OB_HOST=ob-host -e OB_PORT=ob-port -e OB_USER=ob-user -e OB_PASSWORD=ob-password -e OB_DATABASE=ob-database \
ghcr.io/metorial/mcp-container--yuanooo--oceanbase_mcp_server--oceanbase-mcp-server  "oceanbase_mcp_server"
```

<sub>Source: catalog/yuanoOo/oceanbase_mcp_server/oceanbase-mcp-server/README.md</sub>

---

## qdrant
# Qdrant MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--qdrant--mcp-server-qdrant--mcp-server-qdrant
```
2. Run the container:

```bash
docker run -i --rm \ 
-e QDRANT_URL=qdrant-url -e QDRANT_API_KEY=qdrant-api-key -e COLLECTION_NAME=collection-name -e QDRANT_LOCAL_PATH=qdrant-local-path -e EMBEDDING_PROVIDER=embedding-provider -e EMBEDDING_MODEL=embedding-model -e TOOL_STORE_DESCRIPTION=tool-store-description \
ghcr.io/metorial/mcp-container--qdrant--mcp-server-qdrant--mcp-server-qdrant  "mcp-server-qdrant"
```

<sub>Source: catalog/qdrant/mcp-server-qdrant/mcp-server-qdrant/README.md</sub>

---

## kelvin6365
# Plane MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kelvin6365--plane-mcp-server--plane-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PLANE_API_KEY=plane-api-key -e PLANE_WORKSPACE_SLUG=plane-workspace-slug \
ghcr.io/metorial/mcp-container--kelvin6365--plane-mcp-server--plane-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/kelvin6365/plane-mcp-server/plane-mcp-server/README.md</sub>

---

## KS-GEN-AI
# Jira communication server MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ks-gen-ai--jira-mcp-server--jira-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e JIRA_URL=jira-url -e JIRA_API_MAIL=jira-api-mail -e JIRA_API_KEY=jira-api-key \
ghcr.io/metorial/mcp-container--ks-gen-ai--jira-mcp-server--jira-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/KS-GEN-AI/jira-mcp-server/jira-mcp-server/README.md</sub>

---

## Dumpling-AI
# Dumpling AI MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--dumpling-ai--mcp-server-dumplingai--mcp-server-dumplingai
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DUMPLING_API_KEY=dumpling-api-key \
ghcr.io/metorial/mcp-container--dumpling-ai--mcp-server-dumplingai--mcp-server-dumplingai  "node ./build/index.js"
```

<sub>Source: catalog/Dumpling-AI/mcp-server-dumplingai/mcp-server-dumplingai/README.md</sub>

---

## tumf
# MCP Shell Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tumf--mcp-shell-server--mcp-shell-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ALLOW_COMMANDS=allow-commands \
ghcr.io/metorial/mcp-container--tumf--mcp-shell-server--mcp-shell-server  "mcp-shell-server"
```

<sub>Source: catalog/tumf/mcp-shell-server/mcp-shell-server/README.md</sub>

---

## bazinga012
# MCP Code Executor

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bazinga012--mcp_code_executor--mcp-code-executor
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CODE_STORAGE_DIR=code-storage-dir -e CONDA_ENV_NAME=conda-env-name \
ghcr.io/metorial/mcp-container--bazinga012--mcp_code_executor--mcp-code-executor  "node ./build/index.js"
```

<sub>Source: catalog/bazinga012/mcp_code_executor/mcp-code-executor/README.md</sub>

---

## Tiberriver256
# Azure DevOps MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tiberriver256--mcp-server-azure-devops--mcp-server-azure-devops
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AZURE_DEVOPS_ORG_URL=azure-devops-org-url -e AZURE_DEVOPS_AUTH_METHOD=azure-devops-auth-method -e AZURE_DEVOPS_DEFAULT_PROJECT=azure-devops-default-project \
ghcr.io/metorial/mcp-container--tiberriver256--mcp-server-azure-devops--mcp-server-azure-devops  "npm run start"
```

<sub>Source: catalog/Tiberriver256/mcp-server-azure-devops/mcp-server-azure-devops/README.md</sub>

---

## CircleCI-Public
# CircleCI MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--circleci-public--mcp-server-circleci--mcp-server-circleci
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CIRCLECI_TOKEN=circleci-token -e CIRCLECI_BASE_URL=circleci-base-url \
ghcr.io/metorial/mcp-container--circleci-public--mcp-server-circleci--mcp-server-circleci  "node ./dist/index.js"
```

<sub>Source: catalog/CircleCI-Public/mcp-server-circleci/mcp-server-circleci/README.md</sub>

---

## syucream
# holaspirit-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--syucream--holaspirit-mcp-server--holaspirit-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HOLASPIRIT_API_TOKEN=holaspirit-api-token \
ghcr.io/metorial/mcp-container--syucream--holaspirit-mcp-server--holaspirit-mcp-server  "npm run start"
```

<sub>Source: catalog/syucream/holaspirit-mcp-server/holaspirit-mcp-server/README.md</sub>

---

## apeyroux
# MCP XMind Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--apeyroux--mcp-xmind--mcp-xmind
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--apeyroux--mcp-xmind--mcp-xmind  "node dist/index.js"
```

<sub>Source: catalog/apeyroux/mcp-xmind/mcp-xmind/README.md</sub>

---

## wenhuwang
# mcp-k8s-eye

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--wenhuwang--mcp-k8s-eye--mcp-k-8-s-eye
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--wenhuwang--mcp-k8s-eye--mcp-k-8-s-eye  "./out"
```

<sub>Source: catalog/wenhuwang/mcp-k8s-eye/mcp-k-8-s-eye/README.md</sub>

---

## ZilongXue
# ClaudePost

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--zilongxue--claude-post--claude-post
```
2. Run the container:

```bash
docker run -i --rm \ 
-e EMAIL_ADDRESS=email-address -e EMAIL_PASSWORD=email-password -e IMAP_SERVER=imap-server -e SMTP_SERVER=smtp-server -e SMTP_PORT=smtp-port \
ghcr.io/metorial/mcp-container--zilongxue--claude-post--claude-post  "email-client"
```

<sub>Source: catalog/ZilongXue/claude-post/claude-post/README.md</sub>

---

## Automata-Labs-team
# MCP Server Playwright

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--automata-labs-team--mcp-server-playwright--mcp-server-playwright
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--automata-labs-team--mcp-server-playwright--mcp-server-playwright  "node dist/index.js"
```

<sub>Source: catalog/Automata-Labs-team/MCP-Server-Playwright/mcp-server-playwright/README.md</sub>

---

## elie222
# Inbox Zero MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--elie222--inbox-zero--mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e API_KEY=api-key \
ghcr.io/metorial/mcp-container--elie222--inbox-zero--mcp-server  "npm run start"
```

<sub>Source: catalog/elie222/inbox-zero/mcp-server/README.md</sub>

---

## 0xshellming
# MCP Content Summarizer Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--0xshellming--mcp-summarizer--mcp-summarizer
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--0xshellming--mcp-summarizer--mcp-summarizer  "pnpm run start"
```

<sub>Source: catalog/0xshellming/mcp-summarizer/mcp-summarizer/README.md</sub>

---

## zhsama
# duckduckgo-search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--zhsama--duckduckgo-mpc-server--duckduckgo-mpc-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--zhsama--duckduckgo-mpc-server--duckduckgo-mpc-server  "node ./build/index.js"
```

<sub>Source: catalog/zhsama/duckduckgo-mpc-server/duckduckgo-mpc-server/README.md</sub>

---

## runekaagaard
# MCP Alchemy

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--runekaagaard--mcp-alchemy--mcp-alchemy
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DB_URL=db-url \
ghcr.io/metorial/mcp-container--runekaagaard--mcp-alchemy--mcp-alchemy  "mcp-alchemy"
```

<sub>Source: catalog/runekaagaard/mcp-alchemy/mcp-alchemy/README.md</sub>

---

## IBM
# Watsonx.ai Flows Engine MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ibm--wxflows--javascript
```
2. Run the container:

```bash
docker run -i --rm \ 
-e WXFLOWS_APIKEY=wxflows-apikey -e WXFLOWS_ENDPOINT=wxflows-endpoint \
ghcr.io/metorial/mcp-container--ibm--wxflows--javascript  "node ./build/index.js"
```

<sub>Source: catalog/IBM/wxflows/javascript/README.md</sub>

---

## genomoncology
# BioMCP: Biomedical Model Context Protocol

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--genomoncology--biomcp--biomcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--genomoncology--biomcp--biomcp  "biomcp"
```

<sub>Source: catalog/genomoncology/biomcp/biomcp/README.md</sub>

---

## qianniuspace
# Security Audit Tool

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--qianniuspace--mcp-security-audit--mcp-security-audit
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--qianniuspace--mcp-security-audit--mcp-security-audit  "node ./build/index.js"
```

<sub>Source: catalog/qianniuspace/mcp-security-audit/mcp-security-audit/README.md</sub>

---

## Unstructured-IO
# Unstructured API MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--unstructured-io--uns-mcp--uns-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e UNSTRUCTURED_API_KEY=unstructured-api-key \
ghcr.io/metorial/mcp-container--unstructured-io--uns-mcp--uns-mcp  "uns_mcp"
```

<sub>Source: catalog/Unstructured-IO/UNS-MCP/uns-mcp/README.md</sub>

---

## admica
# FileScopeMCP (Model Context Protocol) Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--admica--filescopemcp--file-scope-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--admica--filescopemcp--file-scope-mcp  "npm run start --base-dir base-dir"
```

<sub>Source: catalog/admica/FileScopeMCP/file-scope-mcp/README.md</sub>

---

## Seym0n
# <img src="https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg" height="32"> TikTok MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--seym0n--tiktok-mcp--tiktok-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TIKNEURON_MCP_API_KEY=tikneuron-mcp-api-key \
ghcr.io/metorial/mcp-container--seym0n--tiktok-mcp--tiktok-mcp  "node build/index.js"
```

<sub>Source: catalog/Seym0n/tiktok-mcp/tiktok-mcp/README.md</sub>

---

## angheljf
# NYTimes Article Search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--angheljf--nyt--nyt
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NYTIMES_API_KEY=nytimes-api-key \
ghcr.io/metorial/mcp-container--angheljf--nyt--nyt  "node ./build/index.js"
```

<sub>Source: catalog/angheljf/nyt/nyt/README.md</sub>

---

## openbnb-org
# Airbnb MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--openbnb-org--mcp-server-airbnb--mcp-server-airbnb
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--openbnb-org--mcp-server-airbnb--mcp-server-airbnb  "node dist/index.js"
```

<sub>Source: catalog/openbnb-org/mcp-server-airbnb/mcp-server-airbnb/README.md</sub>

---

## idoru
# InfluxDB MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--idoru--influxdb-mcp-server--influxdb-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e INFLUXDB_TOKEN=influxdb-token -e INFLUXDB_URL=influxdb-url -e INFLUXDB_ORG=influxdb-org \
ghcr.io/metorial/mcp-container--idoru--influxdb-mcp-server--influxdb-mcp-server  "npm run start"
```

<sub>Source: catalog/idoru/influxdb-mcp-server/influxdb-mcp-server/README.md</sub>

---

## GeLi2001
# TFT MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--geli2001--tft-mcp-server--tft-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--geli2001--tft-mcp-server--tft-mcp-server  "npm run start --apiKey riot-api-key --gameName game-name --tagLine tag-line"
```

<sub>Source: catalog/GeLi2001/tft-mcp-server/tft-mcp-server/README.md</sub>

---

## ReAPI-com
# @reapi/mcp-openapi

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--reapi-com--mcp-openapi--mcp-openapi
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--reapi-com--mcp-openapi--mcp-openapi  "node ./dist/cli.mjs --dir dir"
```

<sub>Source: catalog/ReAPI-com/mcp-openapi/mcp-openapi/README.md</sub>

---

## jamsocket
# ForeverVM MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jamsocket--forevervm--mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FOREVERVM_TOKEN=forevervm-token \
ghcr.io/metorial/mcp-container--jamsocket--forevervm--mcp-server  "npm run start"
```

<sub>Source: catalog/jamsocket/forevervm/mcp-server/README.md</sub>

---

## yamadashy
# Repomix MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yamadashy--repomix--repomix
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--yamadashy--repomix--repomix --mcp "node ./bin/repomix.cjs --mcp"
```

<sub>Source: catalog/yamadashy/repomix/repomix/README.md</sub>

---

## mzxrai
# MCP OpenAI Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mzxrai--mcp-openai--mcp-openai
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OPENAI_API_KEY=openai-api-key \
ghcr.io/metorial/mcp-container--mzxrai--mcp-openai--mcp-openai  "node dist/index.js"
```

<sub>Source: catalog/mzxrai/mcp-openai/mcp-openai/README.md</sub>

---

## UserAd
# Didlogic MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--userad--didlogic_mcp--didlogic-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DIDLOGIC_API_KEY=didlogic-api-key \
ghcr.io/metorial/mcp-container--userad--didlogic_mcp--didlogic-mcp  "didlogic_mcp"
```

<sub>Source: catalog/UserAd/didlogic_mcp/didlogic-mcp/README.md</sub>

---

## jagan-shanmugam
# Climatiq MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jagan-shanmugam--climatiq-mcp-server--climatiq-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CLIMATIQ_API_KEY=climatiq-api-key \
ghcr.io/metorial/mcp-container--jagan-shanmugam--climatiq-mcp-server--climatiq-mcp-server  "climatiq-mcp-server"
```

<sub>Source: catalog/jagan-shanmugam/climatiq-mcp-server/climatiq-mcp-server/README.md</sub>

---

## BurtTheCoder
# Shodan MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--burtthecoder--mcp-shodan--mcp-shodan
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SHODAN_API_KEY=shodan-api-key \
ghcr.io/metorial/mcp-container--burtthecoder--mcp-shodan--mcp-shodan  "node build/index.js"
```

<sub>Source: catalog/BurtTheCoder/mcp-shodan/mcp-shodan/README.md</sub>

---

## oceanbase
# Oceanbase MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--oceanbase--mcp-oceanbase--mcp-oceanbase
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AK=AK -e SK=SK -e ADDRESS=ADDRESS \
ghcr.io/metorial/mcp-container--oceanbase--mcp-oceanbase--mcp-oceanbase  "oceanbase_mcp_server"
```

<sub>Source: catalog/oceanbase/mcp-oceanbase/mcp-oceanbase/README.md</sub>

---

## effytech
# Freshdesk MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--effytech--freshdesk_mcp--freshdesk-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FRESHDESK_API_KEY=freshdesk-api-key -e FRESHDESK_DOMAIN=freshdesk-domain \
ghcr.io/metorial/mcp-container--effytech--freshdesk_mcp--freshdesk-mcp  "freshdesk-mcp"
```

<sub>Source: catalog/effytech/freshdesk_mcp/freshdesk-mcp/README.md</sub>

---

## hyperb1iss
# ✨ Lucidity MCP 🔍

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hyperb1iss--lucidity-mcp--lucidity-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--hyperb1iss--lucidity-mcp--lucidity-mcp  "lucidity-mcp"
```

<sub>Source: catalog/hyperb1iss/lucidity-mcp/lucidity-mcp/README.md</sub>

---

## GLips
# Framelink Figma MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--glips--figma-context-mcp--figma-context-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FIGMA_API_KEY=figma-api-key \
ghcr.io/metorial/mcp-container--glips--figma-context-mcp--figma-context-mcp --figma-api-key={{FIGMA_API_KEY}}} --stdio "pnpm run start --figma-api-key={{FIGMA_API_KEY}}} --stdio"
```

<sub>Source: catalog/GLips/Figma-Context-MCP/figma-context-mcp/README.md</sub>

---

## scorzeth
# Anki MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--scorzeth--anki-mcp-server--anki-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--scorzeth--anki-mcp-server--anki-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/scorzeth/anki-mcp-server/anki-mcp-server/README.md</sub>

---

## Xuanwo
# Model Context Protocol Server for Apache OpenDAL™

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--xuanwo--mcp-server-opendal--mcp-server-opendal
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--xuanwo--mcp-server-opendal--mcp-server-opendal  "mcp-server-opendal"
```

<sub>Source: catalog/Xuanwo/mcp-server-opendal/mcp-server-opendal/README.md</sub>

---

## JetBrains
# JetBrains MCP Proxy Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jetbrains--mcpproxy--mcp-proxy
```
2. Run the container:

```bash
docker run -i --rm \ 
-e IDE_PORT=IDE_PORT -e HOST=HOST \
ghcr.io/metorial/mcp-container--jetbrains--mcpproxy--mcp-proxy  "node dist/src/index.js"
```

<sub>Source: catalog/JetBrains/mcpProxy/mcp-proxy/README.md</sub>

---

## hannesj
# GraphQL Schema Model Context Protocol Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hannesj--mcp-graphql-schema--mcp-graphql-schema
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--hannesj--mcp-graphql-schema--mcp-graphql-schema  "npm run start"
```

<sub>Source: catalog/hannesj/mcp-graphql-schema/mcp-graphql-schema/README.md</sub>

---

## screenshotone
# ScreenshotOne MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--screenshotone--mcp--mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SCREENSHOTONE_API_KEY=screenshotone-api-key \
ghcr.io/metorial/mcp-container--screenshotone--mcp--mcp  "node ./build/index.js"
```

<sub>Source: catalog/screenshotone/mcp/mcp/README.md</sub>

---

## sirmews
# Pinecone Model Context Protocol Server.

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sirmews--mcp-pinecone--mcp-pinecone
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--sirmews--mcp-pinecone--mcp-pinecone  "mcp-pinecone --index-name index-name --api-key api-key"
```

<sub>Source: catalog/sirmews/mcp-pinecone/mcp-pinecone/README.md</sub>

---

## gotohuman
# gotoHuman MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--gotohuman--gotohuman-mcp-server--gotohuman-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GOTOHUMAN_API_KEY=gotohuman-api-key \
ghcr.io/metorial/mcp-container--gotohuman--gotohuman-mcp-server--gotohuman-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/gotohuman/gotohuman-mcp-server/gotohuman-mcp-server/README.md</sub>

---

## mamertofabian
# ElevenLabs MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mamertofabian--elevenlabs-mcp-server--elevenlabs-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ELEVENLABS_API_KEY=elevenlabs-api-key -e ELEVENLABS_VOICE_ID=elevenlabs-voice-id -e ELEVENLABS_MODEL_ID=elevenlabs-model-id -e ELEVENLABS_STABILITY=elevenlabs-stability -e ELEVENLABS_SIMILARITY_BOOST=elevenlabs-similarity-boost -e ELEVENLABS_STYLE=elevenlabs-style -e ELEVENLABS_OUTPUT_DIR=elevenlabs-output-dir \
ghcr.io/metorial/mcp-container--mamertofabian--elevenlabs-mcp-server--elevenlabs-mcp-server  "elevenlabs-mcp-server"
```

<sub>Source: catalog/mamertofabian/elevenlabs-mcp-server/elevenlabs-mcp-server/README.md</sub>

---

## mark3labs
# Filesystem MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mark3labs--mcp-filesystem-server--mcp-filesystem-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--mark3labs--mcp-filesystem-server--mcp-filesystem-server  "./out"
```

<sub>Source: catalog/mark3labs/mcp-filesystem-server/mcp-filesystem-server/README.md</sub>

---

## horizondatawave
# HDW MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--horizondatawave--hdw-mcp-server--hdw-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HDW_ACCESS_TOKEN=hdw-access-token -e HDW_ACCOUNT_ID=hdw-account-id \
ghcr.io/metorial/mcp-container--horizondatawave--hdw-mcp-server--hdw-mcp-server  "node build/index.js"
```

<sub>Source: catalog/horizondatawave/hdw-mcp-server/hdw-mcp-server/README.md</sub>

---

## nwiizo
# tfmcp: Terraform Model Context Protocol Tool

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--nwiizo--tfmcp--tfmcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TERRAFORM_DIR=terraform-dir -e TFMCP_LOG_LEVEL=tfmcp-log-level -e TFMCP_DEMO_MODE=tfmcp-demo-mode \
ghcr.io/metorial/mcp-container--nwiizo--tfmcp--tfmcp  "./bin/tfmcp --dir terraform-dir --path path"
```

<sub>Source: catalog/nwiizo/tfmcp/tfmcp/README.md</sub>

---

## ognis1205
# mcp-server-unitycatalog: An Unity Catalog MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ognis1205--mcp-server-unitycatalog--mcp-server-unitycatalog
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ognis1205--mcp-server-unitycatalog--mcp-server-unitycatalog  "mcp-server-unitycatalog --uc_server uc-server --uc_catalog uc-catalog --uc_schema uc-schema"
```

<sub>Source: catalog/ognis1205/mcp-server-unitycatalog/mcp-server-unitycatalog/README.md</sub>

---

## johnneerdael
# Netskope NPA MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--johnneerdael--netskope-mcp--netskope-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NETSKOPE_BASE_URL=netskope-base-url -e NETSKOPE_API_KEY=netskope-api-key \
ghcr.io/metorial/mcp-container--johnneerdael--netskope-mcp--netskope-mcp  "npm run start"
```

<sub>Source: catalog/johnneerdael/netskope-mcp/netskope-mcp/README.md</sub>

---

## OctoMind-dev
# octomind mcp server: let agents create and manage e2e tests

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--octomind-dev--octomind-mcp--octomind-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e APIKEY=apikey \
ghcr.io/metorial/mcp-container--octomind-dev--octomind-mcp--octomind-mcp  "node ./dist/index.js"
```

<sub>Source: catalog/OctoMind-dev/octomind-mcp/octomind-mcp/README.md</sub>

---

## ddukbg
# GitHub Enterprise MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ddukbg--github-enterprise-mcp--github-enterprise-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ddukbg--github-enterprise-mcp--github-enterprise-mcp  "npm run start --token token --github-enterprise-url github-enterprise-url"
```

<sub>Source: catalog/ddukbg/github-enterprise-mcp/github-enterprise-mcp/README.md</sub>

---

## jovezhong
# Timeplus MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jovezhong--mcp-timeplus--mcp-timeplus
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TIMEPLUS_HOST=timeplus-host -e TIMEPLUS_PORT=timeplus-port -e TIMEPLUS_USER=timeplus-user -e TIMEPLUS_PASSWORD=timeplus-password -e TIMEPLUS_SECURE=timeplus-secure -e TIMEPLUS_VERIFY=timeplus-verify -e TIMEPLUS_CONNECT_TIMEOUT=timeplus-connect-timeout -e TIMEPLUS_SEND_RECEIVE_TIMEOUT=timeplus-send-receive-timeout -e TIMEPLUS_READ_ONLY=timeplus-read-only -e TIMEPLUS_KAFKA_CONFIG=timeplus-kafka-config \
ghcr.io/metorial/mcp-container--jovezhong--mcp-timeplus--mcp-timeplus  "mcp-timeplus"
```

<sub>Source: catalog/jovezhong/mcp-timeplus/mcp-timeplus/README.md</sub>

---

## tavily-ai
# Tavily MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tavily-ai--tavily-mcp--tavily-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TAVILY_API_KEY=tavily-api-key \
ghcr.io/metorial/mcp-container--tavily-ai--tavily-mcp--tavily-mcp  "node ./build/index.js"
```

<sub>Source: catalog/tavily-ai/tavily-mcp/tavily-mcp/README.md</sub>

---

## kj455
# mcp-kibela 🗒️

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kj455--mcp-kibela--mcp-kibela
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KIBELA_TEAM=kibela-team -e KIBELA_TOKEN=kibela-token \
ghcr.io/metorial/mcp-container--kj455--mcp-kibela--mcp-kibela  "node ./dist/index.js"
```

<sub>Source: catalog/kj455/mcp-kibela/mcp-kibela/README.md</sub>

---

## JoshuaRileyDev
# App Store Connect MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--joshuarileydev--app-store-connect-mcp-server--app-store-connect-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e APP_STORE_CONNECT_KEY_ID=app-store-connect-key-id -e APP_STORE_CONNECT_ISSUER_ID=app-store-connect-issuer-id -e APP_STORE_CONNECT_P8_PATH=app-store-connect-p-8-path \
ghcr.io/metorial/mcp-container--joshuarileydev--app-store-connect-mcp-server--app-store-connect-mcp-server  "npm run start"
```

<sub>Source: catalog/JoshuaRileyDev/app-store-connect-mcp-server/app-store-connect-mcp-server/README.md</sub>

---

## YuChenSSR
# Multi-Model Advisor

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yuchenssr--multi-ai-advisor-mcp--multi-ai-advisor-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--yuchenssr--multi-ai-advisor-mcp--multi-ai-advisor-mcp  "npm run start"
```

<sub>Source: catalog/YuChenSSR/multi-ai-advisor-mcp/multi-ai-advisor-mcp/README.md</sub>

---

## tinyfish-io
# AgentQL MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tinyfish-io--agentql-mcp--agentql-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AGENTQL_API_KEY=agentql-api-key \
ghcr.io/metorial/mcp-container--tinyfish-io--agentql-mcp--agentql-mcp  "node ./dist/index.js"
```

<sub>Source: catalog/tinyfish-io/agentql-mcp/agentql-mcp/README.md</sub>

---

## benborla
# MCP Server for MySQL

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--benborla--mcp-server-mysql--mcp-server-mysql
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MYSQL_HOST=mysql-host -e MYSQL_PORT=mysql-port -e MYSQL_USER=mysql-user -e MYSQL_PASS=mysql-pass -e MYSQL_DB=mysql-db -e ALLOW_INSERT_OPERATION=allow-insert-operation -e ALLOW_UPDATE_OPERATION=allow-update-operation -e ALLOW_DELETE_OPERATION=allow-delete-operation -e PATH=path \
ghcr.io/metorial/mcp-container--benborla--mcp-server-mysql--mcp-server-mysql  "pnpm run start"
```

<sub>Source: catalog/benborla/mcp-server-mysql/mcp-server-mysql/README.md</sub>

---

## lishenxydlgzs
# AWS Athena

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--lishenxydlgzs--aws-athena-mcp--aws-athena-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY -e AWS_REGION=AWS_REGION \
ghcr.io/metorial/mcp-container--lishenxydlgzs--aws-athena-mcp--aws-athena-mcp  "npm run start"
```

<sub>Source: catalog/lishenxydlgzs/aws-athena-mcp/aws-athena-mcp/README.md</sub>

---

## rajvirtual
# OneNote MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--rajvirtual--mcp-servers--onenote
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CLIENT_ID=client-id \
ghcr.io/metorial/mcp-container--rajvirtual--mcp-servers--onenote  "npm run start"
```

<sub>Source: catalog/rajvirtual/MCP-Servers/onenote/README.md</sub>

---

## last9
# Last9 MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--last9--last9-mcp-server--last-9-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LAST9_AUTH_TOKEN=last-9-auth-token -e LAST9_BASE_URL=last-9-base-url -e LAST9_REFRESH_TOKEN=last-9-refresh-token \
ghcr.io/metorial/mcp-container--last9--last9-mcp-server--last-9-mcp-server  "node ./bin/cli.js"
```

<sub>Source: catalog/last9/last9-mcp-server/last-9-mcp-server/README.md</sub>

---

## cr7258
# Elasticsearch/OpenSearch MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--cr7258--elasticsearch-mcp-server--elasticsearch-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ELASTICSEARCH_HOSTS=elasticsearch-hosts -e ELASTICSEARCH_USERNAME=elasticsearch-username -e ELASTICSEARCH_PASSWORD=elasticsearch-password \
ghcr.io/metorial/mcp-container--cr7258--elasticsearch-mcp-server--elasticsearch-mcp-server  "elasticsearch-mcp-server"
```

<sub>Source: catalog/cr7258/elasticsearch-mcp-server/elasticsearch-mcp-server/README.md</sub>

---

## r-huijts
# Rijksmuseum MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--r-huijts--rijksmuseum-mcp--rijksmuseum-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e RIJKSMUSEUM_API_KEY=rijksmuseum-api-key \
ghcr.io/metorial/mcp-container--r-huijts--rijksmuseum-mcp--rijksmuseum-mcp  "npm run start"
```

<sub>Source: catalog/r-huijts/rijksmuseum-mcp/rijksmuseum-mcp/README.md</sub>

---

## tacticlaunch
# MCP Linear

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tacticlaunch--mcp-linear--mcp-linear
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LINEAR_API_TOKEN=linear-api-token \
ghcr.io/metorial/mcp-container--tacticlaunch--mcp-linear--mcp-linear  "npm run start"
```

<sub>Source: catalog/tacticlaunch/mcp-linear/mcp-linear/README.md</sub>

---

## scrapeless-ai
# Scrapeless Mcp Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--scrapeless-ai--scrapeless-mcp-server--scrapeless-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SCRAPELESS_KEY=scrapeless-key \
ghcr.io/metorial/mcp-container--scrapeless-ai--scrapeless-mcp-server--scrapeless-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/scrapeless-ai/scrapeless-mcp-server/scrapeless-mcp-server/README.md</sub>

---

## anjor
# Coinmarket MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--anjor--coinmarket-mcp-server--coinmarket-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e COINMARKET_API_KEY=coinmarket-api-key \
ghcr.io/metorial/mcp-container--anjor--coinmarket-mcp-server--coinmarket-mcp-server  "coinmarket_service"
```

<sub>Source: catalog/anjor/coinmarket-mcp-server/coinmarket-mcp-server/README.md</sub>

---

## ChanMeng666
# Google News MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--chanmeng666--server-google-news--server-google-news
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SERP_API_KEY=serp-api-key \
ghcr.io/metorial/mcp-container--chanmeng666--server-google-news--server-google-news  "npm run start"
```

<sub>Source: catalog/ChanMeng666/server-google-news/server-google-news/README.md</sub>

---

## bart6114
# Bear MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bart6114--my-bear-mcp-server--my-bear-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--bart6114--my-bear-mcp-server--my-bear-mcp-server  "npm run start"
```

<sub>Source: catalog/bart6114/my-bear-mcp-server/my-bear-mcp-server/README.md</sub>

---

## hungthai1401
# Bruno MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hungthai1401--bruno-mcp--bruno-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--hungthai1401--bruno-mcp--bruno-mcp  "node ./build/index.js"
```

<sub>Source: catalog/hungthai1401/bruno-mcp/bruno-mcp/README.md</sub>

---

## kagisearch
# Kagi MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kagisearch--kagimcp--kagimcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KAGI_API_KEY=kagi-api-key -e KAGI_SUMMARIZER_ENGINE=kagi-summarizer-engine \
ghcr.io/metorial/mcp-container--kagisearch--kagimcp--kagimcp  "kagimcp"
```

<sub>Source: catalog/kagisearch/kagimcp/kagimcp/README.md</sub>

---

## silenceper
# mcp-k8s

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--silenceper--mcp-k8s--mcp-k-8-s
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--silenceper--mcp-k8s--mcp-k-8-s  "./out --kubeconfig kubeconfig --enable-create enable-create --enable-update enable-update --enable-delete enable-delete"
```

<sub>Source: catalog/silenceper/mcp-k8s/mcp-k-8-s/README.md</sub>

---

## AbdelStark
# 🌐 Nostr MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--abdelstark--nostr-mcp--nostr-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LOG_LEVEL=log-level -e NODE_ENV=node-env -e NOSTR_RELAYS=nostr-relays -e NOSTR_NSEC_KEY=nostr-nsec-key \
ghcr.io/metorial/mcp-container--abdelstark--nostr-mcp--nostr-mcp  "npm run start"
```

<sub>Source: catalog/AbdelStark/nostr-mcp/nostr-mcp/README.md</sub>

---

## SecretiveShell
# MCP-searxng

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--secretiveshell--mcp-searxng--mcp-searxng
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SEARXNG_URL=searxng-url \
ghcr.io/metorial/mcp-container--secretiveshell--mcp-searxng--mcp-searxng  "mcp-searxng"
```

<sub>Source: catalog/SecretiveShell/MCP-searxng/mcp-searxng/README.md</sub>

---

## Rootly-AI-Labs
# Rootly MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--rootly-ai-labs--rootly-mcp-server--rootly-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ROOTLY_API_TOKEN=rootly-api-token \
ghcr.io/metorial/mcp-container--rootly-ai-labs--rootly-mcp-server--rootly-mcp-server  "rootly-mcp-server"
```

<sub>Source: catalog/Rootly-AI-Labs/Rootly-MCP-server/rootly-mcp-server/README.md</sub>

---

## centralmind
# CentralMind Gateway

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--centralmind--gateway--gateway
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--centralmind--gateway--gateway  "./out"
```

<sub>Source: catalog/centralmind/gateway/gateway/README.md</sub>

---

## xxxbrian
# mcp-rquest

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--xxxbrian--mcp-rquest--mcp-rquest
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--xxxbrian--mcp-rquest--mcp-rquest  "mcp-rquest"
```

<sub>Source: catalog/xxxbrian/mcp-rquest/mcp-rquest/README.md</sub>

---

## descope-sample-apps
# Descope MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--descope-sample-apps--descope-mcp-server--descope-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DESCOPE_PROJECT_ID=descope-project-id -e DESCOPE_MANAGEMENT_KEY=descope-management-key \
ghcr.io/metorial/mcp-container--descope-sample-apps--descope-mcp-server--descope-mcp-server  "npm run start"
```

<sub>Source: catalog/descope-sample-apps/descope-mcp-server/descope-mcp-server/README.md</sub>

---

## evalstate
# mcp-miro MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--evalstate--mcp-miro--mcp-miro
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--evalstate--mcp-miro--mcp-miro  "node ./build/index.js --token token"
```

<sub>Source: catalog/evalstate/mcp-miro/mcp-miro/README.md</sub>

---

## meilisearch
# Meilisearch MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--meilisearch--meilisearch-mcp--meilisearch-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MEILI_HTTP_ADDR=Meilisearch HTTP Address -e MEILI_MASTER_KEY=Meilisearch Master Key \
ghcr.io/metorial/mcp-container--meilisearch--meilisearch-mcp--meilisearch-mcp  "python -m src.meilisearch_mcp"
```

<sub>Source: catalog/meilisearch/meilisearch-mcp/meilisearch-mcp/README.md</sub>

---

## john-zhang-dev
# Xero MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--john-zhang-dev--xero-mcp--xero-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e XERO_CLIENT_ID=xero-client-id -e XERO_CLIENT_SECRET=xero-client-secret -e XERO_REDIRECT_URI=xero-redirect-uri \
ghcr.io/metorial/mcp-container--john-zhang-dev--xero-mcp--xero-mcp  "node ./build/index.js"
```

<sub>Source: catalog/john-zhang-dev/xero-mcp/xero-mcp/README.md</sub>

---

## hmk
# attio-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hmk--attio-mcp-server--attio-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ATTIO_API_KEY=attio-api-key \
ghcr.io/metorial/mcp-container--hmk--attio-mcp-server--attio-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/hmk/attio-mcp-server/attio-mcp-server/README.md</sub>

---

## PaddleHQ
# Paddle MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--paddlehq--paddle-mcp-server--paddle-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--paddlehq--paddle-mcp-server--paddle-mcp-server  "node ./build/index.js --api-key paddle-api-key --environment paddle-environment"
```

<sub>Source: catalog/PaddleHQ/paddle-mcp-server/paddle-mcp-server/README.md</sub>

---

## graphlit
# Graphlit MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--graphlit--graphlit-mcp-server--graphlit-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GRAPHLIT_ORGANIZATION_ID=graphlit-organization-id -e GRAPHLIT_ENVIRONMENT_ID=graphlit-environment-id -e GRAPHLIT_JWT_SECRET=graphlit-jwt-secret \
ghcr.io/metorial/mcp-container--graphlit--graphlit-mcp-server--graphlit-mcp-server  "npm run start"
```

<sub>Source: catalog/graphlit/graphlit-mcp-server/graphlit-mcp-server/README.md</sub>

---

## github
# GitHub MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--github--github-mcp-server--github-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GITHUB_PERSONAL_ACCESS_TOKEN=github-personal-access-token \
ghcr.io/metorial/mcp-container--github--github-mcp-server--github-mcp-server stdio "./out stdio"
```

<sub>Source: catalog/github/github-mcp-server/github-mcp-server/README.md</sub>

---

## aws-samples
# S3 Model Context Protocol Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--aws-samples--sample-mcp-server-s3--sample-mcp-server-s-3
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--aws-samples--sample-mcp-server-s3--sample-mcp-server-s-3  "s3-mcp-server"
```

<sub>Source: catalog/aws-samples/sample-mcp-server-s3/sample-mcp-server-s-3/README.md</sub>

---

## deepfates
# Replicate MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--deepfates--mcp-replicate--mcp-replicate
```
2. Run the container:

```bash
docker run -i --rm \ 
-e REPLICATE_API_TOKEN=replicate-api-token \
ghcr.io/metorial/mcp-container--deepfates--mcp-replicate--mcp-replicate  "npm run start"
```

<sub>Source: catalog/deepfates/mcp-replicate/mcp-replicate/README.md</sub>

---

## heroku
# Heroku MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--heroku--heroku-mcp-server--heroku-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HEROKU_API_KEY=heroku-api-key \
ghcr.io/metorial/mcp-container--heroku--heroku-mcp-server--heroku-mcp-server  "heroku mcp:start"
```

<sub>Source: catalog/heroku/heroku-mcp-server/heroku-mcp-server/README.md</sub>

---

## rishikavikondala
# AWS MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--rishikavikondala--mcp-server-aws--mcp-server-aws
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY -e AWS_REGION=AWS_REGION \
ghcr.io/metorial/mcp-container--rishikavikondala--mcp-server-aws--mcp-server-aws  "mcp-server-aws"
```

<sub>Source: catalog/rishikavikondala/mcp-server-aws/mcp-server-aws/README.md</sub>

---

## fastnai
# Fastn Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--fastnai--mcp-fastn--mcp-fastn
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--fastnai--mcp-fastn--mcp-fastn  "fastn --api_key api-key --space_id workspace-id"
```

<sub>Source: catalog/fastnai/mcp-fastn/mcp-fastn/README.md</sub>

---

## ferdousbhai
# investor-agent: A Financial Analysis MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ferdousbhai--investor-agent--investor-agent
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ferdousbhai--investor-agent--investor-agent  "investor-agent"
```

<sub>Source: catalog/ferdousbhai/investor-agent/investor-agent/README.md</sub>

---

## pskill9
# Website Downloader MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--pskill9--website-downloader--website-downloader
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--pskill9--website-downloader--website-downloader  "node ./build/index.js"
```

<sub>Source: catalog/pskill9/website-downloader/website-downloader/README.md</sub>

---

## needle-ai
# Needle MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--needle-ai--needle-mcp--needle-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NEEDLE_API_KEY=needle-api-key \
ghcr.io/metorial/mcp-container--needle-ai--needle-mcp--needle-mcp  "needle-mcp"
```

<sub>Source: catalog/needle-ai/needle-mcp/needle-mcp/README.md</sub>

---

## takashiishida
# arxiv-latex MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--takashiishida--arxiv-latex-mcp--arxiv-latex-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--takashiishida--arxiv-latex-mcp--arxiv-latex-mcp  "python -m arxiv-latex-mcp"
```

<sub>Source: catalog/takashiishida/arxiv-latex-mcp/arxiv-latex-mcp/README.md</sub>

---

## heurist-network
# Mesh Agent MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--heurist-network--heurist-mesh-mcp-server--heurist-mesh-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HEURIST_API_KEY=heurist-api-key \
ghcr.io/metorial/mcp-container--heurist-network--heurist-mesh-mcp-server--heurist-mesh-mcp-server  "mesh-tool-server"
```

<sub>Source: catalog/heurist-network/heurist-mesh-mcp-server/heurist-mesh-mcp-server/README.md</sub>

---

## AshDevFr
# Discourse MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ashdevfr--discourse-mcp-server--discourse-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DISCOURSE_API_URL=discourse-api-url -e DISCOURSE_API_KEY=discourse-api-key -e DISCOURSE_API_USERNAME=discourse-api-username \
ghcr.io/metorial/mcp-container--ashdevfr--discourse-mcp-server--discourse-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/AshDevFr/discourse-mcp-server/discourse-mcp-server/README.md</sub>

---

## idosal
# GitMCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--idosal--git-mcp--git-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--idosal--git-mcp--git-mcp  "exec caddy run --config /assets/Caddyfile --adapter caddyfile 2>&1"
```

<sub>Source: catalog/idosal/git-mcp/git-mcp/README.md</sub>

---

## tinybirdco
# Tinybird MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tinybirdco--mcp-tinybird--mcp-tinybird
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TB_API_URL=tb-api-url -e TB_ADMIN_TOKEN=tb-admin-token \
ghcr.io/metorial/mcp-container--tinybirdco--mcp-tinybird--mcp-tinybird stdio "mcp-tinybird stdio"
```

<sub>Source: catalog/tinybirdco/mcp-tinybird/mcp-tinybird/README.md</sub>

---

## pab1it0
# Azure Data Explorer MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--pab1it0--adx-mcp-server--adx-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ADX_CLUSTER_URL=adx-cluster-url -e ADX_DATABASE=adx-database \
ghcr.io/metorial/mcp-container--pab1it0--adx-mcp-server--adx-mcp-server  "adx-mcp-server"
```

<sub>Source: catalog/pab1it0/adx-mcp-server/adx-mcp-server/README.md</sub>

---

## ferrislucas
# iterm-mcp

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ferrislucas--iterm-mcp--iterm-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ferrislucas--iterm-mcp--iterm-mcp  "node ./build/index.js"
```

<sub>Source: catalog/ferrislucas/iterm-mcp/iterm-mcp/README.md</sub>

---

## blurrah
# mcp-graphql

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--blurrah--mcp-graphql--mcp-graphql
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ENDPOINT=endpoint \
ghcr.io/metorial/mcp-container--blurrah--mcp-graphql--mcp-graphql  "bun run start"
```

<sub>Source: catalog/blurrah/mcp-graphql/mcp-graphql/README.md</sub>

---

## hyperbrowserai
# Hyperbrowser MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hyperbrowserai--mcp--mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HYPERBROWSER_API_KEY=hyperbrowser-api-key \
ghcr.io/metorial/mcp-container--hyperbrowserai--mcp--mcp  "npm run start"
```

<sub>Source: catalog/hyperbrowserai/mcp/mcp/README.md</sub>

---

## HenryHaoson
# 语雀 MCP 服务器

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--henryhaoson--yuque-mcp-server--yuque-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e YUQUE_API_TOKEN=yuque-api-token -e YUQUE_API_BASE_URL=yuque-api-base-url \
ghcr.io/metorial/mcp-container--henryhaoson--yuque-mcp-server--yuque-mcp-server  "npm run start"
```

<sub>Source: catalog/HenryHaoson/Yuque-MCP-Server/yuque-mcp-server/README.md</sub>

---

## jae-jae
# Fetcher MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jae-jae--fetcher-mcp--fetcher-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--jae-jae--fetcher-mcp--fetcher-mcp  "node build/index.js"
```

<sub>Source: catalog/jae-jae/fetcher-mcp/fetcher-mcp/README.md</sub>

---

## comet-ml
# Opik MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--comet-ml--opik-mcp--opik-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OPIK_API_BASE_URL=opik-api-base-url -e OPIK_API_KEY=opik-api-key -e OPIK_WORKSPACE_NAME=opik-workspace-name \
ghcr.io/metorial/mcp-container--comet-ml--opik-mcp--opik-mcp  "npm run start"
```

<sub>Source: catalog/comet-ml/opik-mcp/opik-mcp/README.md</sub>

---

## lenwood
# College Football Data MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--lenwood--cfbd-mcp-server--cfbd-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CFB_API_KEY=cfb-api-key \
ghcr.io/metorial/mcp-container--lenwood--cfbd-mcp-server--cfbd-mcp-server cfbd-mcp-server "cfbd-mcp-server cfbd-mcp-server"
```

<sub>Source: catalog/lenwood/cfbd-mcp-server/cfbd-mcp-server/README.md</sub>

---

## allenporter
# mcp-server-home-assistant

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--allenporter--mcp-server-home-assistant--mcp-server-home-assistant
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HOME_ASSISTANT_WEB_SOCKET_URL=home-assistant-web-socket-url \
ghcr.io/metorial/mcp-container--allenporter--mcp-server-home-assistant--mcp-server-home-assistant  "mcp-server-home-assistant"
```

<sub>Source: catalog/allenporter/mcp-server-home-assistant/mcp-server-home-assistant/README.md</sub>

---

## seekrays
# MCP System Monitor

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--seekrays--mcp-monitor--mcp-monitor
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--seekrays--mcp-monitor--mcp-monitor  "./out"
```

<sub>Source: catalog/seekrays/mcp-monitor/mcp-monitor/README.md</sub>

---

## flowcore-io
# Flowcore Platform MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--flowcore-io--mcp-flowcore-platform--mcp-flowcore-platform
```
2. Run the container:

```bash
docker run -i --rm \ 
-e USERNAME=username \
ghcr.io/metorial/mcp-container--flowcore-io--mcp-flowcore-platform--mcp-flowcore-platform  "node ./dist/index.js --username username --pat pat"
```

<sub>Source: catalog/flowcore-io/mcp-flowcore-platform/mcp-flowcore-platform/README.md</sub>

---

## furey
# MongoDB Lens

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--furey--mongodb-lens--mongodb-lens
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CONFIG_MONGO_URI=mongo-uri -e CONFIG_LOG_LEVEL=log-level -e CONFIG_DEFAULT_DB_NAME=default-db-name \
ghcr.io/metorial/mcp-container--furey--mongodb-lens--mongodb-lens  "npm run start"
```

<sub>Source: catalog/furey/mongodb-lens/mongodb-lens/README.md</sub>

---

## oschina
# Gitee MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--oschina--mcp-gitee--mcp-gitee
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GITEE_API_BASE=gitee-api-base -e GITEE_ACCESS_TOKEN=gitee-access-token \
ghcr.io/metorial/mcp-container--oschina--mcp-gitee--mcp-gitee  "./out"
```

<sub>Source: catalog/oschina/mcp-gitee/mcp-gitee/README.md</sub>

---

## takumi0706
# Google Calendar MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--takumi0706--google-calendar-mcp--google-calendar-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GOOGLE_CLIENT_ID=google-client-id -e GOOGLE_CLIENT_SECRET=google-client-secret -e GOOGLE_REDIRECT_URI=google-redirect-uri \
ghcr.io/metorial/mcp-container--takumi0706--google-calendar-mcp--google-calendar-mcp  "npm run start"
```

<sub>Source: catalog/takumi0706/google-calendar-mcp/google-calendar-mcp/README.md</sub>

---

## ko1ynnky
# GitHub Actions MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ko1ynnky--github-actions-mcp-server--github-actions-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e GITHUB_PERSONAL_ACCESS_TOKEN=github-personal-access-token \
ghcr.io/metorial/mcp-container--ko1ynnky--github-actions-mcp-server--github-actions-mcp-server  "npm run start"
```

<sub>Source: catalog/ko1ynnky/github-actions-mcp-server/github-actions-mcp-server/README.md</sub>

---

## abhiz123
# Todoist MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--abhiz123--todoist-mcp-server--todoist-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TODOIST_API_TOKEN=todoist-api-token \
ghcr.io/metorial/mcp-container--abhiz123--todoist-mcp-server--todoist-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/abhiz123/todoist-mcp-server/todoist-mcp-server/README.md</sub>

---

## AI-Agent-Hub
# AI Agent Marketplace Index Search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ai-agent-hub--ai-agent-marketplace-index-mcp--ai-agent-marketplace-index-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ai-agent-hub--ai-agent-marketplace-index-mcp--ai-agent-marketplace-index-mcp  "python main.py"
```

<sub>Source: catalog/AI-Agent-Hub/ai-agent-marketplace-index-mcp/ai-agent-marketplace-index-mcp/README.md</sub>

---

## Flux159
# MCP Server Kubernetes

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--flux159--mcp-server-kubernetes--mcp-server-kubernetes
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--flux159--mcp-server-kubernetes--mcp-server-kubernetes  "bun run start"
```

<sub>Source: catalog/Flux159/mcp-server-kubernetes/mcp-server-kubernetes/README.md</sub>

---

## lamemind
# Multiverse MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--lamemind--mcp-server-multiverse--mcp-server-multiverse
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--lamemind--mcp-server-multiverse--mcp-server-multiverse  "npm run start"
```

<sub>Source: catalog/lamemind/mcp-server-multiverse/mcp-server-multiverse/README.md</sub>

---

## ivo-toby
# Contentful MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ivo-toby--contentful-mcp--contentful-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=contentful-management-access-token \
ghcr.io/metorial/mcp-container--ivo-toby--contentful-mcp--contentful-mcp  "node ./bin/mcp-server.js"
```

<sub>Source: catalog/ivo-toby/contentful-mcp/contentful-mcp/README.md</sub>

---

## shannonlal
# Postman MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--shannonlal--mcp-postman--mcp-postman
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--shannonlal--mcp-postman--mcp-postman  "node ./build/index.js"
```

<sub>Source: catalog/shannonlal/mcp-postman/mcp-postman/README.md</sub>

---

## liuyoshio
# MCP Compass 🧭

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--liuyoshio--mcp-compass--mcp-compass
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--liuyoshio--mcp-compass--mcp-compass  "node ./build/index.js"
```

<sub>Source: catalog/liuyoshio/mcp-compass/mcp-compass/README.md</sub>

---

## kopfrechner
# GitLab MR MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kopfrechner--gitlab-mr-mcp--gitlab-mr-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e MR_MCP_GITLAB_TOKEN=GitLab Token \
ghcr.io/metorial/mcp-container--kopfrechner--gitlab-mr-mcp--gitlab-mr-mcp  "npm run start"
```

<sub>Source: catalog/kopfrechner/gitlab-mr-mcp/gitlab-mr-mcp/README.md</sub>

---

## PostHog
# PostHog MCP Server 📊

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--posthog--posthog-mcp--posthog-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PERSONAL_API_KEY=personal-api-key \
ghcr.io/metorial/mcp-container--posthog--posthog-mcp--posthog-mcp  "posthog-mcp"
```

<sub>Source: catalog/PostHog/posthog-mcp/posthog-mcp/README.md</sub>

---

## integration-app
# Integration App MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--integration-app--mcp-server--mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e INTEGRATION_APP_TOKEN=integration-app-token -e INTEGRATION_KEY=integration-key \
ghcr.io/metorial/mcp-container--integration-app--mcp-server--mcp-server  "npm run start"
```

<sub>Source: catalog/integration-app/mcp-server/mcp-server/README.md</sub>

---

## hardik-id
# Azure Resource Graph MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hardik-id--azure-resource-graph-mcp-server--azure-resource-graph-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SUBSCRIPTION_ID=subscription-id \
ghcr.io/metorial/mcp-container--hardik-id--azure-resource-graph-mcp-server--azure-resource-graph-mcp-server  "npm run start"
```

<sub>Source: catalog/hardik-id/azure-resource-graph-mcp-server/azure-resource-graph-mcp-server/README.md</sub>

---

## kiwamizamurai
# Kibela MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kiwamizamurai--mcp-kibela-server--mcp-kibela-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KIBELA_TEAM=kibela-team -e KIBELA_TOKEN=kibela-token \
ghcr.io/metorial/mcp-container--kiwamizamurai--mcp-kibela-server--mcp-kibela-server  "npm run start"
```

<sub>Source: catalog/kiwamizamurai/mcp-kibela-server/mcp-kibela-server/README.md</sub>

---

## tomekkorbak
# Oura MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tomekkorbak--oura-mcp-server--oura-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OURA_API_TOKEN=oura-api-token \
ghcr.io/metorial/mcp-container--tomekkorbak--oura-mcp-server--oura-mcp-server  "oura-mcp-server"
```

<sub>Source: catalog/tomekkorbak/oura-mcp-server/oura-mcp-server/README.md</sub>

---

## VeyraX
# VeyraX MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--veyrax--veyrax-mcp--veyrax-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e VEYRAX_API_KEY=VeyraX API Key \
ghcr.io/metorial/mcp-container--veyrax--veyrax-mcp--veyrax-mcp  "npm run start"
```

<sub>Source: catalog/VeyraX/veyrax-mcp/veyrax-mcp/README.md</sub>

---

## varunneal
# spotify-mcp MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--varunneal--spotify-mcp--spotify-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SPOTIFY_CLIENT_ID=spotify-client-id -e SPOTIFY_CLIENT_SECRET=spotify-client-secret -e SPOTIFY_REDIRECT_URI=spotify-redirect-uri \
ghcr.io/metorial/mcp-container--varunneal--spotify-mcp--spotify-mcp  "spotify-mcp"
```

<sub>Source: catalog/varunneal/spotify-mcp/spotify-mcp/README.md</sub>

---

## OctagonAI
# Octagon MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--octagonai--octagon-mcp-server--octagon-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OCTAGON_API_KEY=octagon-api-key \
ghcr.io/metorial/mcp-container--octagonai--octagon-mcp-server--octagon-mcp-server  "npm run start"
```

<sub>Source: catalog/OctagonAI/octagon-mcp-server/octagon-mcp-server/README.md</sub>

---

## hannesrudolph
# RAG Documentation MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hannesrudolph--mcp-ragdocs--mcp-ragdocs
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OPENAI_API_KEY=openai-api-key -e QDRANT_URL=qdrant-url -e QDRANT_API_KEY=qdrant-api-key \
ghcr.io/metorial/mcp-container--hannesrudolph--mcp-ragdocs--mcp-ragdocs  "npm run start"
```

<sub>Source: catalog/hannesrudolph/mcp-ragdocs/mcp-ragdocs/README.md</sub>

---

## hungryrobot1
# Personal intelligence framework

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--hungryrobot1--mcp-pif--mcp-pif
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--hungryrobot1--mcp-pif--mcp-pif  "npm run start"
```

<sub>Source: catalog/hungryrobot1/MCP-PIF/mcp-pif/README.md</sub>

---

## Tomatio13
# tavily-search MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--tomatio13--mcp-server-tavily--mcp-server-tavily
```
2. Run the container:

```bash
docker run -i --rm \ 
-e TAVILY_API_KEY=tavily-api-key \
ghcr.io/metorial/mcp-container--tomatio13--mcp-server-tavily--mcp-server-tavily  "tavily-search"
```

<sub>Source: catalog/Tomatio13/mcp-server-tavily/mcp-server-tavily/README.md</sub>

---

## thunderboltsid
# MCP Nutanix

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--thunderboltsid--mcp-nutanix--mcp-nutanix
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--thunderboltsid--mcp-nutanix--mcp-nutanix  "./out"
```

<sub>Source: catalog/thunderboltsid/mcp-nutanix/mcp-nutanix/README.md</sub>

---

## dvcrn
# Siri Shortcuts MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--dvcrn--mcp-server-siri-shortcuts--mcp-server-siri-shortcuts
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--dvcrn--mcp-server-siri-shortcuts--mcp-server-siri-shortcuts  "npm run start"
```

<sub>Source: catalog/dvcrn/mcp-server-siri-shortcuts/mcp-server-siri-shortcuts/README.md</sub>

---

## leehanchung
# Bing Search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--leehanchung--bing-search-mcp--bing-search-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BING_API_KEY=bing-api-key \
ghcr.io/metorial/mcp-container--leehanchung--bing-search-mcp--bing-search-mcp  "mcp-server-bing"
```

<sub>Source: catalog/leehanchung/bing-search-mcp/bing-search-mcp/README.md</sub>

---

## SDGLBL
# MCP Claude Code

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sdglbl--mcp-claude-code--mcp-claude-code
```
2. Run the container:

```bash
docker run -i --rm \ 
-e USEFUL_PROMPTS=useful-prompts \
ghcr.io/metorial/mcp-container--sdglbl--mcp-claude-code--mcp-claude-code  "claudecode"
```

<sub>Source: catalog/SDGLBL/mcp-claude-code/mcp-claude-code/README.md</sub>

---

## rad-security
# RAD Security MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--rad-security--mcp-server--mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e RAD_SECURITY_ACCESS_KEY_ID=rad-security-access-key-id -e RAD_SECURITY_SECRET_KEY=rad-security-secret-key -e RAD_SECURITY_ACCOUNT_ID=rad-security-account-id \
ghcr.io/metorial/mcp-container--rad-security--mcp-server--mcp-server  "npm run start"
```

<sub>Source: catalog/rad-security/mcp-server/mcp-server/README.md</sub>

---

## buryhuang
# HubSpot MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--buryhuang--mcp-hubspot--mcp-hubspot
```
2. Run the container:

```bash
docker run -i --rm \ 
-e HUBSPOT_ACCESS_TOKEN=hubspot-access-token \
ghcr.io/metorial/mcp-container--buryhuang--mcp-hubspot--mcp-hubspot  "mcp-server-hubspot"
```

<sub>Source: catalog/buryhuang/mcp-hubspot/mcp-hubspot/README.md</sub>

---

## vectorize-io
# Vectorize MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--vectorize-io--vectorize-mcp-server--vectorize-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e VECTORIZE_ORG_ID=vectorize-org-id -e VECTORIZE_TOKEN=vectorize-token -e VECTORIZE_PIPELINE_ID=vectorize-pipeline-id \
ghcr.io/metorial/mcp-container--vectorize-io--vectorize-mcp-server--vectorize-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/vectorize-io/vectorize-mcp-server/vectorize-mcp-server/README.md</sub>

---

## apinetwork
# piapi-mcp-server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--apinetwork--piapi-mcp-server--piapi-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e PIAPI_API_KEY=piapi-api-key \
ghcr.io/metorial/mcp-container--apinetwork--piapi-mcp-server--piapi-mcp-server  "node dist/index.js"
```

<sub>Source: catalog/apinetwork/piapi-mcp-server/piapi-mcp-server/README.md</sub>

---

## cloudflare
# Cloudflare MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--cloudflare--mcp-server-cloudflare--mcp-server-cloudflare
```
2. Run the container:

```bash
docker run -i --rm \ 
-e API_KEY=api-key \
ghcr.io/metorial/mcp-container--cloudflare--mcp-server-cloudflare--mcp-server-cloudflare  
```

<sub>Source: catalog/cloudflare/mcp-server-cloudflare/mcp-server-cloudflare/README.md</sub>

---

## akseyh
# Bear MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--akseyh--bear-mcp-server--bear-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--akseyh--bear-mcp-server--bear-mcp-server  "npm run start"
```

<sub>Source: catalog/akseyh/bear-mcp-server/bear-mcp-server/README.md</sub>

---

## erikhoward
# ADLS2 MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--erikhoward--adls-mcp-server--adls-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e LOG_LEVEL=log-level -e UPLOAD_ROOT=upload-root -e DOWNLOAD_ROOT=download-root -e AZURE_STORAGE_ACCOUNT_NAME=azure-storage-account-name -e READ_ONLY_MODE=read-only-mode \
ghcr.io/metorial/mcp-container--erikhoward--adls-mcp-server--adls-mcp-server  "adls2-mcp-server"
```

<sub>Source: catalog/erikhoward/adls-mcp-server/adls-mcp-server/README.md</sub>

---

## marcelmarais
# Spotify MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--marcelmarais--spotify-mcp-server--spotify-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--marcelmarais--spotify-mcp-server--spotify-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/marcelmarais/spotify-mcp-server/spotify-mcp-server/README.md</sub>

---

## ruixingshi
# Deepseek Thinker MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ruixingshi--deepseek-thinker-mcp--deepseek-thinker-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e API_KEY=api-key -e BASE_URL=base-url \
ghcr.io/metorial/mcp-container--ruixingshi--deepseek-thinker-mcp--deepseek-thinker-mcp  "node ./build/index.js"
```

<sub>Source: catalog/ruixingshi/deepseek-thinker-mcp/deepseek-thinker-mcp/README.md</sub>

---

## metoro-io
# Metoro MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--metoro-io--metoro-mcp-server--metoro-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e METORO_AUTH_TOKEN=metoro-auth-token -e METORO_API_URL=metoro-api-url \
ghcr.io/metorial/mcp-container--metoro-io--metoro-mcp-server--metoro-mcp-server  "./out"
```

<sub>Source: catalog/metoro-io/metoro-mcp-server/metoro-mcp-server/README.md</sub>

---

## suekou
# Notion MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--suekou--mcp-notion-server--mcp-notion-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NOTION_API_TOKEN=notion-api-token \
ghcr.io/metorial/mcp-container--suekou--mcp-notion-server--mcp-notion-server  "node build/index.js"
```

<sub>Source: catalog/suekou/mcp-notion-server/mcp-notion-server/README.md</sub>

---

## api7
# APISIX Model Context Protocol (MCP) Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--api7--apisix-mcp--apisix-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e APISIX_SERVER_HOST=apisix-server-host -e APISIX_SERVER_PORT=apisix-server-port -e APISIX_ADMIN_API_PORT=apisix-admin-api-port -e APISIX_ADMIN_API_PREFIX=apisix-admin-api-prefix -e APISIX_ADMIN_KEY=apisix-admin-key \
ghcr.io/metorial/mcp-container--api7--apisix-mcp--apisix-mcp  "pnpm run start"
```

<sub>Source: catalog/api7/apisix-mcp/apisix-mcp/README.md</sub>

---

## modelcontextprotocol
# Puppeteer

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--modelcontextprotocol--servers--puppeteer
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--modelcontextprotocol--servers--puppeteer  "cd ./src/puppeteer && node ./dist/index.js"
```

<sub>Source: catalog/modelcontextprotocol/servers/puppeteer/README.md</sub>

---

## Bankless
# Bankless Onchain MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--bankless--onchain-mcp--onchain-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e BANKLESS_API_TOKEN=bankless-api-token \
ghcr.io/metorial/mcp-container--bankless--onchain-mcp--onchain-mcp  "node dist/index.js"
```

<sub>Source: catalog/Bankless/onchain-mcp/onchain-mcp/README.md</sub>

---

## JordiNeil
# Databricks MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--jordineil--mcp-databricks-server--mcp-databricks-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DATABRICKS_HOST=databricks-host -e DATABRICKS_TOKEN=databricks-token -e DATABRICKS_HTTP_PATH=databricks-http-path \
ghcr.io/metorial/mcp-container--jordineil--mcp-databricks-server--mcp-databricks-server  "python main.py"
```

<sub>Source: catalog/JordiNeil/mcp-databricks-server/mcp-databricks-server/README.md</sub>

---

## anaisbetts
# mcp-installer - A MCP Server to install MCP Servers

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--anaisbetts--mcp-installer--mcp-installer
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--anaisbetts--mcp-installer--mcp-installer  "node ./lib/index.mjs"
```

<sub>Source: catalog/anaisbetts/mcp-installer/mcp-installer/README.md</sub>

---

## macrat
# MCP server for kintone

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--macrat--mcp-server-kintone--mcp-server-kintone
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KINTONE_BASE_URL=kintone-base-url -e KINTONE_USERNAME=kintone-username -e KINTONE_PASSWORD=kintone-password -e KINTONE_API_TOKEN=kintone-api-token -e KINTONE_ALLOW_APPS=kintone-allow-apps -e KINTONE_DENY_APPS=kintone-deny-apps \
ghcr.io/metorial/mcp-container--macrat--mcp-server-kintone--mcp-server-kintone  "./out"
```

<sub>Source: catalog/macrat/mcp-server-kintone/mcp-server-kintone/README.md</sub>

---

## kpsunil97
# DevRev MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kpsunil97--devrev-mcp-server--devrev-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e DEVREV_API_KEY=devrev-api-key \
ghcr.io/metorial/mcp-container--kpsunil97--devrev-mcp-server--devrev-mcp-server  "devrev-mcp"
```

<sub>Source: catalog/kpsunil97/devrev-mcp-server/devrev-mcp-server/README.md</sub>

---

## sooperset
# MCP Atlassian

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sooperset--mcp-atlassian--mcp-atlassian
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--sooperset--mcp-atlassian--mcp-atlassian  "mcp-atlassian --confluence-url confluence-url --confluence-username confluence-username --confluence-token confluence-token --jira-url jira-url --jira-username jira-username --jira-token jira-token"
```

<sub>Source: catalog/sooperset/mcp-atlassian/mcp-atlassian/README.md</sub>

---

## zxkane
# Amazon Bedrock MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--zxkane--mcp-server-amazon-bedrock--mcp-server-amazon-bedrock
```
2. Run the container:

```bash
docker run -i --rm \ 
-e AWS_PROFILE=aws-profile \
ghcr.io/metorial/mcp-container--zxkane--mcp-server-amazon-bedrock--mcp-server-amazon-bedrock  "node ./build/index.js"
```

<sub>Source: catalog/zxkane/mcp-server-amazon-bedrock/mcp-server-amazon-bedrock/README.md</sub>

---

## base
# Base MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--base--base-mcp--base-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e COINBASE_API_KEY_NAME=coinbase-api-key-name -e COINBASE_API_PRIVATE_KEY=coinbase-api-private-key -e SEED_PHRASE=seed-phrase -e COINBASE_PROJECT_ID=coinbase-project-id -e ALCHEMY_API_KEY=alchemy-api-key -e PINATA_JWT=pinata-jwt -e OPENROUTER_API_KEY=openrouter-api-key -e CHAIN_ID=chain-id \
ghcr.io/metorial/mcp-container--base--base-mcp--base-mcp  "yarn run start"
```

<sub>Source: catalog/base/base-mcp/base-mcp/README.md</sub>

---

## haris-musa
# Excel MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--haris-musa--excel-mcp-server--excel-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FASTMCP_PORT=fastmcp-port -e EXCEL_FILES_PATH=excel-files-path \
ghcr.io/metorial/mcp-container--haris-musa--excel-mcp-server--excel-mcp-server  "excel-mcp-server"
```

<sub>Source: catalog/haris-musa/excel-mcp-server/excel-mcp-server/README.md</sub>

---

## oxylabs
# Oxylabs MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--oxylabs--oxylabs-mcp--oxylabs-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e OXYLABS_USERNAME=oxylabs-username -e OXYLABS_PASSWORD=oxylabs-password \
ghcr.io/metorial/mcp-container--oxylabs--oxylabs-mcp--oxylabs-mcp  "oxylabs-mcp"
```

<sub>Source: catalog/oxylabs/oxylabs-mcp/oxylabs-mcp/README.md</sub>

---

## smn2gnt
# MCP Salesforce Connector

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--smn2gnt--mcp-salesforce--mcp-salesforce
```
2. Run the container:

```bash
docker run -i --rm \ 
-e SALESFORCE_USERNAME=salesforce-username -e SALESFORCE_PASSWORD=salesforce-password -e SALESFORCE_SECURITY_TOKEN=salesforce-security-token \
ghcr.io/metorial/mcp-container--smn2gnt--mcp-salesforce--mcp-salesforce  "salesforce"
```

<sub>Source: catalog/smn2gnt/MCP-Salesforce/mcp-salesforce/README.md</sub>

---

## ergut
# BigQuery MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ergut--mcp-bigquery-server--mcp-bigquery-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--ergut--mcp-bigquery-server--mcp-bigquery-server  "node dist/index.js --project-id project-id --location location"
```

<sub>Source: catalog/ergut/mcp-bigquery-server/mcp-bigquery-server/README.md</sub>

---

## sunsetcoder
# Flightradar24 MCP Server 🛩️

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sunsetcoder--flightradar24-mcp-server--flightradar-24-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FR24_API_KEY=fr-24-api-key -e FR24_API_URL=fr-24-api-url \
ghcr.io/metorial/mcp-container--sunsetcoder--flightradar24-mcp-server--flightradar-24-mcp-server  "npm run start"
```

<sub>Source: catalog/sunsetcoder/flightradar24-mcp-server/flightradar-24-mcp-server/README.md</sub>

---

## vrknetha
# Firecrawl MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--vrknetha--mcp-server-firecrawl--mcp-server-firecrawl
```
2. Run the container:

```bash
docker run -i --rm \ 
-e FIRECRAWL_API_KEY=firecrawl-api-key \
ghcr.io/metorial/mcp-container--vrknetha--mcp-server-firecrawl--mcp-server-firecrawl  "npm run start"
```

<sub>Source: catalog/vrknetha/mcp-server-firecrawl/mcp-server-firecrawl/README.md</sub>

---

## KyrieTangSheng
# National Parks MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--kyrietangsheng--mcp-server-nationalparks--mcp-server-nationalparks
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NPS_API_KEY=nps-api-key \
ghcr.io/metorial/mcp-container--kyrietangsheng--mcp-server-nationalparks--mcp-server-nationalparks  "node ./build/index.js"
```

<sub>Source: catalog/KyrieTangSheng/mcp-server-nationalparks/mcp-server-nationalparks/README.md</sub>

---

## QuantGeekDev
# Coincap MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--quantgeekdev--coincap-mcp--coincap-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--quantgeekdev--coincap-mcp--coincap-mcp  "node build/index.js"
```

<sub>Source: catalog/QuantGeekDev/coincap-mcp/coincap-mcp/README.md</sub>

---

## exoticknight
# File Merger MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--exoticknight--mcp-file-merger--mcp-file-merger
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--exoticknight--mcp-file-merger--mcp-file-merger {{DIR}} "node dist/index.js {{DIR}}"
```

<sub>Source: catalog/exoticknight/mcp-file-merger/mcp-file-merger/README.md</sub>

---

## j4c0bs
# mcp-server-sql-analyzer

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--j4c0bs--mcp-server-sql-analyzer--mcp-server-sql-analyzer
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--j4c0bs--mcp-server-sql-analyzer--mcp-server-sql-analyzer  "mcp-server-sql-analyzer"
```

<sub>Source: catalog/j4c0bs/mcp-server-sql-analyzer/mcp-server-sql-analyzer/README.md</sub>

---

## nspady
# Google Calendar MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--nspady--google-calendar-mcp--google-calendar-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--nspady--google-calendar-mcp--google-calendar-mcp  "npm run start"
```

<sub>Source: catalog/nspady/google-calendar-mcp/google-calendar-mcp/README.md</sub>

---

## roadwy
# CVE-Search MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--roadwy--cve-search_mcp--cve-search-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--roadwy--cve-search_mcp--cve-search-mcp  "python main.py --directory directory"
```

<sub>Source: catalog/roadwy/cve-search_mcp/cve-search-mcp/README.md</sub>

---

## mcpdotdirect
# EVM MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--mcpdotdirect--evm-mcp-server--evm-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
ghcr.io/metorial/mcp-container--mcpdotdirect--evm-mcp-server--evm-mcp-server  "bun run start"
```

<sub>Source: catalog/mcpdotdirect/evm-mcp-server/evm-mcp-server/README.md</sub>

---

## sawa-zen
# VRChat MCP Server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--sawa-zen--vrchat-mcp--vrchat-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e VRCHAT_USERNAME=vrchat-username -e VRCHAT_PASSWORD=vrchat-password -e VRCHAT_TOTP_SECRET=vrchat-totp-secret -e VRCHAT_EMAIL=vrchat-email \
ghcr.io/metorial/mcp-container--sawa-zen--vrchat-mcp--vrchat-mcp  "npm run start"
```

<sub>Source: catalog/sawa-zen/vrchat-mcp/vrchat-mcp/README.md</sub>

---

## teddyzxcv
# ntfy-mcp: Your Friendly Task Completion Notifier

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--teddyzxcv--ntfy-mcp--ntfy-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e NTFY_TOPIC=ntfy-topic \
ghcr.io/metorial/mcp-container--teddyzxcv--ntfy-mcp--ntfy-mcp  "npm run start"
```

<sub>Source: catalog/teddyzxcv/ntfy-mcp/ntfy-mcp/README.md</sub>

---

## nguyenvanduocit
# Jira MCP

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--nguyenvanduocit--jira-mcp--jira-mcp
```
2. Run the container:

```bash
docker run -i --rm \ 
-e ATLASSIAN_HOST=atlassian-host -e ATLASSIAN_EMAIL=atlassian-email -e ATLASSIAN_TOKEN=atlassian-token \
ghcr.io/metorial/mcp-container--nguyenvanduocit--jira-mcp--jira-mcp  "./out"
```

<sub>Source: catalog/nguyenvanduocit/jira-mcp/jira-mcp/README.md</sub>

---

## yanmxa
# Multicluster MCP server

### Usage
1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--yanmxa--multicluster-mcp-server--multicluster-mcp-server
```
2. Run the container:

```bash
docker run -i --rm \ 
-e KUBECONFIG=kubeconfig \
ghcr.io/metorial/mcp-container--yanmxa--multicluster-mcp-server--multicluster-mcp-server  "node ./build/index.js"
```

<sub>Source: catalog/yanmxa/multicluster-mcp-server/multicluster-mcp-server/README.md</sub>

---

