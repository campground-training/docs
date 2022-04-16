---
title: Cluster Admin
---

The cluster is hosted at DigitalOcean Kubernetes Services (DOKS).

It's currently a 4 node cluster, set to autoscale up to 8 if it needs it.

Right now, access is enabled through just the token in the generated `config` file. I'd like to quickly get it set up to use OIDC with RBAC so others can have some permissions to the cluster.
