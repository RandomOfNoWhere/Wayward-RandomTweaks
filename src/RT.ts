//import { EventBus } from "@wayward/game/event/EventBuses";
//import { EventHandler } from "@wayward/game/event/EventManager";
//import { EventHandler } from "@wayward/game/event/EventManager";
import { EventBus } from "@wayward/game/event/EventBuses";
import { EventHandler } from "@wayward/game/event/EventManager";
import Deity from "@wayward/game/game/deity/Deity";
//import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
//import { Action } from "@wayward/game/game/entity/action/Action";
//import type { ActionType } from "@wayward/game/game/entity/action/IAction";
//import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
//import { DamageType, EntityType } from "@wayward/game/game/entity/IEntity";
import { DamageType} from "@wayward/game/game/entity/IEntity";
import { EquipType } from "@wayward/game/game/entity/IHuman";
//import Player from "@wayward/game/game/entity/player/Player";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { Game } from "@wayward/game/game/Game";
//import { Game } from "@wayward/game/game/Game";
//import type { Game } from "@wayward/game/game/Game";
import { ItemType, ItemTypeGroup, RecipeLevel } from "@wayward/game/game/item/IItem";
import { RecipeComponent } from "@wayward/game/game/item/ItemDescriptions";
import Mod from "@wayward/game/mod/Mod";
//import Register, { Registry } from "@wayward/game/mod/ModRegistry";
//import Register from "@wayward/game/mod/ModRegistry";
//import { RenderSource, UpdateRenderFlag } from "@wayward/game/renderer/IRenderer";
//import Bind from "@wayward/game/ui/input/Bind";
//import type Bindable from "@wayward/game/ui/input/Bindable";
//import { IInput } from "@wayward/game/ui/input/IInput";
//import { Bound } from "@wayward/utilities/Decorators";
//import { ModRegistrationTime } from "@wayward/game/mod/BaseMod";
//import Mod from "@wayward/game/mod/Mod";
//import type { IOverrideDescription } from "@wayward/game/mod/ModRegistry";

////////////// Start Up Vars /////////////////////
const debugMode = true

//////////////////////////////////////////////////
////                  Bed vars                ////
//////////////////////////////////////////////////
const itemBed = Mod.register.item("Bed");
const doodadBed = Mod.register.doodad("Bed");

/*
t.doodadDescriptions[i.DoodadType.Hammock] = {
        
        actionTypes: [o.ActionType.Rest, o.ActionType.Sleep],
        isTall: !0,
        isFlammable: !0,
        reduceDurabilityOnGather: !0
    },
	*/

doodadBed.define({
    //pickUp: [
    //    Registry<RandomTweaks>(RandomTweaks).registry("items").get("itemBed")
    //], //Picks up into
    blockMove: true,
    canBreak: true,
    blockJump: true,
    //asItem: Registry<RandomTweaks>(RandomTweaks).registry("items").get("itemBed"),
	//isTall: true, //Move the tile up 16 pixels,
	isWall: false,
    isFlammable: true,
    //reduceDurabilityOnGather: !0,
	//renderAsSprite: true, 
	//use: [],
	pickUp: [itemBed.value],
	asItem: itemBed.value,
    particles: {
        r: 133,
        g: 77,
        b: 22
    },
    reduceDurabilityOnGather: true,
    //disableDrop: true,
    //isWall: false,
    blockLos: false,
    civilizationScore: 8
})

itemBed.define({
	attack: 1,
	damageType: DamageType.Blunt,
	equip: EquipType.Held,
	//onEquip: item => Argus.INSTANCE.onEquip(),
	//onUnequip: item => Argus.INSTANCE.onUnequip(),
	//use: [Registry<RandomTweaks>().get("actionSeeAll")],
	use: [ActionType.Build, ActionType.Rest, ActionType.Sleep],
	actionTier: {
        [ActionType.Rest]: 4,
        [ActionType.Sleep]: 4
    },
	durability: 50,
	recipe: {
		components: [
			//RecipeComponent(ItemType.Lens, 2, 2, 2),
			RecipeComponent(ItemType.Log, 4, 1, 1),
			RecipeComponent(ItemType.WoodenPlank, 8, 1, 1),
			RecipeComponent(ItemType.String, 4, 1, 1),
			RecipeComponent(ItemTypeGroup.Sharpened, 1, 0)
		],
		skill: SkillType.Woodworking,
		level: RecipeLevel.Advanced,
		runeChance: [Deity.Good, 0.01],
	},
	onUse: {
        [ActionType.Build]: {
        type: doodadBed.value
        }
    },
	storeDisassemblyItems: true,
	group: [ItemTypeGroup.Bedding],
	skillUse: SkillType.None, //No skill gain for high level relaxing sleep
	worth: 65
})

//////////////////////////////////////////////////
////               Barrel vars                ////
//////////////////////////////////////////////////
const itemBarrel = Mod.register.item("Barrel");
const doodadBarrel = Mod.register.doodad("Barrel");

doodadBarrel.define({
    //pickUp: [
    //    Registry<RandomTweaks>(RandomTweaks).registry("items").get("itemBed")
    //], //Picks up into
    blockMove: false,
    canBreak: true,
    blockJump: true,
    //asItem: Registry<RandomTweaks>(RandomTweaks).registry("items").get("itemBed"),
	//isTall: true, //Move the tile up 16 pixels,
	isWall: false,
    isFlammable: true,
    //reduceDurabilityOnGather: !0,
	//renderAsSprite: true, 
	//use: [],
	pickUp: [itemBarrel.value],
	asItem: itemBarrel.value,
    particles: {
        r: 133,
        g: 77,
        b: 22
    },
    reduceDurabilityOnGather: true,
    //disableDrop: true,
    //isWall: false,
    blockLos: false,
    civilizationScore: 8
})

itemBarrel.define({
	attack: 1,
	damageType: DamageType.Blunt,
	equip: EquipType.Held,
	//onEquip: item => Argus.INSTANCE.onEquip(),
	//onUnequip: item => Argus.INSTANCE.onUnequip(),
	//use: [Registry<RandomTweaks>().get("actionSeeAll")],
	use: [ActionType.DrinkInFront],
	//actionTier: {
    //    [ActionType.DrinkInFront]: 4 //,
    //    //[ActionType.GatherLiquid]: 4
    //},
	durability: 50,
	recipe: {
		components: [
			//RecipeComponent(ItemType.Lens, 2, 2, 2),
			RecipeComponent(ItemType.WoodenPlank, 8, 1, 1),
			RecipeComponent(ItemTypeGroup.Glue, 4, 1, 1),
			RecipeComponent(ItemTypeGroup.Sharpened, 1, 0)
		],
		skill: SkillType.Woodworking,
		level: RecipeLevel.Expert,
		runeChance: [Deity.Good, 0.01],
	},
	onUse: {
        [ActionType.Build]: {
        type: doodadBarrel.value
        }
    },
	storeDisassemblyItems: true,
	group: [ItemTypeGroup.Storage],
	skillUse: SkillType.None, //No skill gain for high level relaxing sleep
	worth: 65
})


/*
interface IRandomTweaksData {
//	islands: Map<IslandId, ITroposphereIslandData>;
	players: Map<string, IRandomTweaksPlayerData>;
}

interface IRandomTweaksPlayerData {
	createdItems: boolean;
	falling: boolean;
}
*/

export default class RandomTweaks extends Mod {

	@Mod.instance<RandomTweaks>("RandomTweaks")
	public static readonly INSTANCE: RandomTweaks;

	/*
	@Mod.saveData<RandomTweaks>("RandomTweaks")
	public data: IRandomTweaksData;

	@EventHandler(Player, "loadedOnIsland")
	protected onPlayerSpawn(player: Player): void {
		let playerData = this.data.players.get(player.identifier);
		if (playerData) {
			playerData.falling = false;
			return;
		}

		playerData = {
			createdItems: true,
			falling: false,
		};
		this.data.players.set(player.identifier, playerData);

		player.createItemInInventory(itemBed.value);
	}
	*/


	@EventHandler(EventBus.Game, "play")
	public onGameStart(game: Game, isLoadingSave: boolean, playedCount: number): void {
		if(debugMode){
			//Due to testing try create the item when game starts
			//if (!isLoadingSave) {
				// give copy of test items
				localPlayer.createItemInInventory(itemBed.value);
				localPlayer.createItemInInventory(itemBarrel.value);
			//}
		}
		
	}

	//@Register.bindable("Toggle", IInput.key("Delete"))
	//public readonly keyBind: Bindable;

	/*
	@Register.action("SeeAll", new Action(ActionArgument.ItemInventory)
		.setUsableBy(EntityType.Human)
		.setCanUse((action, item) => {
			if (!item.description?.use?.includes(Argus.INSTANCE.actionSeeAll)) {
				return {
					usable: false,
				};
			}

			return {
				usable: true,
			};
		})
		.setHandler(action => {
			if (renderer) {
				renderer.worldRenderer.setZoom(0.15);
				renderer.computeSpritesInViewport();
				renderer.updateRender(RenderSource.Mod, UpdateRenderFlag.World);
			}
		}))
	//public readonly actionSeeAll: ActionType;
	*/

	/*
	@Bind.onDown(Registry<Argus>().get("keyBind"))
	public onToggleBind(): boolean {
		this[renderer?.fieldOfView.disabled ? "onUnequip" : "onEquip"]();
		return true;
	}

	@Bound
	private onEquip(): void {
		if (renderer) {
			renderer.fieldOfView.disabled = true;
			renderer.fieldOfView.compute(game.absoluteTime);
			renderer.updateView(RenderSource.Mod, true);
		}
	}

	@Bound
	private onUnequip(): void {
		if (renderer) {
			renderer.fieldOfView.disabled = false;
			renderer.fieldOfView.compute(game.absoluteTime);
			renderer.updateView(RenderSource.Mod, true);
		}
	}
	*/
}
