const JWT = require('jsonwebtoken');

const saaspassKey = "-----BEGIN PUBLIC KEY-----\r\n"
    + "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgjBGOVW3/U46hClHSKVUzuIvw\r\n"
    + "VTurz3G7XYScdiOpSFzsm3PJnsSVuppfWLs8sid8ol/R0cWs6P7TiNmwMtP8nRc1\r\n"
    + "5ZCQn7tSX2DVq5+EGKm8x3zpL+zMOdLa0+yneKOAcBnwDMfrPAVEYE1+bbi3xQ9r\r\n" 
    + "OrQ0pLwaARQeLPYntwIDAQAB\r\n"
    + "-----END PUBLIC KEY-----";

const jwtTokenTest = "eyJraWQiOiJsUHJfUmdUeFY5QlhWY1JrOTA3Y0FFMmVST3pkUGMzWEVOU2ZicDk5bzBvIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ1c2VybmFtZSIsImF1ZCI6ImFwcGtleSIsInNhYXNwYXNzX2lkIjoiMTIzMTIzIiwicm9sZXMiOiJyb2xlbGlzdCIsImlzcyI6IkluZGlIb21lIiwiZXhwIjoxNTcxODYwNzAwLCJpYXQiOjE1NzE4NjAxMDAsImp0aSI6Ijc0NzNhNGFkLTg2MmMtNDg4OC05MTAzLWU4OWJmNmE3ZjEzMyJ9.WDEBrQvDQeZab973UyJfvPa0KAc3pD7FgHduRiHcQlCW8YbazXpzcVDNbqj5r4uVj2BJ8CzzOqfR7rWn-NmphNwRz_S2lOqMztrt8M18LReEWOmlzWt1aR4XCR_DahDdInv03xS_nY8wdJgAGuaWCG7pZCwIpN5i4v0N_5wPs74";

var payload = {roles: ""};
var verifiedJWT = false;

function verifyJWTtoken(jwtToken) {
    try {
        payload = JWT.verify(jwtToken, saaspassPublicKey, { algorithm: 'RS256' });
        verifiedJWT = true;
        return verifiedJWT;
    } catch (error) {
        payload = { roles: "" };
        verifiedJWT = false;
        return verifiedJWT;
    }
}

module.exports.verifyJWTtoken = verifyJWTtoken;


function getRoles(jwtToken) {
    try {
        if (!verifiedJWT) 
            verifyJWTtoken(jwtToken);
        if (!verifiedJWT) {
            var roles = payload.roles;
            verifiedJWT = true;
            return roles;
        }
        return true;
    } catch (error) {
        verifiedJWT = false;
        payload = { roles: "" };
        return "";
    }
}

module.exports.getRoles = getRoles;

