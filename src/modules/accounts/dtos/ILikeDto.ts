interface ILikeDto {

    id?: string;
    isLiked?: boolean;
    likedAt?: Date;
    userId: string;
    postId: string;
    
}

export { ILikeDto }