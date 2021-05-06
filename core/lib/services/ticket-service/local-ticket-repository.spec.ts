import { expect, should } from "chai";
import "mocha";
import { assert } from "node:console";
import { LocalTicketRepository } from "./local-ticket-repository";

describe("LocalTicketRepository Tests", () => {
  describe("Load", () => {
    it("should load from a local file.", async () => {
      const repo = new LocalTicketRepository();
      await repo.load();
      const results = await repo.all();
      // console.log("RESULTS: ", JSON.stringify(results, null, 2));
      expect(results.length).to.be.greaterThan(0);
    });
  });
});
