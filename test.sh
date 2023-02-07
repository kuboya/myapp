#!/bin/zsh

emulate -R sh

while read line
do
    if [ "$line" = "" ]; then
      break
    fi
    if [ "$line" = "error" ]; then
      echo "Receive Error Message!!" 1>&2
      exit 1
    fi
    echo $line
done

exit 0