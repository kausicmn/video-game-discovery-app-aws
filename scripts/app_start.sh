#!/bin/bash
cd /home/ec2-user/server/src
pm2 delete videogame || true
pm2 start npm --name "videogame" -- start
