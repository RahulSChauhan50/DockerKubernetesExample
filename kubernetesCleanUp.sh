#!/bin/bash 

kubectl get deployments --all-namespaces

kubectl delete deployment hello-world

kubectl get pods --all-namespaces

kubectl delete pods --all -n default

kubectl delete services my-service
