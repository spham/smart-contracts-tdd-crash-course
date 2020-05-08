pragma solidity >=0.4.21 <0.7.0;

contract BattleForEther{
    uint public startDate;
    uint public endDate;
    
mapping (address=>uint) public balances;
    constructor(uint startDate_, uint endDate_) public {
        startDate = startDate_;
        endDate = endDate_;
    }

    modifier onlyDuringGame() {
        require(now >= startDate && now <= endDate);
        _;
    }

    event NewPlayer( address player);

    function join() public onlyDuringGame {
        balances[msg.sender] = 1000;
        emit NewPlayer(msg.sender);
    }
}