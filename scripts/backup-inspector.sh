#!/bin/bash

function validate_args() {
    if [ "$#" -ne 1 ]; then
        echo "Usage: $0 <namespace>"
        echo ""
        echo "This Script will start the pod 'pvc-inspector' in the given namespace."
        echo "The Pod will have access to backups at '/backups'"
        echo "After the exec command is done, the pod will be deleted."
        exit 1
    fi

    kubectl get namespaces $1
    if [ $? -ne 0 ]; then
        exit 1
    fi
}

function create_pod() {
    cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: pvc-inspector
  namespace: $1
spec:
  containers:
  - image: mongo:8.2.2
    name: pvc-inspector
    command: ["tail"]
    args: ["-f", "/dev/null"]
    env:
    - name: MONGODB_CONNECTION_STRING
      valueFrom:
        secretKeyRef:
          name: mongodb-admin-admin
          key: connectionString.standardSrv
    volumeMounts:
    - mountPath: /backups
      name: pvc-mount
  volumes:
  - name: pvc-mount
    nfs:
      server: 10.31.255.243
      path: /ocp_data
EOF
}


function exec_pod() {
    kubectl -n $1 exec -it pvc-inspector -- sh
}

function delete_pod() {
    kubectl -n $1 delete pod pvc-inspector
}

function main() {
    validate_args $@;
    create_pod $1;
    echo "Waiting a while for the pod to start";
    kubectl -n $1 wait --for=condition=Ready pod/pvc-inspector;
    echo "Pod is ready. Backups are available under /backups";
    exec_pod $1;
    echo "Deleting Pod, this somtimes takes a while";
    delete_pod $1;
}

main $@
exit 0
