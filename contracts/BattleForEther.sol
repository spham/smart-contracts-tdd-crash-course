pragma solidity >=0.4.21 <0.7.0;

contract BattleForEther{
    uint public startDate;
    uint public endDate;

    constructor(uint startDate_, uint endDate_) public {
        startDate = startDate_;
        endDate = endDate_;
    }
}