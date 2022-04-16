---
sidebar_position: 99
title: "Todo"
---

Keeping an ongoing list of stuff to accomplish here that doesn't really fit into Github issues yet - bigger picture planning.

## Big Picture

The conundrum here is I want reference code here that has no business being in a project this small. This could *easily* be a server-side Rails or other MVC type application, with some JavaScript (Vue, etc.) thrown in.

However:

- I teach a *lot* of Angular, and I see it done *poorly* frequently. So I want to at least start with an Angular frontend. 
    - It *might* be best to be a static site for the landing, browsing functionality, and use Angualar for the more "app" like experiences:
        - Itinerary and Reservation Management
        - Admin stuff.

Think we'll stick with the App (Angular) approach for now, but something to consider.

## Auth

Need to get the Auth stuff set up before I can do much else. 

We will use Keycloak for our identity stuff.

For the data for this, maybe use the MySQL Database that is in the `csupport` node in the cluster right now. In other words, run it outside of the cluster.

Keycloak does not support Mongo, it needs a relational database. 
## Data

### MongoDb

[Need a Mongo Replicaset](https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/)

### Kafka

I really want to run Kafka. Need to think about the best way to do this.