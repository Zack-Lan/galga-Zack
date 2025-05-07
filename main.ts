controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    spacePlane.destroy(effects.spray, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile2: Sprite = null
let spacePlane: Sprite = null
scene.setBackgroundColor(1)
spacePlane = sprites.createProjectileFromSprite(img`
    ..ccc.........fffffff...
    ..f4cc.......ffcc22ff...
    ..f44cc...fffccccfff....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2f.
    f22ccccccc222299111b22ff
    fffffcc222c22222222222ff
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cf..............
    ...fffffff..............
    ........................
    ........................
    `, spacePlane, 50, 50)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        ....ffffff..............
        ....ff8cccf.........cf..
        .....ff8cccfff.....c6f..
        ....cc88888888ccccc66f..
        ...c9b866688888ccc668f..
        ..c99966888888888868fc..
        .c8b9918888888888888fcc.
        c888b1111b88888888cc88cf
        f8888881998888ccccccc88f
        .f88888888888c888cffffff
        ..ff8888888c668888ff....
        ....fffffffff666888fc...
        .........f8cff668888c...
        .........fccfffc8888c...
        ..........fc8ffffffff...
        ...........c8fff........
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
