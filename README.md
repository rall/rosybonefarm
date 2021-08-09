

# Rosybone Farm

This project was generated using [Nx](https://nx.dev).


## API

The API is a NestJS app with a postgres DB and Prisma ORM.

### Config

Add .env file at the root of the project. eg.

```
POSTGRES_PASSWORD=example
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_APP_DB=somedb
POSTGRES_APP_USER=thedbuser
POSTGRES_APP_PASSWORD=example
DATABASE_HOST=database
```
`DATABASE_HOST` will be either `database` within a docker service or `kubernetes.docker.internal` from my (Apple M1) host machine.
`DATABASE_URL` for Prisma needs to be set inline with invocations of `prisma generate`


Visit [Nx Cloud](https://nx.app/) to learn more.
