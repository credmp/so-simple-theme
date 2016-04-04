(defproject props "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]]
  :jvm-opts ["-server" "-Dconf=.lein-env"]
  :main ^:skip-aot props.core
  :target-path "target/%s"
  :profiles {
             :dev [:project/dev :profiles/dev]
             :project/dev {}
             :uberjar {:aot :all}})
