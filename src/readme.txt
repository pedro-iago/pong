client:   clojurescript   - browser        - om.next & aframe
server:   clojure(script) - computer       - brute
platform: ?               - microprocessor - ?


DEVELOPMENT
  client <-> server <-> (simulation)

PRODUCTION
  client <-> server <-> platform


CLIENT
-Components are props, Entities are UIs, Systems are queries.
-Generates aframe view based on server data and UUIDs.
-Shows custom UIs to help data interpretation. Time travels.
-Requests data writes back to the server.
-Iterface with server is done by queries.

SERVER
-Components are types, Entities are UUIDs, Systems are functions.
-Runs all the abstractions for control algorithms.
-Uses reader condicionals to run on either clojure or clojurescript.
-May need interface code for specific view and platform.
-It is in charge of microprocessor simulation during development.
-It may be easier to simulate the platform using a java physics lib.

PLATFORM
-Components are pieces, Entities are objects, Systems are physics.
-Manages sensors and actuators from the server intent.
-May need interface code for server comunication.


1ST ITERATION
-risks and requirements are initially set.
-client, server and platform decide their entities and components.
