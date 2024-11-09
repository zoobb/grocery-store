import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {GroceryItem, BasketItem} from '../types.ts';

export const useListStore = defineStore('listStore', () => {
  const mainList = ref<GroceryItem[]>([
    {
      'id': 0,
      'name': 'Bread',
      'price': 10,
      'producer': 'Best bread',
      'isAvailable': true,
      'rating': 4.2,
    }, {
      'id': 1,
      'name': 'Milk',
      'price': 20,
      'producer': 'Best milk',
      'isAvailable': true,
      'rating': 4.5
    }, {
      'id': 2,
      'name': 'Meat',
      'price': 86,
      'producer': 'Best meat',
      'isAvailable': false,
      'rating': 4.6
    }, {
      'id': 3,
      'name': 'Tea',
      'price': 55,
      'producer': 'Best tea',
      'isAvailable': false,
      'rating': 4.1
    }, {
      'id': 4,
      'name': 'Water',
      'price': 28,
      'producer': 'Best water',
      'isAvailable': true,
      'rating': 4.7
    },
  ]);
  const basketList = ref<BasketItem[]>([]);
  const isBasketOpen = ref<boolean>(false);

  const toggleBasket = () => {
    isBasketOpen.value = !isBasketOpen.value;
  };
  const addToBasket = (item: GroceryItem, quantity: number) => {
    const basketItem = basketList.value.find((element: GroceryItem) => element.id === item.id);
    if (basketItem) {
      basketItem.quantity += quantity;
    } else {
      basketList.value.push({...item, 'quantity': quantity});
    }
  };
  const removeFromBasket = (item: BasketItem) => {
    basketList.value.splice(basketList.value.indexOf(item), 1);
  };

  const itemsInBasketCount = computed(() => {
    return basketList.value.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
  });

  return {
    mainList,
    basketList,
    isBasketOpen,
    toggleBasket,
    addToBasket,
    removeFromBasket,
    itemsInBasketCount
  };
});
