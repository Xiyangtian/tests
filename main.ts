game.pushScene()

/*scene_util.captureRegisteringRoomScenes(() => {
    wonui_cookhouse.prepare_cookhouse()
    game.popScene()
})*/

scene_util.captureRegisteringRoomScenes(() => {
    mushroomfarm.prepare_mushroomfarm()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    fishingpond.prepare_fishingpond()
    game.popScene()
})

cbland.startVillage(false)