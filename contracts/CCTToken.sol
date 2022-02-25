//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract CCTToken{
    string public name = "Crypto Code Token";
    string public symbol = "CCT";
    uint public totalSupply = 1000000;
    
    mapping(address=>uint) balance;

    constructor(){
        balance[msg.sender] = totalSupply;
    }

    function transfer(address to, uint amount) external{
        require(balance[msg.sender]>=amount, "Not enough CCT");
        balance[msg.sender] -= amount;
        balance[to] += amount;
    }

    function balanceOf(address account) external view returns(uint){
        return balance[account];
    }
}