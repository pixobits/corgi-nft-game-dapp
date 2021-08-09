pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract CorgiToken is ERC721Full {
    constructor() public ERC721Full("Corgi Token", "CORGI") {}

    function mint(address _to, string memory _tokenURI) public returns (bool) {
        uint256 _tokenId = totalSupply().add(1);
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        return true;
    }
}
