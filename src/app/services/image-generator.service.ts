import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../environment";

@Injectable({
    providedIn: "root"
})
export class ImageGeneratorService {
    private readonly API_URL = environment.huggingFaceApiUrl;
    private readonly headers = { Authorization: `Bearer ${environment.huggingFaceApiKey}` };

    public async generate(prompt: string): Promise<Blob> {
        try {
            const response = await axios.post(this.API_URL, { inputs: prompt }, { headers: this.headers, responseType: 'blob' });
            const blob = response.data;

            return blob;
        } catch (error) {
            console.error('Error generating image:', error);
            throw error
        }
    }
}