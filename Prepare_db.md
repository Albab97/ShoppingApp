#Do the following as root

create database shopdb;
create user shopper identified by 'shoppass';
use shopdb;
grant all privileges on shopdb.* to shopper;