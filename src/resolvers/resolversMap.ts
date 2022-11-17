import { IResolvers } from "@graphql-tools/utils";
import query from "./query";

const resolversMap : IResolvers = {
    ...query
}

export default resolversMap;