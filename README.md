# eslint-config-tsdocstandard

eslint sharable config for tsdocstandard

## Status [Experimental]

This repository contains the rules. For the `tsdocstandard`
command go look at [`tsdocstandard`](https://github.com/Raynos/tsdocstandard)

## Rules Motivation

These rules were written to help convert vanilla JS to fully
typed `.js` + `@jsdoc` with `TypeScript`.

You will get a LOT of lint failures about missing type annotations.
That's the whole point.

If the linter passes you probably have 100% `type-coverage` which
is awesome.

I recommend using `// @ts-check` & `// @ts-nocheck` for partial
migration from JS => "typed JS + jsdoc".

## Comparison with eslint-config-standard-with-typescript

There is another [eslint config that includes typescript](https://github.com/standard/eslint-config-standard-with-typescript)

However, that config is meant for linting `*.ts` typescript files using standard
and eslint. This set of config is specifically for linting `*.js` files
that use `tsc --checkJs` and `@jsdoc` comments.

The rules for typescript & javascript files are quite divergent and it's
hard to have meaningful overlap.

## Feedback

If you have bikeshedding suggestions about the rules please
open an issue or PR.

## Install

```bash
npm install -D eslint-config-tsdocstandard
# note that eslint-plugin-promise, eslint-plugin-standard, eslint-plugin-node, eslint-plugin-import & eslint-config-standard are required peer dependencies
```

## Usage

Read up on how to use [sharable configs](http://eslint.org/docs/developer-guide/shareable-configs) at the eslint website.

For more details see [eslint-config-standard](https://github.com/feross/eslint-config-standard)

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
