#!/bin/bash
cd /home/ec2-user/server/src
pm2 start npm --name "videogame" -- start
