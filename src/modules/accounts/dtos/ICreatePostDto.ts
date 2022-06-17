interface ICreatePostDto {
    
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isPublished?: boolean;
    isDeleted?: boolean;
    isActived?: boolean;
    recipeId?: string;
    userId?: string;
    numberOfLikes?: number;
    numberOfComments?: number;
}

export { ICreatePostDto };