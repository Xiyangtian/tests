// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "mushroomFarmInside":
            case "级别1":return tiles.createTilemap(hex`0a0008000104040404040404040503080808080808080806030808080808080808060308080808080808080603080808080808080806030808080808080808060200000000000000000700000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "级别2":
            case "级别2":return tiles.createTilemap(hex`0a0008000103030303030303030204080808080808080805040807080808080608050408080808080808080504080808080808080805040808080808080808050408080808080808080500000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.dungeon.chestOpen,sprites.dungeon.darkGroundCenter,sprites.castle.tilePath5], TileScale.Sixteen);
            case "fishingpond_级别1":
            case "级别1":return tiles.createTilemap(hex`0a0008000201010101010101010304040404040404040404040404040404040404040404040404040404040404040404040404040404050404040404040404060707070707070707070700000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile7,sprites.swamp.swampTile6,sprites.swamp.swampTile8,sprites.swamp.swampTile9,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.castle.tilePath2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile5":return tile5;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
