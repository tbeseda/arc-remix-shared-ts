# Example: Simple Architect + Remix App (with shared TS and JS code)

See the annotated `app.arc`.

GET `/test` is written in TS (see its `config.arc`) and uses shared TS code from `src/shared-ts` and shared JS code from `src/shared`. This is enabled in `tsConfig.json` > `compilerOptions.paths`.

A Remix app lives at `/` and makes use of the same shared TS and JS code.

This is (as of 2022-04-08) [deployed to AWS](https://f9o6fz3fb2.execute-api.us-west-2.amazonaws.com/). Try [/test](https://f9o6fz3fb2.execute-api.us-west-2.amazonaws.com/test) too.
