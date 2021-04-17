// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25;

contract Counter {
  uint256 public value;
  event Increased(uint256 newValue);
  
  function increase() public {
    value = value + 1;
    emit Increased(value);
  }

}