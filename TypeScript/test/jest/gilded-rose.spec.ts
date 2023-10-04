import { Item, GildedRose } from '@/gilded-rose';
import {verify} from "approvals/lib/Providers/Jest/JestApprovals";

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 30)
    ]);

    const result: string[] = [];

    const days: number = 2;
    for (let i = 0; i < days; i++) {
      const items = gildedRose.updateQuality();

      items.forEach((item) => {
        result.push(`${item.name} ${item.sellIn} ${item.quality}`);
      });
    }

    verify(result.join("\n"));
  });
});
