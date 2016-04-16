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


=========================================================================


TITLE: PONG

1ST
  RISKS
  	I may fail on my classes.
  	Other developers may feel intimidated by clojure(script).
  	Client and Server may need different root folders.
  	Client code may be too slow with om.next and aframe.
  	Lack of clojure(script) physics libraries for simulation.
  REQUIREMENTS
  	Should be fun.
  	Should be easy to change.
  	Should be developed with live feedback.
  	Should be a group effort, open to opinions.
	  Should recreate the game on the branch brute-play-pong.
  COMPONENTS
	  Position, Rotation, Scale, Velocity, Geometry.
	  Paddle.
	  Ball.
	  Score.

    2ND
      COMPONENTS
        Material.
        Geometry.
        Transform.
          Position, Rotation, Scale.
        Control.
          Float-Around.
          Follow-Near.
          Follow-Keys.
      ENTITIES
        Player-Paddle, PC-Paddle, Ball.

3RD
  ;Introducing hierarchy to components. (only-the-type inhenritance)
  ;The most specific is implemented. Parent types refer to all children.
  ;Ex: (def system (atom {:components/by-type {
                            ::Geometry {'...}
                            ::Position {'...}
                            ::Rotation {'...}
                            ::Scale {'...}}}))
  ;    (components-by-type @system ::Transform) -> {::Position {'...}
                                                    ::Rotation {'...}
                                                    ::Scale {'...}}
  ;this probably means a fork on brute, but it should be easy. it also means (isa? ::Position ::Transform) -> true
  ;obs ::Transform translates to :current-ns/Transform, which will be :server.components/Transform (I probably want use make-hirearchy instead)
  ;(def components (-> (make-hierarchy)
                       (derive :Position :Transform)
                       (derive :Rotation :Transform)
                       (derive :Scale :Transform)
                       (derive :Float-Around :Control)
                       (derive :Follow-Near :Control)))
  ;components are just types!! or more directly, a hierarchy of types. They work well with isa? and suchs, like defmulti and ancestors
  ;following this idea, under the hierarchy of types, which is essentially a tree, only the leaves would actually work as keys on the data
  COMPONENTS
    Material.
    Geometry.
    Transform. ;(map #(derive % ::Transform) [::Position ::Rotation ::Scale])
      Position, Rotation, Scale. ;An entity can have those Transforms at the same time (descendants ::Transform)
    Control. ;(map #(derive % ::Control) [::Float-Around ::Follow-Near ::Follow-Keys])
      Float-Around. ;An entity can only have one of those Transforms at a time
      Follow-Near.  ;Another components can be made of a combination of those Controls
      Follow-Keys.  ;But still, they will be another components. Something like Float-Around-Near
  ENTITIES
    Player-Paddle, PC-Paddle, Ball.

4TH
  ;Server normalized data as component/by-type, because it's easier for systems and parallelism.
  ;Client normalized data as entity/by-id, because it's easier for uis and works well with om/ident.
  ;Effectively what that means is that Server parser should read (send) component/by-type (brute shape) as entity/by-id.

5TH
  ;entidades podem conter o componente childrens com as suas entidades filhas
  ;isso nao significa porem que as filhas sejam uis filhas dessa entidade.
  ;de fato, cada entidade (com ou sem children) mapea exclusivamente a uma ui sem
  ;childrens. o componente model (skin) pode ser usado para renderizar a entidade
  ;pai diretamente, quando as filhas possuirem material de visibilidade nula.
  ;componentes sao praticalmente indivisiveis, entidades possuem significado quando sozinhas.

  ;ChromaShift tem uma forma interessante de utilizar ECS, construindo components a
  ;partir de funcoes. Isso resulta em construcao de level bastante legivel e
  ;potencialmente facil de experimentar com o scribble. Por outro lado, brute eh muito mais
  ;funcional no sentido que todas as funcoes sao puras, e portanto mais convenientes, enquanto
  ;ChromaShift mutaciona javascript atraves de macros.

6TH
 ;clients and servers communicate using HTTP connections. the other option, using
 ;Websockets, may seem better since it doesn't require a handshake, and the server
 ;can potentially send much more messages with less latency. However, because of
 ;the ease to use HTTP, and optimistic updates, the client can sporadically
 ;synchronizations, say half a second, and simulate an uniform movement in between.
 ;because accelerations are likely to be low, the clients can be fairly accurate.
 ;aleph, bidi, yada and the remote synchronazation of om.next have all i need
 ;furthermore, if i regret and decide to use websockets instead, i can use om next
 ;merge! on a callback from a clojure(script) Sente configuration.
 ;in a senser, http fits the initial idea well enough. What i am trying to do first
 ;is a simulation enviroment (server) rendered and interfaced by the browser.
 ;so no need for long client streams to the server. If perharps one day I decide
 ;to use the same ECS structure for a game, I can use playclj and just clojure.