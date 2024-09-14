import { AxiosResponse } from 'axios';
import { PictTagsResponse } from '../models/Pict.model';
import $api from '../api.config';

export default class PictService {
  static async getTags(size: number, page: number): Promise<AxiosResponse<PictTagsResponse>> {
    return $api.get<PictTagsResponse>('/get-tags', {
      params: {
        size,
        page,
      },
    });
  }

  static async getSearchTags(term: string): Promise<AxiosResponse<PictTagsResponse>> {
    return $api.get<PictTagsResponse>(`/get-tags/search?term=${term}`);
  }
}
