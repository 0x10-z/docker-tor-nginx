# ft_onion

# TODO

Tunear con shallot el hash que se genera


# Get started
You can deploy this project using Docker


![1](img/demo.gif)

## Docker

Let's use docker-compose to simplify the command.

```bash
chmod +x files/entrypoint.sh
```

```bash
docker-compose up
# [+] Running 1/1
#  - Container ft_onion-onion-nginx-1  Recreated                                                                                         0.2s 
# Attaching to ft_onion-onion-nginx-1
# ft_onion-onion-nginx-1  | [+] Initializing local clock
# ...
# ft_onion-onion-nginx-1  | [+] Tor url:
# ft_onion-onion-nginx-1  | j55eu2my2xpffid5bc2eysgvm3fxhfhqdw662bx6opxjli5svqx7fbad.onion
```

* Copy *j55eu2my2xpffid5bc2eysgvm3fxhfhqdw662bx6opxjli5svqx7fbad.onion*. Be aware every time you rebuild container, domain will be different!!

