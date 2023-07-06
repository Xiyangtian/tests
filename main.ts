game.pushScene()

scene_util.captureRegisteringRoomScenes(() => {
    wonui_cookhouse.prepare_cookhouse()
    game.popScene()
})

cbland.startVillage(false)