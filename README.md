# Kortgame

This is a much simplified, browser-based Slay The Spire inspired card crawl game that may or may not evolve into something else. It mostly exists because it was and is fun to develop.

## Slay the Spire

All credit goes to Mega Crit and their fantastic job designing [Slay The Spire](https://www.megacrit.com/). So much fun to be had in that game. I learned a lot by decompiling the game's source code and looking at the community's inspiring mods.

## Development setup

The `public` folder is meant to be deployed to any static web server and runs without the need of compiling anything.

While developing locally, run 

- `yarn start` for a server that reloads on file change

All scripts are checked with eslint, formatted with prettier and tested with ava.

- `yarn test`
- `yarn test:watch`

## Todo

Which parts do we want to do

- Game state logic (player, actions)
- First class console cli support
- A deck of cards (draw, random methods)

We can close this once we are able to draw a card onto an enemy and see the effects on game state.

Many ways to go. This is the first.

We need

- A deck of cards
- Cards have different energy cost and actions
- An action could be draw a card, deal damage, everything is an action
- All actions are queued

Let's figure out how to draw a deck, play it console-style no ui.

### Game state

use immer, supports undo and redo, store in local storage or even better, serialize and store everything in the url?

enum GameMode {
 	CHAR_SELECT, GAMEPLAY, DUNGEON_TRANSITION, SPLASH;
}

We want the game library/api to be independent of the UI?!

### Console

by this I mean being able to play the game with (almost) no gui. write the commands, see the effect directly on game state.

### Deck of cards

- list of cards
- a deck is some of the cards
- a hand is the currently picked cards from your deck

## Notes for later

### Basics

- deck
- draw
- fight
- gold
- hand
- player
- maxHealth = startingHealth
- currentHealth
- energy
- gold
- Cards
- card.use()

### Encounters

- Dungeon > Encounters > Monsters

## Links

- FTL, Into The Breach, Darkest Dungeon, Dungeon of the Endless, Spelunky, Rogue Legacy,
- [Pollywog Games: A history of roguelite deck building games](https://pollywog.games/rgdb/)
- http://stfj.net/index2.php?project=art/2011/Scoundrel.pdf
- http://stfj.net/index2.php?year=2018&project=art/2018/Pocket-Run%20Pool
- http://www.cardcrawl.com/
- http://www.cardofdarkness.com/
- https://freesound.org/
- https://game-icons.net/
- https://github.com/Gremious/StS-DefaultModBase
- https://github.com/RonenNess/RPGUI
-	https://github.com/daviscook477/BaseMod
- https://github.com/kiooeht/Hubris/
- https://github.com/kiooeht/StSLib/wiki/Power-Hooks
- https://hundredrabbits.itch.io/donsol [Source](https://github.com/hundredrabbits/Donsol/tree/master/desktop/sources/scripts)
- https://itch.io/games/tag-card-game/tag-roguelike
- https://kinopio.club/cardcrawl-UL_lam2QrnMLIw9meGOmX
- https://nathanwentworth.itch.io/deck-dungeon [Source](https://github.com/nathanwentworth/deck-dungeon/)
- https://slay-the-spire.fandom.com/wiki/Slay_the_Spire_Wiki
- https://spirelogs.com/
- https://twitter.com/fabynou/status/1212534790672408578
- https://www.gamasutra.com/blogs/JoshGe/20181029/329512/How_to_Make_a_Roguelike.php
- https://www.gdcvault.com/play/1025731/-Slay-the-Spire-Metrics
- https://www.reddit.com/r/roguelikedev/
- https://www.reddit.com/r/slaythespire/comments/a7lhpq/any_recommended_games_similar_to_slay_the_spire/
