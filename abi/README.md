# ABI folder

This is a dedicated folder for ABI files. Place you contract ABI here and generate facade classes for type-safe decoding of the event, function data and contract state queries with

```sh
sqd typegen
```

This `typegen` command is defined in `commands.json`.

```sh
npx squid-evm-typegen \
  src/abi \
  0x00000000000009B4AB3f1bC2b029bd7513Fbd8ED#neeth
```