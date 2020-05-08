const BattleForEther = artifacts.require("./BattleForEther.sol");

contract("BattleForEther", () => {
  describe("consctructor", () => {
    it("should store its parameters", async () => {
      const startDate = ~~(Date.now() / 1000);
      const endDate = ~~(Date.now() / 1000) + 60 * 60;
      const instance = await BattleForEther.new(startDate, endDate);

      assert.equal(await instance.startDate(), startDate, "wrong startDate");
      assert.equal(await instance.endDate(), endDate, "wrong endDate");
      //console.log(instance)
    });
  });
  describe("join()", () => {
    it("should not able to join defore the game stats", async () => {
      const startDate = ~~(Date.now() / 1000) + 2 * 60;
      const endDate = ~~(Date.now() / 1000) + 60 * 60;
      const instance = await BattleForEther.new(startDate, endDate);

      let hasFailed = false;

      try {
        await instance.join();
      } catch (error) {
        hasFailed = true;
      }

      assert.equal(hasFailed, true, "player was able to join before start");
    });
    it("should not able to join after it gas ender", () => {});
    it("should get some unites int the begining", () => {});
    it("should emit a newPlayer event", () => {});
  });
});
