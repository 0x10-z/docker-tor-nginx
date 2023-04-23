#!/bin/bash

echo '[+] Initializing local clock' | sed 's/.*/\x1b[31m&\x1b[0m/'
ntpdate -B -q 0.debian.pool.ntp.org
echo '[+] Starting tor' | sed 's/.*/\x1b[31m&\x1b[0m/'
tor -f /etc/tor/torrc &
echo '[+] Starting nginx' | sed 's/.*/\x1b[31m&\x1b[0m/'
nginx &
sleep 10
echo '[+] Tor url:' | sed 's/.*/\x1b[31m&\x1b[0m/'
cat /var/lib/tor/hidden_service/hostname | sed 's/.*/\x1b[32m&\x1b[0m/'
echo '[+] QR Code Generated' | sed 's/.*/\x1b[31m&\x1b[0m/'
cat /var/lib/tor/hidden_service/hostname | qrencode -o /usr/share/nginx/html/qr.png -s 5
# Monitor logs
sleep infinity