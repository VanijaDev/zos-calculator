pragma solidity ^0.4.23;

import "../node_modules/zos-lib/contracts/migrations/Migratable.sol";
import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Calculator is Migratable {
    using SafeMath for uint256;

    uint256 public lastResult;

    event Plus(uint256 _result);
    event Minus(uint256 _result);
    event Multiply(uint256 _result);
    event Divide(uint256 _result);

    function initialize(uint256 _lastResult) isInitializer("Calculator", "0") public {
        lastResult = _lastResult;
    }

    function plus(uint256 _a, uint256 _b) public returns(uint256) {
        lastResult = _a.add(_b);  //  ERROR here
        
        emit Plus(lastResult);
        
        return lastResult;
    }

    function minus(uint256 _a, uint256 _b) public returns(uint256) {
        lastResult = _a.sub(_b);

        emit Minus(lastResult);
        
        return lastResult;
    }

    function multiply(uint256 _a, uint256 _b) public returns(uint256) {
        lastResult = _a.mul(_b);

        emit Multiply(lastResult);
        
        return lastResult;
    }

    function divide(uint256 _a, uint256 _b) public returns(uint256) {
        lastResult = _a.div(_b);  //  ERROR here

        emit Divide(lastResult);
        
        return lastResult;
    }
}