import { createServer, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      fruit: Model,
    },

    seeds(server) {
      server.create("fruit", { id: 1, name: 'Apple', color: 'Green' })
      server.create("fruit", { id: 2, name: 'Orange', color: 'Orange' })
      server.create("fruit", { id: 3, name: 'Banana', color: 'Yellow' })
      server.create("fruit", { id: 4, name: 'Strawberry', color: 'Red' })
    },

    routes() {
      this.namespace = "api"

      this.get("/fruits", (schema) => {
        return schema.fruits.all()
      })
    },
  })

  return server
}