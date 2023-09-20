// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Medis {
    struct PatientInfo {
        string Data;
        string LastModify;
    }

    PatientInfo public patient;

    function saveData(string memory _Data, string memory _LastModify) public {
        patient = PatientInfo(_Data, _LastModify);
    }

    function getData() public view returns (string memory) {
        return (patient.Data);
    }
}