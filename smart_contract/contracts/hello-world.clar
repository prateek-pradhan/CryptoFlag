;; (string-ascii 15) is tx-id
(define-map claims (string-ascii 15) {blockchain-name: (string-ascii 15) , amount: uint, wallet-address: (string-ascii 15) })
    

(define-public (submit-claim (tx-id (string-ascii 15)) (blockchain-name (string-ascii 15)) ( amount uint) (wallet-address (string-ascii 15)))
  (begin 
  (map-insert claims tx-id {blockchain-name: blockchain-name, amount: amount, wallet-address: wallet-address})
         (ok tx-id)
  )
)
;; retrieve claim with tx-id .
(define-read-only (get-claim (val (string-ascii 15)))
  (ok (map-get? claims val)))
;;(define-read-only (get-all-claims)
;;  (ok (map-get? claims)))
