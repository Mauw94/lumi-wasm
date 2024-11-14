import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageGeneratorService } from '../services/image-generator.service';

@Component({
  selector: 'app-image-gen',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './image-gen.component.html',
  styleUrl: './image-gen.component.scss'
})
export class ImageGenComponent {

  image: string | undefined
  prompt: string | undefined
  isLoading: boolean = false

  constructor(private imageGeneratorService: ImageGeneratorService) { }

  public async generateAndDisplayImage(): Promise<void> {

    if (!this.prompt) {
      alert('Please enter a prompt.');
      return;
    }

    try {
      this.isLoading = true;
      const imageBlob = await this.imageGeneratorService.generate(this.prompt);
      this.image = URL.createObjectURL(imageBlob);
      this.isLoading = false;
    } catch (error) {
      console.error('Failed to generate image: ', error)
    }
  }
  
}
