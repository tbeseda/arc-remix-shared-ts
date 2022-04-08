@app
arc-remix-shared-ts

@http
get /test # a TS handler with a config.arc

@static
prune true # remove old assets on deploy
fingerprint external

@typescript
build .dist # build any TS resource to ./.dist
sourcemaps false # no sourcemaps

@remix # enable Remix ./app at root without any special options

@plugins
architect/plugin-typescript # enables @aws: runtime typescript
architect/plugin-remix # adds Remix things
