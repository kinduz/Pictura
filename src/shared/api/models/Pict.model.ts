export type PictTags = {
    id: number;
    value: string;
}

export type PictTagsResponse = {
    tags: PictTags[];
    total: number;
    size: number;
    page: number;
}
