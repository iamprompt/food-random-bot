import { FlexBubble } from '@line/bot-sdk';

export type Food = {
	name: string;
	imageUrl: string;
};

export const foods: Food[] = [
	{
		name: 'ข้าวผัดหมู',
		imageUrl: 'https://s359.kapook.com/pagebuilder/3dfc9eae-e6b7-484a-9cbc-280067076ce4.jpg',
	},
	{
		name: 'ข้าวขาหมู',
		imageUrl: 'https://img-global.cpcdn.com/recipes/san9n06rrmbygemguo0x/1200x630cq70/photo.jpg',
	},
	{
		name: 'ข้าวหมูแดง',
		imageUrl: 'https://www.ryoiireview.com/upload/article/202212/1671519383_b1ac48e84be408c36be2df47420f3d05.jpg',
	},
	{
		name: 'ข้าวหน้าเป็ด',
		imageUrl: 'https://images.aws.nestle.recipes/resized/e4b2d29ca6efb9f89b3062d9fb6da7fd_maggi_2_4877_944_531.jpg',
	},
	{
		name: 'หมูผัดกระเทียมพริกไทย',
		imageUrl: 'https://images.aws.nestle.recipes/resized/3c7934693ebae7a1d4ed42e8498da3d7_7o5a6087_1500_700.jpg',
	},
];

export const createFoodFlexMessage = (food: Food): FlexBubble => {
	return {
		type: 'bubble',
		size: 'mega',
		direction: 'ltr',
		body: {
			type: 'box',
			layout: 'vertical',
			contents: [
				{
					type: 'image',
					url: food.imageUrl,
					aspectRatio: '1:1',
					aspectMode: 'cover',
					size: 'full',
				},
				{
					type: 'box',
					layout: 'vertical',
					contents: [
						{
							type: 'text',
							text: 'เมนูที่ได้คือ',
						},
						{
							type: 'text',
							text: food.name,
							size: 'xl',
							weight: 'bold',
							margin: 'sm',
						},
						{
							type: 'button',
							action: {
								type: 'message',
								text: 'กินอะไรดี',
								label: 'สุ่มอีกครั้ง',
							},
							margin: 'lg',
							style: 'primary',
						},
					],
					paddingStart: 'xxl',
					paddingEnd: 'xxl',
					paddingTop: 'xl',
					paddingBottom: 'xl',
				},
			],
			paddingAll: 'none',
		},
	};
};

export const getRandomFood = (): Food => {
	const randomIndex = Math.floor(Math.random() * foods.length);
	return foods[randomIndex];
};
