namespace bar {

    let frame: Sprite = null
    let redZone: Sprite = null
    let cursor: Sprite = null
    let orangeZone: Sprite = null
    let yellowZone: Sprite = null
    let greenZone: Sprite = null

    let lastDodgeValue: number

    let running = true;

    //%block
    export function showBar() {
        pauseUntil(()=>!controller.A.isPressed())
        running = true
        frame = sprites.create(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1222222222222222222222222444444444444555555777777777777555555444444444444222222222222222222222222221
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
        cursor = sprites.create(img`
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
            . . . . . . f f f . . . . . . .
        `)
        cursor.setPosition(game.currentScene().camera.x, game.currentScene().camera.y)
        cursor.setVelocity(80, 0)

        setTimeout(captureCurrentValue, 10)

        while (running) {
            if (Math.abs(frame.x - cursor.x) > 50) {
                if (cursor.vx > 0) {
                    cursor.x = frame.x + 50
                } else {
                    cursor.x = frame.x - 50
                }
                cursor.vx *= -1
            }
            pause(10)
        }
        pauseUntil(() => !controller.A.isPressed())
    }

    function captureCurrentValue() {
        if (controller.A.isPressed()) {
            lastDodgeValue = barValue()
            frame.destroy()
            cursor.destroy()
            running = false
        } else {
            setTimeout(captureCurrentValue, 10)
        }
    }

    //%block
    export function getBarValue(): number {
        return lastDodgeValue;
    }

    function barValue(): number {
        if (Math.abs(frame.x - cursor.x) < 6) {
            return 1
        } else if (Math.abs(frame.x - cursor.x) < 12) {
            return 2
        } else if (Math.abs(frame.x - cursor.x) < 24) {
            return 3
        } else {
            return 4
        }
    }
}