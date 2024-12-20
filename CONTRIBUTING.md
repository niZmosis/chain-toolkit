# Contributing to Chain-Toolkit

Thank you for your interest in contributing to Chain-Toolkit! We appreciate all contributions, big or small.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [How to Contribute](#how-to-contribute)
   - [Adding Network Configurations](#adding-network-configurations)
3. [Code Style](#code-style)
4. [Pre Commit](#pre-commit)
5. [Need Help?](#need-help)

---

## Getting Started

1. **Fork the repository:** Click the "Fork" button in the top-right corner of the repository page.
2. **Clone your fork:**

   ```bash
   git clone https://github.com/niZmosis/chain-toolkit.git
   ```

3. **Create a branch:**

   ```bash
   git checkout -b my-new-branch
   ```

4. **Run the following command to set up the project:**

   ```bash
   pnpm setup:initial
   ```

5. **Start watching all packages:**

   ```bash
   pnpm start
   ```

6. **Make your changes:**

   - Follow the code style guidelines.
   - Write clear commit messages.

7. **Push your changes:**

   ```bash
   git push origin my-new-branch
   ```

8. **Open a pull request:** Go to the original repository and click "New pull request."

---

## How to Contribute

Check the [TODO.md](TODO.md) file to see the current list of tasks.

### Adding Network Configurations

1. Add the Chain ID to [chainIds.ts](packages/utils/src/chains/chainIds.ts)

2. Add the Network Config to [networks](packages/utils/src/chains/networks/index.ts)

   - Ensure to add the Network config to `getChainConfig` at the bottom of the file.
   - If adding a new network, export it in the [barrel file](packages/utils/src/chains/networks/index.ts).

3. Add the Network Icon to [images](packages/utils/src/chains/images/index.ts)

4. Add the created Network Config to `getChainConfig` in [chainConfigs](packages/utils/src/chains/chainConfigs.ts)

5. Run Tests:

   ```bash
   pnpm test:utils:networks
   ```

6. Update the compatibility table in the README.md [README.md](README.md)

## Code Style

- Keep items in **alphabetical order** where applicable.

---

## Pre Commit

Before committing, run

```bash
pnpm precommit
```

to preform all linting, formatting, docs, and tests.

## Need Help?

If you have any questions or need help getting started, feel free to open an issue or contact us on [communication channel, e.g., Discord].
