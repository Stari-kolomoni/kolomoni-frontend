import type { UserInformationResponse } from "./schemaTypes";

export class UserInfo {
    public id: number;
    
    public username: string;
    
    public displayName: string;

    public joinedAt: Date;
    
    public lastActiveAt: Date;
    
    public lastModifiedAt: Date;

    constructor(
        id: number,
        username: string,
        displayName: string,
        joinedAt: Date,
        lastActiveAt: Date,
        lastModifiedAt: Date
    ) {
        this.id = id;
        this.username = username;
        this.displayName = displayName;
        this.joinedAt = joinedAt;
        this.lastActiveAt = lastActiveAt;
        this.lastModifiedAt = lastModifiedAt;
    }

    public static fromApiResponse(
        userInfo: UserInformationResponse
    ): UserInfo {
        const joinedAt = new Date(userInfo.user.joined_at);
        const lastActiveAt = new Date(userInfo.user.last_active_at);
        const lastModifiedAt = new Date(userInfo.user.last_modified_at);

        return new UserInfo(
            userInfo.user.id,
            userInfo.user.username,
            userInfo.user.display_name,
            joinedAt,
            lastActiveAt,
            lastModifiedAt
        )
    }

    public serialize(): SerializedUserInfo {
        return {
            id: this.id,
            username: this.username,
            displayName: this.displayName,
            joinedAt: this.joinedAt,
            lastActiveAt: this.lastActiveAt,
            lastModifiedAt: this.lastModifiedAt,
        }
    }

    public static fromSerialized(data: SerializedUserInfo): UserInfo {
        return new UserInfo(
            data.id,
            data.username,
            data.displayName,
            data.joinedAt,
            data.lastActiveAt,
            data.lastModifiedAt,
        )
    }
}

export type SerializedUserInfo = {
    id: number,
    username: string,
    displayName: string,
    joinedAt: Date,    
    lastActiveAt: Date,    
    lastModifiedAt: Date,
}
