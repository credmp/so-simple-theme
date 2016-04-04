(ns pooled-worker.core
  (:gen-class)
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]]))

(def state (atom {:running true
                  :workers 1
                  :channel nil
                  :fn nil}))

(defn start-workers []
  (doseq [n (range (:workers @state))]
    (go (while (:running @state) ((:fn @state) (<! (:channel @state)))))))

(defn create-worker [number-of-workers process-task-fn]
  "Create number-of-workers workers which will call process-task-fn
to process items from the queue"
  (swap! state assoc :channel (chan number-of-workers))
  (swap! state assoc :workers number-of-workers)
  (swap! state assoc :fn process-task-fn)
  (start-workers)
  )

(defn add-task-to-queue
  "Add a task to the queue, if the queue is full, block"
  [task]
  (go (>! worker-chan task)))

(defn stop-workers []
  (swap! state assoc :running false))

(defn process-account [account]
  (prn account)
  (Thread/sleep 100)
  )

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (create-worker 4 process-account)
  (doseq [n (range 1000)]
    (add-task-to-queue (str "Hello-" n)))
  (stop-workers))
