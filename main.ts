scene_util.captureRegisteringRoomScenes(() => {
    wonui_cookhouse.prepare_cookhouse()
    game.popScene()
})
scene_util.captureRegisteringRoomScenes(() => {
    mushroomfarm.prepare_mushroomfarm()
    game.popScene()
})
cbland_equipment.registerEquipment("空手", img`
1 1 1 1 1 1 1 1
1 . 5 . 5 . . 1
1 5 5 5 5 . 5 1
1 5 5 5 . 5 . 1
1 5 5 5 5 . . 1
1 . 5 5 5 5 . 1
1 . . 5 5 . 5 1
1 1 1 1 1 1 1 1
`, 0)

cbland.startVillage()