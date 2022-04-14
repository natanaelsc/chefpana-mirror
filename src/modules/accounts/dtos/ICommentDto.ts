interface ICommentDto {
    
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    isDeleted?: boolean;
    isEdited?: boolean;
    text?: string;
    userId?: string;
    postId?: string;
}