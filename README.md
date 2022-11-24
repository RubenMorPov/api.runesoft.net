# api.runesoft.net

Rest API mainly for content creators chatbots as used in Twitch, Discord or Telegram.

## Twitch API

Using Twitch's API, Helix, this API can obtain public users data, from twitch user name or ID. The twitch user api endpoints are:

-   User data from user name: `http://api.runesoft.net/twitch/user/data?streamer=<streamer>`.
-   User data from user id: `http://api.runesoft.net/twitch/user/data?id=<streamer_id>`.
-   User ID from user name: `http://api.runesoft.net/twitch/user/id/<streamer>`.
-   User name from user ID: `http://api.runesoft.net/twitch/user/<streamer_id>`.
-   User display name from user name: `http://api.runesoft.net/twitch/user/name/<streamer>`.
-   User type from user name: `http://api.runesoft.net/twitch/user/type/<streamer>`.
-   User description from user name: `http://api.runesoft.net/twitch/user/description/<streamer>`.
-   If user is affilaite from user name: `http://api.runesoft.net/twitch/user/affiliate/<streamer>`.
-   If user is partner from user name: `http://api.runesoft.net/twitch/user/partner/<streamer>`.
-   It can also generate clips from a certain streamer giving the name: `http://api.runesoft.net/twitch/clip/<streamer>`.

## Valorant API:

Using third party API (working on using Riot's official one) it has the following endpoints:

-   Player data: `http://api.runesoft.net/games/valorant/rank/<REGION>/<USER>/<TAG>`.
-   Player tier: `http://api.runesoft.net/games/valorant/tier/<REGION>/<USER>/<TAG>/<LANG?>`.
-   Player RR: `http://api.runesoft.net/games/valorant/rr/<REGION>/<USER>/<TAG>/<LANG?>`.
-   Player last match RR points: `http://api.runesoft.net/games/valorant/lastmatch/<REGION>/<USER>/<TAG>/<LANG?>`.
