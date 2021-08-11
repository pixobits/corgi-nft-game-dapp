pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public data;

    function updateData(uint256 _data) external {
        data = _data;
    }

    function readData() external view returns (uint256) {
        return data;
    }
}
