import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import mongoose from "mongoose";

import { WilderResolver } from "./resolvers/wilder.resolver";

(async () => {
  await mongoose.connect("mongodb://mongodb:27017/wilders", {useUnifiedTopology: true, useNewUrlParser: true});
  const schema = await buildSchema({
    resolvers: [WilderResolver],
  });
  const server = new ApolloServer({ schema });

  server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
