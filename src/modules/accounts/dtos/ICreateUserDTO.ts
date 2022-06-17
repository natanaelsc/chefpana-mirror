interface IcreateUserDto {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    isChef?: boolean;
    createdAt?: Date;
    avatarUrl?: string;
    phoneNumber?: string;
    bioProfile?: string;
}

export { IcreateUserDto };