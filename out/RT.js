var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/event/EventBuses", "@wayward/game/event/EventManager", "@wayward/game/game/deity/Deity", "@wayward/game/game/entity/action/IAction", "@wayward/game/game/entity/IEntity", "@wayward/game/game/entity/IHuman", "@wayward/game/game/entity/skill/ISkills", "@wayward/game/game/item/IItem", "@wayward/game/game/item/ItemDescriptions", "@wayward/game/mod/Mod"], function (require, exports, EventBuses_1, EventManager_1, Deity_1, IAction_1, IEntity_1, IHuman_1, ISkills_1, IItem_1, ItemDescriptions_1, Mod_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const debugMode = true;
    const itemBed = Mod_1.default.register.item("Bed");
    const doodadBed = Mod_1.default.register.doodad("Bed");
    doodadBed.define({
        blockMove: true,
        canBreak: true,
        blockJump: true,
        isWall: false,
        isFlammable: true,
        pickUp: [itemBed.value],
        asItem: itemBed.value,
        particles: {
            r: 133,
            g: 77,
            b: 22
        },
        reduceDurabilityOnGather: true,
        blockLos: false,
        civilizationScore: 8
    });
    itemBed.define({
        attack: 1,
        damageType: IEntity_1.DamageType.Blunt,
        equip: IHuman_1.EquipType.Held,
        use: [IAction_1.ActionType.Build, IAction_1.ActionType.Rest, IAction_1.ActionType.Sleep],
        actionTier: {
            [IAction_1.ActionType.Rest]: 4,
            [IAction_1.ActionType.Sleep]: 4
        },
        durability: 50,
        recipe: {
            components: [
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.Log, 4, 1, 1),
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.WoodenPlank, 8, 1, 1),
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.String, 4, 1, 1),
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemTypeGroup.Sharpened, 1, 0)
            ],
            skill: ISkills_1.SkillType.Woodworking,
            level: IItem_1.RecipeLevel.Advanced,
            runeChance: [Deity_1.default.Good, 0.01],
        },
        onUse: {
            [IAction_1.ActionType.Build]: {
                type: doodadBed.value
            }
        },
        storeDisassemblyItems: true,
        group: [IItem_1.ItemTypeGroup.Bedding],
        skillUse: ISkills_1.SkillType.None,
        worth: 65
    });
    const itemBarrel = Mod_1.default.register.item("Barrel");
    const doodadBarrel = Mod_1.default.register.doodad("Barrel");
    doodadBarrel.define({
        blockMove: true,
        canBreak: true,
        blockJump: true,
        isWall: false,
        isFlammable: true,
        pickUp: [itemBarrel.value],
        asItem: itemBarrel.value,
        particles: {
            r: 133,
            g: 77,
            b: 22
        },
        reduceDurabilityOnGather: true,
        blockLos: false,
        civilizationScore: 8
    });
    itemBarrel.define({
        attack: 1,
        damageType: IEntity_1.DamageType.Blunt,
        equip: IHuman_1.EquipType.Held,
        use: [IAction_1.ActionType.DrinkInFront],
        durability: 50,
        recipe: {
            components: [
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemType.WoodenPlank, 8, 1, 1),
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemTypeGroup.Glue, 4, 1, 1),
                (0, ItemDescriptions_1.RecipeComponent)(IItem_1.ItemTypeGroup.Sharpened, 1, 0)
            ],
            skill: ISkills_1.SkillType.Woodworking,
            level: IItem_1.RecipeLevel.Expert,
            runeChance: [Deity_1.default.Good, 0.01],
        },
        onUse: {
            [IAction_1.ActionType.Build]: {
                type: doodadBarrel.value
            }
        },
        storeDisassemblyItems: true,
        group: [IItem_1.ItemTypeGroup.Storage],
        skillUse: ISkills_1.SkillType.None,
        worth: 65
    });
    class RandomTweaks extends Mod_1.default {
        onGameStart(game, isLoadingSave, playedCount) {
            if (debugMode) {
                localPlayer.createItemInInventory(itemBed.value);
                localPlayer.createItemInInventory(itemBarrel.value);
            }
        }
    }
    exports.default = RandomTweaks;
    __decorate([
        (0, EventManager_1.EventHandler)(EventBuses_1.EventBus.Game, "play")
    ], RandomTweaks.prototype, "onGameStart", null);
    __decorate([
        Mod_1.default.instance("RandomTweaks")
    ], RandomTweaks, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUlQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBa0NBLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQTtJQUt0QixNQUFNLE9BQU8sR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxNQUFNLFNBQVMsR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQVk3QyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBSWIsU0FBUyxFQUFFLElBQUk7UUFDZixRQUFRLEVBQUUsSUFBSTtRQUNkLFNBQVMsRUFBRSxJQUFJO1FBR2xCLE1BQU0sRUFBRSxLQUFLO1FBQ1YsV0FBVyxFQUFFLElBQUk7UUFJcEIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN2QixNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDbEIsU0FBUyxFQUFFO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1NBQ1I7UUFDRCx3QkFBd0IsRUFBRSxJQUFJO1FBRzlCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsaUJBQWlCLEVBQUUsQ0FBQztLQUN2QixDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2QsTUFBTSxFQUFFLENBQUM7UUFDVCxVQUFVLEVBQUUsb0JBQVUsQ0FBQyxLQUFLO1FBQzVCLEtBQUssRUFBRSxrQkFBUyxDQUFDLElBQUk7UUFJckIsR0FBRyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxJQUFJLEVBQUUsb0JBQVUsQ0FBQyxLQUFLLENBQUM7UUFDMUQsVUFBVSxFQUFFO1lBQ0wsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDcEIsQ0FBQyxvQkFBVSxDQUFDLEtB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