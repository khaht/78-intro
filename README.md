# 78-security

78 Security is a Web Application

## How to development

> - Clone code from git@github.com:htk159131721/78security.git
> - Read more about [yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/)

### Install dependencies

> Remember that you are installing dependencies at project root path.

```bash
cd /path/to/project/root/
yarn # Or yarn install
```

### Add or remove dependencies

```bash
yarn workspace {WORKSPACE_NAME} [add][remove] {PACKAGE_NAME}
```

Ex:

```bash
yarn workspace @app/frontend add momentjs
```

### Setup Environment file

> Switch working directory to project root path

#### Start app

```bash
yarn serve
```
