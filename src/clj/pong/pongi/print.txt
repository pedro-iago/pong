{:system-fns (#<rendering$process_one_game_tick brute_play_pong.rendering$process_one_game_tick@16483a23>
              #<physics$process_one_game_tick brute_play_pong.physics$process_one_game_tick@4f47ee6a>
              #<ai$process_one_game_tick brute_play_pong.ai$process_one_game_tick@17a4cace>
              #<input$process_one_game_tick brute_play_pong.input$process_one_game_tick@4b72307b>
              #<scoring$process_one_game_tick brute_play_pong.scoring$process_one_game_tick@698637c2>),
 :renderer {:shape-renderer #<ShapeRenderer com.badlogic.gdx.graphics.glutils.ShapeRenderer@6750075e>,
            :sprite-batch #<SpriteBatch com.badlogic.gdx.graphics.g2d.SpriteBatch@3dfb1227>,
            :font #<BitmapFont com.badlogic.gdx.graphics.g2d.BitmapFont@1608670a>},
 :entity-components {
                     brute_play_pong.component.CPUScore {#uuid "37aaf563-7286-459b-ac3a-582910765e61" #brute_play_pong.component.CPUScore{}},
                     brute_play_pong.component.PlayerScore {#uuid "3949f6cf-1b73-4f2b-837b-08b6f698c386" #brute_play_pong.component.PlayerScore{}},
                     brute_play_pong.component.Score {#uuid "37aaf563-7286-459b-ac3a-582910765e61" #brute_play_pong.component.Score{:score #<Atom@140aa65f: 0>}, #uuid "3949f6cf-1b73-4f2b-837b-08b6f698c386" #brute_play_pong.component.Score{:score #<Atom@1966340d: 0>}},
                     brute_play_pong.component.Velocity {#uuid "b0482a8a-271c-4014-be39-98873bebbecb" #brute_play_pong.component.Velocity{:vec #<Vector2 [-226.82431 -196.3434]>}},
                     brute_play_pong.component.Ball {#uuid "b0482a8a-271c-4014-be39-98873bebbecb" #brute_play_pong.component.Ball{}},
                     brute_play_pong.component.CPUPaddle {#uuid "29668211-bde0-4c64-b4cb-6fda7604a7da" #brute_play_pong.component.CPUPaddle{}},
                     brute_play_pong.component.Rectangle {#uuid "b0482a8a-271c-4014-be39-98873bebbecb" #brute_play_pong.component.Rectangle{:rect #<Rectangle 290.0,390.0,20.0,20.0>, :colour #<Color ffffffff>}, #uuid "29668211-bde0-4c64-b4cb-6fda7604a7da" #brute_play_pong.component.Rectangle{:rect #<Rectangle 250.0,740.0,100.0,20.0>, :colour #<Color ffffffff>}, #uuid "be14be72-3633-49b8-beed-20800c1aed20" #brute_play_pong.component.Rectangle{:rect #<Rectangle 250.0,40.0,100.0,20.0>, :colour #<Color ffffffff>}},
                     brute_play_pong.component.PlayerPaddle {#uuid "be14be72-3633-49b8-beed-20800c1aed20" #brute_play_pong.component.PlayerPaddle{}},
                     brute_play_pong.component.Paddle {#uuid "29668211-bde0-4c64-b4cb-6fda7604a7da" #brute_play_pong.component.Paddle{}, #uuid "be14be72-3633-49b8-beed-20800c1aed20" #brute_play_pong.component.Paddle{}}},
 :entity-component-types {
                          #uuid "b0482a8a-271c-4014-be39-98873bebbecb" #{brute_play_pong.component.Rectangle brute_play_pong.component.Velocity brute_play_pong.component.Ball},
                          #uuid "37aaf563-7286-459b-ac3a-582910765e61" #{brute_play_pong.component.Score brute_play_pong.component.CPUScore},
                          #uuid "3949f6cf-1b73-4f2b-837b-08b6f698c386" #{brute_play_pong.component.Score brute_play_pong.component.PlayerScore},
                          #uuid "29668211-bde0-4c64-b4cb-6fda7604a7da" #{brute_play_pong.component.Paddle brute_play_pong.component.Rectangle brute_play_pong.component.CPUPaddle},
                          #uuid "be14be72-3633-49b8-beed-20800c1aed20" #{brute_play_pong.component.Paddle brute_play_pong.component.PlayerPaddle brute_play_pong.component.Rectangle}}}

;;fist of all, there is no need for add-system-fn or process_one_game_tick (:system-fns), query mutations is a better abstraction (system-fns can be parser mutate functions)
;;but again, the atom thing allows to use them if I have nice enough data... The reconciler should work just fine, since atoms tell every change that happens on its data...
;;and even better: since brute it's purely functional, I can run it on a Web Worker enviroment with Servant, and get the result back into the atom (niceo!)
;;perharps it's better to keep using add-system-fn and process_one_game_tick since they can be easily fit a .cljc file, and run nicely on both client and server (clojure)
;;second, there is no need to save the renderer information: this doesn't affect brute, it was just a way of getting it to defscreen from the rendering system (om next wins)
;;I am thinking a uuid should work as an Ident,

{:counts [[:count/by-id 0] [:count/by-id 1] [:count/by-id 2]],
 :count/by-id {0 {:id 0, :value 0}, 1 {:id 1, :value 0}, 2 {:id 2, :value 2}},
 :om.next/tables #{:count/by-id}}
