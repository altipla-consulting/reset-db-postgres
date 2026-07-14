
# reset-db-postgres

Reset a Postgres database to an empty state recreating it if needed.


## Install

```shell
npm i -D reset-db-postgres
```


## Usage

Configure the reset command in your `package.json` file:

```js
{
  "scripts": {
    "db:reset": "reset-db-postgres"
  }
}
```

Configure the `DATABASE_URL` in your local `.env` variables:

```ini
DATABASE_URL="postgres://USER:PASSWORD@HOST:5432/DATABASE"
```

And run the command every time you want to reset and remove all the tables of the database:

```shell
npm run db:reset
```
