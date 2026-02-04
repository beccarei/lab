/usr/bin/consul agent -dev &
/usr/bin/mongod --dbpath /home/rehlers/work/data/ &

sleep 5

java -jar things-gateway/target/gateway-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev &
java -jar things-user/target/thingsuser-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev &
#java -jar cost-center/target/costcenter-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev &
java -jar thing-service/target/thing-service-2.5.3.jar --spring.profiles.active=dev &
java -jar checker/target/checker-2.5.12.jar --spring.profiles.active=dev &
java -jar config-service/target/config-service-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev &

