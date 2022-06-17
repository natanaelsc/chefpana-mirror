interface ICreateRecipeDto {

    id?: string;
    title: string;
    imageUrl?: string;
    ingredients?: string;
    steps?: string;
    categoryId: string;
}

export { ICreateRecipeDto }