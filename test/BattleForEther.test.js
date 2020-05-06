const BattleForEther = artifacts.require("./BattleForEther.sol");

contract("BattleForEther", () => {
  describe("consctructor", () => {
    it("should store its parameters", async () => {
      const instance = await BattleForEther.new();

      assert.equal(await instance.something(), 1000, "wrong something");
      //console.log(instance)
    });
  });
  describe("join()", () => {
    it("should not able to join defore the game stats", () => {});
    it("should not able to join after it gas ender", () => {});
    it("should get some unites int the begining", () => {});
    it("should emit a newPlayer event", () => {});
  });
});
