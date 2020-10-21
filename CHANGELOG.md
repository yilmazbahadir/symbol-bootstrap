# CHANGELOG

All notable changes to this project will be documented in this file.

The changelog format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.2] - NEXT RELEASE!

**Milestone**: Hippopotamus(0.10.0.3)

 Package  | Version  | Link
---|---|---
Symbol Bootstrap | v0.1.2 | [symbol-bootstrap](https://www.npmjs.com/package/symbol-bootstrap)

- **[BREAKING CHANGE]** Target folder structure has been changed for scalability. The old target folder needs to be dropped when running this version. Backup the target folder if you need to keep your data!
- **New Command:** `symbol-bootstrap resetData` cleans the peer data and database without dropping the generated configuration.
- **New Command:** `symbol-bootstrap healthCheck` tests if the docker compose network is running locally. `--healthCheck` param is allowed in `start` and `run` commands.
- Allowed `repeat` on a node, a database or a gateway to instantiate them multiple times. This enables you to create large network configurations quickly.
- Path properties are now relative folder locations. This improves reusability of the configuration when running the services outside docker compose.
- Added node type based default configuration simplifying the configuration of nodes in presets.
- Preset attribute `excludeDockerService: true` allows removing a service from docker-compose. 
- Configurable `trustedHosts` and `localNetworks` in config.
- Simplified mounted volumes in compose.
- Allowed multiple databases in compose.
- Compose's `openPort` now accepts port number.
- Allowed custom ip address and subnet configuration in compose.
- Merged `db` and `db-init` services in compose. Now the mongo service knows how to init itself.


## [0.1.1] - 02-Oct-2020

**Milestone**: Hippopotamus(0.10.0.3)

 Package  | Version  | Link
---|---|---
Symbol Bootstrap | v0.1.1 | [symbol-bootstrap](https://www.npmjs.com/package/symbol-bootstrap)

- **New Command:** `symbol-bootstrap link` links the nodes' VRF and Voting keys to an existing network. This simplifies the node registration process to running networks like `testnet`.
- **New Command:** `symbol-bootstrap report` generates rst and csv files from the configured server properties for documentation. Added `--report` flag to `config` and `start` commands.
- Fixed default host names in `api` and `peer` in `testnet` preset.
- The `voting:`, `harvesting:` and `api:` node preset flags define the node's `roles:` setting. There is no need to provide `roles:` attribute anymore.
- Voting, signing and VRF keys, transactions and tree file are generated and announced when required depending on the node role flags.
- Added `votingKeyDilution`, `votingKeyStartEpoch` `votingKeyEndEpoch` preset params define to voting key link transaction and tree file.
- The field `enableDispatcherInputAuditing` is disabled by default saving disk space.
- Added custom host configuration in docker-compose.
- Readme and custom preset examples have been improved.
- Allowing API custom preset object in addition to the file custom yml file.

## [0.1.0] - 26-Sep-2020

**Milestone**: Hippopotamus(0.10.0.3)

 Package  | Version  | Link
---|---|---
Symbol Bootstrap | v0.1.0 | [symbol-bootstrap](https://www.npmjs.com/package/symbol-bootstrap)

- 0.10.0.3 catapult server support.
- 2.1.0 rest server support.
- Improved logging configuration.
- Allowing custom user when running config time docker images.
- Renamed param from `--daemon` to `--detached` to keep it in line with docker compose. 
- Added `--service (-s)` to allow starting just one docker service by name. 

## [0.0.0] - 14-Sep-2020

**Milestone**: Gorilla.1(0.9.6.4)

 Package  | Version  | Link
---|---|---
Symbol Bootstrap | v0.0.0 | [symbol-bootstrap](https://www.npmjs.com/package/symbol-bootstrap)

- Very first version of the tool!