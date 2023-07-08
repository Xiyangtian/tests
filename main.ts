game.pushScene()

scene_util.captureRegisteringRoomScenes(() => {
    mushroomfarm.prepare_mushroomfarm()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    fishingpond.prepare_fishingpond()
    game.popScene()
})

cbland.startVillage(false)