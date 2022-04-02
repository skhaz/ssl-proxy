Build

```bash
docker build --tag proxy:latest .
```

Run

```
docker run -p 3000:3000 -e TARGET=https://wwww.website.com/ proxy:latest
```

Deploy

```bash
export PROJECT_ID=your-google-s-project-id

export TARGET=https://wwww.website.com/

export SLUG=website

gcloud config set run/region us-central1

gcloud beta run deploy ssl-proxy-${SLUG} \
    --source . \
    --set-env-vars TARGET=${TARGET} \
    --platform managed \
    --allow-unauthenticated \
    --project ${PROJECT_ID}
```


