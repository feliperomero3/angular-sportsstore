#!/bin/bash

openssl req \
    -newkey rsa:4096 \
    -x509 \
    -nodes \
    -keyout server.key \
    -new \
    -out server.crt \
    -config ./openssl-custom.cnf \
    -sha512 \
    -days 365
