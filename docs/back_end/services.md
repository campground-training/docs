---
title: "Services"
sidebar_position: 99
---

## List of Services

| Name        | Container           | Purpose                                                   | Ingress                              |
| ----------- | ------------------- | --------------------------------------------------------- | ------------------------------------ |
| frontend-ui | container name here | Holds the compiled Angular application served using NGINX | https://www.camping-training.com     |
| backend-ui  | container name here | The NestJS BFF                                            | https://api.camping-training.com/api |
| keycloak    | container name here | Keycloak Auth [See Auth](auth).                           | https://auth.camping-training.com    |

## Frontend-ui

The `frontend-ui` service is the compiled Angular application from the NX Workspace.

## Backend-ui

The `backend-ui` service is the compiled NestJS application from the NX Workspace.
