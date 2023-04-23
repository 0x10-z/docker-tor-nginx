FROM nginx:1.24.0

# Base packages
RUN apt-get update && \
    apt-get -y install \
    tor torsocks ntpdate \
    qrencode

# Some custom stuff
COPY files/motd /etc/motd

# Tor Config
COPY ./torrc /etc/tor/torrc

# Nginx configuration 
COPY ./web/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80

# Entrypoint copy
COPY files/entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
